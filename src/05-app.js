/* ===== App ===== */
const $ = (s, el=document) => el.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const EV = {forte:'Evidência forte', moderada:'Evidência moderada', emergente:'Evidência emergente'};
const condById = id => CONDS.find(c => c.id === id);
const condsOf = mid => CONDS.filter(c => c.metodos.includes(mid));
const store = {
  get(k, d){ try{ const v = localStorage.getItem('ft:'+k); return v ? JSON.parse(v) : d; }catch(e){ return d; } },
  set(k, v){ try{ localStorage.setItem('ft:'+k, JSON.stringify(v)); }catch(e){} }
};
const scene = k => `<svg viewBox="0 0 240 140" role="img" aria-label="Ilustração da atividade">${SCENE[k]||SCENE.lupa}</svg>`;
const ICON = {
  print:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9V3h12v6M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="7"/></svg>',
  eye:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/><circle cx="12" cy="12" r="3"/></svg>',
};
let curCond = null; // último quadro visitado (contexto do método)

/* ---------- Views ---------- */
function viewHome(){
  return `<div class="hero">
    <span class="eyebrow">Guia de sessão para fonoaudiólogos</span>
    <h1>Escolha o quadro, escolha o método, prepare a sessão.</h1>
    <p>Cada método traz o passo a passo por sessão, a ilustração da atividade, o material para imprimir, o que observar, o critério de sucesso e o que fazer quando o paciente não evolui.</p>
    <div class="steps">
      <div><b>1. Quadro</b><span>TEA, TDAH, Down, apraxia, afasia, TDL, DI ou altas habilidades.</span></div>
      <div><b>2. Método</b><span>Indicação, idade, intensidade, nível de evidência.</span></div>
      <div><b>3. Sessão</b><span>Prepare o material, aplique, conte acertos e decida o próximo passo.</span></div>
    </div>
  </div>
  <div class="conds">${CONDS.map(c=>`<a class="cond" href="#${c.id}" style="--cc:var(--${c.cor})">
      <span class="dot"><svg viewBox="0 0 64 64">${PIC[c.pic]}</svg></span>
      <b>${c.nome}</b><span>${c.longo}</span><i>${c.metodos.length} métodos</i></a>`).join('')}
  </div>
  <section>
    <h2>Regra de decisão usada em todas as atividades</h2>
    <p class="muted" style="margin-bottom:10px">Conte as tentativas com o contador de cada atividade. Com pelo menos 10 tentativas, o guia indica o próximo passo.</p>
    <div class="rule">
      <div class="g"><b>≥ 80%</b><span>Critério atingido. Confirme em 2 sessões seguidas e avance o alvo ou o nível.</span></div>
      <div class="y"><b>50–79%</b><span>Em aprendizagem. Mantenha o alvo e ajuste o apoio.</span></div>
      <div class="r"><b>&lt; 50%</b><span>Abaixo do esperado. Simplifique e consulte o plano B do método.</span></div>
    </div>
  </section>
  <section><h2>Todos os materiais</h2><p class="muted" style="margin-bottom:10px">Cartões, pranchas, grades e folhas de registro prontos para imprimir.</p><a class="btn" href="#materiais">${ICON.print} Ver os ${Object.keys(PRINT).length} materiais</a></section>`;
}

function viewCond(c){
  curCond = c.id;
  return `<nav class="crumb"><a href="#">Início</a> › <span>${c.nome}</span></nav>
  <header class="phead" style="--cc:var(--${c.cor})">
    <span class="tag cc">${c.longo}</span>
    <h1>${c.nome}</h1>
    <p class="lede">${c.resumo}</p>
  </header>
  <div class="two">
    <div><h3 style="margin-bottom:8px">Focos da terapia</h3><ul class="clean">${c.foco.map(f=>`<li>${f}</li>`).join('')}</ul></div>
    <div><h3 style="margin-bottom:8px">Avaliação antes de escolher</h3><ul class="clean">${c.aval.map(f=>`<li>${f}</li>`).join('')}</ul></div>
  </div>
  <section><h2>Métodos indicados</h2>
    <div class="mlist">${c.metodos.map(id=>{const m=M[id];return `<a class="mcard" href="#m-${id}">
      <span class="sig">${m.sigla}</span>
      <div><h3>${m.nome}</h3><p>${m.idade} · ${m.sess.length} etapas de sessão</p><div class="row" style="margin-top:6px"><span class="tag ev-${m.ev}">${EV[m.ev]}</span></div></div>
      <span class="go" aria-hidden="true">›</span></a>`}).join('')}</div>
  </section>
  <p class="note" style="margin-top:22px">A escolha do método depende da avaliação individual, da idade, da gravidade e dos objetivos da família. Métodos podem ser combinados.</p>`;
}

function viewMethod(id){
  const m = M[id]; const cs = condsOf(id);
  const ctx = condById(curCond) && cs.find(c=>c.id===curCond) ? condById(curCond) : cs[0];
  const blk = Math.min(store.get('blk:'+id,0), m.sess.length-1);
  const mats = [...new Set(m.sess.flatMap(s=>s.at.map(a=>a.mat)).filter(Boolean).concat('registro'))];
  return `<nav class="crumb"><a href="#">Início</a> › <a href="#${ctx.id}">${ctx.nome}</a> › <span>${m.sigla}</span></nav>
  <header class="phead">
    <div class="row">${cs.map(c=>`<a class="tag cc" style="--cc:var(--${c.cor});text-decoration:none" href="#${c.id}">${c.nome}</a>`).join('')}<span class="tag ev-${m.ev}">${EV[m.ev]}</span></div>
    <h1>${m.nome}</h1>
    <p class="lede">${m.resumo}</p>
  </header>
  <nav class="subnav" aria-label="Seções do método"><a href="#m-${id}" data-jump="s-visao">Visão geral</a><a href="#m-${id}" data-jump="s-sessoes">Sessões</a><a href="#m-${id}" data-jump="s-planob">Se não progredir</a><a href="#m-${id}" data-jump="s-mat">Materiais</a></nav>

  <section id="s-visao">
    <div class="facts">
      <div><span>Idade</span>${m.idade}</div>
      <div><span>Intensidade</span>${m.dose}</div>
    </div>
    <p class="note" style="margin-top:12px">${m.cert}</p>
    <div class="two" style="margin-top:18px">
      <div><h3 style="margin-bottom:8px">Quando indicar</h3><ul class="clean">${m.quando.map(x=>`<li>${x}</li>`).join('')}</ul></div>
      <div><h3 style="margin-bottom:8px">Princípios</h3><ul class="clean">${m.principios.map(x=>`<li>${x}</li>`).join('')}</ul></div>
    </div>
    <h3 style="margin:18px 0 8px">Antes da 1ª sessão: linha de base</h3><ul class="clean">${m.inicio.map(x=>`<li>${x}</li>`).join('')}</ul>
  </section>

  <section id="s-sessoes">
    <h2>Sessões</h2>
    <div class="blocks" role="group" aria-label="Etapa">${m.sess.map((s,i)=>`<button type="button" data-blk="${i}" aria-pressed="${i===blk}"><b>${/^\d/.test(s.n)?'Sessões '+s.n:s.n}</b><span>${s.t}</span></button>`).join('')}</div>
    <div id="blk">${viewBlock(id, blk)}</div>
  </section>

  <section id="s-planob">
    <h2>Se não houver o progresso esperado</h2>
    <p class="muted" style="margin-bottom:12px">Critério para avançar: ${m.avancar}</p>
    <div class="planb">${m.seNao.map(x=>`<div class="pb"><div class="s">${x.s}</div><div class="c">Causa provável: ${x.c}</div><div class="a"><b>O que fazer:</b> ${x.a}</div></div>`).join('')}</div>
    <div class="switch" style="margin-top:12px"><b>Quando trocar ou combinar o método:</b> ${m.trocar}</div>
    <h3 style="margin:18px 0 8px">Critérios de alta</h3><ul class="clean">${m.alta.map(x=>`<li>${x}</li>`).join('')}</ul>
  </section>

  <section id="s-mat">
    <h2>Materiais deste método</h2>
    <div class="mats">${mats.map(matCard).join('')}</div>
  </section>
  <section><h3 style="margin-bottom:8px">Referências</h3><ol class="refs">${m.refs.map(r=>`<li>${esc(r)}</li>`).join('')}</ol></section>`;
}

function viewBlock(id, i){
  const m = M[id], s = m.sess[i];
  const prepDone = store.get(`prep:${id}:${i}`, []);
  return `<div class="sesshead">
      <span class="eyebrow">${/^\d/.test(s.n)?'Sessões '+s.n:s.n}</span>
      <h3 style="font-size:22px">${s.t}</h3>
      <p><b>Objetivo:</b> ${s.obj}</p>
      <div class="prep"><h4 style="margin-bottom:6px">Preparar antes do paciente chegar</h4>
        ${s.prep.map((p,j)=>`<label class="${prepDone.includes(j)?'done':''}"><input type="checkbox" id="prep-${id}-${i}-${j}" data-prep="${j}" ${prepDone.includes(j)?'checked':''}><span>${p}</span></label>`).join('')}
        ${[...new Set(s.at.map(a=>a.mat).filter(Boolean))].map(k=>`<label class="${prepDone.includes('m'+k)?'done':''}"><input type="checkbox" id="prep-${id}-${i}-m${k}" data-prep="m${k}" ${prepDone.includes('m'+k)?'checked':''}><span>Imprimir: <a href="#m-${id}" data-mat="${k}">${PRINT[k].t}</a></span></label>`).join('')}
      </div>
    </div>
    ${s.at.map((a,j)=>viewAct(id,i,j,a)).join('')}`;
}

function viewAct(id,i,j,a){
  const key = `${id}:${i}:${j}`;
  return `<article class="act" data-key="${key}">
    <div class="act-top"><div class="act-ill">${scene(a.il)}</div>
      <div class="act-title"><div class="row"><span class="tag">Atividade ${j+1}</span><span>≈ ${a.min} min</span></div><h3>${a.t}</h3>
      ${a.mat?`<div class="row"><button type="button" class="btn" data-mat="${a.mat}">${ICON.eye} Ver material</button></div>`:''}</div></div>
    <div class="act-body">
      <div><h4 style="margin-bottom:8px">Passo a passo</h4><ol class="steps-list">${a.passos.map(p=>`<li><span>${p}</span></li>`).join('')}</ol></div>
      <div class="obs"><div><h4 style="margin-bottom:6px">O que observar</h4><ul class="clean">${a.obs.map(o=>`<li>${o}</li>`).join('')}</ul></div>
      <div><h4 style="margin-bottom:6px">Como saber se deu certo</h4><div class="crit"><b>Critério:</b> ${a.ok}</div></div></div>
    </div>
    <div class="counter"><div class="ctl"><button type="button" class="y" data-cnt="y" aria-label="Acerto">✓</button><button type="button" class="n" data-cnt="n" aria-label="Erro">✗</button><button type="button" class="z" data-cnt="z">Zerar</button></div>
      <div class="meter" data-meter></div></div>
  </article>`;
}

function meterHTML(c){
  const t = c.y + c.n, p = t ? Math.round(c.y / t * 100) : 0;
  let cls='', msg = t ? `Registre pelo menos 10 tentativas para a sugestão (${t} até agora).` : 'Marque cada tentativa: ✓ acerto, ✗ erro.';
  if (t >= 10){
    if (p >= 80){ cls='g'; msg = `<b>${p}%</b> · Critério atingido. Confirme na próxima sessão e avance.`; }
    else if (p >= 50){ cls='y'; msg = `<b>${p}%</b> · Em aprendizagem. Mantenha o alvo e ajuste o apoio.`; }
    else { cls='r'; msg = `<b>${p}%</b> · Abaixo do esperado. <a href="#" data-jump="s-planob">Ver plano B</a>.`; }
  }
  return {cls, html:`<div class="bar"><i style="width:${p}%"></i></div><div class="lbl">${c.y} ✓ · ${c.n} ✗ — ${msg}</div>`};
}
function paintMeters(root=document){
  root.querySelectorAll('.act').forEach(el=>{
    const c = store.get('cnt:'+el.dataset.key, {y:0,n:0}); const m = $('[data-meter]', el); const r = meterHTML(c);
    m.className = 'meter ' + r.cls; m.innerHTML = r.html;
  });
}

function matCard(k){
  const used = Object.entries(M).filter(([id,m])=>m.sess.some(s=>s.at.some(a=>a.mat===k))).map(([id,m])=>m.sigla);
  return `<div class="mat"><h4>${PRINT[k].t}</h4>${used.length?`<small>Usado em: ${used.join(', ')}</small>`:'<small>Serve para todos os métodos</small>'}<div class="row"><button type="button" class="btn" data-mat="${k}">${ICON.eye} Ver e imprimir</button></div></div>`;
}
function viewMats(){
  return `<nav class="crumb"><a href="#">Início</a> › <span>Materiais</span></nav>
  <header class="phead"><h1>Materiais para imprimir</h1><p class="lede">Abra um material para ver a folha. Use “Baixar para imprimir”: o arquivo abre no navegador já com a janela de impressão.</p></header>
  <div class="mats">${Object.keys(PRINT).map(matCard).join('')}</div>`;
}

/* ---------- Folha de material ---------- */
function pageHTML(k){
  return `<div class="page"><h2>${PRINT[k].t}</h2><div class="pg-sub">FonoTrilha · Guia Clínico — material de apoio à sessão</div>${PRINT[k].h()}<div class="pg-foot">Material de apoio para uso clínico. Adapte ao paciente. Métodos registrados (PECS, NDP3, ESDM, JASPER, Hanen) têm manuais e formações oficiais.</div></div>`;
}
function openMat(k){
  closeMat();
  const d = document.createElement('div'); d.className='modal'; d.id='modal'; d.setAttribute('role','dialog'); d.setAttribute('aria-modal','true'); d.setAttribute('aria-label', PRINT[k].t);
  d.innerHTML = `<div class="sheet-wrap"><div class="sheet-bar"><h3>${PRINT[k].t}</h3><button type="button" class="btn pri" id="dl">${ICON.print} Baixar para imprimir</button><button type="button" class="btn" id="cls">Fechar</button></div><div class="msg" id="dlmsg" hidden></div><div class="sheet-scroll">${pageHTML(k)}</div></div>`;
  document.body.appendChild(d);
  d.addEventListener('click', e=>{ if(e.target===d) closeMat(); });
  $('#cls',d).onclick = closeMat;
  $('#dl',d).onclick = ()=>downloadMat(k);
  $('#cls',d).focus();
}
function closeMat(){ const d=$('#modal'); if(d) d.remove(); }
async function downloadMat(k){
  const msg = $('#dlmsg'); msg.hidden=false; msg.textContent='Preparando o arquivo…';
  const css = $('style').textContent;
  const doc = `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${PRINT[k].t}</title><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800&family=Atkinson+Hyperlegible:wght@400;700&display=swap"><style>${css}
@page{size:A4;margin:12mm} body{background:#fff;margin:0} .page{box-shadow:none;max-width:none;padding:0} .pg-grid.c4{grid-template-columns:repeat(4,1fr)!important} .pg-grid.c6{grid-template-columns:repeat(6,1fr)!important} .pg-owl,.pg-story,.pg-sfa{grid-template-columns:repeat(3,1fr)!important} .pg-head{grid-template-columns:repeat(4,1fr)!important} tr,.pg-card{break-inside:avoid}</style></head><body>${pageHTML(k)}<script>window.addEventListener('load',function(){setTimeout(function(){window.print()},400)})<\/script></body></html>`;
  try{
    const dl = window.claude && window.claude.use ? await window.claude.use('downloads') : null;
    if(!dl){ msg.textContent='O download não está disponível nesta visualização. Abra o artefato no claude.ai pelo navegador do computador.'; return; }
    await dl.save({filename: 'fonotrilha-' + k.replace(/_/g,'-') + '.html', data: doc});
    msg.textContent='Arquivo salvo. Abra-o no navegador: a janela de impressão aparece sozinha (escolha A4 ou “Salvar como PDF”).';
  }catch(e){
    msg.textContent = e && e.code==='declined' ? 'Download cancelado.' : 'Não foi possível baixar agora. Tente de novo em alguns segundos.';
  }
}

/* ---------- Busca ---------- */
function search(q){
  const r = $('#results'); q = q.trim().toLowerCase();
  if(q.length<2){ r.hidden=true; return; }
  const n = s => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'');
  const nq = n(q);
  const hits = [];
  CONDS.forEach(c=>{ if(n(c.nome+' '+c.longo).includes(nq)) hits.push(`<a href="#${c.id}"><b>${c.nome}</b> <small>· quadro</small></a>`); });
  Object.entries(M).forEach(([id,m])=>{ const hay = n([m.nome,m.sigla,m.resumo,...m.sess.flatMap(s=>s.at.map(a=>a.t))].join(' ')); if(hay.includes(nq)) hits.push(`<a href="#m-${id}"><b>${m.sigla}</b> — ${m.nome} <small>· ${condsOf(id).map(c=>c.nome).join(', ')}</small></a>`); });
  Object.entries(PRINT).forEach(([k,p])=>{ if(n(p.t).includes(nq)) hits.push(`<a href="#materiais" data-mat="${k}">${p.t} <small>· material</small></a>`); });
  r.innerHTML = hits.length ? hits.slice(0,12).join('') : '<a href="#" tabindex="-1"><small>Nada encontrado. Tente “afasia”, “PECS”, “rima”…</small></a>';
  r.hidden=false;
}

/* ---------- Roteamento ---------- */
function route(){
  const h = location.hash.replace('#','');
  const app = $('#app'); let html;
  if(!h) html = viewHome();
  else if(h==='materiais') html = viewMats();
  else if(condById(h)) html = viewCond(condById(h));
  else if(h.startsWith('m-') && M[h.slice(2)]) html = viewMethod(h.slice(2));
  else html = viewHome();
  app.innerHTML = html; paintMeters(app); closeMat();
  $('#results').hidden = true;
  window.scrollTo(0,0);
}

document.addEventListener('click', e=>{
  const mat = e.target.closest('[data-mat]'); if(mat){ e.preventDefault(); openMat(mat.dataset.mat); $('#results').hidden=true; return; }
  const jump = e.target.closest('[data-jump]'); if(jump){ e.preventDefault(); const t=document.getElementById(jump.dataset.jump); if(t) t.scrollIntoView({behavior:'smooth',block:'start'}); return; }
  const b = e.target.closest('[data-blk]'); if(b){ const id = location.hash.slice(3); const i=+b.dataset.blk; store.set('blk:'+id,i);
    document.querySelectorAll('[data-blk]').forEach(x=>x.setAttribute('aria-pressed', x===b)); const box=$('#blk'); box.innerHTML=viewBlock(id,i); paintMeters(box); return; }
  const c = e.target.closest('[data-cnt]'); if(c){ const act=c.closest('.act'); const k='cnt:'+act.dataset.key; const v=store.get(k,{y:0,n:0});
    if(c.dataset.cnt==='y') v.y++; else if(c.dataset.cnt==='n') v.n++; else {v.y=0;v.n=0;}
    store.set(k,v); paintMeters(act.parentElement); return; }
  if(!e.target.closest('.search')) $('#results').hidden = true;
});
document.addEventListener('change', e=>{
  const p = e.target.closest('[data-prep]'); if(!p) return;
  const id = location.hash.slice(3); const i = +($('[data-blk][aria-pressed="true"]')||{dataset:{blk:0}}).dataset.blk;
  const k = `prep:${id}:${i}`; let v = store.get(k,[]); const val = isNaN(+p.dataset.prep) ? p.dataset.prep : +p.dataset.prep;
  v = p.checked ? [...new Set([...v,val])] : v.filter(x=>x!==val); store.set(k,v); p.closest('label').classList.toggle('done', p.checked);
});
document.addEventListener('keydown', e=>{ if(e.key==='Escape') { closeMat(); $('#results').hidden=true; } });
$('#q').addEventListener('input', e=>search(e.target.value));
window.addEventListener('hashchange', route);
route();
