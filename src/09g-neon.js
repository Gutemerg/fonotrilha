/* ===== Versão web: login (Neon Auth) e dados (Neon Data API) ===== */
const NeonStore = (window.NeonJS && window.FT_NEON_URL) ? (()=>{
  const client = window.NeonJS.createClient(window.FT_NEON_URL);
  const T = { p:'pacientes', s:'sessoes', f:'perfis' };
  const err = (r, msg) => { if(r && r.error){ console.error(r.error); throw new Error(msg || r.error.message); } return r; };
  const NS = {
    client, user:null,
    async init(){
      S.mode = 'neon';
      let ses = null;
      try{ const r = await client.auth.getSession(); ses = r && r.data && r.data.session ? r.data : null; }catch(e){ console.error(e); }
      if(!ses){ S.needLogin = true; S.ready = true; render(); return; }
      NS.user = ses.user; S.needLogin = false; S.uid = ses.user.id;
      try{ await NS.load(); }catch(e){ console.error(e); toast('Não foi possível carregar os dados. Verifique a internet.'); }
      S.ready = true; render();
    },
    async load(){
      const [p, s, f] = await Promise.all([
        client.from(T.p).select('id,dados'), client.from(T.s).select('id,dados'), client.from(T.f).select('dados')]);
      err(p); err(s); err(f);
      S.patients = (p.data||[]).map(r=>({...r.dados, id:r.id}));
      S.sessions = (s.data||[]).map(r=>({...r.dados, id:r.id}));
      S.profile = {nome:(NS.user&&NS.user.name)||'', ...((f.data||[])[0]?.dados||{})};
    },
    async signIn(email, password){ const r = await client.auth.signIn.email({email, password}); if(r.error) throw r.error; return NS.init(); },
    async signUp(nome, email, password){ const r = await client.auth.signUp.email({email, password, name:nome}); if(r.error) throw r.error; await NS.init(); if(S.uid && !S.profile.nome) await Store.saveProfile({nome}); },
    async signOut(){ try{ await client.auth.signOut(); }catch(e){} S.patients=[]; S.sessions=[]; S.profile={nome:''}; S.uid=null; S.needLogin=true; S.loginMode=''; location.hash=''; render(); },
    async savePatient(p){
      if(!p.id) p.id = uid('p'); const {id, ...dados} = p;
      err(await client.from(T.p).upsert({id, dados, atualizado_em:new Date().toISOString()}), 'Não foi possível salvar o paciente.');
      const i=S.patients.findIndex(x=>x.id===id); if(i>=0) S.patients[i]=p; else S.patients.push(p); render(); return id;
    },
    async deletePatient(id){
      err(await client.from(T.s).delete().eq('paciente_id', id)); err(await client.from(T.p).delete().eq('id', id));
      S.patients=S.patients.filter(p=>p.id!==id); S.sessions=S.sessions.filter(s=>s.pid!==id); render();
    },
    async saveSession(s){
      if(!s.id) s.id = uid('s'); const {id, ...dados} = s;
      err(await client.from(T.s).upsert({id, paciente_id: s.pid, dados}), 'Não foi possível salvar o atendimento.');
      const i=S.sessions.findIndex(x=>x.id===id); if(i>=0) S.sessions[i]=s; else S.sessions.push(s); render(); return id;
    },
    async saveProfile(p){
      S.profile = {...S.profile, ...p};
      err(await client.from(T.f).upsert({user_id:S.uid, dados:S.profile, atualizado_em:new Date().toISOString()}), 'Não foi possível salvar o perfil.');
      render();
    }
  };
  return NS;
})() : null;

function vLogin(){
  const cad = S.loginMode==='cad';
  return `<div class="pad stack" style="gap:18px;max-width:440px;margin:0 auto;padding-top:32px">
    <div class="stack" style="gap:6px;align-items:center;text-align:center">
      <span class="mic" style="background:var(--p);width:64px;height:64px"><svg viewBox="0 0 64 64">${(PIC.olhar||'').replace(/var\(--ink\)/g,'#fff').replace(/var\(--tint\)/g,'rgba(255,255,255,.25)')}</svg></span>
      <h1 style="font-size:26px">FonoTrilha</h1><p class="mut">Guia clínico e prontuário para fonoaudiólogos</p></div>
    <div class="card stack" style="gap:12px">
      <h3>${cad?'Criar conta':'Entrar'}</h3>
      ${cad?`<label class="f">Seu nome<input id="lg-nome" autocomplete="name" placeholder="Ex.: Ana Souza"></label>`:''}
      <label class="f">E-mail<input id="lg-email" type="email" autocomplete="email" inputmode="email" placeholder="voce@email.com"></label>
      <label class="f">Senha<input id="lg-senha" type="password" autocomplete="${cad?'new-password':'current-password'}" placeholder="${cad?'Mínimo de 8 caracteres':''}"></label>
      <p class="sm" id="lg-msg" hidden style="color:var(--bad);font-weight:700"></p>
      <button type="button" class="btn" data-act="${cad?'signup':'signin'}">${cad?'Criar conta':'Entrar'} ${I.arrow}</button>
      <button type="button" class="tlink" data-act="lgmode" style="align-self:center">${cad?'Já tenho conta · Entrar':'Não tenho conta · Criar conta'}</button>
    </div>
    <p class="sm mut" style="text-align:center">Os dados dos pacientes ficam na sua conta e só você vê.</p>
  </div>`;
}
async function doLogin(kind){
  const msg=$('#lg-msg'); const email=($('#lg-email').value||'').trim(), senha=$('#lg-senha').value||'', nome=(($('#lg-nome')||{}).value||'').trim();
  const show = t => { msg.hidden=false; msg.textContent=t; };
  if(!email || !senha) return show('Preencha e-mail e senha.');
  if(kind==='signup' && !nome) return show('Informe seu nome.');
  if(kind==='signup' && senha.length<8) return show('A senha precisa ter pelo menos 8 caracteres.');
  const b = document.querySelector('[data-act="'+kind+'"]'); if(b) b.disabled=true; show('Aguarde…'); msg.style.color='var(--mut)';
  try{ if(kind==='signin') await NeonStore.signIn(email, senha); else await NeonStore.signUp(nome, email, senha); toast(kind==='signin'?'Bem-vinda de volta!':'Conta criada'); }
  catch(e){ msg.style.color='var(--bad)'; const m=(e&&e.message||'').toLowerCase();
    show(/invalid|incorrect|credential|password/.test(m) && kind==='signin' ? 'E-mail ou senha incorretos.' : /exist|already/.test(m) ? 'Já existe uma conta com este e-mail. Entre com ela.' : 'Não foi possível concluir. '+(e&&e.message||'Tente de novo.'));
    if(b) b.disabled=false; }
}
document.addEventListener('keydown', e=>{ if(e.key==='Enter' && S.needLogin && e.target.closest && e.target.closest('#lg-senha,#lg-email,#lg-nome')){ e.preventDefault(); doLogin(S.loginMode==='cad'?'signup':'signin'); } });
