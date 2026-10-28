/* ===== Depois da trilha: próximo passo por método ===== */
const NEXT = {
 esdm:{to:['emt','pragmatica'],p:'Com pedidos, imitação e combinações de palavras firmes, o foco passa a ser ampliar frases (EMT) e, depois, o uso social da linguagem (pragmática).'},
 jasper:{to:['emt','pragmatica'],p:'Com engajamento e atenção compartilhada estabelecidos, a criança está pronta para ampliar a linguagem nas rotinas (EMT) e depois treinar conversa e regras sociais.'},
 pecs:{to:['caa','emt'],p:'Com frases montadas de forma independente, amplie para um sistema de CAA robusto (mais vocabulário e funções) ou, se a fala surgiu, para o EMT.'},
 caa:{to:['emt','pragmatica'],p:'Com combinações de símbolos, trabalhe o tamanho e a variedade das mensagens (EMT) e o uso social, mantendo a CAA disponível.'},
 hanen:{to:['emt','esdm'],p:'Com a família autônoma nas estratégias, a criança pode seguir com intervenção direta de linguagem (EMT) ou um programa mais intensivo, conforme o perfil.'},
 emt:{to:['pragmatica','narrativa'],p:'Com frases maiores e variadas, os próximos alvos costumam ser conversa e uso social (pragmática) e organização do discurso (narrativa).'},
 pragmatica:{to:['narrativa','fe'],p:'Com as habilidades de conversa generalizadas, avance para discurso mais longo (narrativa) e planejamento da fala (funções executivas).'},
 ta:{to:['cf','fe'],p:'Com o processamento auditivo melhor, aplique a base à leitura e escrita (consciência fonológica) e à atenção e organização (funções executivas).'},
 cf:{to:['narrativa','vocab'],p:'Com a consciência fonológica adequada, o foco vai para a compreensão e a produção de textos (narrativa) e o vocabulário.'},
 narrativa:{to:['fe','vocab'],p:'Com narrativas completas, trabalhe o planejamento do discurso (funções executivas) e a precisão do vocabulário.'},
 fe:{to:['narrativa','pragmatica'],p:'Com estratégias de organização autônomas, use-as em tarefas de linguagem mais complexas (narrativa e conversa).'},
 mo:{to:['dttc','sinaiscaa'],p:'Com funções orais adequadas, o foco passa para a precisão da fala (DTTC) ou para a comunicação apoiada por sinais, conforme o nível de fala.'},
 sinaiscaa:{to:['emt','leitura'],p:'Com combinação de sinais e palavras, amplie as frases faladas (EMT) e comece a leitura de palavras como apoio à fala.'},
 leitura:{to:['cf','emt'],p:'Com o vocabulário visual funcional, siga para a consciência fonológica (alfabetização) e use as palavras lidas para ampliar frases.'},
 dttc:{to:['rest','ndp'],p:'Com palavras e frases inteligíveis, avance para palavras mais longas e prosódia (ReST) ou estruturas mais variadas (Nuffield).'},
 rest:{to:['ndp','narrativa'],p:'Com tonicidade e transições adequadas, consolide a fala na conversa e no discurso.'},
 ndp:{to:['rest','narrativa'],p:'Com frases inteligíveis, trabalhe palavras longas e prosódia (ReST) e o discurso (narrativa).'},
 mit:{to:['script','ciat'],p:'Com frases funcionais faladas, amplie para situações reais com roteiros (script training) ou prática intensiva de pedidos (CIAT).'},
 sfa:{to:['vnest','script'],p:'Com a nomeação funcional, avance para a construção de frases (VNeST) e o uso em situações reais (scripts).'},
 vnest:{to:['script','ciat'],p:'Com frases mais completas, leve-as para a conversa e para situações do dia a dia.'},
 ciat:{to:['script','sfa'],p:'Depois do bloco intensivo, mantenha os ganhos com roteiros para situações reais e trate a anomia residual com SFA.'},
 script:{to:['ciat','sfa'],p:'Com os roteiros automatizados, amplie a flexibilidade da fala (CIAT) ou trate a dificuldade de nomeação restante (SFA).'},
 recast:{to:['narrativa','vocab'],p:'Com o alvo gramatical adquirido, escolha o próximo alvo ou avance para o discurso (narrativa) e o vocabulário.'},
 vocab:{to:['narrativa','cf'],p:'Com o vocabulário ampliado, use-o no discurso (narrativa) e na leitura e escrita.'},
 dupla:{to:['fe','pragmatica'],p:'Com a dificuldade remediada ou compensada, apoie a organização (funções executivas) e a participação social conforme o perfil.'},
};
function depoisHTML(id, p){
  const m=M[id]; const k=`alta:${p.id}:${id}`; const ok=ls.get(k,[]); const nx=(NEXT[id]||{to:[]});
  const opts = nx.to.filter(x=>M[x]);
  return `<div class="card stack" style="gap:14px;border-color:var(--ok)">
    <div class="row" style="gap:10px;flex-wrap:nowrap"><span class="dot ok" style="width:34px;height:34px">${I.check}</span><span style="display:flex;flex-direction:column"><b style="font-size:16px">Trilha concluída. E agora?</b><span class="sm mut">Siga os 4 passos abaixo antes de decidir.</span></span></div>
    <div class="stack" style="gap:6px"><span class="lbl" style="color:var(--p)">1 · Reavaliar</span><p class="sm">Repita a linha de base do início e compare com os resultados de antes:</p><div class="steps">${m.inicio.map(x=>`<div>${I.ok}<span>${x}</span></div>`).join('')}</div></div>
    <div class="stack" style="gap:6px"><span class="lbl" style="color:var(--p)">2 · Conferir os critérios de alta</span>${m.alta.map((x,j)=>`<label class="chk ${ok.includes(j)?'done':''}"><input type="checkbox" data-prep="${k}|${j}" ${ok.includes(j)?'checked':''}><span>${x}</span></label>`).join('')}</div>
    <div class="stack" style="gap:6px"><span class="lbl" style="color:var(--p)">3 · Decidir o caminho</span>
      <div class="card stack" style="gap:4px;padding:12px"><b class="sm">Atingiu todos os critérios de alta</b><span class="sm mut">Alta deste método e passagem para a manutenção (passo 4). Se ainda houver outras queixas, siga para o próximo método.</span></div>
      <div class="card stack" style="gap:4px;padding:12px"><b class="sm">Atingiu só parte dos critérios</b><span class="sm mut">Refaça a trilha com alvos novos e mais complexos. ${esc(m.avancar)}</span></div>
      <div class="card stack" style="gap:4px;padding:12px"><b class="sm">Próximo método indicado</b><span class="sm mut">${esc(nx.p||'')}</span>
        <div class="row" style="gap:8px;margin-top:6px">${opts.map(x=>`<a class="btn out sm" style="flex:1" href="#m-${x}">${esc(M[x].sigla)}</a>`).join('')}</div></div></div>
    <div class="stack" style="gap:6px"><span class="lbl" style="color:var(--p)">4 · Manter o que foi conquistado</span><div class="steps">
      <div>${I.ok}<span>Reduza a frequência aos poucos (ex.: semanal → quinzenal → mensal).</span></div>
      <div>${I.ok}<span>Faça sondagens sem apoio em 1 e 3 meses. Se o desempenho cair abaixo de 80%, volte à etapa correspondente.</span></div>
      <div>${I.ok}<span>Mantenha a família e a escola usando as estratégias na rotina.</span></div></div></div>
  </div>`;
}
