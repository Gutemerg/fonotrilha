/* ===== Orientação para a família ===== */
function famText(sess){
  const p = patient(sess.pid); const m = M[sess.mid]; const blk = m.sess[sess.blk];
  const keys = blk.at.map((a,j)=>actKey(sess.mid,sess.blk,j));
  const nomeP = p ? p.nome.split(' ')[0] : 'o paciente';
  const como = sess.pct>=80 ? `${nomeP} foi muito bem e atingiu o objetivo desta etapa.` : sess.pct>=50 ? `${nomeP} está aprendendo e vamos continuar praticando nas próximas sessões.` : `${nomeP} ainda está no começo desta etapa; vamos ajustar a atividade para facilitar.`;
  const plays = [...new Set(keys.map(playOfKey).filter(Boolean))].map(k=>PLAY[k].t);
  const obs = (sess.acts||[]).map(a=>a.obs).filter(Boolean);
  return `Olá${p&&p.resp?', '+p.resp.split(' ')[0]:''}! ${S.profile.nome?'Aqui é '+S.profile.nome+'. ':''}Resumo da sessão de ${nomeP} (${fmtDate(sess.data||new Date().toISOString())}):

O que fizemos:
${keys.map(k=>FAM[k]?'• '+FAM[k].f.charAt(0).toUpperCase()+FAM[k].f.slice(1)+'.':'').filter(Boolean).join('\n')}

Como foi: ${como}${obs.length?'\nObservação: '+obs.join(' '):''}

Para fazer em casa (5 a 10 minutos por dia):
${keys.map(k=>FAM[k]?'• '+FAM[k].c:'').filter(Boolean).join('\n')}${plays.length?'\n\nVou enviar também a brincadeira para imprimir: '+plays.join(', ')+'.':''}

Qualquer dúvida, estou à disposição.`;
}
function openFam(sess){
  const p = patient(sess.pid); const tel = (p&&p.tel||'').replace(/\D/g,'');
  const txt = famText(sess);
  openPane(`<div class="pane-h"><h3>Orientação para a família</h3><button class="ib" type="button" data-act="close" aria-label="Fechar">${I.close}</button></div>
  <div class="pane-b"><p class="sm mut">Texto pronto em linguagem simples. Você pode editar antes de enviar.</p><textarea id="famtxt" style="min-height:300px;font-size:14px;line-height:1.5">${esc(txt)}</textarea>
  ${tel?`<p class="sm mut">WhatsApp do responsável: <span style="user-select:all;font-weight:700;color:var(--ink)">${esc(p.tel)}</span></p>`:`<p class="sm mut">Cadastre o telefone do responsável no perfil do paciente para abrir direto no WhatsApp.</p>`}
  <p class="sm" id="fammsg" hidden></p></div>
  <div class="pane-f"><button type="button" class="btn ghost" data-act="famcopy">Copiar texto</button>${tel?`<a class="btn" id="famwa" target="_blank" rel="noopener" href="https://wa.me/${tel.length<=11?'55'+tel:tel}?text=${encodeURIComponent(txt)}">Abrir no WhatsApp</a>`:''}</div>`);
}

/* ===== Modo capacitação ===== */
const capOf = mid => ((S.profile.cap||{})[mid]) || { lidos:[], best:null, tent:0 };
const CAPSEC = ['Visão geral','A lógica do método','Como medir o progresso','Quando não funciona'];
function capStatus(mid){ const c=capOf(mid); if(c.best!=null && c.best>=80) return ['Concluído','ev-forte']; if(c.lidos.length||c.tent) return ['Estudando','ev-moderada']; return ['Não iniciado','tagp']; }
function vCapList(){
  const f = S.capf || 'todos'; const ids = Object.keys(M).filter(id=>f==='todos'||condById(f).metodos.includes(id));
  const done = Object.keys(M).filter(id=>(capOf(id).best||0)>=80).length;
  return `${hdr('Capacitação','#')}<div class="pad stack">
    <div class="soft stack" style="gap:8px"><b style="font-size:16px;color:var(--pd)">Estude cada método e teste o que aprendeu</b><p class="sm">Cada módulo tem 4 partes de leitura e um quiz de 7 perguntas. O método é concluído com 80% de acerto no quiz.</p>
      <div class="row" style="justify-content:space-between"><span class="sm" style="font-weight:700">${done} de ${Object.keys(M).length} métodos concluídos</span></div><div class="bar"><i style="width:${Math.round(done/Object.keys(M).length*100)}%"></i></div></div>
    <div class="row" role="group" aria-label="Filtrar por quadro"><button type="button" class="tagp" data-capf="todos" style="cursor:pointer;${f==='todos'?'background:var(--p);color:#fff;border-color:var(--p)':'background:#fff'}">Todos</button>${CONDS.map(c=>`<button type="button" class="tagp" data-capf="${c.id}" style="cursor:pointer;${f===c.id?'background:var(--p);color:#fff;border-color:var(--p)':'background:#fff'}">${c.nome}</button>`).join('')}</div>
    ${ids.map(id=>{ const m=M[id]; const c=capOf(id); const [st,cl]=capStatus(id); return `<a class="li" href="#cap-${id}">${micon(id)}<span class="tx"><b>${esc(m.nome)}</b><span class="row" style="justify-content:space-between"><span>${c.lidos.length}/4 lidos${c.best!=null?' · quiz '+c.best+'%':''}</span><span class="pill ${cl}" style="${cl==='tagp'?'border:1px solid var(--line);color:var(--mut)':''}">${st}</span></span></span>${I.chev}</a>`; }).join('')}
  </div>`;
}
function vCap(id){
  const m=M[id]; const c=capOf(id); const open = S.capOpen ?? (c.lidos.length<4 ? [0,1,2,3].find(i=>!c.lidos.includes(i)) : -1);
  const sec = [
    `<p>${m.resumo}</p><div class="grid2"><div class="kpi"><span>Idade</span><b style="font-size:15px">${m.idade}</b></div><div class="kpi"><span>Evidência</span><b style="font-size:15px">${EVL[m.ev]}</b></div></div><p class="sm"><b>Indicado para:</b> ${condsOf(id).map(x=>x.longo).join('; ')}.</p><h3>Quando indicar</h3><div class="steps">${m.quando.map(x=>`<div>${I.ok}<span>${x}</span></div>`).join('')}</div><div class="card"><b>Intensidade</b><p class="sm" style="margin-top:4px">${m.dose}</p></div><div class="alert i"><span class="sm">${m.cert}</span></div>`,
    `<h3>Princípios</h3><div class="steps">${m.principios.map((x,i)=>`<div><span class="num">${i+1}</span><span>${x}</span></div>`).join('')}</div><h3>Por que cada atividade funciona</h3>${m.sess.map((s,i)=>`<div class="card stack" style="gap:8px"><span class="lbl">Etapa ${i+1} · ${esc(blkLabel(s))}</span><b>${esc(s.t)}</b><p class="sm mut">Objetivo: ${s.obj}</p>${s.at.map((a,j)=>{ const lg=LOG[actKey(id,i,j)]||{}; return `<div style="border-top:1px solid var(--line);padding-top:8px"><b class="sm">${esc(a.t)}</b><p class="sm" style="margin-top:2px">${esc(lg.l||'')}</p><p class="sm mut" style="margin-top:4px"><b>Esperamos:</b> ${esc(lg.e||'')}</p></div>`; }).join('')}</div>`).join('')}`,
    `<h3>Antes de começar: linha de base</h3><div class="steps">${m.inicio.map(x=>`<div>${I.ok}<span>${x}</span></div>`).join('')}</div><div class="card"><b>Critério para avançar</b><p class="sm" style="margin-top:4px">${m.avancar}</p></div><h3>Critérios por atividade</h3>${m.sess.flatMap((s,i)=>s.at.map(a=>`<div class="crit sm"><b style="color:var(--ok)">${esc(a.t)}:</b> ${a.ok}</div>`)).join('')}<h3>Critérios de alta</h3><div class="steps">${m.alta.map(x=>`<div>${I.ok}<span>${x}</span></div>`).join('')}</div>`,
    `${m.seNao.map(x=>`<div class="card stack" style="gap:4px;border-left:4px solid var(--bad)"><b>${esc(x.s)}</b><span class="sm mut">Causa provável: ${esc(x.c)}</span><span class="sm"><b style="color:var(--p)">O que fazer:</b> ${esc(x.a)}</span></div>`).join('')}<div class="alert i"><span class="sm"><b>Quando trocar de método:</b> ${esc(m.trocar)}</span></div><h3>O que evitar em cada atividade</h3><p class="sm mut">Erros de aplicação que atrapalham o desenvolvimento em ${esc(condsOf(id).map(x=>x.nome).join(', '))}.</p>${m.sess.flatMap((s,i)=>s.at.map((a,j)=>{ const ev=EVITAR[actKey(id,i,j)]||[]; return ev.length?`<div class="card stack" style="gap:8px"><b>${esc(a.t)}</b>${ev.map(e=>`<div class="evi"><b><span class="evn">Não faça:</span> ${esc(e.n)}</b><span>${esc(e.p)}</span></div>`).join('')}</div>`:''; })).join('')}`,
  ];
  return `${hdr('Capacitação','#capacitacao')}<div class="pad row" style="gap:14px;align-items:flex-start">${micon(id,54)}<div style="flex:1"><h2>${esc(m.nome)}</h2><p class="sm mut">${c.lidos.length}/4 partes lidas${c.best!=null?` · melhor nota no quiz: ${c.best}%`:''}</p></div></div>
  <div class="pad stack sec" style="gap:10px">
    ${CAPSEC.map((t,i)=>`<div class="card" style="padding:0;overflow:hidden"><button type="button" class="row" data-capopen="${i}" aria-expanded="${open===i}" style="width:100%;border:0;background:${open===i?'var(--pl)':'#fff'};padding:14px 16px;cursor:pointer;flex-wrap:nowrap;text-align:left"><span class="dot ${c.lidos.includes(i)?'ok':''}" style="width:26px;height:26px">${c.lidos.includes(i)?I.check:`<b class="sm" style="color:var(--mut)">${i+1}</b>`}</span><b style="flex:1">${t}</b>${I.chev}</button>
      ${open===i?`<div class="stack" style="padding:4px 16px 16px;gap:12px">${sec[i]}<button type="button" class="btn ${c.lidos.includes(i)?'ghost':''} sm" data-caplido="${i}" data-id="${id}">${c.lidos.includes(i)?'Lido ✓':'Marcar como lido e continuar'}</button></div>`:''}</div>`).join('')}
    <div class="card stack" style="gap:8px;border-color:var(--p)"><b>Quiz · 7 perguntas</b><p class="sm mut">Perguntas sobre indicação, princípios, lógica das atividades, critérios, plano B e o que evitar. Conclui com 80% ou mais.</p></div>
  </div>
  <div class="cta pad"><a class="btn" href="#quiz-${id}" data-act="quizstart" data-id="${id}">${c.tent?'Refazer o quiz':'Fazer o quiz'} ${I.arrow}</a></div>`;
}
function rng(seed){ let s=seed>>>0||1; return ()=>{ s^=s<<13; s>>>=0; s^=s>>17; s^=s<<5; s>>>=0; return s/4294967296; }; }
function shuffle(a,r){ a=[...a]; for(let i=a.length-1;i>0;i--){ const j=Math.floor(r()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; }
function buildQuiz(id, seed){
  const r=rng(seed), m=M[id], others=Object.keys(M).filter(o=>o!==id && !condsOf(o).some(c=>condsOf(id).some(x=>x.id===c.id)));
  const pool = others.length>=3 ? others : Object.keys(M).filter(o=>o!==id);
  const pick = arr => arr[Math.floor(r()*arr.length)];
  const acts = m.sess.flatMap((s,i)=>s.at.map((a,j)=>({a,k:actKey(id,i,j)})));
  const otherActs = pool.flatMap(o=>M[o].sess.flatMap((s,i)=>s.at.map((a,j)=>({a,k:actKey(o,i,j)}))));
  const first = t => (t||'').split(/(?<=\.)\s/)[0];
  const mk = (q, ok, wrong, exp) => { const opts = shuffle([ok, ...shuffle([...new Set(wrong.filter(w=>w&&w!==ok))],r).slice(0,3)], r); return {q, opts, ok:opts.indexOf(ok), exp}; };
  const Q=[];
  const cs = condsOf(id); Q.push(mk(`Para qual destes quadros o método “${m.nome}” está indicado neste guia?`, cs[Math.floor(r()*cs.length)].longo, CONDS.filter(c=>!cs.includes(c)).map(c=>c.longo), `Indicado para: ${cs.map(c=>c.longo).join('; ')}.`));
  const pr = pick(m.principios); Q.push(mk(`Qual destes é um princípio do método “${m.sigla}”?`, pr, pool.flatMap(o=>M[o].principios), `Princípios do método: ${m.principios.join('; ')}.`));
  const A1 = pick(acts); Q.push(mk(`Por que a atividade “${A1.a.t}” funciona?`, first(LOG[A1.k]?.l), otherActs.map(x=>first(LOG[x.k]?.l)), LOG[A1.k]?.l));
  const A2 = pick(acts.filter(x=>x!==A1).length?acts.filter(x=>x!==A1):acts); Q.push(mk(`Qual é o critério de sucesso da atividade “${A2.a.t}”?`, A2.a.ok, otherActs.map(x=>x.a.ok), `Critério: ${A2.a.ok}`));
  const sn = pick(m.seNao); Q.push(mk(`No ${m.sigla}, o que fazer quando: “${sn.s}”?`, sn.a, pool.flatMap(o=>M[o].seNao.map(x=>x.a)), `Causa provável: ${sn.c}. ${sn.a}`));
  const A3 = pick(acts); Q.push(mk(`O que esperamos alcançar com a atividade “${A3.a.t}”?`, LOG[A3.k]?.e, otherActs.map(x=>LOG[x.k]?.e), LOG[A3.k]?.e));
  const evActs = acts.filter(x=>(EVITAR[x.k]||[]).length);
  if(evActs.length){ const A4 = pick(evActs); const e = pick(EVITAR[A4.k]);
    const certos = m.sess.flatMap(s=>s.at.flatMap(a=>a.passos)).filter(t=>t.length<160);
    Q.push(mk(`Na atividade “${A4.a.t}”, qual destas atitudes deve ser EVITADA?`, e.n, certos, `Evite: ${e.n}. Por quê: ${e.p}`)); }
  return Q;
}
function vQuiz(id){
  const q = S.quiz; if(!q || q.id!==id){ S.quiz = { id, seed: Date.now()%100000, i:0, ans:[] }; }
  const Q = buildQuiz(id, S.quiz.seed); const st = S.quiz;
  if(st.i >= Q.length){
    const nOk = st.ans.filter((a,i)=>a===Q[i].ok).length; const pct = Math.round(nOk/Q.length*100);
    return `${hdr('Resultado do quiz','#cap-'+id)}<div class="pad stack"><div class="res ${pct>=80?'g':pct>=50?'y':'r'}"><b style="font-size:34px;color:${pct>=80?'var(--ok)':pct>=50?'var(--warn)':'var(--bad)'}">${pct}%</b><div><b>${pct>=80?'Método concluído!':'Quase lá'}</b><p class="sm">${nOk} de ${Q.length} acertos. ${pct>=80?'Você domina a lógica deste método.':'Revise as partes do módulo e tente de novo.'}</p></div></div>
      ${Q.map((x,i)=>`<div class="card stack" style="gap:6px"><span class="sm" style="font-weight:800;color:${st.ans[i]===x.ok?'var(--ok)':'var(--bad)'}">${st.ans[i]===x.ok?'Acertou':'Errou'} · pergunta ${i+1}</span><b class="sm">${esc(x.q)}</b><p class="sm"><b>Resposta:</b> ${esc(x.opts[x.ok])}</p></div>`).join('')}</div>
      <div class="cta pad"><div class="grid2"><a class="btn out" href="#cap-${id}">Voltar ao módulo</a><button type="button" class="btn" data-act="quizagain" data-id="${id}">Refazer</button></div></div>`;
  }
  const x = Q[st.i]; const answered = st.ans[st.i] != null;
  return `${hdr(`Pergunta ${st.i+1} de ${Q.length}`,'#cap-'+id)}<div class="pad stack">
    <div class="demo-steps">${Q.map((_,k)=>`<i class="${k<=st.i?'on':''}"></i>`).join('')}</div>
    <h2 style="font-size:18px;line-height:1.35">${esc(x.q)}</h2>
    ${x.opts.map((o,k)=>{ let sty=''; if(answered){ if(k===x.ok) sty='border-color:#2FA85A;background:var(--okbg)'; else if(k===st.ans[st.i]) sty='border-color:var(--bad);background:var(--badbg)'; }
      return `<button type="button" class="li" data-qans="${k}" ${answered?'disabled':''} style="${sty};align-items:flex-start"><span class="num" style="background:${answered&&k===x.ok?'#2FA85A':answered&&k===st.ans[st.i]?'var(--bad)':'var(--pl)'};color:${answered&&(k===x.ok||k===st.ans[st.i])?'#fff':'var(--pd)'}">${'ABCD'[k]}</span><span class="tx"><span style="font-size:14.5px;color:var(--ink)">${esc(o)}</span></span></button>`; }).join('')}
    ${answered?`<div class="alert ${st.ans[st.i]===x.ok?'':'r'}" style="${st.ans[st.i]===x.ok?'background:var(--okbg)':''};align-items:flex-start"><div><b style="color:${st.ans[st.i]===x.ok?'var(--ok)':'var(--bad)'}">${st.ans[st.i]===x.ok?'Correto!':'Não é essa'}</b><p class="sm" style="margin-top:4px">${esc(x.exp)}</p></div></div>`:''}
  </div>${answered?`<div class="cta pad"><button type="button" class="btn" data-act="qnext" data-id="${id}">${st.i===Q.length-1?'Ver resultado':'Próxima pergunta'} ${I.arrow}</button></div>`:''}`;
}
async function finishQuiz(id){
  const Q = buildQuiz(id, S.quiz.seed); const nOk = S.quiz.ans.filter((a,i)=>a===Q[i].ok).length; const pct = Math.round(nOk/Q.length*100);
  const cap = {...(S.profile.cap||{})}; const c = {...capOf(id)}; c.tent=(c.tent||0)+1; c.best = Math.max(c.best??0, pct); c.ult = todayISO(); cap[id]=c;
  try{ await Store.saveProfile({cap}); }catch(_){}
}
