/* ===== FonoTrilha · app ===== */
const $ = (s, el=document) => el.querySelector(s);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const uid = (p='x') => p + Date.now().toString(36) + Math.random().toString(36).slice(2,7);
const todayISO = () => { const d=new Date(); return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0'); };
const fmtDate = iso => { if(!iso) return ''; const [y,m,d]=iso.slice(0,10).split('-'); return `${d}/${m}/${y}`; };
const ls = { get(k,d){ try{const v=localStorage.getItem('ft2:'+k);return v?JSON.parse(v):d;}catch(e){return d;} }, set(k,v){ try{localStorage.setItem('ft2:'+k,JSON.stringify(v));}catch(e){} } };

/* ---------- Ícones ---------- */
const I = {
  back:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M15 6l-6 6 6 6"/></svg>',
  close:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  chev:'<svg class="chev" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>',
  arrow:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  menu:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  search:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5A666B" stroke-width="2.2" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/></svg>',
  brain:'<svg width="52" height="52" viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 8a7 7 0 0 0-7 7 7 7 0 0 0-4 12 7 7 0 0 0 6 10c2 3 5 4 8 3V9a6 6 0 0 0-3-1z"/><path d="M28 8a7 7 0 0 1 7 7 7 7 0 0 1 4 12 7 7 0 0 1-6 10c-2 3-5 4-8 3V9a6 6 0 0 1 3-1z"/><path d="M15 20c2 0 4 1 5 3M33 20c-2 0-4 1-5 3M14 30c2-1 4-1 6 1M34 30c-2-1-4-1-6 1"/></svg>',
  user:'<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0B6E74" stroke-width="1.9" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.5 3.6-8 8-8s8 3.5 8 8"/></svg>',
  cal:'<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0B6E74" stroke-width="1.9" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4M8 14h2M14 14h2M8 17h2"/></svg>',
  layers:'<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0B6E74" stroke-width="1.9" aria-hidden="true"><path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5M3 17l9 5 9-5"/></svg>',
  play:'<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0B6E74" stroke-width="1.9" aria-hidden="true"><rect x="3" y="3" width="8" height="8" rx="2"/><rect x="13" y="13" width="8" height="8" rx="2"/><circle cx="17" cy="7" r="4"/><path d="M7 13l4 8H3z"/></svg>',
  print:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B5650C" stroke-width="2" aria-hidden="true"><path d="M6 9V3h12v6M6 18H4v-7h16v7h-2"/><rect x="6" y="14" width="12" height="7"/></svg>',
  tri:'<svg width="12" height="12" viewBox="0 0 24 24" fill="#fff" aria-hidden="true"><path d="M7 4l14 8-14 8z"/></svg>',
  check:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3.4" aria-hidden="true"><path d="M5 12l5 5 9-10"/></svg>',
  ok:'<svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#2FA85A"/><path d="M7 12l3.5 3.5L17 9" stroke="#fff" stroke-width="2.4" fill="none"/></svg>',
  warnI:'<svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#E08A1E"/><path d="M12 7v6M12 16.5v.5" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/></svg>',
  badI:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" aria-hidden="true"><path d="M12 7v6M12 17v.5"/></svg>',
  cam:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0B6E74" stroke-width="2.2" aria-hidden="true"><rect x="3" y="6" width="13" height="12" rx="2"/><path d="M16 10l5-3v10l-5-3"/></svg>',
  swap:'<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2F4FA8" stroke-width="2" aria-hidden="true"><path d="M4 12a8 8 0 0 1 14-5.3M20 12a8 8 0 0 1-14 5.3"/><path d="M18 3v4h-4M6 21v-4h4"/></svg>',
  plus:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>',
};
const MCOL = ['#1E8FC9','#E2504B','#7656D6','#EF8A22','#2FA85A','#0B6E74'];
const MICON = { esdm:'brincar', jasper:'olhar', pecs:'quero', caa:'isso', hanen:'voce', emt:'abrir', pragmatica:'feliz', ta:'ouvido', cf:'ler', narrativa:'livro', fe:'parar', mo:'beber', sinaiscaa:'mao', leitura:'ler', dttc:'mais', rest:'musica', ndp:'brincar', mit:'musica', sfa:'olhar', vnest:'fazer', ciat:'dado', script:'escrever', recast:'voce', vocab:'livro', dupla:'sol' };
const mcolor = id => MCOL[Object.keys(M).indexOf(id) % MCOL.length];
const micon = (id, size=50) => `<span class="mic" style="background:${mcolor(id)};width:${size}px;height:${size}px"><svg viewBox="0 0 64 64">${PIC[MICON[id]]||PIC.sol}</svg></span>`;
const EVL = { forte:'Alta evidência', moderada:'Média evidência', emergente:'Evidência emergente' };
const evPill = ev => `<span class="pill ev-${ev}">${EVL[ev]}</span>`;
const condById = id => CONDS.find(c=>c.id===id);
const condsOf = mid => CONDS.filter(c=>c.metodos.includes(mid));
const blkLabel = s => /^\d/.test(s.n) ? 'Sessões ' + s.n : s.n;
const actKey = (mid,blk,j) => `${mid}:${blk}:${j}`;
const playOfKey = k => (ACT[k]||{}).b || null;
const playsOfMethod = id => [...new Set(M[id].sess.flatMap((s,i)=>s.at.map((a,j)=>playOfKey(actKey(id,i,j)))).concat(PLAYEXTRA[id]||[]).filter(Boolean))];
const methodsOfPlay = k => Object.keys(M).filter(id => playsOfMethod(id).includes(k));

/* ---------- Estado ---------- */
const S = { patients:[], sessions:[], profile:{ nome:'' }, ready:false, mode:'local', tab:{}, ctxCond:null, ctxPid: ls.get('ctxPid', null), run: ls.get('run', null), pbSel:0, lastRes:null };
let DB = null, BASE = null, ASSETS = null;

/* ---------- Armazenamento (nuvem privada da conta; reserva no navegador) ---------- */
const Store = {
  async init(){
    if(NeonStore) return NeonStore.init();
    try{
      if(window.claude && window.claude.use){
        const [db, user] = await Promise.all([window.claude.use('db'), window.claude.use('user')]);
        const id = user ? await user.id() : null;
        if(db && id){
          DB = db; BASE = db.doc('data/users/' + id + '/clinica'); S.mode = 'nuvem';
          BASE.onSnapshot(sn => { if(sn.exists){ S.profile = {...S.profile, ...sn.data()}; } render(); }, ()=>{});
          BASE.collection('pacientes').onSnapshot(q => { S.patients = q.docs.map(d=>({id:d.id, ...d.data()})); S.ready=true; render(); }, ()=>{ Store.fallback(); });
          BASE.collection('sessoes').orderBy('data','asc').onSnapshot(q => { S.sessions = q.docs.map(d=>({id:d.id, ...d.data()})); render(); }, ()=>{});
          window.claude.use('assets').then(a => { ASSETS = a; }).catch(()=>{});
          return;
        }
      }
    }catch(e){}
    Store.fallback();
  },
  fallback(){ S.mode='local'; DB=null; S.patients=ls.get('patients',[]); S.sessions=ls.get('sessions',[]); S.profile=ls.get('profile',{nome:''}); S.ready=true; render(); },
  async savePatient(p){
    if(NeonStore) return NeonStore.savePatient(p);
    if(!p.id) p.id = uid('p');
    if(DB){ const {id, ...body} = p; await BASE.collection('pacientes').doc(id).set(body); }
    else { const i=S.patients.findIndex(x=>x.id===p.id); if(i>=0) S.patients[i]=p; else S.patients.push(p); ls.set('patients',S.patients); render(); }
    return p.id;
  },
  async deletePatient(id){
    if(NeonStore) return NeonStore.deletePatient(id);
    if(DB){ await BASE.collection('pacientes').doc(id).delete(); for(const s of S.sessions.filter(s=>s.pid===id)) await BASE.collection('sessoes').doc(s.id).delete(); }
    else { S.patients=S.patients.filter(p=>p.id!==id); S.sessions=S.sessions.filter(s=>s.pid!==id); ls.set('patients',S.patients); ls.set('sessions',S.sessions); render(); }
  },
  async saveSession(s){
    if(NeonStore) return NeonStore.saveSession(s);
    if(!s.id) s.id = uid('s');
    if(DB){ const {id, ...body} = s; await BASE.collection('sessoes').doc(id).set(body); }
    else { S.sessions.push(s); ls.set('sessions',S.sessions); render(); }
    return s.id;
  },
  async saveProfile(p){
    if(NeonStore) return NeonStore.saveProfile(p);
    S.profile = {...S.profile, ...p};
    if(DB){ await BASE.set(S.profile); } else { ls.set('profile',S.profile); render(); }
  }
};

/* ---------- Dados derivados ---------- */
const patient = id => S.patients.find(p=>p.id===id);
const sessOf = (pid, mid) => S.sessions.filter(s=>s.pid===pid && (!mid || s.mid===mid)).sort((a,b)=>a.data<b.data?-1:1);
const age = iso => { if(!iso) return ''; const b=new Date(iso+'T12:00'); const n=new Date(); let y=n.getFullYear()-b.getFullYear(), m=n.getMonth()-b.getMonth(); if(n.getDate()<b.getDate()) m--; if(m<0){y--;m+=12;} return y>0 ? `${y} ano${y>1?'s':''}${m?` e ${m} ${m>1?'meses':'mês'}`:''}` : `${m} ${m===1?'mês':'meses'}`; };
const initials = n => (n||'?').split(/\s+/).filter(Boolean).slice(0,2).map(w=>w[0].toUpperCase()).join('');
function blkInfo(pid, mid, i){
  const R = regraOf(mid); const d = porDia(sessOf(pid,mid).filter(s=>s.blk===i)); const pac = patient(pid);
  const manual = !!(pac && pac.etapas && pac.etapas[mid+':'+i]);
  let k=0; for(let j=d.length-1;j>=0 && d[j].ok;j--) k++;
  const ult = d.slice(-R.dias); const falta=[];
  if(k < R.dias) falta.push(`${Math.min(k,R.dias)} de ${R.dias} atendimentos seguidos na meta`);
  else { if(R.outra && !ult.some(x=>x.outra)) falta.push('falta 1 atendimento na meta feito também com outra pessoa');
    if(R.intervalo && (new Date(ult[ult.length-1].data)-new Date(ult[0].data))/864e5 < R.intervalo) falta.push(`os atendimentos precisam ter ${R.intervalo} dias ou mais entre eles`); }
  return { done: manual || !falta.length, manual, falta, dias:d.length, k };
}
function blkStatus(pid, mid){
  const m = M[mid]; const info = m.sess.map((_,i)=>blkInfo(pid, mid, i)); const done = info.map(x=>x.done);
  let cur = done.findIndex(d=>!d); if(cur<0) cur = m.sess.length-1;
  return { done, cur, info };
}
function decision(pct){ return pct>=80 ? {k:'g', t:'Evolução adequada!', d:'Atingiu o critério para avançar.'} : pct>=50 ? {k:'y', t:'Em aprendizagem', d:'Mantenha o alvo e ajuste o apoio.'} : {k:'r', t:'Abaixo do esperado', d:'Simplifique e consulte o plano B.'}; }
const avatar = (p, size=58) => `<span style="width:${size}px;height:${size}px;border-radius:50%;background:${['#CFE8E7','#FFE2B8','#E6DDF8','#DDEBFA'][(p?.nome||'').length%4]};display:grid;place-items:center;font-weight:800;font-size:${Math.round(size/2.8)}px;color:#08555A;flex-shrink:0">${esc(initials(p?.nome))}</span>`;

/* ---------- Componentes ---------- */
const hdr = (title, back='#', right='') => `<div class="hdr pad"><a class="ib" href="${back}" aria-label="Voltar" style="margin-left:-8px">${I.back}</a><span class="t">${esc(title)}</span>${right||'<span></span>'}</div>`;
const tabs = (key, items, def) => { const cur = S.tab[key] || def || items[0][0]; return `<div class="tabs pad" role="tablist">${items.map(([k,l])=>`<button type="button" role="tab" aria-selected="${k===cur}" data-tab="${key}:${k}">${l}</button>`).join('')}</div>`; };
const curTab = (key, def) => S.tab[key] || def;
const scene = k => `<svg class="sc" viewBox="0 0 240 140" role="img" aria-label="Ilustração da atividade">${SCENE[k]||SCENE.lupa}</svg>`;
const methodLi = id => { const m=M[id]; return `<a class="li" href="#m-${id}">${micon(id)}<span class="tx"><b>${esc(m.nome)}${m.sigla.length<=10&&!m.nome.includes(m.sigla)?` (${m.sigla})`:''}</b><span class="row" style="justify-content:space-between"><span>${m.idade} · ${m.sess.length} etapas</span>${evPill(m.ev)}</span></span>${I.chev}</a>`; };

/* ---------- Telas ---------- */
function vHome(){
  const nome = S.profile.nome ? `Olá, ${esc(S.profile.nome)}!` : 'Olá!';
  const hoje = S.patients.filter(p=>p.proxData===todayISO()).sort((a,b)=>(a.proxHora||'')<(b.proxHora||'')?-1:1);
  let cont = '';
  if(S.run){ const m=M[S.run.mid], p=patient(S.run.pid); cont = `<button type="button" class="cont" data-go="#atv"><span class="mic" style="background:#F6C68E;width:46px;height:46px"><svg viewBox="0 0 64 64">${PIC.musica}</svg></span><span style="flex:1;display:flex;flex-direction:column;gap:1px"><b style="color:var(--p);font-size:14.5px">Sessão em andamento</b><b style="font-size:14px">${esc(p?p.nome:'Sem paciente')} · ${esc(m.sigla)}</b><span class="sm mut">Atividade ${S.run.i+1} de ${m.sess[S.run.blk].at.length} · ${esc(m.sess[S.run.blk].t)}</span></span>${I.chev}</button>`; }
  else { const last = [...S.sessions].sort((a,b)=>a.data<b.data?1:-1)[0]; if(last && M[last.mid]){ const p=patient(last.pid); const st = p ? blkStatus(p.id,last.mid) : {cur:last.blk}; const s=M[last.mid].sess[st.cur];
    cont = `<a class="cont" href="#s-${last.mid}-${st.cur}" data-ctx="${p?p.id:''}"><span class="mic" style="background:#F6C68E;width:46px;height:46px"><svg viewBox="0 0 64 64">${PIC.livro}</svg></span><span style="flex:1;display:flex;flex-direction:column;gap:1px"><b style="color:var(--p);font-size:14.5px">Continue de onde parou</b><b style="font-size:14px">${esc(p?p.nome:'Treino')} · ${esc(condById(p?.quadro)?.nome||M[last.mid].sigla)}</b><span class="sm mut">${esc(M[last.mid].sigla)} · ${esc(s.t)}</span></span>${I.chev}</a>`; } }
  return `<div class="hero pad"><div class="top"><button class="ib" type="button" data-act="menu" aria-label="Menu" style="margin-left:-10px">${I.menu}</button><button class="ib" type="button" data-act="perfil" aria-label="Seu nome" style="margin-right:-10px"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.5 3.6-8 8-8s8 3.5 8 8"/></svg></button></div>
    <div class="brand">${I.brain}<div><b>FonoTrilha</b><span>Guia Clínico</span></div></div>
    <div class="search">${I.search}<input id="q" type="search" placeholder="Buscar paciente, método ou atividade…" aria-label="Buscar" autocomplete="off"><div class="results" id="results" hidden></div></div></div>
  <div class="sheet pad" style="padding-bottom:24px">
    <div class="greet">${avatar({nome:S.profile.nome||'F'},52)}<div><b style="font-size:19px">${nome}</b><p class="mut sm">${hoje.length?`Você tem ${hoje.length} sessão${hoje.length>1?'ões':''} hoje.`:'Vamos para mais uma sessão?'}</p></div></div>
    <div class="grid2">
      <a class="tile" href="#pacientes">${I.user}<span><b>Meus pacientes</b><span>${S.patients.length} cadastrado${S.patients.length===1?'':'s'}</span></span></a>
      <a class="tile" href="#quadros" data-ctx="">${I.cal}<span><b>Planejar sessão</b><span>Escolha o método</span></span></a>
      <a class="tile" href="#quadros">${I.layers}<span><b>Métodos</b><span>${Object.keys(M).length} métodos</span></span></a>
      <a class="tile" href="#brincadeiras">${I.play}<span><b>Brincadeiras</b><span>Imprimir e usar</span></span></a>
    </div>
    <a class="tile" href="#capacitacao"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0B6E74" stroke-width="1.9" aria-hidden="true"><path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c3 3 9 3 12 0v-5M22 9v6"/></svg><span style="flex:1"><b>Capacitação</b><span>Estude cada método e faça o quiz · ${Object.keys(M).filter(id=>((S.profile.cap||{})[id]?.best||0)>=80).length} de ${Object.keys(M).length} concluídos</span></span>${I.chev}</a>
    ${cont}
    <div class="stack" style="gap:8px"><span class="lbl">Agenda de hoje</span>
      ${hoje.length?`<div class="agenda">${hoje.map(p=>`<button type="button" data-go="#p-${p.id}"><b>${esc(p.proxHora||'--:--')}</b><span class="sm">${esc(p.nome.split(' ')[0])}</span></button>`).join('')}</div>`:`<p class="sm mut">Nenhuma sessão marcada para hoje. Defina a próxima sessão no cadastro do paciente.</p>`}
    </div>
    ${S.mode==='local'?`<p class="sm mut">Os dados estão salvos neste navegador. No app publicado e com login, ficam salvos na sua conta.</p>`:''}
  </div>`;
}

function vQuadros(){
  const p = patient(S.ctxPid);
  return `${hdr('Escolha o quadro clínico','#')}<div class="pad stack" style="padding-top:4px">
    ${p?`<div class="soft row" style="padding:10px 12px">${avatar(p,34)}<span class="sm" style="flex:1">Planejando para <b>${esc(p.nome)}</b></span><button type="button" class="tlink" data-act="clearctx">Trocar</button></div>`:''}
    <p class="mut">O app mostra os métodos indicados para cada quadro.</p>
    <div class="qgrid">${CONDS.map(c=>`<a class="q ${p&&p.quadro===c.id?'on':''}" href="#q-${c.id}"><svg viewBox="0 0 64 64">${PIC[c.pic]}</svg><b>${c.nome}</b><span>${c.longo}</span></a>`).join('')}</div></div>`;
}

function vCond(c){
  S.ctxCond = c.id; const t = curTab('cond','met');
  return `${hdr(c.nome,'#quadros')}<div class="pad row" style="gap:14px;padding-top:2px"><span class="mic" style="background:#1E8FC9;width:58px;height:58px"><svg viewBox="0 0 64 64">${PIC[c.pic]}</svg></span><div><h1>${c.nome}</h1><p class="mut">${c.longo}</p></div></div>
  ${tabs('cond',[['met','Métodos'],['vis','Visão geral'],['ava','Avaliação']])}
  <div class="pad stack" style="padding-top:14px">
  ${t==='met' ? c.metodos.map(methodLi).join('') : t==='vis' ? `<p>${c.resumo}</p><h3>Focos da terapia</h3><ul style="margin:0;padding-left:20px;display:grid;gap:6px">${c.foco.map(f=>`<li>${f}</li>`).join('')}</ul>` : `<p class="mut">Instrumentos para avaliar antes de escolher o método:</p>${c.aval.map(a=>`<div class="li" style="cursor:default"><span class="num">✓</span><span class="tx"><b style="font-weight:600">${a}</b></span></div>`).join('')}`}
  </div>`;
}

function vMethod(id){
  const m = M[id]; const t = curTab('met-'+id,'tri'); const p = patient(S.ctxPid);
  const st = p ? blkStatus(p.id,id) : null;
  const back = S.ctxCond && condById(S.ctxCond)?.metodos.includes(id) ? '#q-'+S.ctxCond : '#q-'+condsOf(id)[0].id;
  let body='';
  if(t==='tri'){
    body = `${p?`<div class="soft row" style="padding:10px 12px">${avatar(p,34)}<span class="sm" style="flex:1">Trilha de <b>${esc(p.nome)}</b> · ${st.done.filter(Boolean).length} de ${m.sess.length} etapas concluídas</span>${p.metodo===id?`<span class="tagp" style="flex:none">Método atual</span>`:`<button type="button" class="tlink" style="flex:none;min-height:32px" data-act="troca" data-id="${p.id}" data-mid="${id}">Usar este método</button>`}</div>
    ${p.metodo&&p.metodo!==id&&M[p.metodo]?`<p class="sm mut">O método atual de ${esc(p.nome.split(' ')[0])} é <b>${esc(M[p.metodo].sigla)}</b>. Para mudar, toque em “Usar este método”.</p>`:''}`:`<p class="sm mut">Escolha um paciente ao começar a sessão para acompanhar a trilha dele.</p>`}
    ${m.sess.map((s,i)=>{ const done = st&&st.done[i], now = st&&st.cur===i&&!done; return `<a class="step ${now?'now':''}" href="#s-${id}-${i}"><span class="dot ${done?'ok':now?'now':''}">${done?I.check:''}</span><span class="tx" style="flex:1;display:flex;flex-direction:column"><b style="font-size:14.5px">Etapa ${i+1}${now?' · em andamento':''}</b><span class="sm mut">${esc(blkLabel(s))} · ${esc(s.t)}</span>${st&&now?`<span class="sm" style="font-weight:700;color:var(--warn);margin-top:2px">${esc(st.info[i].falta.join(' · '))}</span>`:''}${st&&st.info[i].manual?`<span class="sm" style="font-weight:700;color:var(--ok);margin-top:2px">Concluída por decisão clínica</span>`:''}</span>${I.chev}</a>`; }).join('')}
    ${p&&st.done.every(Boolean)?depoisHTML(id,p):`<p class="sm mut"><b>Quando uma etapa é concluída:</b> ${esc(regraOf(id).txt)}</p>`}`;
  } else if(t==='sob'){
    body = `<div class="grid2"><div class="kpi"><span>Idade</span><b style="font-size:15px">${m.idade}</b></div><div class="kpi"><span>Nível de evidência</span><b style="font-size:15px">${EVL[m.ev]}</b></div></div>
    <div class="card"><h3>Intensidade</h3><p class="sm" style="margin-top:4px">${m.dose}</p></div>
    <div class="alert i"><span class="sm">${m.cert}</span></div>
    <h3>Quando indicar</h3><div class="steps">${m.quando.map(x=>`<div>${I.ok}<span>${x}</span></div>`).join('')}</div>
    <h3>Princípios</h3><div class="steps">${m.principios.map((x,i)=>`<div><span class="num">${i+1}</span><span>${x}</span></div>`).join('')}</div>
    <h3>Antes da 1ª sessão (linha de base)</h3><div class="steps">${m.inicio.map(x=>`<div>${I.ok}<span>${x}</span></div>`).join('')}</div>
    <div class="card"><h3>Critério para avançar</h3><p class="sm" style="margin-top:4px">${m.avancar}</p></div>
    <h3>Critérios de alta</h3><div class="steps">${m.alta.map(x=>`<div>${I.ok}<span>${x}</span></div>`).join('')}</div>
    <a class="btn out sm" href="#pb-${id}" data-pb="">Se não evoluir · Plano B</a><a class="btn ghost sm" href="#cap-${id}">Estudar este método (capacitação)</a>`;
  } else {
    body = `<ol style="margin:0;padding-left:20px;display:grid;gap:8px" class="sm">${m.refs.map(r=>`<li>${esc(r)}</li>`).join('')}</ol>`;
  }
  return `${hdr('', back, `<button class="ib" type="button" data-act="fav" data-id="${id}" aria-label="Favoritar" aria-pressed="${(S.profile.favs||[]).includes(id)}" style="margin-right:-8px"><svg width="22" height="22" viewBox="0 0 24 24" fill="${(S.profile.favs||[]).includes(id)?'#E2504B':'none'}" stroke="#E2504B" stroke-width="2" aria-hidden="true"><path d="M12 21s-8-5.2-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 5.8-8 11-8 11z"/></svg></button>`)}
  <div class="pad row" style="gap:14px;align-items:flex-start">${micon(id,58)}<div style="flex:1;display:flex;flex-direction:column;gap:4px"><h2>${esc(m.nome)}</h2><span class="sm mut">${condsOf(id).map(c=>c.nome).join(' · ')} · ${m.idade}</span>${evPill(m.ev)}</div></div>
  <p class="pad mut" style="margin-top:12px">${m.resumo}</p>
  ${tabs('met-'+id,[['tri','Trilha de sessões'],['sob','Sobre o método'],['ref','Referências']])}
  <div class="pad stack" style="padding-top:14px;gap:8px">${body}</div>`;
}

function vSessao(id, i){
  const m = M[id], s = m.sess[i]; const p = patient(S.ctxPid);
  const key = `prep:${id}:${i}`; const done = ls.get(key, []);
  const plays = [...new Set(s.at.map((a,j)=>playOfKey(actKey(id,i,j))).filter(Boolean))];
  const mins = s.at.reduce((a,x)=>a+x.min,0);
  return `${hdr('', '#m-'+id)}<div class="pad stack" style="gap:10px">
    <span class="sm mut">${esc(m.sigla)} · ${esc(blkLabel(s))}${p?' · '+esc(p.nome):''}</span>
    <h1>Etapa ${i+1} de ${m.sess.length}</h1>
    <div class="bar"><i style="width:${Math.round((i+1)/m.sess.length*100)}%"></i></div>
    <h2 style="margin-top:8px">${esc(s.t)}</h2>
    <p class="mut">Objetivo: ${s.obj}</p></div>
  <div class="pad stack sec">
    <div class="soft"><div class="row" style="justify-content:space-between;margin-bottom:6px"><h3 style="color:var(--pd)">O que preparar antes</h3><span class="sm" style="font-weight:800;color:var(--pd)" id="prepc">${done.length} de ${s.prep.length}</span></div>
      ${s.prep.map((x,j)=>`<label class="chk ${done.includes(j)?'done':''}"><input type="checkbox" id="prep-${id}-${i}-${j}" data-prep="${key}|${j}" ${done.includes(j)?'checked':''}><span>${x}</span></label>`).join('')}</div>
    ${plays.map(k=>`<button type="button" class="li" data-play="${k}"><span class="mic" style="background:#FFF1DE;width:48px;height:48px">${I.print}</span><span class="tx"><b>Brincadeira para imprimir</b><span>${esc(PLAY[k].t)}</span></span>${I.chev}</button>`).join('')}
    ${roteiroHTML(id, i)}
    ${p?(()=>{ const inf=blkInfo(p.id,id,i); return inf.done&&!inf.manual ? `<div class="crit sm"><b style="color:var(--ok)">Etapa concluída para ${esc(p.nome.split(' ')[0])}</b> pelo critério do método.</div>` : `<div class="card stack" style="gap:8px"><b class="sm">Situação de ${esc(p.nome.split(' ')[0])} nesta etapa</b><span class="sm ${inf.manual?'':'mut'}">${inf.manual?'Concluída por decisão clínica.':esc(inf.falta.join(' · '))+'.'}${!inf.manual&&inf.dias<2?' Registros feitos no mesmo dia contam como um único atendimento.':''}</span><button type="button" class="btn ${inf.manual?'ghost':'out'} sm" data-act="manualok" data-mid="${id}" data-blk="${i}">${inf.manual?'Desfazer conclusão manual':'Concluir etapa por decisão clínica'}</button></div>`; })():''}
    <span class="lbl" style="margin-top:6px">Atividades · ${mins} min</span>
    ${s.at.map((a,j)=>`<div class="row" style="flex-wrap:nowrap"><span class="num" style="background:var(--pl);color:var(--pd);border-radius:8px">${j+1}</span><span style="flex:1;font-weight:600">${esc(a.t)}</span><span class="sm mut">${a.min} min</span></div>`).join('')}
  </div>
  <div class="cta pad"><button type="button" class="btn" data-act="start" data-mid="${id}" data-blk="${i}">Começar sessão ${I.arrow}</button></div>`;
}

function vAtividade(){
  const r = S.run; if(!r) return vHome();
  const m=M[r.mid], s=m.sess[r.blk], a=s.at[r.i]; const p=patient(r.pid);
  const ak = actKey(r.mid,r.blk,r.i); const play = playOfKey(ak); const usa = (ACT[ak]||{}).u;
  return `${hdr('Atividades da sessão', '#s-'+r.mid+'-'+r.blk, `<button class="tlink" type="button" data-act="cancelrun">Sair</button>`)}
  <div class="pad stack" style="gap:14px">
    <div class="accent"><div class="row" style="justify-content:space-between"><span style="font-weight:700;color:var(--p);font-size:13.5px">Atividade ${r.i+1} de ${s.at.length}${p?' · '+esc(p.nome.split(' ')[0]):''}</span><span class="tagp">≈ ${a.min} min</span></div><h2>${esc(a.t)}</h2><span class="mut sm">${esc(s.obj)}</span></div>
    <div class="ill">${cena(ak)}<button type="button" class="playb" data-act="demo">${'<span>'+I.tri+'</span>'}Ver demonstração</button></div>
    <div class="stack" style="gap:10px"><h3>Passo a passo</h3><div class="steps">${a.passos.map((x,k)=>`<div><span class="num">${k+1}</span><span>${x}</span></div>`).join('')}</div></div>
    ${(()=>{ const lg = LOG[ak]||{}; return `<details class="more" open><summary>Lógica, objetivo e critério ${I.chev}</summary><div class="stack" style="gap:14px">
      ${lg.l?`<div class="stack" style="gap:4px"><span class="lbl" style="color:var(--p)">Por que essa atividade funciona</span><p style="font-size:14.5px;line-height:1.5">${esc(lg.l)}</p></div>`:''}
      ${lg.e?`<div class="stack" style="gap:4px"><span class="lbl" style="color:var(--p)">O que esperamos alcançar</span><p style="font-size:14.5px;line-height:1.5">${esc(lg.e)}</p></div>`:''}
      <div class="stack" style="gap:6px"><span class="lbl" style="color:var(--p)">O que observar</span><div class="steps">${a.obs.map(o=>`<div>${I.ok}<span>${o}</span></div>`).join('')}</div></div>
      ${contaHTML(ak, true)}
      <div class="crit"><b style="color:var(--ok)">Critério de sucesso:</b> ${a.ok}</div></div></details>
    ${evitarHTML(r.mid, ak)}`; })()}
    ${usa?`<div class="card row" style="flex-wrap:nowrap;gap:12px;padding:12px"><span class="mic" style="background:var(--pl);width:44px;height:44px"><svg viewBox="0 0 64 64" style="width:28px;height:28px">${PIC.brincar.replace(/var\(--ink\)/g,'#0B6E74').replace(/var\(--tint\)/g,'#CFE8E7')}</svg></span><span class="tx" style="flex:1;display:flex;flex-direction:column"><b style="font-size:14.5px">Material da atividade</b><span class="sm mut">${esc(usa)}</span></span></div>`:''}
    ${play?`<button type="button" class="li" data-play="${play}"><span class="mic" style="background:#FFF1DE;width:44px;height:44px">${I.print}</span><span class="tx"><b>Brincadeira para imprimir</b><span>${esc(PLAY[play].t)}</span></span>${I.chev}</button>`:''}
  </div>
  <div class="cta pad"><a class="btn" href="#reg">Registrar desempenho ${I.arrow}</a></div>`;
}

function vRegistro(){
  const r = S.run; if(!r) return vHome();
  const m=M[r.mid], s=m.sess[r.blk], a=s.at[r.i], x=r.acts[r.i];
  const tot = x.y + x.n; const ak = actKey(r.mid,r.blk,r.i); const md = medOf(ak); const ev = evalAct(x, r.mid, r.blk, r.i, r.pid); const aps = apoiosOf(r.mid, ak);
  const last = r.i === s.at.length-1; const cont = md.tipo==='cont' || md.tipo==='base';
  const cor = ev.score==null ? 'var(--mut)' : ev.score>=80 ? 'var(--ok)' : ev.score>=50 ? 'var(--warn)' : 'var(--bad)';
  const minT = md.min || 10;
  const status = !tot ? '' : ev.score==null ? (ev.note||'') : ev.ok ? 'Meta atingida.' : (md.tipo==='pct' && tot<minT ? `continue até ${minT} tentativas para decidir` : (ev.note || (cont||md.tipo==='seq' ? 'Ainda abaixo da meta.' : decision(ev.score).d)));
  return `<div class="hdr pad" style="grid-template-columns:1fr 44px"><span class="t" style="text-align:left;font-size:22px">Registrar desempenho</span><a class="ib" href="#atv" aria-label="Voltar para a atividade" style="margin-right:-8px">${I.close}</a></div>
  <div class="pad stack">
    <div class="card stack" style="gap:14px">
      <div class="row" style="justify-content:space-between"><h3>${esc(a.t)}</h3><span class="tagp">≈ ${a.min} min</span></div>
      <div class="metab"><span class="lbl">Meta desta atividade</span><b>${esc(metaTxt(md))}</b>${md.nota?`<span class="sm mut">${esc(md.nota)}</span>`:''}</div>
      ${contaHTML(ak)}
      ${cont ? `<button type="button" class="big y" data-act="hit" aria-label="Contar mais uma ocorrência" style="width:100%"><span class="c"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1E7F49" stroke-width="3.2" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg></span><span><b>${x.y}${md.meta&&md.tipo==='cont'?`<span style="font-size:18px;color:var(--mut)"> / ${md.meta}</span>`:''}</b><span class="sm mut">Contar +1 · ${esc(md.c||'ocorrências')}</span></span></button>`
      : `<div class="grid2">
        <button type="button" class="big y" data-act="hit" aria-label="Registrar acerto"><span class="c"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1E7F49" stroke-width="3.2" stroke-linecap="round" aria-hidden="true"><path d="M5 12l5 5 9-10"/></svg></span><span><b>${x.y}</b><span class="sm mut">Acertos</span></span></button>
        <button type="button" class="big n" data-act="miss" aria-label="Registrar erro"><span class="c"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#B23A34" stroke-width="3.2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg></span><span><b>${x.n}</b><span class="sm mut">Erros</span></span></button>
      </div>`}
      <div class="stack" style="gap:6px"><div class="row" style="justify-content:space-between"><span class="sm" style="font-weight:700">${cont?'Contagem':'Tentativas'}: ${tot}</span><button type="button" class="tlink" data-act="undo" ${tot?'':'disabled'}>Desfazer última</button></div>
        ${cont?'':`<div class="hist" aria-label="Histórico de tentativas">${x.hist.map(h=>`<i class="${h}"></i>`).join('')}${Array.from({length:Math.max(0,10-x.hist.length)},()=>'<i class="e"></i>').join('')}</div>`}
        ${tot?`<div class="row sm" style="font-weight:700;color:${cor}">${esc(ev.txt)} · ${esc(status)}</div>`:''}</div>
      ${aps.length>1?`<div class="stack" style="gap:6px"><span class="sm" style="font-weight:700">Nível de apoio</span>
        <div class="${aps.length>4?'segw':'seg'}" role="radiogroup" aria-label="Nível de apoio">${aps.map((o,k)=>`<button type="button" role="radio" aria-checked="${x.apoio===o}" data-apoio="${esc(o)}">${esc(o)}${k<=md.aceita&&md.aceita>0?' ✓':''}</button>`).join('')}</div>
        <span class="sm mut">${md.aceita>0?'✓ = o acerto vale para o critério com este apoio.':`Para o critério vale o acerto com “${esc(aps[0])}”.`}${APO_NOTA[r.mid]?' '+esc(APO_NOTA[r.mid]):''}</span></div>`:''}
    </div>
    <label class="f">Observações (opcional)<textarea id="obs" placeholder="Ex.: precisou de dica verbal nas primeiras tentativas…">${esc(x.obs)}</textarea></label>
    <label class="file" for="media">${I.cam} Anexar vídeo, áudio ou foto da evolução</label><input type="file" id="media" accept="video/*,audio/*,image/*" hidden>
    ${x.media.length?`<div class="media">${x.media.map(f=>f.url?`<a href="${esc(f.url)}" target="_blank" rel="noopener">${esc(f.name)}</a>`:`<span>${esc(f.name)}</span>`).join('')}</div>`:''}
    <p class="sm mut" id="mediamsg" hidden></p>
  </div>
  <div class="cta pad"><button type="button" class="btn" data-act="nextact">${last?'Ver resultado da sessão':'Salvar e próxima atividade'} ${I.arrow}</button></div>`;
}

function vResultado(){
  const r = S.run || S.lastRes; if(!r) return vHome();
  const saved = !S.run; const m=M[r.mid], s=m.sess[r.blk]; const p=patient(r.pid); const c = calcRun(r); const d = c.base ? {k:'y', t:'Linha de base registrada', d:'A partir do próximo atendimento, o app compara com este resultado.'} : c.ok ? {k:'g', t:'Meta atingida!', d:'Confirme no próximo atendimento para concluir a etapa.'} : c.pct>=80 ? {k:'y', t:'Quase lá', d:'Na média foi bem, mas nem todas as atividades atingiram a meta.'} : decision(c.pct);
  const apoioMain = (()=>{ const cnt={}; r.acts.forEach(a=>cnt[a.apoio]=(cnt[a.apoio]||0)+a.y+a.n); return Object.entries(cnt).sort((a,b)=>b[1]-a[1])[0]?.[0]||'—'; })();
  const hist = p ? sessOf(p.id, r.mid).slice(-5) : [];
  const bars = saved ? hist : hist.concat([{pct:c.pct, blk:r.blk, data:new Date().toISOString(), now:true}]);
  const R = regraOf(r.mid);
  const recs = c.ok ? [ `Para concluir a etapa: ${R.txt}`, r.blk<m.sess.length-1 ? `Depois disso, avance para a etapa ${r.blk+2}: ${m.sess[r.blk+1].t}` : 'Última etapa: depois de confirmar, avalie os critérios de alta', 'Enviar à família a brincadeira para fazer em casa'] : c.pct>=50 ? ['Repetir esta etapa no próximo atendimento','Ajustar o nível de apoio e retirá-lo aos poucos','Aumentar o número de oportunidades por atividade'] : ['Simplificar o alvo ou voltar uma etapa','Rever o reforçador e o ambiente','Consultar o plano B do método'];
  const kc = d.k==='g'?'var(--ok)':d.k==='y'?'var(--warn)':'var(--bad)', kf = d.k==='g'?'#2FA85A':d.k==='y'?'#E08A1E':'#C2453E';
  return `${hdr('Resultado da sessão', saved?(p?'#p-'+p.id:'#'):'#reg')}
  <div class="pad stack">
    <span class="sm mut">${esc(m.sigla)} · Etapa ${r.blk+1} · ${esc(s.t)}${p?' · '+esc(p.nome):''}</span>
    <div class="res ${d.k}"><svg width="50" height="50" viewBox="0 0 54 54" aria-hidden="true"><rect x="8" y="30" width="9" height="16" rx="2" fill="${kf}"/><rect x="22" y="${d.k==='r'?36:20}" width="9" height="${d.k==='r'?10:26}" rx="2" fill="${kf}"/><rect x="36" y="${d.k==='g'?10:d.k==='y'?26:40}" width="9" height="${d.k==='g'?36:d.k==='y'?20:6}" rx="2" fill="${kf}"/></svg><div><b style="font-size:18px;color:${kc}">${d.t}</b><p class="sm">${c.base?'':`${c.evs.filter(e=>e.ok).length} de ${c.evs.length} ${c.evs.length>1?'atividades':'atividade'} na meta. `}${d.d}</p></div></div>
    <div class="grid3"><div class="kpi"><b style="color:${kc}">${c.base?'—':c.pct+'%'}</b><span>Desempenho</span></div><div class="kpi"><b>${c.t}</b><span>Registros</span></div><div class="kpi"><b style="font-size:14px">${esc(apoioMain)}</b><span>Apoio principal</span></div></div>
    <p class="sm mut" style="margin-top:-4px">Desempenho: 80% significa que a meta da atividade foi atingida, seja ela em % de acerto, em contagem ou em acertos seguidos.</p>
    <div class="card stack" style="gap:10px"><b>Por atividade</b>
      ${c.evs.map((e,j)=>{ const pc=e.score??0; return `<div class="stack" style="gap:4px"><div class="prog"><span>${esc(s.at[j].t)}</span><span class="bar"><i style="width:${Math.min(100,pc)}%;background:${e.score==null?'#B9D9D7':pc>=80?'#2FA85A':pc>=50?'#E08A1E':'#C2453E'}"></i></span><b style="text-align:right">${e.ok?'✓':e.score==null?'base':pc+'%'}</b></div><span class="sm mut">${esc(e.txt)} · meta: ${esc(metaTxt(e.md))}${e.note?' · '+esc(e.note):''}</span></div>`; }).join('')}</div>
    ${R.outra?`<label class="chk ${r.outra?'done':''}" style="border:1px solid var(--line);border-radius:12px;padding:10px 12px"><input type="checkbox" data-act="outra" ${r.outra?'checked':''} ${saved?'disabled':''}><span><b>Feito também com outra pessoa</b> (responsável, professor ou outro terapeuta). No ${esc(m.sigla)}, a etapa só é concluída quando o critério aparece com pelo menos 2 pessoas.</span></label>`:''}
    ${bars.length>1?`<div class="card"><b>Evolução no método</b><div class="chart" style="margin-top:10px"><span class="meta" style="bottom:${80}%"></span>${bars.map((b,k)=>`<div class="col ${k===bars.length-1?'last':''}"><i style="height:${Math.max(4,b.pct)}%"></i><span>${b.now?'hoje':fmtDate(b.data).slice(0,5)} · ${b.pct}%</span></div>`).join('')}</div><p class="sm mut" style="margin-top:6px">Linha tracejada: meta atingida (80%)</p></div>`:''}
    <div class="soft stack" style="gap:10px;background:var(--bg)"><h3>Recomendações</h3>${recs.map(x=>`<div class="rec">${c.pct>=50||c.base?I.ok:I.warnI}<span>${x}</span></div>`).join('')}</div>
    ${!c.ok&&!c.base?`<a class="btn out sm" href="#pb-${r.mid}" data-pb="${c.pct}">Não evoluiu como esperado? Ver plano B</a>`:''}
    <button type="button" class="btn ghost sm" data-act="famrun">Orientação para a família</button>
  </div>
  <div class="cta pad">${saved?`<a class="btn" href="${p?'#p-'+p.id:'#'}">${p?'Ver prontuário do paciente':'Voltar ao início'} ${I.arrow}</a>`:`<button type="button" class="btn" data-act="saverun">${p?'Salvar no prontuário':'Concluir treino'} ${I.arrow}</button>`}</div>`;
}

function vPlanoB(id){
  const m=M[id]; const t=curTab('pb-'+id,'faz'); const sel=Math.min(S.pbSel, m.seNao.length-1); const x=m.seNao[sel];
  const pct = S.pbPct;
  const acts = x.a.split(/(?<=[.;])\s+/).filter(Boolean);
  let body='';
  if(t==='sin') body = `<p class="sm mut">Toque no sinal que você está observando:</p>${m.seNao.map((y,k)=>`<button type="button" class="step ${k===sel?'now':''}" data-pbsel="${k}"><span class="dot ${k===sel?'now':''}"></span><span style="flex:1;font-weight:700;font-size:14.5px">${esc(y.s)}</span></button>`).join('')}`;
  else if(t==='cau') body = m.seNao.map((y,k)=>`<div class="card ${k===sel?'':''}" style="${k===sel?'border-color:var(--p)':''}"><span class="lbl">Sinal</span><p style="font-weight:700;margin-top:2px">${esc(y.s)}</p><p class="sm mut" style="margin-top:6px">Causa provável: ${esc(y.c)}</p></div>`).join('');
  else if(t==='tro') body = `<div class="alert i" style="align-items:flex-start">${I.swap}<div><b style="color:var(--info)">Quando trocar de método?</b><p class="sm" style="margin-top:4px">${esc(m.trocar)}</p></div></div><span class="lbl">Outros métodos para ${esc(condsOf(id)[0].nome)}</span>${condsOf(id)[0].metodos.filter(o=>o!==id).map(methodLi).join('')}`;
  else body = `<div class="card"><span class="lbl">Sinal observado</span><p style="font-weight:800;margin-top:2px">${esc(x.s)}</p><p class="sm mut" style="margin-top:4px">Causa provável: ${esc(x.c)}</p><button type="button" class="tlink" data-tab="pb-${id}:sin" style="justify-self:start;min-height:36px">Trocar o sinal</button></div>
    <h3>O que fazer</h3><div class="steps">${acts.map((a,k)=>`<div><span class="num r">${k+1}</span><span>${esc(a)}</span></div>`).join('')}</div>
    <div class="alert i" style="align-items:flex-start;margin-top:6px">${I.swap}<div><b style="color:var(--info)">Quando trocar de método?</b><p class="sm" style="margin-top:4px">${esc(m.trocar)}</p></div></div>`;
  return `${hdr('Se não evoluir · Plano B', '#m-'+id)}
  <div class="pad"><div class="alert r"><span style="width:42px;height:42px;border-radius:50%;background:var(--bad);display:grid;place-items:center;flex-shrink:0">${I.badI}</span><div><b style="color:var(--bad)">${pct!=null?`Abaixo do esperado: ${pct}%`:'Não houve a evolução esperada?'}</b><p class="sm">${esc(m.sigla)} · veja o sinal, a causa provável e o que fazer.</p></div></div></div>
  ${tabs('pb-'+id,[['sin','Sinais'],['cau','Causas'],['faz','O que fazer'],['tro','Trocar']],'faz')}
  <div class="pad stack" style="padding-top:14px">${body}</div>
  <div class="cta pad"><div class="grid2"><a class="btn out" href="#m-${id}">Voltar à trilha</a><a class="btn" href="#q-${condsOf(id)[0].id}">Ver outro método</a></div></div>`;
}

function vPacientes(){
  const q = (S.pq||'').toLowerCase();
  const list = S.patients.filter(p=>!q || (p.nome||'').toLowerCase().includes(q)).sort((a,b)=>(a.nome||'').localeCompare(b.nome||''));
  return `${hdr('Meus pacientes','#', `<a class="ib" href="#novo" aria-label="Novo paciente" style="margin-right:-8px;color:var(--p)">${I.plus}</a>`)}
  <div class="pad stack">
    ${S.patients.length?`<div class="search">${I.search}<input id="pq" type="search" value="${esc(S.pq||'')}" placeholder="Buscar paciente" aria-label="Buscar paciente" style="border:1px solid var(--line)"></div>`:''}
    ${!S.ready?'<p class="mut">Carregando…</p>': list.length ? list.map(p=>{ const c=condById(p.quadro), mm=M[p.metodo]; const ss=sessOf(p.id); const last=ss[ss.length-1]; return `<a class="li" href="#p-${p.id}">${avatar(p,50)}<span class="tx"><b>${esc(p.nome)}</b><span>${esc([age(p.nasc), c?.nome, mm?.sigla].filter(Boolean).join(' · '))}</span><span>${last?`Última sessão: ${fmtDate(last.data)} · ${last.pct}%`:'Nenhuma sessão registrada'}</span></span>${I.chev}</a>`; }).join('')
      : S.patients.length ? `<p class="mut">Nenhum paciente com esse nome.</p>` : `<div class="empty">${I.user}<b style="color:var(--ink);font-size:16px">Nenhum paciente cadastrado</b><p class="sm">Cadastre o primeiro paciente para registrar sessões, evolução e anamnese.</p><a class="btn sm" href="#novo" style="max-width:280px">${I.plus} Cadastrar paciente</a><button type="button" class="tlink" data-act="exemplo" style="justify-self:center">Criar um paciente de exemplo</button></div>`}
  </div>`;
}

const ANAM = [['queixa','Queixa principal'],['gestacao','Gestação e parto'],['desenv','Desenvolvimento motor e da linguagem'],['saude','Saúde e audição (exames, otites, medicação)'],['escola','Escola e aprendizagem'],['familia','Família e rotina'],['interesses','Interesses e reforçadores'],['obs','Outras observações']];
function vForm(id){
  const p = id ? patient(id) : {}; if(id && !p) return vPacientes();
  const conds = CONDS.map(c=>`<option value="${c.id}" ${p.quadro===c.id?'selected':''}>${c.nome} — ${c.longo}</option>`).join('');
  const q = p.quadro || CONDS[0].id;
  const mets = condById(q).metodos.map(mid=>`<option value="${mid}" ${p.metodo===mid?'selected':''}>${M[mid].sigla} — ${M[mid].nome}</option>`).join('');
  return `${hdr(id?'Editar paciente':'Novo paciente', id?'#p-'+id:'#pacientes')}
  <form class="pad stack" id="pform" novalidate>
    <label class="f">Nome completo *<input type="text" id="f-nome" required value="${esc(p.nome)}" autocomplete="off"></label>
    <div class="grid2"><label class="f">Nascimento<input type="date" id="f-nasc" value="${esc(p.nasc)}"></label><label class="f">Frequência<input type="text" id="f-freq" placeholder="2× por semana" value="${esc(p.freq)}"></label></div>
    <label class="f">Quadro principal<select id="f-quadro">${conds}</select></label>
    <label class="f">Nível / observação do diagnóstico<input type="text" id="f-nivel" placeholder="Ex.: Nível 1 de suporte" value="${esc(p.nivel)}"></label>
    <label class="f">Método atual<select id="f-metodo"><option value="">Definir depois</option>${mets}</select></label>
    <div class="grid2"><label class="f">Responsável<input type="text" id="f-resp" value="${esc(p.resp)}"></label><label class="f">Telefone<input type="tel" id="f-tel" value="${esc(p.tel)}"></label></div>
    <div class="grid2"><label class="f">Próxima sessão<input type="date" id="f-pdata" value="${esc(p.proxData)}"></label><label class="f">Horário<input type="time" id="f-phora" value="${esc(p.proxHora)}"></label></div>
    <p class="sm mut" id="ferr" hidden></p>
    <div class="cta" style="padding-left:0;padding-right:0"><button type="submit" class="btn">${id?'Salvar alterações':'Cadastrar paciente'}</button>${id?`<button type="button" class="btn ghost sm" data-act="askdel" data-id="${id}" style="margin-top:10px;color:var(--bad)">Excluir paciente</button>`:''}</div>
  </form>`;
}

function vPaciente(id){
  const p = patient(id); if(!p) return S.ready ? `${hdr('Paciente','#pacientes')}<div class="pad empty">Paciente não encontrado.</div>` : '<p class="pad mut">Carregando…</p>';
  S.ctxPid = id; ls.set('ctxPid', id);
  const t = curTab('pac','res'); const c=condById(p.quadro); const ss = sessOf(p.id); const mm = M[p.metodo];
  let body = '';
  if(t==='res'){
    const used = [...new Set(ss.map(s=>s.mid))];
    const st = mm ? blkStatus(p.id, p.metodo) : null;
    body = `${used.length?`<div class="card stack" style="gap:12px"><div class="row" style="justify-content:space-between"><h3>Progresso por método</h3><button type="button" class="tlink" data-tab="pac:evo" style="min-height:32px">Ver evolução →</button></div>${used.map(mid=>{ const l=sessOf(p.id,mid); const last=l[l.length-1]; return `<div class="prog"><span>${esc(M[mid].sigla)} · etapa ${last.blk+1}</span><span class="bar"><i style="width:${last.pct}%;background:${last.pct>=80?'#2FA85A':last.pct>=50?'#E08A1E':'#C2453E'}"></i></span><b style="text-align:right">${last.pct}%</b></div>`; }).join('')}</div>`:`<div class="card"><p class="mut">Ainda não há sessões registradas.</p></div>`}
    <div class="grid2"><div class="kpi"><span>Método atual</span><b style="font-size:15px">${mm?esc(mm.sigla):'—'}</b></div><div class="kpi"><span>Atendimentos</span><b style="font-size:15px">${porDia(ss).length}${p.freq?' · '+esc(p.freq):''}</b></div></div>
    ${mm?`<a class="li" href="#s-${p.metodo}-${st.cur}"><span class="mic" style="background:var(--pl);width:46px;height:46px">${I.cal}</span><span class="tx"><b>Próxima sessão</b><span style="font-weight:700;color:var(--p);font-size:14px">${p.proxData?fmtDate(p.proxData)+(p.proxHora?' · '+esc(p.proxHora):''):'Data não definida'}</span><span>${esc(mm.sigla)} · Etapa ${st.cur+1} · ${esc(mm.sess[st.cur].t)}</span></span>${I.chev}</a>`:`<a class="btn out sm" href="#q-${p.quadro}">Escolher método para ${esc(p.nome.split(' ')[0])}</a>`}
    <button type="button" class="btn out sm" data-act="troca" data-id="${p.id}">${mm?'Trocar método':'Definir método'}</button>
    ${trocasHTML(p)}
    ${p.resp||p.tel?`<div class="card sm"><b>Responsável:</b> ${esc(p.resp||'—')}${p.tel?` · <span style="user-select:all">${esc(p.tel)}</span>`:''}</div>`:''}`;
  } else if(t==='evo'){
    const dias = porDia(ss); const last10 = dias.slice(-10);
    const lastBy = {}; ss.forEach(s=>{ lastBy[s.mid+':'+s.blk]=s; }); const noCrit = Object.values(lastBy).filter(s=>s.pct>=80).length;
    body = last10.length ? `<div class="card"><b>Acerto por atendimento</b><div class="chart" style="margin-top:12px;height:150px"><span class="meta" style="bottom:80%"></span>${last10.map((d,k)=>`<div class="col ${k===last10.length-1?'last':''}" title="${d.pct}%${d.regs.length>1?' · '+d.regs.length+' etapas no mesmo dia':''}"><i style="height:${Math.max(4,d.pct)}%"></i><span>${fmtDate(d.data).slice(0,5)}${d.regs.length>1?`<em class="ndia">${d.regs.length}</em>`:''}</span></div>`).join('')}</div><p class="sm mut" style="margin-top:6px">${last10.length===1?'1 atendimento':'Últimos '+last10.length+' atendimentos'} · cada barra é um dia · linha tracejada = meta 80%</p>${dias.some(d=>d.regs.length>1)?`<p class="sm" style="margin-top:6px;color:var(--warn);font-weight:700">O número sobre a data indica quantas etapas foram registradas no mesmo dia. A barra mostra o acerto somado do dia.</p>`:''}</div>
      <div class="grid3"><div class="kpi"><b>${Math.round(dias.reduce((a,d)=>a+d.pct,0)/dias.length)}%</b><span>Média geral</span></div><div class="kpi"><b>${Math.max(...dias.map(d=>d.pct))}%</b><span>Melhor atendimento</span></div><div class="kpi"><b>${noCrit}</b><span>Etapas no critério</span></div></div>` : `<div class="card"><p class="mut">A evolução aparece aqui depois do primeiro atendimento registrado.</p></div>`;
  } else if(t==='ses'){
    body = ss.length ? [...ss].reverse().map(s=>{ const m=M[s.mid]; const d=decision(s.pct); return `<details class="more"><summary><span style="display:flex;flex-direction:column;gap:2px"><span>${fmtDate(s.data)} · ${esc(m?.sigla||s.mid)} · Etapa ${s.blk+1}</span><span class="sm" style="font-weight:700;color:${d.k==='g'?'var(--ok)':d.k==='y'?'var(--warn)':'var(--bad)'}">${s.pct}% · ${d.t}</span></span>${I.chev}</summary><div class="stack" style="gap:10px">${s.acts.map(a=>`<div><b class="sm">${esc(a.t)}</b><p class="sm mut">${a.y} acertos · ${a.n} erros · apoio: ${esc(a.apoio)}</p>${a.obs?`<p class="sm">“${esc(a.obs)}”</p>`:''}${(a.media||[]).length?`<div class="media" style="margin-top:4px">${a.media.map(f=>f.url?`<a href="${esc(f.url)}" target="_blank" rel="noopener">${esc(f.name)}</a>`:`<span>${esc(f.name)}</span>`).join('')}</div>`:''}</div>`).join('')}${s.nota?`<p class="sm"><b>Nota da sessão:</b> ${esc(s.nota)}</p>`:''}<button type="button" class="btn ghost sm" data-fam="${s.id}">Orientação para a família</button></div></details>`; }).join('') : `<div class="card"><p class="mut">Nenhuma sessão registrada ainda.</p></div>`;
  } else {
    const an = p.anamnese || {};
    body = `<form id="aform" class="stack">${ANAM.map(([k,l])=>`<label class="f">${l}<textarea id="a-${k}" rows="3">${esc(an[k])}</textarea></label>`).join('')}<button type="submit" class="btn">Salvar anamnese</button>${an.atualizada?`<p class="sm mut">Atualizada em ${fmtDate(an.atualizada)}</p>`:''}</form>`;
  }
  return `${hdr('Perfil do paciente','#pacientes', `<a class="tlink" href="#ed-${p.id}">Editar</a>`)}
  <div class="pad"><div class="card row" style="gap:14px;flex-wrap:nowrap">${avatar(p,66)}<div style="display:flex;flex-direction:column;gap:2px;min-width:0"><b style="font-size:18px">${esc(p.nome)}</b><span class="sm mut">${esc(age(p.nasc)||'Idade não informada')}</span><span class="sm mut">${esc([c?.nome, p.nivel].filter(Boolean).join(' · '))}</span></div></div></div>
  ${tabs('pac',[['res','Resumo'],['evo','Evolução'],['ses','Sessões'],['ana','Anamnese']])}
  <div class="pad stack" style="padding-top:14px">${body}</div>
  ${t==='res'||t==='evo'?`<div class="cta pad"><button type="button" class="btn" data-act="planfor" data-id="${p.id}">Planejar sessão ${I.arrow}</button></div>`:''}`;
}

function vBrincadeiras(){
  const f = S.bf || 'todas'; const tipos = ['todas', ...new Set(Object.values(PLAY).map(p=>p.tipo))];
  const keys = Object.keys(PLAY).filter(k=>f==='todas'||PLAY[k].tipo===f);
  return `${hdr('Brincadeiras para imprimir','#')}
  <div class="pad stack"><p class="mut">Jogos, cartas e tabuleiros prontos para usar nas atividades. Toque para ver e baixar.</p>
    <div class="row" role="group" aria-label="Filtrar por tipo">${tipos.map(t=>`<button type="button" class="tagp" data-bf="${t}" style="cursor:pointer;${t===f?'background:var(--p);color:#fff;border-color:var(--p)':'background:#fff'}">${t==='todas'?'Todas':t}</button>`).join('')}</div>
    ${keys.map(k=>{ const ms = methodsOfPlay(k).map(id=>M[id].sigla); return `<button type="button" class="li" data-play="${k}"><span class="mic" style="background:#FFF1DE;width:48px;height:48px">${I.print}</span><span class="tx"><b>${esc(PLAY[k].t)}</b><span>${esc(PLAY[k].tipo)}${ms.length?' · '+esc(ms.slice(0,4).join(', '))+(ms.length>4?'…':''):''}</span></span>${I.chev}</button>`; }).join('')}
  </div>`;
}

/* ---------- Modais ---------- */
function openPane(html, side=false){ closePane(); const d=document.createElement('div'); d.className='ov'+(side?' side':''); d.id='ov'; d.innerHTML=`<div class="pane" role="dialog" aria-modal="true">${html}</div>`; document.body.appendChild(d); d.addEventListener('click',e=>{ if(e.target===d) closePane(); }); const f=d.querySelector('button,a,input'); if(f) f.focus(); }
function closePane(){ const d=$('#ov'); if(d) d.remove(); if(S.demoT){ clearInterval(S.demoT); S.demoT=null; } }
function toast(t){ const o=$('.toast'); if(o) o.remove(); const d=document.createElement('div'); d.className='toast'; d.setAttribute('role','status'); d.textContent=t; document.body.appendChild(d); setTimeout(()=>d.remove(),2600); }

function pageHTML(k){ return `<div class="page"><h2>${PLAY[k].t}</h2><div class="pg-sub">FonoTrilha · brincadeira para imprimir · ${PLAY[k].tipo}</div>${PLAY[k].h()}<div class="pg-foot">Material de apoio para uso clínico. Adapte ao paciente.</div></div>`; }
function openPlay(k){
  openPane(`<div class="pane-h"><h3>${esc(PLAY[k].t)}</h3><button class="ib" type="button" data-act="close" aria-label="Fechar">${I.close}</button></div><div class="sheet-scroll">${pageHTML(k)}</div><p class="sm mut pad" id="dlmsg" hidden style="padding-top:8px"></p><div class="pane-f"><button type="button" class="btn" data-dl="${k}">Baixar para imprimir</button></div>`);
}
async function downloadPlay(k){
  const msg=$('#dlmsg'); msg.hidden=false; msg.textContent='Preparando o arquivo…';
  const css=[...document.querySelectorAll('style')].map(s=>s.textContent).join('\n');
  const doc=`<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${PLAY[k].t}</title><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;700;800&display=swap"><style>${css}
@page{size:A4;margin:12mm} body{background:#fff;margin:0} .page{max-width:none;padding:0;border-radius:0} .pg-grid.c4{grid-template-columns:repeat(4,1fr)!important}.pg-grid.c6{grid-template-columns:repeat(6,1fr)!important}.pg-owl,.pg-sfa{grid-template-columns:repeat(3,1fr)!important}.pg-card,.pg-domino .d{break-inside:avoid}</style></head><body>${pageHTML(k)}<script>window.addEventListener('load',function(){setTimeout(function(){window.print()},500)})<\/script></body></html>`;
  if(NeonStore){ const w = window.open(URL.createObjectURL(new Blob([doc],{type:'text/html'})), '_blank'); msg.textContent = w ? 'A brincadeira abriu em outra aba com a janela de impressão (A4 ou “Salvar como PDF”).' : 'Permita pop-ups deste site para abrir a impressão.'; return; }
  try{ const dl = window.claude&&window.claude.use ? await window.claude.use('downloads') : null;
    if(!dl){ msg.textContent='O download não está disponível nesta visualização. Abra o app no claude.ai pelo navegador.'; return; }
    await dl.save({filename:'brincadeira-'+k.replace(/_/g,'-')+'.html', data:doc}); msg.textContent='Arquivo salvo. Abra no navegador: a janela de impressão aparece sozinha (A4 ou “Salvar como PDF”).';
  }catch(e){ msg.textContent = e&&e.code==='declined' ? 'Download cancelado.' : 'Não foi possível baixar agora. Tente de novo.'; }
}
function openDemo(){
  const r=S.run; const a=M[r.mid].sess[r.blk].at[r.i]; const ak=actKey(r.mid,r.blk,r.i); let k=0;
  const paint=()=>{ const t=$('#demotxt'); if(!t) return; const ill=$('#demoill'); if(ill) ill.innerHTML=cena(ak, a.passos[k]); t.innerHTML=`<span class="num" style="display:inline-grid;margin-right:8px">${k+1}</span>${esc(a.passos[k])}`; document.querySelectorAll('.demo-steps i').forEach((el,j)=>el.classList.toggle('on',j<=k)); };
  openPane(`<div class="pane-h"><h3>Demonstração · ${esc(a.t)}</h3><button class="ib" type="button" data-act="close" aria-label="Fechar">${I.close}</button></div><div class="pane-b"><div class="ill demo-ill" id="demoill"></div><div class="demo-steps">${a.passos.map(()=>'<i></i>').join('')}</div><p class="demo-txt" id="demotxt" aria-live="polite"></p><div class="grid3"><button type="button" class="btn ghost sm" id="dprev">Anterior</button><button type="button" class="btn ghost sm" id="dpause">Pausar</button><button type="button" class="btn sm" id="dnext">Próximo</button></div><p class="sm mut">A demonstração avança sozinha a cada passo. Os vídeos gravados das atividades entram aqui.</p></div>`);
  paint();
  const go=d=>{ k=(k+d+a.passos.length)%a.passos.length; paint(); };
  S.demoT=setInterval(()=>go(1),4200);
  $('#dprev').onclick=()=>go(-1); $('#dnext').onclick=()=>go(1);
  $('#dpause').onclick=e=>{ if(S.demoT){clearInterval(S.demoT);S.demoT=null;e.target.textContent='Continuar';} else {S.demoT=setInterval(()=>go(1),4200);e.target.textContent='Pausar';} };
}
function openPicker(mid, blk){
  const list=[...S.patients].sort((a,b)=>(a.nome||'').localeCompare(b.nome||''));
  openPane(`<div class="pane-h"><h3>Para qual paciente?</h3><button class="ib" type="button" data-act="close" aria-label="Fechar">${I.close}</button></div><div class="pane-b">${list.map(p=>`<button type="button" class="li" data-startp="${p.id}" data-mid="${mid}" data-blk="${blk}">${avatar(p,42)}<span class="tx"><b>${esc(p.nome)}</b><span>${esc([age(p.nasc), condById(p.quadro)?.nome].filter(Boolean).join(' · '))}</span></span>${I.chev}</button>`).join('')||'<p class="mut">Nenhum paciente cadastrado ainda.</p>'}<a class="btn out sm" href="#novo" data-act="close">${I.plus} Cadastrar novo paciente</a><button type="button" class="btn ghost sm" data-startp="" data-mid="${mid}" data-blk="${blk}">Treinar sem paciente (não salva no prontuário)</button></div>`);
}
function openMenu(){
  openPane(`<div class="pane-h"><h3>FonoTrilha</h3><button class="ib" type="button" data-act="close" aria-label="Fechar">${I.close}</button></div><div class="pane-b nav">
    <a href="#" data-act="close">${I.layers.replace('28','22').replace('28','22')} Início</a><a href="#pacientes" data-act="close">${I.user.replace(/28/g,'22')} Meus pacientes</a><a href="#quadros" data-act="close">${I.cal.replace(/28/g,'22')} Quadros e métodos</a><a href="#brincadeiras" data-act="close">${I.play.replace(/28/g,'22')} Brincadeiras para imprimir</a><a href="#capacitacao" data-act="close">${I.layers.replace(/28/g,'22')} Capacitação</a><button type="button" data-act="perfil">${I.user.replace(/28/g,'22')} Seu nome</button>
    <p class="sm mut" style="padding:12px">Guia de apoio ao planejamento clínico com base na literatura citada em cada método. Não substitui a avaliação individual nem as formações oficiais dos métodos registrados (PECS, Denver, JASPER, NDP3, Hanen).</p>
    <p class="sm mut" style="padding:0 12px">${S.mode==='nuvem'||S.mode==='neon'?'Seus dados ficam salvos na sua conta, visíveis só para você.':'Seus dados estão salvos neste navegador.'}</p>${S.mode==='neon'&&S.uid?`<p class="sm mut" style="padding:8px 12px 0">Conectada como <b>${esc((NeonStore.user&&NeonStore.user.email)||'')}</b></p><button type="button" class="btn ghost sm" style="margin:8px 12px" data-act="logout">Sair da conta</button>`:''}</div>`, true);
}
function openPerfil(){
  openPane(`<div class="pane-h"><h3>Seu nome</h3><button class="ib" type="button" data-act="close" aria-label="Fechar">${I.close}</button></div><form class="pane-b" id="nform"><label class="f">Como quer ser chamada(o)?<input type="text" id="n-nome" value="${esc(S.profile.nome)}" placeholder="Ex.: Dra. Mariana"></label><button type="submit" class="btn">Salvar</button></form>`);
}

/* ---------- Busca ---------- */
function search(q){
  const r=$('#results'); if(!r) return; const n=s=>String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,''); const nq=n(q.trim());
  if(nq.length<2){ r.hidden=true; return; }
  const hits=[];
  S.patients.forEach(p=>{ if(n(p.nome).includes(nq)) hits.push(`<button type="button" data-go="#p-${p.id}"><b>${esc(p.nome)}</b> <small>· paciente</small></button>`); });
  CONDS.forEach(c=>{ if(n(c.nome+' '+c.longo).includes(nq)) hits.push(`<button type="button" data-go="#q-${c.id}"><b>${c.nome}</b> <small>· quadro</small></button>`); });
  Object.entries(M).forEach(([id,m])=>{ if(n([m.nome,m.sigla].join(' ')).includes(nq)) hits.push(`<button type="button" data-go="#m-${id}"><b>${esc(m.sigla)}</b> — ${esc(m.nome)} <small>· método</small></button>`);
    m.sess.forEach((s,i)=>s.at.forEach(a=>{ if(n(a.t).includes(nq)) hits.push(`<button type="button" data-go="#s-${id}-${i}">${esc(a.t)} <small>· atividade de ${esc(m.sigla)}</small></button>`); })); });
  Object.entries(PLAY).forEach(([k,p])=>{ if(n(p.t).includes(nq)) hits.push(`<button type="button" data-play="${k}">${esc(p.t)} <small>· brincadeira</small></button>`); });
  r.innerHTML = hits.length ? hits.slice(0,14).join('') : '<p class="sm mut" style="padding:10px">Nada encontrado. Tente “PECS”, “afasia” ou “rima”.</p>'; r.hidden=false;
}

/* ---------- Roteamento ---------- */
let lastHash = null;
function render(){
  const h = location.hash.replace('#','');
  const app = $('#main'); let html; const focusId = document.activeElement && document.activeElement.id;
  if(S.needLogin) html=vLogin();
  else if(!h) html=vHome();
  else if(h==='quadros') html=vQuadros();
  else if(h.startsWith('q-') && condById(h.slice(2))) html=vCond(condById(h.slice(2)));
  else if(h.startsWith('m-') && M[h.slice(2)]) html=vMethod(h.slice(2));
  else if(/^s-[a-z]+-\d+$/.test(h)){ const [,mid,b]=h.split('-'); html = M[mid]&&M[mid].sess[+b] ? vSessao(mid,+b) : vHome(); }
  else if(h==='atv') html=vAtividade();
  else if(h==='reg') html=vRegistro();
  else if(h==='res') html=vResultado();
  else if(h.startsWith('pb-') && M[h.slice(3)]) html=vPlanoB(h.slice(3));
  else if(h==='pacientes') html=vPacientes();
  else if(h==='novo') html=vForm(null);
  else if(h.startsWith('ed-')) html=vForm(h.slice(3));
  else if(h.startsWith('p-')) html=vPaciente(h.slice(2));
  else if(h==='brincadeiras') html=vBrincadeiras();
  else if(h==='capacitacao') html=vCapList();
  else if(h.startsWith('cap-') && M[h.slice(4)]) html=vCap(h.slice(4));
  else if(h.startsWith('quiz-') && M[h.slice(5)]) html=vQuiz(h.slice(5));
  else html=vHome();
  // não redesenhar enquanto o usuário digita num formulário
  if(lastHash===h && document.activeElement && ['TEXTAREA','INPUT','SELECT'].includes(document.activeElement.tagName) && document.activeElement.type!=='checkbox' && document.activeElement.id!=='q') return;
  app.innerHTML = html;
  if(lastHash!==h) window.scrollTo(0,0);
  lastHash = h;
  if(focusId==='pq'){ const el=$('#pq'); if(el){ el.focus(); el.setSelectionRange(el.value.length,el.value.length); } }
}

function saveRun(){ ls.set('run', S.run); }
function startRun(pid, mid, blk){
  S.run = { pid: pid||null, mid, blk:+blk, i:0, start:new Date().toISOString(), acts: M[mid].sess[+blk].at.map((a,j)=>({ t:a.t, y:0, n:0, hist:[], apoio:apoiosOf(mid, actKey(mid,+blk,j))[0], obs:'', media:[] })) };
  if(pid){ S.ctxPid=pid; ls.set('ctxPid',pid); }
  saveRun(); closePane(); location.hash='atv';
}
async function exemplo(){
  const id = await Store.savePatient({ nome:'Lucas Exemplo', nasc:'2021-08-14', quadro:'tea', nivel:'Nível 1 de suporte (exemplo)', metodo:'jasper', resp:'Responsável exemplo', tel:'', freq:'2× por semana', proxData: todayISO(), proxHora:'14:00', exemplo:true, anamnese:{ queixa:'Paciente fictício para conhecer o app.', interesses:'Carrinhos, bolhas de sabão, música' } });
  const base = M.jasper.sess;
  const mk = (blk, d, ys, ns) => Store.saveSession({ pid:id, mid:'jasper', blk, data:d, pct: Math.round(ys.reduce((a,b)=>a+b,0)/(ys.reduce((a,b)=>a+b,0)+ns.reduce((a,b)=>a+b,0))*100), acts: base[blk].at.map((a,j)=>({ t:a.t, y:ys[j]||0, n:ns[j]||0, apoio:'Gesto', obs:'', media:[] })), exemplo:true });
  const day = n => { const d=new Date(); d.setDate(d.getDate()-n); return d.toISOString(); };
  await mk(0, day(14), [6], [4]); await mk(0, day(10), [8], [2]); await mk(1, day(5), [7], [3]);
  toast('Paciente de exemplo criado'); location.hash='p-'+id;
}

/* ---------- Eventos ---------- */
document.addEventListener('click', async e=>{
  const t = e.target.closest('[data-act],[data-go],[data-tab],[data-play],[data-dl],[data-prep],[data-apoio],[data-startp],[data-pbsel],[data-bf],[data-ctx],[data-pb],[data-fam],[data-capf],[data-capopen],[data-caplido],[data-qans],[data-dur]');
  if(!t){ const r=$('#results'); if(r && !e.target.closest('.search')) r.hidden=true; return; }
  if(t.dataset.ctx!==undefined){ S.ctxPid = t.dataset.ctx || null; ls.set('ctxPid', S.ctxPid); }
  if(t.dataset.pb!==undefined){ S.pbPct = t.dataset.pb==='' ? null : +t.dataset.pb; S.pbSel=0; }
  if(t.dataset.act==='outra'){ if(S.run){ S.run.outra=!S.run.outra; saveRun(); render(); } return; }
  if(t.dataset.dur){ ls.set('dur', +t.dataset.dur); render(); return; }
  if(t.dataset.go){ e.preventDefault(); location.hash=t.dataset.go; return; }
  if(t.dataset.tab){ const [k,v]=t.dataset.tab.split(':'); S.tab[k]=v; render(); return; }
  if(t.dataset.play){ e.preventDefault(); openPlay(t.dataset.play); return; }
  if(t.dataset.dl){ downloadPlay(t.dataset.dl); return; }
  if(t.dataset.bf){ S.bf=t.dataset.bf; render(); return; }
  if(t.dataset.fam){ const s=S.sessions.find(x=>x.id===t.dataset.fam); if(s) openFam(s); return; }
  if(t.dataset.capf){ S.capf=t.dataset.capf; render(); return; }
  if(t.dataset.capopen!==undefined){ const i=+t.dataset.capopen; const cur = S.capOpen ?? -2; S.capOpen = (cur===i) ? -1 : i; render(); t.scrollIntoView&&$('[data-capopen="'+i+'"]')?.scrollIntoView({block:'start'}); return; }
  if(t.dataset.caplido!==undefined){ const id=t.dataset.id, i=+t.dataset.caplido; const cap={...(S.profile.cap||{})}; const c={...capOf(id)}; c.lidos=[...new Set([...(c.lidos||[]),i])]; cap[id]=c; S.capOpen = [0,1,2,3].find(k=>!c.lidos.includes(k)) ?? -1; await Store.saveProfile({cap}); render(); const nx=$('[data-capopen="'+S.capOpen+'"]'); if(nx) nx.scrollIntoView({block:'start'}); return; }
  if(t.dataset.qans!==undefined){ if(S.quiz.ans[S.quiz.i]!=null) return; S.quiz.ans[S.quiz.i]=+t.dataset.qans; render(); return; }
  if(t.dataset.pbsel!==undefined){ S.pbSel=+t.dataset.pbsel; S.tab['pb-'+location.hash.slice(4)]='faz'; render(); return; }
  if(t.dataset.apoio){ S.run.acts[S.run.i].apoio=t.dataset.apoio; saveRun(); render(); return; }
  if(t.dataset.startp!==undefined){ startRun(t.dataset.startp, t.dataset.mid, t.dataset.blk); return; }
  const a = t.dataset.act; if(!a) return;
  if(a==='close'){ closePane(); return; }
  if(a==='menu') return openMenu();
  if(a==='perfil') return openPerfil();
  if(a==='demo') return openDemo();
  if(a==='clearctx'){ S.ctxPid=null; ls.set('ctxPid',null); render(); return; }
  if(a==='fav'){ const id=t.dataset.id; const f=new Set(S.profile.favs||[]); f.has(id)?f.delete(id):f.add(id); await Store.saveProfile({favs:[...f]}); render(); return; }
  if(a==='signin'||a==='signup'){ return doLogin(a); }
  if(a==='lgmode'){ S.loginMode = S.loginMode==='cad'?'':'cad'; render(); return; }
  if(a==='logout'){ closePane(); return NeonStore && NeonStore.signOut(); }
  if(a==='troca'){ return openTroca(t.dataset.id, t.dataset.mid); }
  if(a==='trocaok'){ return confirmaTroca(t.dataset.id); }
  if(a==='manualok'){ const p=patient(S.ctxPid); if(!p) return; const k=t.dataset.mid+':'+t.dataset.blk; const et={...(p.etapas||{})}; if(et[k]) delete et[k]; else et[k]=todayISO(); await Store.savePatient({...p, etapas:et}); toast(et[k]?'Etapa concluída por decisão clínica':'Conclusão manual desfeita'); render(); return; }
  if(a==='start'){ const p=patient(S.ctxPid); if(p) return startRun(p.id, t.dataset.mid, t.dataset.blk); return openPicker(t.dataset.mid, t.dataset.blk); }
  if(a==='planfor'){ const p=patient(t.dataset.id); S.ctxPid=p.id; ls.set('ctxPid',p.id); if(p.metodo&&M[p.metodo]){ location.hash='s-'+p.metodo+'-'+blkStatus(p.id,p.metodo).cur; } else location.hash='q-'+p.quadro; return; }
  if(a==='cancelrun'){ openPane(`<div class="pane-h"><h3>Sair da sessão?</h3><button class="ib" type="button" data-act="close" aria-label="Fechar">${I.close}</button></div><div class="pane-b"><p>Os registros desta sessão ainda não foram salvos no prontuário.</p></div><div class="pane-f"><button type="button" class="btn ghost" data-act="close">Continuar sessão</button><button type="button" class="btn" style="background:var(--bad)" data-act="discard">Descartar e sair</button></div>`); return; }
  if(a==='discard'){ const r=S.run; S.run=null; saveRun(); closePane(); location.hash = r ? 's-'+r.mid+'-'+r.blk : ''; return; }
  if(a==='hit'||a==='miss'){ const x=S.run.acts[S.run.i]; if(a==='hit'){x.y++;x.hist.push('y');} else {x.n++;x.hist.push('n');} saveRun(); if(navigator.vibrate) try{navigator.vibrate(15)}catch(_){}; render(); return; }
  if(a==='undo'){ const x=S.run.acts[S.run.i]; const h=x.hist.pop(); if(h==='y')x.y--; else if(h==='n')x.n--; saveRun(); render(); return; }
  if(a==='nextact'){ const o=$('#obs'); if(o) S.run.acts[S.run.i].obs=o.value; const last=S.run.i===M[S.run.mid].sess[S.run.blk].at.length-1; if(last){ saveRun(); location.hash='res'; } else { S.run.i++; saveRun(); location.hash='atv'; render(); } return; }
  if(a==='saverun'){
    const r=S.run; const c=fixRun(r); t.disabled=true;
    if(r.pid){ try{ await Store.saveSession({ pid:r.pid, mid:r.mid, blk:r.blk, data:new Date().toISOString(), inicio:r.start, pct:c.pct, ok:c.ok, outra:!!r.outra, acts:r.acts.map(({hist,...x})=>x) });
        const p=patient(r.pid); if(p && p.metodo!==r.mid) await Store.savePatient({...p, metodo:r.mid, trocas:[...(p.trocas||[]), {de:p.metodo||'', para:r.mid, blk:r.blk, motivo:'Troca automática: atendimento registrado com este método.', data:new Date().toISOString()}]});
        toast('Sessão salva no prontuário'); }catch(err){ t.disabled=false; toast('Não foi possível salvar. Verifique a conexão e tente de novo.'); return; } }
    else toast('Treino concluído');
    S.lastRes = r; S.run=null; saveRun(); location.hash = r.pid ? 'p-'+r.pid : ''; if(r.pid) S.tab.pac='res'; return; }
  if(a==='exemplo') return exemplo();
  if(a==='famrun'){ const r=S.run||S.lastRes; if(!r) return; const c=calcRun(r); openFam({pid:r.pid, mid:r.mid, blk:r.blk, pct:c.pct, data:new Date().toISOString(), acts:r.acts}); return; }
  if(a==='famcopy'){ const ta=$('#famtxt'); const msg=$('#fammsg'); try{ await navigator.clipboard.writeText(ta.value); msg.hidden=false; msg.textContent='Texto copiado. Cole no WhatsApp ou onde preferir.'; }catch(_){ ta.focus(); ta.select(); msg.hidden=false; msg.textContent='Texto selecionado: use Copiar do seu celular.'; } return; }
  if(a==='quizstart'||a==='quizagain'){ S.quiz={ id:t.dataset.id, seed:(Date.now()%100000)+1, i:0, ans:[] }; if(a==='quizagain'){ render(); window.scrollTo(0,0); } return; }
  if(a==='qnext'){ const Q=buildQuiz(t.dataset.id,S.quiz.seed); S.quiz.i++; if(S.quiz.i>=Q.length) await finishQuiz(t.dataset.id); render(); window.scrollTo(0,0); return; }
  if(a==='askdel'){ openPane(`<div class="pane-h"><h3>Excluir paciente?</h3><button class="ib" type="button" data-act="close" aria-label="Fechar">${I.close}</button></div><div class="pane-b"><p>O cadastro, a anamnese e todas as sessões deste paciente serão apagados. Essa ação não pode ser desfeita.</p></div><div class="pane-f"><button type="button" class="btn ghost" data-act="close">Cancelar</button><button type="button" class="btn" style="background:var(--bad)" data-act="dodel" data-id="${t.dataset.id}">Excluir</button></div>`); return; }
  if(a==='dodel'){ await Store.deletePatient(t.dataset.id); if(S.ctxPid===t.dataset.id){S.ctxPid=null;ls.set('ctxPid',null);} closePane(); toast('Paciente excluído'); location.hash='pacientes'; return; }
});
document.addEventListener('change', async e=>{
  const p=e.target.closest('[data-prep]');
  if(p){ const [k,j]=p.dataset.prep.split('|'); let v=ls.get(k,[]); v = p.checked ? [...new Set([...v,+j])] : v.filter(x=>x!==+j); ls.set(k,v); p.closest('label').classList.toggle('done',p.checked); const c=$('#prepc'); if(c) c.textContent=`${v.length} de ${document.querySelectorAll('[data-prep^="'+k+'|"]').length}`; return; }
  if(e.target.id==='f-quadro'){ const q=e.target.value; $('#f-metodo').innerHTML='<option value="">Definir depois</option>'+condById(q).metodos.map(mid=>`<option value="${mid}">${M[mid].sigla} — ${esc(M[mid].nome)}</option>`).join(''); return; }
  if(e.target.id==='media'){ const f=e.target.files[0]; if(!f) return; const msg=$('#mediamsg'); msg.hidden=false;
    if(!ASSETS){ msg.textContent= NeonStore ? 'Anexos de vídeo, áudio e foto chegam na próxima versão. Por enquanto, descreva nas observações.' : 'Os anexos ficam disponíveis no app publicado, com login. Por enquanto, descreva nas observações.'; return; }
    msg.textContent='Enviando '+f.name+'…';
    try{ const o=$('#obs'); if(o) S.run.acts[S.run.i].obs=o.value; const up=await ASSETS.upload(f); S.run.acts[S.run.i].media.push({id:up.id,url:up.url,name:f.name,type:f.type}); saveRun(); render(); toast('Anexo enviado'); }
    catch(err){ msg.textContent='Não foi possível enviar o arquivo (limite de 20 MB).'; } }
});
document.addEventListener('input', e=>{
  if(e.target.id==='q') search(e.target.value);
  if(e.target.id==='pq'){ S.pq=e.target.value; render(); }
  if(e.target.id==='famtxt'){ const w=$('#famwa'); if(w) w.href=w.href.split('?')[0]+'?text='+encodeURIComponent(e.target.value); }
  if(e.target.id==='obs' && S.run){ S.run.acts[S.run.i].obs=e.target.value; saveRun(); }
});
document.addEventListener('submit', async e=>{
  e.preventDefault();
  if(e.target.id==='pform'){
    const nome=$('#f-nome').value.trim(); const err=$('#ferr'); if(!nome){ err.hidden=false; err.textContent='Informe o nome do paciente.'; err.style.color='var(--bad)'; $('#f-nome').focus(); return; }
    const id = location.hash.startsWith('#ed-') ? location.hash.slice(4) : null; const old = id ? patient(id) : {};
    const p = {...old, id: id||undefined, nome, nasc:$('#f-nasc').value, freq:$('#f-freq').value.trim(), quadro:$('#f-quadro').value, nivel:$('#f-nivel').value.trim(), metodo:$('#f-metodo').value, resp:$('#f-resp').value.trim(), tel:$('#f-tel').value.trim(), proxData:$('#f-pdata').value, proxHora:$('#f-phora').value };
    try{ const nid = await Store.savePatient(p); toast(id?'Alterações salvas':'Paciente cadastrado'); location.hash='p-'+nid; }catch(_){ err.hidden=false; err.textContent='Não foi possível salvar. Tente de novo.'; }
    return;
  }
  if(e.target.id==='aform'){ const id=location.hash.slice(3); const p=patient(id); const an={}; ANAM.forEach(([k])=>an[k]=$('#a-'+k).value); an.atualizada=todayISO(); try{ await Store.savePatient({...p, anamnese:an}); toast('Anamnese salva'); }catch(_){ toast('Não foi possível salvar.'); } return; }
  if(e.target.id==='nform'){ await Store.saveProfile({nome:$('#n-nome').value.trim()}); closePane(); toast('Nome salvo'); render(); return; }
});
document.addEventListener('keydown', e=>{ if(e.key==='Escape') closePane(); });
window.addEventListener('hashchange', ()=>{ closePane(); if(location.hash.startsWith('#cap-')) S.capOpen=undefined; render(); });
render(); Store.init();
