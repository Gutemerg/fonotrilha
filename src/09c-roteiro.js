/* ===== Roteiro do atendimento (divisão do tempo) e agrupamento por dia ===== */
const DURS = [30,40,45,50,60];
function roteiro(id, i, dur){
  const m=M[id], s=m.sess[i];
  const ac = dur<=30?3:5, fe = dur<=30?4:5;
  const rev = i>0 ? `Retome “${m.sess[i-1].at[m.sess[i-1].at.length-1].t}” (etapa ${i}) por poucos minutos, para manter o que já foi aprendido.` : 'Brincadeira livre com os itens preferidos do paciente: aquece o vínculo e mostra como ele chegou hoje.';
  const aq = dur<=30?3:5;
  const core = s.at.reduce((a,x)=>a+x.min,0);
  const livre = dur - ac - aq - core - fe;
  const L = [{min:ac,t:'Acolhida e combinado',d:'Cumprimente, veja como o paciente chegou e mostre o que vai acontecer (quadro de rotina, se ele usa).',k:'a'},
    {min:aq,t:'Aquecimento e revisão',d:rev,k:'a'},
    ...s.at.map(a=>({min:a.min,t:a.t,d:'Atividade principal da etapa. Registre acertos e erros durante a atividade.',k:'p'}))];
  if(livre>0) L.push({min:livre,t:'Generalização',d:'Repita o mesmo alvo em outra brincadeira, com outros materiais ou com o responsável na sala. É aqui que o aprendizado sai do “jogo da sessão”.',k:'g'});
  L.push({min:fe,t:'Fechamento com a família',d:'Conte o que foi feito e combine a tarefa de casa (botão “Orientação para a família” no resultado).',k:'f'});
  return {L, livre, core};
}
function roteiroHTML(id, i){
  return `<div class="alert i"><span class="sm"><b>Uma etapa vale para vários atendimentos</b> (${esc(blkLabel(M[id].sess[i]))}). Repita as mesmas atividades a cada atendimento até atingir o critério: ${esc(regraOf(id).txt)} Só depois passe para a próxima etapa; não faça várias etapas no mesmo dia.</span></div>`;
}
/* agrupa registros do mesmo dia em um atendimento */
function porDia(ss){
  const g = {};
  ss.forEach(s=>{ const t=new Date(s.data); const d=isNaN(t)?String(s.data||'').slice(0,10):`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,'0')}-${String(t.getDate()).padStart(2,'0')}`; (g[d]=g[d]||[]).push(s); });
  return Object.keys(g).sort().map(d=>{ const l=g[d];
    const pct = Math.round(l.reduce((a,s)=>a+(s.pct||0),0)/l.length);
    return {data:l[0].data, dia:d, pct, regs:l, ok:l.every(s=>s.ok!==undefined?s.ok:s.pct>=80), outra:l.some(s=>s.outra)}; });
}
