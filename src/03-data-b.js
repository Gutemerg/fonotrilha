M.ta = { nome:'Treinamento auditivo (formal e informal)', sigla:'TA', idade:'A partir de 7 anos (informal desde 5)', ev:'moderada', cert:'O treinamento acusticamente controlado (em cabina) exige audiologista. As atividades informais podem ser feitas no consultório.',
 resumo:'Treino das habilidades auditivas alteradas na avaliação do processamento auditivo: atenção, discriminação, figura-fundo, ordenação temporal, fechamento e memória sequencial, com dificuldade graduada.',
 quando:['Diagnóstico de transtorno do processamento auditivo (TPAC)','TDAH ou TDL com queixas de “não ouvir”, pedir repetição, errar em ruído','Trocas de sons parecidos na escrita'],
 principios:['Treinar apenas as habilidades alteradas na avaliação','Dificuldade graduada: um parâmetro por vez','Manter o desafio perto de 70–80% de acerto','Feedback imediato','Estratégias compensatórias junto (sala de aula, ambiente)'],
 dose:'Formal: cerca de 8 sessões semanais de 40–50 min em cabina (protocolos brasileiros). Informal: 2× por semana, 40 min, 12–18 sessões, com tarefas de casa.',
 inicio:['Laudo do processamento auditivo central (habilidades alteradas)','Questionário de comportamento auditivo (escola e família)','Medida inicial de cada habilidade a treinar'],
 sess:[
  {n:'1–3', t:'Atenção e discriminação', obj:'Detectar e diferenciar sons e palavras parecidas.', prep:['Instrumentos (sino, tambor, chocalho) ou sons gravados','Lista de pares mínimos (pato/bato, faca/vaca, gato/cato)'],
   at:[
    {t:'Igual ou diferente?', min:15, il:'ouvido_som', passos:['Com a boca coberta (sem leitura labial), diga pares de palavras','O paciente levanta a placa “igual” ou “diferente”','Comece com pares bem diferentes e vá para pares mínimos','Depois peça para apontar a figura da palavra ouvida'], obs:['Erra mais em quais pares (sonoridade: p/b, t/d, f/v)?','Precisa ver sua boca?'], ok:'80% de acerto em pares mínimos sem pista visual.', mat:'ta_registro'}]},
  {n:'4–8', t:'Figura-fundo e fechamento', obj:'Entender fala em ruído e completar palavras incompletas.', prep:['Celular com ruído de fundo (conversa, restaurante)','Lista de palavras com sílaba omitida'],
   at:[
    {t:'Fala no ruído', min:15, il:'ouvido_som', passos:['Toque um ruído de fundo baixo','Diga uma palavra ou ordem simples; o paciente repete ou executa','Aumente o ruído a cada bloco de 10 acertos','Depois use história curta no ruído e faça perguntas'], obs:['Em que nível de ruído começa a errar?','Fica cansado ou disperso?'], ok:'80% de acerto no nível de ruído alvo.', mat:'ta_registro'},
    {t:'Complete a palavra', min:10, il:'ouvido_som', passos:['Fale palavras com um pedaço “apagado” (“bana__” / “__lefone”)','O paciente diz a palavra completa','Avance para frases com uma palavra mascarada por um som'], obs:['Usa o contexto para completar?'], ok:'8 de 10 palavras completadas.', mat:'ta_registro'}]},
  {n:'9–14', t:'Ordenação temporal e memória sequencial', obj:'Lembrar e repetir sequências na ordem certa.', prep:['Sons fino/grosso (apito, tambor) ou longo/curto','Listas de 3 a 6 itens'],
   at:[
    {t:'Sequência de sons', min:15, il:'ouvido_som', passos:['Toque 3 sons (fino-grosso-fino) sem que o paciente veja','Ele repete nomeando ou com gestos (mão alta / baixa)','Aumente para 4 e 5 sons','Faça o mesmo com sílabas (pa-ta-ca) e com ordens de 3 passos'], obs:['Inverte a ordem?','Lembra o início e esquece o fim?'], ok:'Repete sequências de 4 itens com 80% de acerto.', mat:'ta_registro'}]},
 ],
 avancar:'Aumente um parâmetro (ruído, número de itens, semelhança dos sons) quando atingir 80% em dois blocos seguidos.',
 alta:['Reavaliação do processamento auditivo com melhora ou normalização','Redução das queixas no questionário de comportamento auditivo'],
 seNao:[
  {s:'Não melhora em nenhuma habilidade', c:'Atenção sustentada é o limite (TDAH sem controle)', a:'Converse com o médico sobre o manejo do TDAH; faça blocos curtos de 5 min com pausas e reforço.'},
  {s:'Acerta na sessão, mas a escola não percebe melhora', c:'Falta de generalização', a:'Oriente a escola: sentar perto do professor, longe da janela; confirmar ordens; considerar sistema FM.'},
  {s:'Cansa ou se frustra rápido', c:'Nível de dificuldade alto', a:'Volte um nível e aumente o reforço; alterne com atividades de sucesso garantido.'},
  {s:'Erros mudam de sessão para sessão', c:'Possível otite ou perda auditiva flutuante', a:'Encaminhe para audiometria e imitanciometria.'}],
 trocar:'Sem ganho após 8–12 sessões: reavalie a audição e o diagnóstico; foque em estratégias compensatórias e em consciência fonológica.',
 refs:['Pereira LD, Schochat E. Testes auditivos comportamentais para avaliação do processamento auditivo central. Pró-Fono.','Biaggio EPV et al. Permanência do efeito do treinamento auditivo em sujeitos com transtorno do processamento auditivo. O Mundo da Saúde.']};

M.cf = { nome:'Consciência fonológica e leitura', sigla:'CF', idade:'4–12 anos (e adolescentes com dislexia)', ev:'forte', cert:'Não exige certificação. Programas publicados no Brasil (ex.: Capovilla & Capovilla) seguem a mesma progressão.',
 resumo:'Treino progressivo da percepção dos sons da fala — palavras, rimas, sílabas e fonemas — ligado às letras. É a base da alfabetização e da remediação de dificuldades de leitura e escrita.',
 quando:['TDAH, TDL ou dislexia com dificuldade de leitura/escrita','Síndrome de Down na alfabetização','AH/SD com dislexia (dupla excepcionalidade)'],
 principios:['Ir do maior para o menor: palavra → rima → sílaba → fonema','Ir do mais fácil para o mais difícil: identificar → segmentar → manipular','Ligar o som à letra assim que possível (o efeito é maior)','Usar pistas visuais e corporais (palmas, fichas, blocos)','Sessões curtas, frequentes, com jogos'],
 dose:'2× por semana, 30–45 min, por 10–20 semanas, com jogos de 5–10 min em casa.',
 inicio:['Aplicar o CONFIAS (ou provas de consciência fonológica) para achar o nível','Avaliar o conhecimento das letras e seus sons','Ditado e leitura de palavras e pseudopalavras'],
 sess:[
  {n:'1–3', t:'Palavras e rimas', obj:'Perceber as palavras na frase e identificar e produzir rimas.', prep:['Cartas de rima impressas','Livro de versos infantis'],
   at:[
    {t:'Memória das rimas', min:15, il:'rima', passos:['Espalhe as cartas viradas','Cada jogador vira duas e diz os nomes em voz alta','Se rimarem, fica com o par','Peça para dizer mais uma palavra que rime (pode inventar)'], obs:['Distingue rima de mesma sílaba inicial?','Produz rimas sozinho?'], ok:'8 de 10 rimas identificadas.', mat:'cf_cartas'}]},
  {n:'4–8', t:'Sílabas', obj:'Segmentar, identificar e manipular sílabas.', prep:['Fichas ou blocos coloridos','Figuras de 1 a 4 sílabas'],
   at:[
    {t:'Bater palmas e montar blocos', min:15, il:'silabas', passos:['Diga a palavra e bata uma palma por sílaba','Coloque um bloco para cada sílaba','Pergunte: qual a primeira? a última?','Retire um bloco: “bo-ne-ca sem ne?” → “boca”','Junte sílabas ditas separadas: “ja-ne-la” → janela'], obs:['Conta sílabas de palavras longas?','Consegue omitir a do meio?'], ok:'80% em segmentar e 70% em omitir sílaba.', mat:'cf_cartas'}]},
  {n:'9–16', t:'Fonemas e letras', obj:'Identificar, juntar e trocar sons, ligando-os às letras.', prep:['Letras móveis','Espelho','Lista de palavras CVC (sol, mar, pão)'],
   at:[
    {t:'Som inicial e troca de som', min:20, il:'rima', passos:['Mostre a letra e faça o som (não o nome da letra): /m/ não “eme”','Encontrem figuras que começam com esse som','Junte sons: /s/ /o/ /l/ → sol (síntese)','Troque um som: “pato” com /b/ → “bato”; mostre com letras móveis','Escreva a palavra nova'], obs:['Diferencia som e nome da letra?','Consegue juntar sons em palavra?'], ok:'80% em síntese e 70% em troca de fonemas com letras.', mat:'cf_registro'}]},
 ],
 avancar:'Mude de nível ao atingir 80% de acerto em duas sessões seguidas.',
 alta:['Desempenho adequado à idade/escolaridade no CONFIAS','Leitura de palavras e pseudopalavras com precisão'],
 seNao:[
  {s:'Não percebe rimas após várias sessões', c:'Atenção ao final da palavra ainda difícil', a:'Exagere a rima, use músicas e poemas, reduza para 2 opções. Pode seguir para sílabas: não trave no nível da rima.'},
  {s:'Confunde nome e som da letra', c:'Ensino da letra pelo nome', a:'Use só o som, com gesto e imagem associada (ex.: /mmm/ com mão na barriga).'},
  {s:'Acerta oralmente mas não transfere para a escrita', c:'Falta de ligação som-letra', a:'Coloque letras móveis em todas as atividades de fonema e faça ditado curto ao final.'},
  {s:'Progresso muito lento', c:'Memória de trabalho fonológica ou processamento auditivo', a:'Avalie RAN e processamento auditivo; use mais apoio visual e tátil (método multissensorial).'}],
 trocar:'Sem progresso em 3 meses: encaminhe para avaliação neuropsicológica e de dislexia; use método fônico multissensorial intensivo.',
 refs:['Moojen S et al. CONFIAS: Consciência Fonológica Instrumento de Avaliação Sequencial. Casa do Psicólogo.','Capovilla AGS, Capovilla FC. Alfabetização: método fônico. Memnon.','National Reading Panel. Teaching Children to Read, 2000.']};

M.narrativa = { nome:'Intervenção em narrativa', sigla:'Narrativa', idade:'4–14 anos', ev:'moderada', cert:'Não exige certificação. Inspirada em programas de gramática da história com apoio visual.',
 resumo:'Ensina a estrutura das histórias (personagem, cenário, problema, sentimento, ação, final) com apoios visuais que vão sendo retirados. Melhora a organização do discurso, a gramática e a compreensão de leitura.',
 quando:['TDL com narrativas curtas ou desorganizadas','TDAH com discurso que “pula” partes','Dificuldade de compreensão de leitura'],
 principios:['Ensinar a estrutura de forma explícita, com ícones','Ouvir → recontar → criar histórias próprias','Retirar o apoio visual aos poucos','Trabalhar gramática dentro da história (conectivos, verbos no passado)','Usar histórias reais da criança'],
 dose:'2× por semana, 30–45 min, por 8–12 semanas.',
 inicio:['Gravar o reconto de uma história com figuras e uma história pessoal','Contar quantas partes da gramática da história aparecem','Anotar uso de conectivos (e, aí, porque, então, mas)'],
 sess:[
  {n:'1–4', t:'Partes da história', obj:'Conhecer cada parte e identificá-la em histórias ouvidas.', prep:['Mapa visual da história impresso','Livro curto com um problema claro'],
   at:[
    {t:'Caça às partes', min:20, il:'historia', passos:['Leia a história mostrando as figuras','Pare e pergunte: quem é? onde está? qual o problema?','Coloque o ícone correspondente no mapa','Reconte juntos apontando os ícones em ordem'], obs:['Identifica personagem e cenário?','Percebe o problema e a solução?'], ok:'Identifica 5 das 6 partes com o mapa.', mat:'narrativa'}]},
  {n:'5–8', t:'Recontar', obj:'Recontar a história com estrutura completa.', prep:['Sequência de figuras para recortar'],
   at:[
    {t:'Ordenar e recontar', min:20, il:'historia', passos:['O paciente ordena as 4 figuras','Reconta usando o mapa','Você reformula a gramática (“aí ela pegou” → “então ela pegou”)','Na sessão seguinte, reconta sem as figuras, só com o mapa'], obs:['Usa conectivos de tempo e causa?','Mantém a ordem?'], ok:'Reconto com 5+ partes e 3 conectivos diferentes.', mat:'narrativa'}]},
  {n:'9–12', t:'Criar e contar histórias pessoais', obj:'Produzir narrativas próprias organizadas.', prep:['Fotos de um passeio ou acontecimento real'],
   at:[
    {t:'Minha história', min:20, il:'historia', passos:['Escolham um acontecimento real (fim de semana, festa)','Planejem com o mapa antes de contar','Grave o relato e escutem juntos','Comparem com a gravação da linha de base'], obs:['Inclui sentimentos e o final?','O ouvinte entende sem perguntar?'], ok:'Narrativa pessoal com 5 partes, sem o mapa.', mat:'narrativa'}]},
 ],
 avancar:'Retire um apoio por vez (figuras → mapa → nada) quando a criança atingir o critério com o apoio atual.',
 alta:['Narrativas com estrutura completa e conectivos variados, sem apoio','Melhora na compreensão de leitura relatada pela escola'],
 seNao:[
  {s:'Só descreve figuras (“tem um menino, tem uma bola”)', c:'Não percebe a ligação entre eventos', a:'Trabalhe causa e efeito com 2 figuras (“por que caiu?”) antes da história inteira.'},
  {s:'Esquece partes no reconto', c:'Memória de trabalho', a:'Use histórias mais curtas e o mapa como lembrete; pratique com a mesma história várias vezes.'},
  {s:'Gramática muito pobre atrapalha', c:'Morfossintaxe é o maior problema', a:'Combine com reformulação (recasting) de alvos gramaticais dentro da narrativa.'}],
 trocar:'Sem ganho em 12 semanas: reavalie compreensão de frases e vocabulário; foque nesses pré-requisitos.',
 refs:['Petersen DB. A systematic review of narrative-based language intervention with children who have language impairment. CICSD, 2011.','Spencer TD, Petersen DB. Story Champs (narrative language intervention).']};

M.fe = { nome:'Linguagem para funções executivas e autorregulação', sigla:'FE', idade:'6 anos ao adulto', ev:'emergente', cert:'Não exige certificação. Trabalho em parceria com neuropsicologia e psicologia.',
 resumo:'Usa a linguagem como ferramenta de autorregulação: fala interna e autoinstrução (parar, pensar, fazer, conferir), planejamento verbal de tarefas, compreensão de instruções longas e organização do discurso.',
 quando:['TDAH com impulsividade nas tarefas e no discurso','Dificuldade em seguir instruções com vários passos','AH/SD com desorganização (dupla excepcionalidade)'],
 principios:['Tornar visível o processo de pensar em voz alta','Modelar a autoinstrução e depois retirar o apoio (fala alta → sussurro → interna)','Dividir tarefas em passos e prever o tempo','Usar tarefas reais (dever de casa, recados)','Reforçar o processo, não só o resultado'],
 dose:'Semanal, 45 min, por 12–16 semanas, com missões para casa e escola.',
 inicio:['Observar a execução de uma tarefa de 4 passos sem ajuda','Medir o seguimento de instruções de 2, 3 e 4 partes','Questionário de funções executivas com a família/escola (ex.: BRIEF, se disponível)'],
 sess:[
  {n:'1–4', t:'Parar, pensar, fazer, conferir', obj:'Aprender a sequência de autoinstrução.', prep:['Cartões de autoinstrução','Jogo de tabuleiro ou quebra-cabeça simples'],
   at:[
    {t:'Pensar em voz alta', min:15, il:'plano', passos:['Mostre os 4 cartões e explique cada um','Faça uma tarefa falando alto cada passo (modelo)','O paciente faz a mesma tarefa falando alto','Depois em sussurro; depois “na cabeça” apontando os cartões'], obs:['Para antes de começar?','Confere no final?'], ok:'Usa os 4 passos falando sozinho em 2 tarefas.', mat:'fe_plano'}]},
  {n:'5–10', t:'Instruções e planejamento', obj:'Seguir instruções longas e planejar tarefas.', prep:['Instruções escritas de 2 a 5 passos','Cartas Parar · Pensar · Fazer · Conferir'],
   at:[
    {t:'Instruções em camadas', min:15, il:'plano', passos:['Dê uma instrução de 3 partes (“pegue o lápis azul, desenhe um sol e escreva seu nome embaixo”)','Ensine a repetir para si antes de fazer','Peça para fazer marcas nos dedos para cada parte','Aumente para 4–5 partes'], obs:['Repete a instrução antes de agir?','Quantas partes lembra?'], ok:'Executa instruções de 4 partes com 80% de acerto.', mat:'fe_plano'},
    {t:'Previsão de tempo', min:10, il:'plano', passos:['Antes de uma tarefa, o paciente estima o tempo','Cronometre','Compare e converse sobre a diferença'], obs:['As estimativas melhoram?'], ok:'Diferença entre previsão e real menor que 30%.', mat:'fe_plano'}]},
  {n:'11–16', t:'Discurso organizado e generalização', obj:'Planejar o que vai dizer e aplicar no dia a dia.', prep:['Tema de apresentação escolar ou recado a dar'],
   at:[
    {t:'Planejar antes de falar', min:20, il:'palco', passos:['Escolha uma tarefa real (explicar um jogo, dar um recado)','Planeje em tópicos: começo, 2–3 pontos, fim','O paciente explica e você faz perguntas de ouvinte','Combine uma missão para a semana (usar o plano na escola)'], obs:['Segue o plano?','O ouvinte entende sem pedir esclarecimento?'], ok:'Explicação clara em 3 partes, avaliada pelo ouvinte.', mat:'fe_plano'}]},
 ],
 avancar:'Retire o apoio visual quando o paciente usar a estratégia sem lembrete em 2 sessões.',
 alta:['Usa as estratégias de forma autônoma','Família/escola relatam melhora na organização'],
 seNao:[
  {s:'Sabe a estratégia mas não usa na hora', c:'Impulsividade vence', a:'Coloque o cartão visível na mesa da escola e combine um sinal discreto com o professor.'},
  {s:'Acha chato e se recusa', c:'Pouca motivação', a:'Use jogos e desafios com pontos; aplique em temas de interesse.'},
  {s:'Nenhum progresso', c:'TDAH sem tratamento médico ou ansiedade/humor', a:'Discuta com o médico e a psicologia; ajuste expectativas e foque em adaptações ambientais.'}],
 trocar:'Sem progresso em 12 semanas: priorize adaptações escolares e trabalho em equipe com neuropsicologia.',
 refs:['Meichenbaum D, Goodman J. Training impulsive children to talk to themselves. J Abnorm Psychol, 1971.','Singer BD, Bashir AS. What are executive functions and self-regulation and what do they have to do with language-learning disorders? LSHSS, 1999.']};

M.mo = { nome:'Motricidade orofacial, alimentação e respiração', sigla:'MO', idade:'Bebês ao adulto', ev:'moderada', cert:'Não exige certificação. Técnicas como a Terapia de Regulação Orofacial (Castillo Morales) têm formação própria.',
 resumo:'Intervenção sobre tônus, postura e mobilidade de lábios, língua e bochechas e sobre as funções de sucção, mastigação, deglutição e respiração. Na síndrome de Down, a hipotonia afeta alimentação, fala e respiração.',
 quando:['Síndrome de Down (hipotonia orofacial, língua protrusa, respiração oral)','Dificuldade de alimentação e transição de consistências','Baba e postura de boca aberta'],
 principios:['Exercício funcional: treinar dentro da alimentação e da fala','Postura corporal antes da postura oral','Estimulação sensorial antes do motor','Progressão de consistências alimentares','Família como executora diária'],
 dose:'1–2 sessões semanais de 30–45 min + programa diário em casa (2× ao dia, 10 min).',
 inicio:['Aplicar protocolo de motricidade orofacial (AMIOFE ou MBGR)','Observar uma refeição (postura, utensílio, consistências)','Registrar respiração (nasal/oral) e postura de lábios em repouso','Fotos e vídeo para comparar depois'],
 sess:[
  {n:'1–3', t:'Postura e sensibilidade', obj:'Melhorar postura corporal e aceitar toques na face e na boca.', prep:['Cadeira com apoio para os pés','Escova macia, mordedores, luva'],
   at:[
    {t:'Estimulação sensorial da face', min:10, il:'toque_face', passos:['Posicione a criança sentada com tronco estável e pés apoiados','Faça toques firmes da bochecha em direção aos lábios','Estimule o lábio superior para baixo com o dedo','Use escova macia nas gengivas e na língua, sempre avisando antes'], obs:['Aceita o toque ou se defende?','Melhora o fechamento labial depois?'], ok:'Aceita toque intraoral sem defesa em 3 sessões.', mat:'mo_down'}]},
  {n:'4–10', t:'Lábios, língua e sopro', obj:'Ganhar força e controle de lábios e língua.', prep:['Bolhas, apitos, canudos curtos e grossos','Espelho'],
   at:[
    {t:'Exercícios em forma de jogo', min:15, il:'boca_espelho', passos:['Na frente do espelho, faça “bico” e “sorriso” alternados (imite um peixe e um palhaço)','Lamba mel ou iogurte do lábio superior e guarde a língua','Sopre bolhas e apitos, aumentando a distância','Sugue líquido grosso com canudo curto'], obs:['A língua fica dentro da boca no repouso?','Faz o movimento sem compensar com a mandíbula?'], ok:'Lábios fechados em repouso por 2 minutos durante a atividade.', mat:'mo_down'}]},
  {n:'11+', t:'Mastigação e transição alimentar', obj:'Mastigar dos dois lados e aceitar novas consistências.', prep:['Alimentos de consistências diferentes trazidos pela família','Tabela de consistências'],
   at:[
    {t:'Refeição terapêutica', min:15, il:'alimentacao', passos:['Comece com a consistência que a criança já aceita','Ofereça um pedaço firme (palito de cenoura cozida) no lado do molar','Alterne os lados','Introduza aos poucos a próxima consistência','Use copo aberto e canudo em vez de mamadeira'], obs:['Lateraliza o alimento?','Engasga ou tosse?'], ok:'Mastiga dos dois lados e aceita a próxima consistência sem engasgos.', mat:'mo_down'}]},
 ],
 avancar:'Avance a consistência quando a atual for aceita sem engasgo em 3 refeições observadas.',
 alta:['Funções orais adequadas para a idade','Postura de lábios fechados e língua dentro em repouso','Família mantém as orientações'],
 seNao:[
  {s:'Tosse ou engasgo frequentes', c:'Risco de aspiração', a:'Pare a progressão e encaminhe para avaliação de deglutição (videodeglutograma) com o médico.'},
  {s:'Respiração oral persistente', c:'Obstrução nasal (adenoide, rinite)', a:'Encaminhe ao otorrino; sem resolver a via aérea, a postura oral não se mantém.'},
  {s:'Recusa alimentar forte', c:'Aversão sensorial ou experiência negativa', a:'Volte para dessensibilização e brincadeira com alimentos; envolva a TO.'},
  {s:'Não faz os exercícios em casa', c:'Programa longo ou difícil', a:'Reduza para 2 exercícios dentro de rotinas (escovação, refeição).'}],
 trocar:'Se em 3 meses não houver mudança de postura em repouso, reavalie com a equipe (ortodontia, otorrino, fisioterapia).',
 refs:['Felício CM, Ferreira CLP. Protocol of orofacial myofunctional evaluation with scores (AMIOFE). IJPO, 2008.','Castillo Morales R. Terapia de Regulação Orofacial. Memnon.']};

M.sinaiscaa = { nome:'Comunicação total: sinais e figuras junto com a fala', sigla:'Com. total', idade:'1–6 anos', ev:'moderada', cert:'Não exige certificação. Use sinais de Libras como apoio à fala (ou um sistema como o Makaton).',
 resumo:'Sinais manuais e figuras usados junto com a palavra falada. Aproveita a memória visual (ponto forte na síndrome de Down), reduz a frustração e serve de ponte para a fala, que costuma substituir os sinais com o tempo.',
 quando:['Síndrome de Down antes ou no início da fala','DI com fala limitada','Crianças que entendem mais do que falam'],
 principios:['Sinal SEMPRE junto com a palavra falada','Começar com 10–20 sinais da rotina','Toda a família e a escola usam os mesmos sinais','Aceitar aproximações do sinal','Retirar o sinal naturalmente quando a palavra falada aparecer'],
 dose:'Semanal na clínica (30–45 min) + uso diário em todas as rotinas da casa.',
 inicio:['Listar com a família as 20 palavras mais úteis da rotina','Observar gestos que a criança já usa','Registrar quais palavras já fala'],
 sess:[
  {n:'1–4', t:'Primeiros sinais', obj:'A criança imitar e compreender os primeiros sinais.', prep:['Lista de sinais com fotos','Objetos e alimentos reais'],
   at:[
    {t:'Sinal + palavra na rotina', min:15, il:'sinal_mao', passos:['Escolha 3 sinais da atividade (comer, mais, acabou)','Faça o sinal e diga a palavra, devagar, toda vez','Se a criança fizer qualquer aproximação, responda na hora','Ajude a formar a mão de leve se ela tentar'], obs:['Imita o sinal?','Usa sozinha para pedir?'], ok:'Usa 3 sinais sozinha.', mat:'sinais'}]},
  {n:'5–12', t:'Ampliar e combinar', obj:'Vocabulário de 20+ sinais/palavras e combinação de 2.', prep:['Prancha de figuras da rotina'],
   at:[
    {t:'Dois sinais juntos', min:15, il:'sinal_mao', passos:['Modele combinações: “mais + suco”, “acabou + banho”','Leia em voz alta o que a criança sinaliza (“você quer MAIS SUCO!”)','Comece a pausar antes da palavra para a criança falar'], obs:['Combina sinais?','Vocaliza junto?'], ok:'Combina 2 sinais ou palavras 5 vezes por sessão.', mat:'caa_prancha'}]},
 ],
 avancar:'Introduza novos sinais quando os atuais forem usados espontaneamente em casa.',
 alta:['A fala passa a ser a forma principal de comunicação','Sinais usados apenas como apoio em palavras difíceis'],
 seNao:[
  {s:'Família não usa os sinais', c:'Medo de atrasar a fala ou esquecimento', a:'Explique a evidência; dê uma folha com 5 sinais por semana; mande vídeo curto.'},
  {s:'Sinal sai muito diferente', c:'Motricidade fina (hipotonia)', a:'Aceite a aproximação; escolha sinais com movimentos simples.'},
  {s:'Usa sinais e não tenta falar', c:'Sinal mais fácil e eficaz', a:'Faça pausa antes da palavra e reforce mais a fala. Investigue apraxia se a fala não evoluir.'}],
 trocar:'Se a coordenação motora impedir os sinais, use prancha de figuras (CAA).',
 refs:['Buckley S. Speech, language and communication development for individuals with Down syndrome. Down Syndrome Education International.','Kumin L. Early Communication Skills for Children with Down Syndrome. Woodbine House.']};

M.leitura = { nome:'Leitura precoce pela via visual (leitura global)', sigla:'Leitura', idade:'3–8 anos', ev:'emergente', cert:'Não exige certificação. Inspirado nos programas “See and Learn” (Down Syndrome Education International).',
 resumo:'Ensina palavras escritas inteiras (pareamento, seleção e nomeação) usando a memória visual. A palavra escrita vira apoio para a fala e para a linguagem; depois combina-se com a consciência fonológica.',
 quando:['Síndrome de Down a partir dos 3 anos','DI com boa memória visual','Crianças com pouca fala que reconhecem figuras'],
 principios:['Parear → selecionar → nomear (do mais fácil ao mais difícil)','Começar com palavras de alto interesse','Sessões curtas e sem erro (aprendizagem sem erro)','Ler livros personalizados com fotos da criança','Depois incluir sons e letras'],
 dose:'Sessões curtas (10–15 min) várias vezes por semana; na clínica, uma parte da sessão de 45 min.',
 inicio:['Verificar se pareia figuras iguais','Escolher 4–6 palavras de alto interesse com a família','Registrar quais palavras escritas já reconhece'],
 sess:[
  {n:'1–4', t:'Parear palavras', obj:'Colocar palavra escrita sobre a palavra igual.', prep:['Cartões figura + palavra impressos (2 cópias)'],
   at:[
    {t:'Igual com igual', min:10, il:'cartela_palavra', passos:['Coloque 2 cartões de palavra na mesa','Entregue uma cópia de um deles e diga “põe junto do igual”','Diga a palavra ao colocar','Aumente para 3–4 opções'], obs:['Pareia sem pistas?'], ok:'Pareia 4 palavras entre 4 opções.', mat:'leitura_global'}]},
  {n:'5–10', t:'Selecionar e nomear', obj:'Apontar a palavra dita e depois ler em voz alta.', prep:['Loto de palavras','Livro personalizado'],
   at:[
    {t:'Mostre a palavra…', min:10, il:'cartela_palavra', passos:['Coloque 3 palavras','Peça “mostre BOLA”','Depois mostre uma palavra e pergunte “o que está escrito?”','Use a palavra escrita para frases: “BOLA AZUL”'], obs:['Seleciona sem figura?','Tenta falar ao ler?'], ok:'Seleciona 80% e nomeia 50% das palavras.', mat:'leitura_global'}]},
 ],
 avancar:'Acrescente 2–3 palavras novas quando as atuais forem selecionadas com 80% de acerto.',
 alta:['Leitura de vocabulário funcional e frases curtas','Transição para alfabetização com consciência fonológica'],
 seNao:[
  {s:'Escolhe ao acaso', c:'Palavras visualmente parecidas ou atenção curta', a:'Use palavras de formatos muito diferentes; reduza para 2 opções; sessões de 5 min.'},
  {s:'Desinteresse', c:'Palavras pouco significativas', a:'Use nomes da família, comidas e personagens favoritos.'}],
 trocar:'Se não parear após 4 semanas, trabalhe pareamento de objetos e figuras antes.',
 refs:['Buckley S, Bird G. Teaching children with Down syndrome to read. Down Syndrome Research and Practice, 1993.','Down Syndrome Education International. See and Learn programmes.']};
