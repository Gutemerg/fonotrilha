/* ===== Medida, meta e apoio por atividade, de acordo com cada método =====
   tipo: pct  = % de acerto nas tentativas (ou nos intervalos)
         cont = contagem de ocorrências até a meta (sem "erro")
         seq  = acertos seguidos
         sonda= comparação com a linha de base (1º registro) — meta: ganho de pontos
         base = contagem comparada à linha de base (meta = multiplicador da linha de base)
   aceita: maior índice da lista de apoios em que o acerto ainda vale para o critério (0 = só sem ajuda)
   Escala de desempenho: 80 = meta da atividade atingida (assim a meta de 80% de acerto continua idêntica). */
const MED = {
 'esdm:0:0':{meta:60,min:5,nota:'3 de 5 pausas.'},
 'esdm:0:1':{tipo:'cont',meta:2,aceita:2,c:'ações diferentes imitadas'},
 'esdm:1:0':{meta:80},
 'esdm:1:1':{meta:80,min:5},
 'esdm:2:0':{tipo:'cont',meta:5,c:'palavras diferentes ditas espontaneamente',nota:'Conte cada palavra diferente uma única vez.'},
 'esdm:2:1':{tipo:'seq',meta:3,c:'aplicações corretas seguidas pelo responsável'},
 'esdm:3:0':{tipo:'cont',meta:10,c:'combinações de 2 palavras',janela:'30 min'},
 'jasper:0:0':{meta:51,c:'intervalos de 1 min',nota:'Mais da metade dos minutos em engajamento conjunto.'},
 'jasper:1:0':{tipo:'cont',meta:1,c:'rotinas de 4+ passos mantidas por 5 min'},
 'jasper:2:0':{tipo:'cont',meta:2,c:'iniciativas espontâneas de atenção compartilhada',janela:'10 min'},
 'caa:0:0':{meta:51,nota:'Olhar para a prancha na maioria das modelagens.'},
 'caa:1:0':{tipo:'cont',meta:3,c:'palavras diferentes usadas sozinha'},
 'caa:2:0':{tipo:'cont',meta:10,c:'combinações de 2+ símbolos'},
 'hanen:0:0':{tipo:'seq',meta:3,c:'esperas de 5 s seguidas do responsável'},
 'hanen:1:0':{meta:51,nota:'Mais falas responsivas (imitar, interpretar, comentar) do que perguntas.'},
 'hanen:2:0':{tipo:'cont',meta:3,c:'lacunas completadas'},
 'emt:0:0':{tipo:'base',mult:2,c:'iniciativas de comunicação',nota:'O 1º registro vira a linha de base; a meta é o dobro dela.'},
 'emt:1:0':{meta:70},
 'pragmatica:0:0':{meta:80,min:5},
 'pragmatica:1:0':{tipo:'cont',meta:5,c:'turnos no tema do outro',nota:'Inclua pelo menos 1 pergunta ao outro.'},
 'cf:1:0':{meta:70,nota:'Meta de 80% para segmentar e 70% para omitir sílaba. O app usa 70%; registre a segmentação nas observações.'},
 'cf:2:0':{meta:70,nota:'Meta de 80% para síntese e 70% para troca de fonemas. O app usa 70%; registre a síntese nas observações.'},
 'narrativa:0:0':{meta:83,min:6,nota:'5 das 6 partes.'},
 'narrativa:1:0':{tipo:'cont',meta:5,c:'partes da história no reconto',nota:'Também são esperados 3 conectivos diferentes; anote nas observações.'},
 'narrativa:2:0':{tipo:'cont',meta:5,c:'partes na história pessoal (sem o mapa)'},
 'fe:0:0':{tipo:'cont',meta:2,c:'tarefas com os 4 passos falados sozinho'},
 'mo:1:0':{tipo:'seq',meta:4,c:'intervalos de 30 s seguidos com lábios fechados',nota:'4 intervalos seguidos = 2 minutos.'},
 'sinaiscaa:0:0':{tipo:'cont',meta:3,c:'sinais diferentes usados sozinha'},
 'sinaiscaa:1:0':{tipo:'cont',meta:5,c:'combinações de 2 sinais ou sinal + palavra'},
 'leitura:0:0':{meta:100,min:4,nota:'4 de 4 palavras pareadas.'},
 'leitura:1:0':{meta:80,nota:'Seleção: 80%. Nomeação: 50% (anote nas observações).'},
 'dttc:0:0':{aceita:4},
 'dttc:0:1':{aceita:4,nota:'Vale o acerto com gesto, sem toque.'},
 'dttc:1:0':{aceita:1},
 'dttc:2:0':{aceita:0},
 'rest:0:0':{tipo:'seq',meta:5,aceita:2,c:'acertos seguidos nas três metas'},
 'rest:1:0':{aceita:1},
 'rest:2:0':{tipo:'sonda',ganho:20,aceita:0,nota:'Sem retorno. O 1º registro vira a linha de base; a meta é ganhar 20 pontos ou mais sobre ela.'},
 'ndp:0:0':{aceita:1},
 'mit:0:0':{aceita:1},
 'mit:1:0':{aceita:0},
 'mit:2:0':{tipo:'cont',meta:10,c:'frases funcionais usadas na conversa'},
 'vnest:0:1':{meta:90},
 'script:0:0':{meta:100,nota:'Todas as frases aprovadas pelo paciente.'},
 'script:1:0':{meta:90,aceita:0},
 'recast:0:0':{tipo:'cont',meta:30,c:'modelos do alvo feitos por você',janela:'15 min'},
 'dupla:0:0':{meta:100},
};
const APO_DEF = ['Sem ajuda','Gesto','Verbal','Física'];
const APO = {
 pecs:['Sem ajuda','Ajuda física parcial','Ajuda física total'],
 caa:['Sozinha','Apontar a área','Modelagem antes','Ajuda física (evitar)'],
 emt:['Pergunta aberta','Escolha','Pedido de imitação','Modelo'],
 ta:['Sem pista visual','Com repetição','Com leitura labial'],
 pragmatica:['Sozinho','Pista visual','Pergunta da fono','Modelo'],
 narrativa:['Sozinho','Pista visual (mapa)','Pergunta da fono','Modelo'],
 fe:['Sozinho','Pista visual','Lembrete verbal','Modelo'],
 mo:['Sozinho','Espelho ou pista visual','Pista tátil','Ajuda manual'],
 dttc:['Espontâneo','Eco com pausa','Eco imediato','Simultâneo','Simultâneo + gesto','Simultâneo + toque'],
 rest:['Sem retorno','Retorno no fim do bloco','Retorno imediato'],
 ndp:['Sem ajuda','Figura-pista','Modelo','Toque ou gesto'],
 mit:['Passo 5 · responde à pergunta','Passo 4 · repete sozinho','Passo 3 · uníssono desvanecido','Passo 2 · uníssono','Passo 1 · cantarolar'],
 sfa:['Sozinho','Pergunta da grade','Escolha entre opções','Fono dá o traço'],
 vnest:['Sozinho','Pergunta da fono','Escolha entre opções','Modelo'],
 ciat:['Sem ajuda','Modelo verbal','Pista escrita'],
 script:['Sem texto','Com início da frase','Com texto escrito','Em uníssono'],
 recast:['Espontâneo','Após reformulação'],
 vocab:['Sozinho','Pista de significado','Primeira sílaba','Modelo'],
};
const APO_ACT = {
 'esdm:2:1':['Sozinho','Com lembrete','Com demonstração'],
 'hanen:0:0':['Sozinho','Com lembrete','Com demonstração'],
 'hanen:1:0':['Sozinho','Com lembrete','Com demonstração'],
 'emt:2:0':['Sozinho','Com lembrete','Com demonstração'],
 'recast:0:0':['—'],
};
const APO_NOTA = {
 pecs:'No PECS não se usa dica verbal. A ajuda é física, dada por um ajudante atrás, e é retirada aos poucos.',
 ciat:'No CIAT, gestos e apontar não são permitidos.',
 caa:'Na CAA, evite conduzir a mão da pessoa: prefira modelar antes.',
 rest:'No ReST, a pré-prática tem retorno imediato; a prática tem retorno só no fim do bloco; a sondagem não tem retorno.',
};
/* regra para concluir a etapa */
const REGRA = {
 esdm:{dias:2,outra:true,txt:'80% em 2 atendimentos seguidos e com pelo menos 2 pessoas diferentes.'},
 pecs:{dias:2,outra:true,txt:'Critério da fase em 2 atendimentos seguidos, com pelo menos 2 parceiros.'},
 mo:{dias:3,txt:'Critério atingido em 3 atendimentos (refeições observadas) seguidos.'},
 vocab:{dias:2,intervalo:14,txt:'Critério em 2 atendimentos com pelo menos 2 semanas entre eles (retenção).'},
 jasper:{dias:2,txt:'Critério em 2 atendimentos seguidos, com o brincar feito com variedade e de forma espontânea.'},
};
const regraOf = mid => ({dias:2, txt:'Meta de todas as atividades atingida em 2 atendimentos seguidos, em dias diferentes.', ...(REGRA[mid]||{})});
const medOf = ak => ({tipo:'pct', meta:80, aceita:0, ...(MED[ak]||{})});
const apoiosOf = (mid, ak) => APO_ACT[ak] || APO[mid] || APO_DEF;

function metaTxt(md){
  if(md.tipo==='cont') return `${md.meta} ${md.c||'ocorrências'}${md.janela?' em '+md.janela:''}`;
  if(md.tipo==='seq') return `${md.meta} ${md.c||'acertos seguidos'}`;
  if(md.tipo==='sonda') return `+${md.ganho} pontos sobre a linha de base`;
  if(md.tipo==='base') return `${md.mult}× a linha de base (${md.c||'ocorrências'})`;
  return `${md.meta}% de acerto${md.min?' (mín. '+md.min+' tentativas)':''}`;
}
function maxSeq(h){ let b=0,c=0; (h||[]).forEach(x=>{ c = x==='y'?c+1:0; b=Math.max(b,c); }); return b; }
/* linha de base: primeiro registro salvo desta atividade para o paciente */
function baseOf(pid, mid, blk, j){
  if(!pid) return null;
  const l = sessOf(pid, mid).filter(s=>s.blk===blk && s.acts && s.acts[j]);
  return l.length ? l[0].acts[j] : null;
}
function evalAct(x, mid, blk, j, pid){
  const ak = actKey(mid, blk, j), md = medOf(ak), aps = apoiosOf(mid, ak);
  const tot = (x.y||0)+(x.n||0); let raw=null, score=null, txt='—', note='';
  if(md.tipo==='cont'){ raw=x.y||0; score=Math.min(100,Math.round(raw/md.meta*80)); txt=`${raw} de ${md.meta}`; }
  else if(md.tipo==='seq'){ raw = x.hist ? maxSeq(x.hist) : (x.valor||0); score=Math.min(100,Math.round(raw/md.meta*80)); txt=`${raw} seguidos de ${md.meta}`; }
  else if(md.tipo==='base' || md.tipo==='sonda'){
    const b = baseOf(pid, mid, blk, j); const isFirst = !b;
    if(md.tipo==='base'){ raw=x.y||0; if(isFirst||!b){ txt=`${raw} (linha de base)`; note='Primeiro registro: este número vira a linha de base.'; score=null; }
      else { const meta=Math.max(1,(b.y||0)*md.mult); score=Math.min(100,Math.round(raw/meta*80)); txt=`${raw} de ${meta}`; } }
    else { raw = tot?Math.round((x.y||0)/tot*100):0; if(isFirst||!b){ txt=`${raw}% (linha de base)`; note='Primeira sondagem: vira a linha de base.'; score=null; }
      else { const bp = (b.y+b.n)?Math.round(b.y/(b.y+b.n)*100):0; const g=raw-bp; score=Math.max(0,Math.min(100,Math.round(g/md.ganho*80))); txt=`${raw}% (${g>=0?'+':''}${g} pts)`; } }
  } else { raw = tot?Math.round((x.y||0)/tot*100):0; score = tot?Math.min(100,Math.round(raw/md.meta*80)):null; txt = tot?raw+'%':'—'; if(md.min && tot<md.min){ note=`Faça pelo menos ${md.min} tentativas.`; } }
  const ai = Math.max(0, aps.indexOf(x.apoio));
  if(score!=null && score>=80 && ai>md.aceita){ score=79; note='Meta atingida, mas com mais apoio do que o critério permite.'; }
  return {ak, md, raw, score, txt, note, ok: score!=null && score>=80};
}

function calcRun(r){
  const y=r.acts.reduce((a,x)=>a+(x.y||0),0), n=r.acts.reduce((a,x)=>a+(x.n||0),0);
  const evs = r.acts.map((x,j)=> x.fixed ? {ak:actKey(r.mid,r.blk,j), md:medOf(actKey(r.mid,r.blk,j)), score:x.score, txt:x.txt, note:x.note, ok:x.ok} : evalAct(x, r.mid, r.blk, j, r.pid));
  const sc = evs.filter(e=>e.score!=null);
  const pct = sc.length ? Math.round(sc.reduce((a,e)=>a+e.score,0)/sc.length) : 0;
  return { y, n, t:y+n, pct, evs, base: !sc.length, ok: sc.length>0 && evs.every(e=>e.score==null||e.ok) };
}
function fixRun(r){ const c=calcRun(r); r.acts.forEach((x,j)=>{ const e=c.evs[j]; Object.assign(x,{score:e.score, txt:e.txt, note:e.note||'', ok:e.ok, valor: x.hist?maxSeq(x.hist):x.valor, fixed:true}); }); r.pct=c.pct; r.ok=c.ok; return c; }
