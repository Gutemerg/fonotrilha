/* ===== Materiais para imprimir ===== */
const svgPic = (k, size=64) => `<svg viewBox="0 0 64 64" width="${size}" height="${size}" aria-hidden="true">${PIC[k]||''}</svg>`;
const cards = (items, cols=4, size=70) => `<div class="pg-grid c${cols}">${items.map(([k,l])=>`<div class="pg-card">${svgPic(k,size)}<b>${l}</b></div>`).join('')}</div>`;
const lines = (n, label='') => Array.from({length:n},()=>`<div class="pg-line">${label}</div>`).join('');
const table = (head, rows, blankRows=0) => `<table class="pg-t"><thead><tr>${head.map(h=>`<th>${h}</th>`).join('')}</tr></thead><tbody>${rows.map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join('')}</tr>`).join('')}${Array.from({length:blankRows},()=>`<tr>${head.map(()=>'<td>&nbsp;</td>').join('')}</tr>`).join('')}</tbody></table>`;
const head = (sub) => `<div class="pg-head"><div><span>Paciente</span><i></i></div><div><span>Data</span><i></i></div><div><span>Sessão nº</span><i></i></div>${sub?`<div><span>${sub}</span><i></i></div>`:''}</div>`;
const trials = (n=10) => `<div class="pg-trials">${Array.from({length:n},(_,i)=>`<span>${i+1}<i></i></span>`).join('')}</div>`;

const PRINT = {
  registro: { t:'Folha de registro da sessão', h:()=>`${head('Método')}
    ${table(['Atividade / alvo','Nível de apoio','Tentativas (✓ / ✗)','% acerto','Observações'],[],8)}
    <h4>Decisão para a próxima sessão</h4>
    <p class="pg-check">☐ Avançar (≥ 80% em 2 sessões seguidas) &nbsp; ☐ Manter (50–79%) &nbsp; ☐ Simplificar / trocar estratégia (&lt; 50%)</p>
    <h4>Orientação para casa</h4>${lines(3)}` },

  pecs_fase1: { t:'PECS · Cartões de itens preferidos', h:()=>`<p class="pg-note">Recorte, plastifique e cole velcro no verso. Use só itens que o paciente realmente quer (faça o inventário de reforçadores antes). Tamanho sugerido: 5 × 5 cm.</p>
    ${cards([['bola','bola'],['bolha','bolha de sabão'],['biscoito','biscoito'],['copo','suco'],['carro','carrinho'],['musica','música'],['balao','balão'],['trem','trem'],['banana','banana'],['pao','pão'],['livro','livro'],['dado','jogo']],4,80)}` },
  pecs_frase: { t:'PECS · Tira de frase e cartões “eu quero”', h:()=>`<p class="pg-note">Fase IV: o cartão “EU QUERO” fica fixo à esquerda; o paciente adiciona o item e entrega a tira inteira.</p>
    <div class="pg-strip"><div class="pg-card big">${svgPic('quero',80)}<b>EU QUERO</b></div><div class="pg-slot">item</div><div class="pg-slot">item</div></div>
    <div class="pg-strip"><div class="pg-card big">${svgPic('quero',80)}<b>EU QUERO</b></div><div class="pg-slot">item</div><div class="pg-slot">item</div></div>
    ${cards([['quero','eu quero'],['quero','eu quero'],['olhar','eu vejo'],['ouvido','eu ouço'],['mais','grande'],['mais','pequeno'],['bola','vermelho'],['bola','azul']],4,60)}` },
  pecs_dados: { t:'PECS · Registro de trocas por fase', h:()=>`${head('Fase')}
    ${table(['Tentativa','Item','Ajuda física (sim/não)','Ajudante usado?','Independente?','Distância percorrida'],Array.from({length:12},(_,i)=>[i+1,'','','','','']))}
    <p class="pg-note">Critério habitual para avançar: 80% das trocas independentes em 2 sessões, com pelo menos 2 parceiros diferentes.</p>` },

  caa_prancha: { t:'Prancha de vocabulário essencial (CAA)', h:()=>`<p class="pg-note">Imprima em A4 paisagem, plastifique. Mantenha as palavras sempre no mesmo lugar (planejamento motor). Cores por classe: pessoas · verbos · descritores · sociais.</p>
    ${cards([['eu','eu'],['voce','você'],['quero','quero'],['mais','mais'],['parar','parar'],['ajuda','ajuda'],['ir','ir'],['fazer','fazer'],['olhar','olhar'],['abrir','abrir'],['ligar','ligar'],['comer','comer'],['beber','beber'],['brincar','brincar'],['gostar','gosto'],['isso','isso'],['sim','sim'],['nao','não'],['acabou','acabou'],['banheiro','banheiro'],['feliz','feliz'],['triste','triste'],['dor','dor'],['dormir','dormir']],6,56)}` },
  caa_registro: { t:'CAA · Registro de modelagem e uso', h:()=>`${head('Rotina')}
    ${table(['Palavra-alvo','Vezes que modelei','Uso com ajuda','Uso espontâneo','Contexto'],[['quero','','','',''],['mais','','','',''],['parar','','','',''],['ajuda','','','',''],['acabou','','','','']],6)}
    <p class="pg-note">Meta inicial: modelar cada palavra-alvo de 5 a 10 vezes por rotina, sem exigir resposta.</p>` },

  hanen_owl: { t:'Cartão para os pais · OOE (Observar, Esperar, Escutar)', h:()=>`<div class="pg-owl">
    <div><h3>Observe</h3><p>Fique na altura da criança, cara a cara. Veja para onde ela olha e o que ela quer.</p></div>
    <div><h3>Espere</h3><p>Pare de falar. Conte até 10 em silêncio, com olhar de expectativa.</p></div>
    <div><h3>Escute</h3><p>Responda a qualquer tentativa (olhar, som, gesto, palavra) como se fosse uma mensagem.</p></div></div>
    <h4>Depois que ela se comunicar</h4><p>Repita com a palavra certa e acrescente uma: criança “bola” → você “bola grande!”.</p>
    <h4>Diário da semana (5 minutos por dia)</h4>${table(['Dia','Rotina (banho, refeição, brincadeira)','O que a criança fez','O que eu fiz'],['Seg','Ter','Qua','Qui','Sex','Sáb','Dom'].map(d=>[d,'','','']))}` },

  emt_ambiente: { t:'Ensino Incidental Ampliado (EMT) · Checklist do ambiente e registro', h:()=>`${head()}
    <h4>Arranjo do ambiente (marque o que preparou)</h4>
    <p class="pg-check">☐ Itens preferidos à vista e fora do alcance &nbsp; ☐ Potes difíceis de abrir &nbsp; ☐ Porções pequenas &nbsp; ☐ Peça faltando (quebra-cabeça) &nbsp; ☐ Situação inesperada (“sapato na cabeça”) &nbsp; ☐ Escolha entre dois itens</p>
    <h4>Sequência de apoio (do menor ao maior)</h4><p>1. Espera (5 s) → 2. Pergunta aberta (“o que você quer?”) → 3. Escolha (“bola ou carro?”) → 4. Modelo (“diga: bola”) → entrega imediata + expansão.</p>
    ${table(['Oportunidade','Alvo','Espera','Pergunta','Escolha','Modelo','Resposta da criança'],[],10)}` },

  esdm_rotina: { t:'Plano de rotina de atividade conjunta (estilo Denver)', h:()=>`${head('Atividade')}
    ${table(['Fase','O que fazer','Alvos de comunicação','Alvos de imitação / brincar'],[['1. Preparar','Escolher material do interesse da criança','',''],['2. Tema','Brincadeira principal, adulto como parceiro','',''],['3. Variação','Mudar o tema para manter o interesse','',''],['4. Fechar','Guardar juntos e fazer a transição','','']])}
    <h4>Registro dos alvos do dia</h4>${table(['Alvo','Tentativas','Independente','Com ajuda','Não fez'],[],6)}` },

  jasper_nivel: { t:'Brincar: níveis e alvos (JASPER)', h:()=>`${table(['Nível','Exemplo','Observado?','Data'],[
    ['Manipulação simples','bater, sacudir, jogar','',''],['Combinação','pôr argola no pino','',''],['Pré-simbólico','escova o próprio cabelo','',''],
    ['Simbólico com boneco','dá comida ao boneco','',''],['Substituição','bloco vira telefone','',''],['Sequências / roteiro','faz comida, serve, lava','','']])}
    <h4>Atenção compartilhada</h4>${table(['Comportamento','Responde','Inicia'],[['Seguir apontar','',''],['Mostrar objeto','',''],['Apontar para compartilhar','',''],['Alternar olhar','',''],['Dar para compartilhar','','']])}` },

  ta_registro: { t:'Treinamento auditivo · Registro por habilidade', h:()=>`${head()}
    ${table(['Habilidade','Atividade','Nível (fácil → difícil)','Acertos / total','%'],[['Atenção e detecção','Levanta a mão ao ouvir o som','','',''],['Discriminação','Igual ou diferente? (pato/bato)','','',''],['Figura-fundo','Repetir palavra com ruído de fundo','','',''],['Ordenação temporal','Repetir sequência (fino-grosso-fino)','','',''],['Fechamento','Completar palavra com sílaba “apagada”','','',''],['Memória sequencial','Repetir 3–5 itens na ordem','','','']])}
    <p class="pg-note">Mantenha cada nível até 80% de acerto. Suba um parâmetro por vez (mais ruído, mais itens, sons mais parecidos).</p>` },

  cf_cartas: { t:'Consciência fonológica · Cartas de rima e sílabas', h:()=>`<p class="pg-note">Jogo da memória de rimas: recorte e embaralhe. Pares: gato/pato, bola/cola*, pão/mão*, peixe/feixe*. (*sem figura: escreva ou use objeto real.)</p>
    ${cards([['gato','gato'],['pato','pato'],['bola','bola'],['mao','mão'],['pao','pão'],['peixe','peixe'],['casa','casa'],['sol','sol'],['flor','flor'],['cama','cama'],['chave','chave'],['banana','banana']],4,70)}
    <h4>Contar sílabas (bater palma)</h4>${table(['Figura','Palmas','Primeira sílaba','Última sílaba'],[['sol','','',''],['bola','','',''],['banana','','',''],['cachorro','','',''],['telefone','','','']])}` },
  cf_registro: { t:'Consciência fonológica · Progressão e registro', h:()=>`${head()}
    ${table(['Nível','Tarefa','Acertos / 10','%'],[['Palavra','Quantas palavras tem a frase?','',''],['Rima','Qual rima com “mão”?','',''],['Sílaba – segmentar','Bater palmas por sílaba','',''],['Sílaba – inicial','Qual começa igual a “bola”?','',''],['Sílaba – manipular','“sapato” sem “sa”?','',''],['Fonema – inicial','Qual começa com /m/?','',''],['Fonema – síntese','/s/ /o/ /l/ → ?','',''],['Fonema – manipular','troque /p/ por /b/ em “pato”','','']])}` },

  narrativa: { t:'Gramática da história · Mapa visual', h:()=>`<div class="pg-story">${[['eu','Quem?'],['casa','Onde e quando?'],['triste','Qual o problema?'],['pensar','O que sentiu / pensou?'],['fazer','O que fez?'],['feliz','Como terminou?']].map(([k,l])=>`<div class="pg-card">${svgPic(PIC[k]?k:'eu',56)}<b>${l}</b>${lines(2)}</div>`).join('')}</div>
    <h4>Sequência para recontar (recorte e ordene)</h4><div class="pg-grid c4">${['1. A menina pegou a bola','2. A bola caiu no rio','3. Ela pediu ajuda ao pai','4. O pai pegou a bola'].map((t,i)=>`<div class="pg-card">${svgPic(['bola','agua','ajuda','feliz'][i],60)}<b>${t}</b></div>`).join('')}</div>` },

  fe_plano: { t:'Funções executivas · Cartões de autoinstrução e plano', h:()=>`<div class="pg-grid c4">${[['parar','PARAR','O que eu preciso fazer?'],['olhar','PENSAR','Qual é o meu plano?'],['fazer','FAZER','Faço um passo de cada vez.'],['sim','CONFERIR','Ficou como planejei?']].map(([k,a,b])=>`<div class="pg-card big">${svgPic(k,70)}<b>${a}</b><small>${b}</small></div>`).join('')}</div>
    <h4>Meu plano em 4 passos</h4>${table(['Passo','O que vou fazer','Feito?'],[['1','','☐'],['2','','☐'],['3','','☐'],['4','','☐']])}
    <h4>Previsão × resultado</h4>${table(['Tarefa','Quanto tempo eu acho','Quanto levou','Acertei?'],[],4)}` },

  mo_down: { t:'Motricidade orofacial · Programa para casa', h:()=>`<p class="pg-note">Faça como brincadeira, em frente ao espelho, 2× ao dia. Pare se houver engasgo ou recusa forte. A fonoaudióloga ajusta as repetições.</p>
    ${table(['Exercício','Como fazer','Repetições','Seg','Ter','Qua','Qui','Sex'],[
      ['Bico e sorriso','Fazer “bico” e depois sorrir largo','10','','','','',''],
      ['Língua para dentro','Lamber o lábio de cima e guardar a língua','10','','','','',''],
      ['Soprar','Soprar bolha, apito ou língua de sogra','5 sopros','','','','',''],
      ['Canudo','Sugar líquido grosso (iogurte) com canudo curto','1 copo','','','','',''],
      ['Mastigar dos lados','Alimento firme no lado direito e depois no esquerdo','5 cada','','','','',''],
      ['Lábios fechados','Segurar um palito de picolé entre os lábios','10 s × 5','','','','','']])}
    <h4>Consistência alimentar orientada</h4><p class="pg-check">☐ Pastoso liso &nbsp; ☐ Pastoso com pedaços &nbsp; ☐ Macio picado &nbsp; ☐ Sólido macio &nbsp; ☐ Sólido</p>` },

  leitura_global: { t:'Leitura global · Cartões figura + palavra', h:()=>`<p class="pg-note">Corte cada cartão ao meio na linha: figura de um lado, palavra do outro. Use letra bastão grande. Comece com 4–6 palavras de alto interesse.</p>
    <div class="pg-grid c3">${[['bola','BOLA'],['casa','CASA'],['agua','ÁGUA'],['carro','CARRO'],['gato','GATO'],['pao','PÃO']].map(([k,w])=>`<div class="pg-card split">${svgPic(k,70)}<b class="pg-word">${w}</b></div>`).join('')}</div>
    <h4>Loto de palavras (aponte a palavra que eu disser)</h4><div class="pg-grid c3">${['BOLA','CASA','ÁGUA','CARRO','GATO','PÃO'].map(w=>`<div class="pg-card"><b class="pg-word">${w}</b></div>`).join('')}</div>` },
  sinais: { t:'Sinais de apoio (Libras) · Palavras iniciais', h:()=>`<p class="pg-note">Sinais de apoio à fala: faça o sinal SEMPRE junto com a palavra falada. Confirme a forma de cada sinal em um dicionário de Libras e combine com a família.</p>
    ${cards([['comer','comer'],['beber','beber'],['mais','mais'],['acabou','acabou'],['ajuda','ajuda'],['dormir','dormir'],['banheiro','banheiro'],['brincar','brincar']],4,64)}
    ${table(['Sinal','Data apresentado','Imita','Usa sozinho','Fala junto'],[['comer','','','',''],['beber','','','',''],['mais','','','',''],['acabou','','','',''],['ajuda','','','','']])}` },

  dttc_lista: { t:'DTTC · Hierarquia e lista de alvos', h:()=>`${head()}
    <h4>Hierarquia de apoio (anote o nível em que acertou)</h4>${table(['Nível','O que a fono faz'],[['1. Simultâneo lento','Falamos juntos, devagar, com pista tátil/gesto'],['2. Simultâneo natural','Falamos juntos, velocidade normal'],['3. Eco imediato','Eu falo, você repete logo'],['4. Eco com pausa','Eu falo, espero 2–3 s, você repete'],['5. Espontâneo','Pergunta ou figura, sem modelo'],['6. Variação de prosódia','Pergunta, exclamação, ênfase']])}
    <h4>Alvos funcionais (escolha 4–6)</h4>${table(['Alvo','Estrutura','Nível hoje','Tentativas ✓/✗'],[['mamãe','CVCV','',''],['papai','CVCV','',''],['água','VCV','',''],['tchau','CV','',''],['abre','VCCV','',''],['mais','CVC','','']],4)}` },

  rest_lista: { t:'ReST · Pseudopalavras e registro', h:()=>`<p class="pg-note">Maiúsculas = sílaba tônica. Treine 20 pseudopalavras: metade forte-fraco (BÁ-di-gu) e metade fraco-forte (ba-di-GU). Pontue 3 aspectos em cada produção.</p>
    ${(()=>{const C=['b','d','g','p','t','k'];const V=['a','i','u'];const out=[];let s=7;const r=()=>{s=(s*9301+49297)%233280;return s/233280};while(out.length<20){const sy=[0,1,2].map(()=>C[Math.floor(r()*C.length)]+V[Math.floor(r()*V.length)]);if(new Set(sy).size<3)continue;const w=out.length<10?sy[0].toUpperCase()+'-'+sy[1]+'-'+sy[2]:sy[0]+'-'+sy[1]+'-'+sy[2].toUpperCase();if(!out.includes(w))out.push(w)}return table(['Nº','Pseudopalavra','Sons corretos','Transição suave','Tonicidade certa'],out.map((w,i)=>[i+1,`<b>${w.replace(/k/g,'c').replace(/ci/g,'qui').replace(/gi/g,'gui').replace(/CI/g,'QUI').replace(/GI/g,'GUI').replace(/KI/g,'QUI').replace(/K/g,'C')}</b>`,'☐','☐','☐']))})()}` },

  ndp_muro: { t:'Construção da fala · Progresso por camadas', h:()=>`${head()}
    ${table(['Camada','Alvos','Imita','Nomeia figura','Em frase'],[['Sons isolados','/p/ /b/ /m/ /t/ /d/ + vogais','','',''],['Sílaba CV','pa · bi · mu · tu · da','','',''],['CV repetida','papa · bebe · mimi','','',''],['CVCV variada','bola · pato · mala','','',''],['CVC','mar · pás · sol','','',''],['Polissílabas','banana · boneca · sapato','','',''],['Frase-alvo','“Quero bola”, “Abre a porta”','','','']])}
    ${cards([['bola','bola'],['pato','pato'],['mesa','mesa'],['sapato','sapato'],['banana','banana'],['sol','sol'],['peixe','peixe'],['dado','dado']],4,60)}` },

  sfa_grade: { t:'Análise de traços semânticos (SFA) · Grade', h:()=>`${head('Item')}
    <div class="pg-sfa"><div class="c">Desenho / foto<br><br><br>Nome: __________</div>
    ${['Categoria — é um tipo de…','Uso — serve para…','Ação — o que faz?','Propriedades — cor, forma, textura','Local — onde se encontra?','Associação — me lembra…'].map(t=>`<div><b>${t}</b>${lines(2)}</div>`).join('')}</div>
    <p class="pg-note">Depois de preencher os 6 traços, peça o nome de novo. Registre: nomeou antes (✓/✗) · nomeou depois (✓/✗).</p>` },
  sfa_figuras: { t:'Figuras para nomeação (adultos)', h:()=>cards([['chave','chave'],['escova','escova de dente'],['telefone','telefone'],['copo','copo'],['cama','cama'],['sapato','sapato'],['livro','livro'],['mesa','mesa'],['onibus','ônibus'],['maca','maçã'],['pao','pão'],['medico','farmácia/médico']],4,70) },

  vnest: { t:'VNeST · Cartões de verbo e rede', h:()=>`<div class="pg-vnest"><div class="w">QUEM?</div><div class="w">QUEM?</div><div class="v">VERBO</div><div class="w">O QUÊ?</div><div class="w">O QUÊ?</div></div>
    <h4>Verbos sugeridos (transitivos, do dia a dia)</h4>${cards([['medir','medir'],['cozinhar','cozinhar'],['dirigir','dirigir'],['escrever','escrever'],['lavar','lavar'],['cortar','cortar'],['pintar','pintar'],['ler','ler']],4,58)}
    ${table(['Verbo','Par 1 (quem / o quê)','Par 2','Par 3','Frase completa (onde/quando/por quê)'],[],5)}` },

  roteiro: { t:'Treino de roteiro (script training) · Modelo', h:()=>`${head('Situação')}
    <p class="pg-note">Escreva com o paciente um monólogo ou diálogo curto (3–6 frases) sobre algo real e importante: pedir na padaria, apresentar-se, ligar para o neto. Use as palavras DELE.</p>
    ${table(['Frase','Texto do roteiro','Lê junto','Lê sozinho','Fala sem ler'],[1,2,3,4,5,6].map(n=>[n,'','☐','☐','☐']))}
    <h4>Pontuação</h4><p>% de palavras corretas = palavras certas ÷ total de palavras do roteiro × 100. Meta: ≥ 90% sem apoio escrito.</p>` },

  ciat_cartas: { t:'Jogo de cartas (CIAT) · Pares', h:()=>`<p class="pg-note">Imprima 2 cópias. Cada jogador recebe metade. Na sua vez, peça a carta só falando (sem gesto, sem apontar). Aumente a exigência: nome → “você tem…?” → com cor/número.</p>
    ${cards([['maca','maçã'],['banana','banana'],['copo','copo'],['chave','chave'],['sapato','sapato'],['livro','livro'],['carro','carro'],['casa','casa'],['flor','flor'],['peixe','peixe'],['bola','bola'],['telefone','telefone']],4,70)}` },

  mit_frases: { t:'Terapia de entonação melódica · Frases', h:()=>`<p class="pg-note">Marque a sílaba aguda (mais alta) com ▲ e a grave com ▼. Uma batida na mão esquerda por sílaba. Comece com 2–3 sílabas e passe a 5–7.</p>
    ${table(['Nível','Frase (sílabas)','Melodia','Passo atingido'],[['1','bom / di-a','▼ ▲ ▼',''],['1','o-bri-ga-do','▼ ▲ ▲ ▼',''],['1','quero á-gua','▼ ▲ ▲ ▼',''],['2','eu es-tou com fo-me','▼ ▼ ▲ ▼ ▲ ▼',''],['2','pode me a-ju-dar','▼ ▼ ▼ ▼ ▲ ▼',''],['3','vou ao ba-nhei-ro a-go-ra','▼ ▼ ▼ ▲ ▼ ▼ ▲ ▼','']],4)}` },

  recast: { t:'Reformulação (recasting) · Alvos e contagem', h:()=>`${head('Alvo gramatical')}
    <p class="pg-note">Escolha 1–2 alvos (ex.: plural, verbo no passado, artigo). Meta: cerca de 1,5 reformulações por minuto. Não peça para a criança repetir.</p>
    ${table(['Criança disse','Eu reformulei','Alvo','Criança usou depois?'],[['“o menino come bolo” (ontem)','“o menino COMEU bolo ontem”','passado',''],['“dois carro”','“dois carroS”','plural','']],10)}
    <h4>Contagem rápida</h4>${trials(30)}` },

  vocab_mapa: { t:'Mapa da palavra (vocabulário)', h:()=>`${head('Palavra')}
    <div class="pg-sfa"><div class="c">Desenho<br><br><br></div>${['O que significa (com minhas palavras)','Parece com… / é o contrário de…','Sons: primeira sílaba, quantas sílabas, rima','Frase com a palavra','Onde eu vi ou ouvi','Gesto que me lembra'].map(t=>`<div><b>${t}</b>${lines(2)}</div>`).join('')}</div>` },

  pragmatica: { t:'Conversa · Cartões de habilidades sociais', h:()=>`<div class="pg-grid c4">${[['voce','COMEÇAR','Oi! Como foi o seu fim de semana?'],['ouvido','MANTER','Fazer 1 pergunta sobre o que o outro disse'],['ir','TROCAR DE ASSUNTO','Falando nisso…'],['acabou','TERMINAR','Bom, preciso ir. Até amanhã!']].map(([k,a,b])=>`<div class="pg-card big">${svgPic(k,60)}<b>${a}</b><small>${b}</small></div>`).join('')}</div>
    ${cards([['feliz','feliz'],['triste','triste'],['bravo','bravo'],['medo','com medo'],['surpreso','surpreso'],['cansado','cansado']],6,52)}
    ${table(['Habilidade','Oportunidades','Fez sozinho','Com dica'],[['Iniciar','','',''],['Fazer pergunta de volta','','',''],['Manter o tema (3 turnos)','','',''],['Perceber desinteresse do outro','','',''],['Encerrar','','','']])}` },

  de_triagem: { t:'Dupla excepcionalidade · Roteiro de triagem fonoaudiológica', h:()=>`${head()}
    ${table(['Área','Força (alto desempenho)','Dificuldade observada','Encaminhar / investigar'],[['Vocabulário e compreensão','','',''],['Discurso e narrativa','','',''],['Leitura (precisão e velocidade)','','',''],['Escrita (ortografia, organização)','','',''],['Processamento auditivo','','',''],['Pragmática e conversa','','',''],['Fluência (taquifemia, gagueira)','','',''],['Voz','','','']])}
    <h4>Sinais de alerta de discrepância</h4><p class="pg-check">☐ Oralidade muito acima da escrita &nbsp; ☐ Leitura lenta com ótima compreensão oral &nbsp; ☐ Fala acelerada com omissões &nbsp; ☐ Dificuldade em turnos e interesses restritos &nbsp; ☐ Frustração intensa diante de erro</p>` },
  enriquecimento: { t:'Enriquecimento de linguagem · Desafios', h:()=>`${table(['Desafio','Exemplo','Nível'],[['Definir palavras abstratas','“o que é justiça?”',''],['Explicar duplo sentido / ironia','“que dia lindo!” (na chuva)',''],['Argumentar em 3 partes','opinião → 2 motivos → conclusão',''],['Resumir em 1 frase','contar um filme em 15 palavras',''],['Mudar o registro','explicar o mesmo para um bebê e para um juiz',''],['Apresentação oral','3 minutos, com roteiro e perguntas','']])}` },
};
