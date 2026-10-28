/* ===== Troca manual de método do paciente ===== */
function openTroca(pid, para){
  const p = patient(pid); if(!p) return;
  const c = condById(p.quadro); const doQuadro = c ? c.metodos : [];
  const outros = Object.keys(M).filter(x=>!doQuadro.includes(x));
  const opt = x => `<option value="${x}" ${x===(para||'')?'selected':''} ${x===p.metodo?'disabled':''}>${esc(M[x].sigla)}${M[x].nome!==M[x].sigla?" · "+esc(M[x].nome):""}${x===p.metodo?' (atual)':''}</option>`;
  openPane(`<div class="pane-h"><h3>Trocar método de ${esc(p.nome.split(' ')[0])}</h3><button class="ib" type="button" data-act="close" aria-label="Fechar">${I.close}</button></div>
  <div class="pane-b stack" style="gap:12px">
    <p class="sm mut">Método atual: <b style="color:var(--ink)">${p.metodo&&M[p.metodo]?esc(M[p.metodo].nome):'nenhum'}</b>. Os atendimentos já registrados continuam no prontuário.</p>
    <label class="f">Novo método<select id="tr-met"><option value="">Escolha…</option>
      ${doQuadro.length?`<optgroup label="Indicados para ${esc(c.nome)}">${doQuadro.map(opt).join('')}</optgroup>`:''}
      <optgroup label="Outros métodos">${outros.map(opt).join('')}</optgroup></select></label>
    <label class="f">Começar na etapa<select id="tr-blk"></select></label>
    <label class="f">Motivo da troca<textarea id="tr-mot" placeholder="Ex.: sem evolução após 8 atendimentos e plano B; perfil indica comunicação alternativa…"></textarea></label>
    <p class="sm" id="tr-msg" hidden style="color:var(--bad);font-weight:700"></p>
  </div>
  <div class="pane-f"><button type="button" class="btn" data-act="trocaok" data-id="${p.id}">Confirmar troca</button></div>`);
  const fill = ()=>{ const m=M[$('#tr-met').value]; $('#tr-blk').innerHTML = m ? m.sess.map((s,i)=>`<option value="${i}">Etapa ${i+1} · ${esc(s.t)}</option>`).join('') : '<option value="0">—</option>'; };
  $('#tr-met').addEventListener('change', fill); fill();
}
async function confirmaTroca(pid){
  const p = patient(pid); const para = $('#tr-met').value, blk = +$('#tr-blk').value || 0, mot = $('#tr-mot').value.trim();
  const msg = $('#tr-msg'); if(!para){ msg.hidden=false; msg.textContent='Escolha o novo método.'; return; }
  if(!mot){ msg.hidden=false; msg.textContent='Registre o motivo da troca (fica no prontuário).'; return; }
  const trocas = [...(p.trocas||[]), {de:p.metodo||'', para, blk, motivo:mot, data:new Date().toISOString()}];
  const et = {...(p.etapas||{})}; for(let i=0;i<blk;i++) et[para+':'+i] = et[para+':'+i] || todayISO();
  await Store.savePatient({...p, metodo:para, trocas, etapas:et});
  closePane(); toast('Método alterado'); S.ctxPid=p.id; ls.set('ctxPid',p.id); location.hash='m-'+para; render();
}
function trocasHTML(p){
  const l = p.trocas||[]; if(!l.length) return '';
  return `<div class="card stack" style="gap:8px"><b>Histórico de métodos</b>${[...l].reverse().map(t=>`<div class="sm" style="border-top:1px solid var(--line);padding-top:8px"><b>${fmtDate(t.data)}</b> · ${esc(M[t.de]?.sigla||'—')} → ${esc(M[t.para]?.sigla||t.para)}${t.blk?` (a partir da etapa ${t.blk+1})`:''}<p class="mut" style="margin-top:2px">${esc(t.motivo)}</p></div>`).join('')}</div>`;
}
