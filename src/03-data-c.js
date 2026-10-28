M.dttc = { nome:'Pista Dinâmica Temporal e Tátil', sigla:'DTTC', idade:'2 anos ao adulto', ev:'forte', cert:'Descrito por Edythe Strand (2020). Não exige certificação, mas cursos ajudam na fidelidade.',
 resumo:'Abordagem motora para apraxia, sobretudo grave. Parte de palavras funcionais inteiras e usa uma hierarquia de apoio — produção simultânea lenta, pistas táteis e gestuais, eco imediato, eco com pausa, espontâneo — subindo e descendo conforme a resposta em cada tentativa.',
 quando:['Apraxia de fala na infância moderada a grave','Criança que ainda produz poucas sílabas','Síndrome de Down com apraxia associada'],
 principios:['Treinar o MOVIMENTO em palavras inteiras, não sons isolados','Muitas repetições por sessão (50–100+ tentativas)','Ajustar o apoio tentativa a tentativa (dinâmico)','Princípios de aprendizagem motora: prática distribuída e variada, feedback reduzido com o tempo','Poucos alvos (4–6) de cada vez, funcionais para a criança'],
 dose:'Alta frequência: idealmente 3–4 sessões curtas (30 min) por semana. Sessões só 1× por semana mostram menos efeito.',
 inicio:['DEMSS ou avaliação dinâmica para achar em que nível de apoio a criança acerta','Escolher 4–6 alvos funcionais (nomes, “mais”, “abre”, “tchau”)','Fazer sondagem de linha de base em alvos treinados e não treinados (sem pistas)'],
 sess:[
  {n:'1–4', t:'Alvos com máximo apoio', obj:'Produzir os alvos corretamente com apoio simultâneo.', prep:['4–6 palavras-alvo funcionais escolhidas','Brinquedo de “tabuleiro” para gerar muitas tentativas (cada resposta = um passo no jogo)'],
   at:[
    {t:'Produção simultânea lenta', min:15, il:'boca_espelho', passos:['Peça para a criança olhar para a sua boca','Digam o alvo JUNTOS, bem devagar, prolongando a vogal','Use pista tátil (toque no lábio para /m/, /p/) ou gesto para a vogal','Quando acertar 2–3 vezes, aumente a velocidade para o normal','Se errar, volte um passo: mais lento ou mais pista'], obs:['Acerta a vogal?','Transição suave entre as sílabas?','Em que nível acerta?'], ok:'Acerta o alvo no nível simultâneo em 80% das tentativas.', mat:'dttc_lista'},
    {t:'Pista tátil no ponto articulatório', min:10, il:'toque_face', passos:['Mostre a pista: toque suave no queixo para abrir (/a/), nos lábios para fechar (/m/, /p/)','Use a mesma pista sempre para o mesmo som','Vá reduzindo: toque → gesto perto do rosto → nada'], obs:['A pista ajuda ou distrai?'], ok:'Precisa só de gesto (sem toque) para 2 alvos.', mat:'dttc_lista'}]},
  {n:'5–10', t:'Eco imediato e eco com pausa', obj:'Produzir o alvo após o modelo, sem falar junto.', prep:['Mesmos alvos + 1–2 novos'],
   at:[
    {t:'Eu falo, você repete', min:20, il:'boca_espelho', passos:['Diga o alvo e a criança repete logo em seguida','Depois diga e espere 2–3 s antes de ela repetir (eco com pausa)','Misture os alvos em ordem aleatória (prática variada)','Dê feedback específico só de vez em quando (“fechou bem a boca!”)'], obs:['Mantém a precisão com pausa?','Aparece vogal intrusa (schwa) entre consoantes?'], ok:'80% de acerto em eco com pausa em 3 alvos.', mat:'dttc_lista'}]},
  {n:'11+', t:'Espontâneo, frases e prosódia', obj:'Usar os alvos sem modelo e em frases, com entonação variada.', prep:['Figuras e situações que provocam os alvos','Frases-veículo (“eu quero __”)'],
   at:[
    {t:'Sem modelo e com prosódia', min:20, il:'brincar_frente', passos:['Provoque o alvo com pergunta ou figura (“o que você quer?”)','Coloque o alvo em frase-veículo','Varie a entonação: pergunta, surpresa, cochicho','Faça sondagem dos alvos não treinados a cada 4 sessões'], obs:['Generaliza para palavras não treinadas?','Usa o alvo na fala do dia a dia?'], ok:'Alvo espontâneo em 80% das oportunidades; aparecem ganhos em não treinados.', mat:'dttc_lista'}]},
 ],
 avancar:'Troque o alvo quando a criança o produz espontaneamente em 80% das tentativas em 2 sessões. Mantenha os antigos em revisão.',
 alta:['Fala inteligível na maior parte das situações','Generalização para palavras novas sem treino','Prosódia adequada'],
 seNao:[
  {s:'Não acerta nem no nível simultâneo', c:'Alvo complexo demais', a:'Simplifique a estrutura (CV, CVCV repetida) ou escolha sons que já produz; use vogais com pista tátil forte.'},
  {s:'Acerta na sessão mas não na sondagem', c:'Apoio retirado devagar ou prática só em bloco', a:'Misture os alvos (prática aleatória), reduza a frequência do feedback e faça sondagens sem apoio.'},
  {s:'Vogal intrusa entre consoantes (“bolo” → “b-ə-olo”)', c:'Planejamento da transição', a:'Treine encontros em velocidade mais lenta e com pista de continuidade (deslizar o dedo).'},
  {s:'Pouco progresso com 1 sessão/semana', c:'Intensidade insuficiente', a:'Aumente a frequência (3–4×/semana, mesmo que mais curtas) ou ensine a família a fazer 5–10 min diários.'},
  {s:'Criança se recusa', c:'Muitos erros e frustração', a:'Desça na hierarquia para garantir acerto; use reforço com jogos de muitas jogadas.'}],
 trocar:'Se depois de 12 semanas intensivas não houver ganho nas sondagens, considere ReST (5+ anos) ou NDP3 e reforce a CAA.',
 refs:['Strand EA. Dynamic Temporal and Tactile Cueing: a treatment strategy for childhood apraxia of speech. AJSLP, 2020;29(1):30-48.','Maas E et al. Motor-based intervention protocols in treatment of CAS. Curr Dev Disord Rep, 2014.']};

M.rest = { nome:'Tratamento da Transição Rápida de Sílabas', sigla:'ReST', idade:'A partir de 5 anos', ev:'forte', cert:'Universidade de Sydney (McCabe, Murray, Thomas, Ballard). Manual gratuito para clínicos; já usado com crianças brasileiras.',
 resumo:'Tratamento motor com pseudopalavras de 2–3 sílabas que treina, ao mesmo tempo, os sons corretos, a transição suave entre sílabas e a tonicidade correta (sílaba forte/fraca). As pseudopalavras não têm erros habituais e favorecem a generalização.',
 quando:['Apraxia leve a grave em crianças de 5+ anos','Erros de tonicidade e fala “silabada”','Crianças que já imitam sílabas CV'],
 principios:['Três alvos em cada produção: sons, transição e tonicidade','20 pseudopalavras treinadas, metade forte-fraco e metade fraco-forte','Pré-prática curta com muito apoio; prática longa com feedback reduzido e aleatório','Muitas tentativas por sessão (cerca de 100)','Sondagens frequentes de itens não treinados e palavras reais'],
 dose:'Pesquisas usam 4× por semana por 3 semanas (12 sessões de ~50 min) ou 2×/semana por 6 semanas. Uma sessão por semana se mostrou pouco eficaz.',
 inicio:['Escolher 4 consoantes e 4 vogais que a criança produz isoladas','Montar 20 pseudopalavras (folha gerada automaticamente)','Linha de base: gravar as 20 treinadas + 20 não treinadas + 10 palavras reais'],
 sess:[
  {n:'Pré-prática', t:'Pré-prática (10–15 min no início de cada sessão)', obj:'Garantir que a criança entende e consegue as três metas.', prep:['Cartas das palavras malucas impressas','Cartões com sílaba forte em destaque (letra maior ou cor)'],
   at:[
    {t:'Ensinar com apoio', min:12, il:'silabas', passos:['Explique as três metas: “sons certos, sem paradas, a sílaba forte bem forte”','Modele cada pseudopalavra; a criança imita','Dê feedback imediato e detalhado','Use pistas: bater na mesa na sílaba forte, deslizar o dedo para unir sílabas','Siga para a prática quando acertar 5 itens seguidos'], obs:['Diferencia forte-fraco de fraco-forte?','Para entre as sílabas?'], ok:'5 acertos seguidos nas três metas.', mat:'rest_lista'}]},
  {n:'Prática', t:'Prática (restante da sessão)', obj:'Muitas repetições com pouco feedback, em ordem aleatória.', prep:['Embaralhe as 20 pseudopalavras','Contador de tentativas'],
   at:[
    {t:'Blocos aleatórios', min:35, il:'silabas', passos:['Apresente as pseudopalavras escritas, em blocos de 5–10, sem modelo','A criança lê/produz cada uma','Dê feedback só ao final de cada bloco e só sobre o resultado (“acertou 7 de 10”)','Faça pausas de 2 min entre blocos (jogo rápido)','Meta: cerca de 100 tentativas na sessão'], obs:['% de acerto nas três metas','Qual meta falha mais?'], ok:'80% de acerto nas três metas na prática.', mat:'rest_lista'}]},
  {n:'Sondagem', t:'Sondagem (início de algumas sessões e ao fim do bloco)', obj:'Medir aprendizagem, não desempenho.', prep:['Lista de não treinadas e palavras reais'],
   at:[
    {t:'Sondagem sem apoio', min:10, il:'silabas', passos:['Antes da pré-prática, peça as 20 treinadas, 10 não treinadas e 10 palavras reais','Sem feedback','Grave para pontuar depois'], obs:['Acerto em não treinadas e palavras reais (generalização)'], ok:'Aumento em relação à linha de base em treinadas e não treinadas.', mat:'rest_lista'}]},
 ],
 avancar:'Quando atingir 80% em 2 sondagens, troque para pseudopalavras mais complexas (mais sílabas, encontros consonantais) ou frases com pseudopalavras.',
 alta:['Tonicidade e transições adequadas em palavras reais polissílabas','Inteligibilidade boa na conversa'],
 seNao:[
  {s:'Bom na prática, ruim na sondagem', c:'Normal no início: desempenho ≠ aprendizagem', a:'Não aumente o feedback. Garanta a intensidade (frequência semanal). Avalie após o bloco completo de 12 sessões.'},
  {s:'Não consegue imitar as pseudopalavras', c:'Ainda não tem CV estáveis', a:'Volte para DTTC ou NDP3 até ter sílabas estáveis; reduza para 2 sílabas.'},
  {s:'Acerta sons, erra a tonicidade', c:'Prosódia é o núcleo do problema', a:'Na pré-prática, use batida forte na mesa e marcação visual; inclua mais itens fraco-forte (mais difíceis em português).'},
  {s:'Fala “silabada”, com pausas', c:'Transição', a:'Use deslizar o dedo sob a palavra e treine 2 sílabas antes de 3.'}],
 trocar:'Se não houver ganho após 12 sessões intensivas, volte a um método mais apoiado (DTTC) e reavalie o diagnóstico.',
 refs:['McCabe P, Thomas DC, Murray E. Rapid Syllable Transition Treatment: a treatment for CAS. Perspectives ASHA SIG, 2020.','Murray E, McCabe P, Ballard KJ. RCT comparing ReST and NDP3. JSLHR, 2015.','Thomas D et al. Weekly treatment for CAS with ReST. JSLHR, 2024.','Estudo de caso com crianças brasileiras: CoDAS (SciELO).']};

M.ndp = { nome:'Abordagem por camadas (estilo Nuffield NDP3)', sigla:'NDP3', idade:'3–7 anos', ev:'forte', cert:'O Nuffield Dyspraxia Programme é um material comercial (manual + 1.900 figuras). Aqui está a lógica de progressão para planejar sessões.',
 resumo:'Abordagem motora “de baixo para cima”: constrói programas motores de sons, sílabas, palavras e frases como camadas de um muro, mantendo as camadas anteriores em prática enquanto sobe para a seguinte.',
 quando:['Apraxia com dificuldade em sons isolados e sílabas simples','Crianças pequenas (3–7 anos)','Fala muito restrita'],
 principios:['Começar pelo que a criança já produz','Pequenos passos que garantem sucesso','Muita repetição com figuras motivadoras','Camadas cumulativas: revisar o que foi aprendido','Família pratica em casa'],
 dose:'Pesquisa comparativa com ReST usou 4×/semana por 3 semanas. Na prática, 2–3×/semana + prática diária em casa.',
 inicio:['Inventário de sons e estruturas silábicas (o que já produz)','Escolher a camada de início','Linha de base com figuras de cada camada'],
 sess:[
  {n:'1–4', t:'Sons e sílabas CV', obj:'Estabilizar sons isolados e sílabas consoante-vogal.', prep:['Figuras de sons (cobra /s/, abelha /z/, “psiu” /p/)','Espelho'],
   at:[
    {t:'Som com figura-pista', min:15, il:'muro', passos:['Associe cada som a uma figura (cobra = /sss/)','Treine o som isolado e depois junto com vogais (sa, si, su)','Faça 10–20 repetições por jogo (cada uma = uma peça no tabuleiro)','Mantenha um som já aprendido em cada jogo'], obs:['Consistência do som em 10 tentativas','Precisa ver a boca?'], ok:'Sílaba CV correta em 8 de 10 tentativas.', mat:'ndp_muro'}]},
  {n:'5–12', t:'CVCV e palavras', obj:'Sequenciar sílabas iguais e depois diferentes.', prep:['Figuras CVCV (papa, bebê, bola, pato)'],
   at:[
    {t:'Juntar sílabas', min:20, il:'muro', passos:['Comece com sílabas repetidas (pa-pa, bo-bo)','Depois mude a vogal (pa-pi) e depois a consoante (pa-ta)','Use figuras de palavras reais','Mantenha 1 alvo antigo em cada atividade'], obs:['Mantém a sequência?','Troca sons na segunda sílaba?'], ok:'80% em palavras CVCV variadas.', mat:'ndp_muro'}]},
  {n:'13+', t:'Polissílabas e frases', obj:'Palavras mais longas e frases curtas.', prep:['Figuras de 3 sílabas e frases-veículo'],
   at:[
    {t:'Frases de 2–3 palavras', min:20, il:'muro', passos:['Use frase-veículo (“é um __”, “quero __”)','Treine palavras de 3 sílabas','Faça jogos de descrição com as figuras'], obs:['Precisão em frase vs. palavra isolada'], ok:'80% em frase-veículo.', mat:'ndp_muro'}]},
 ],
 avancar:'Suba de camada quando a atual estiver estável (80%), mas continue revisando as anteriores.',
 alta:['Fala inteligível com estruturas variadas','Generalização para palavras novas'],
 seNao:[
  {s:'Fica muito tempo na mesma camada', c:'Passo grande demais', a:'Divida em passos menores; use mais pistas visuais e táteis.'},
  {s:'Perde o que tinha aprendido', c:'Camadas antigas fora da prática', a:'Inclua revisão em toda sessão (cumulativo).'},
  {s:'Sem prática em casa', c:'Material não enviado', a:'Mande 1 folha de figuras por semana com 5 min de prática diária.'}],
 trocar:'Com sílabas estáveis e 5+ anos, considere ReST para tonicidade e transições.',
 refs:['Williams P, Stephens H. Nuffield Centre Dyspraxia Programme, 3rd ed. NDP3, 2004.','Murray E, McCabe P, Ballard KJ. A randomized controlled trial for children with CAS comparing ReST and NDP3. JSLHR, 2015.']};

M.mit = { nome:'Terapia de Entonação Melódica', sigla:'MIT', idade:'Adultos (versões para crianças)', ev:'moderada', cert:'Não exige certificação. Protocolo de Sparks, Helm e Albert (1973).',
 resumo:'Usa a melodia e o ritmo da fala (entonação cantada em 2 tons) com batida da mão esquerda para ajudar pessoas com afasia não fluente grave a produzir frases. Avança por níveis até a fala com prosódia normal.',
 quando:['Afasia não fluente (Broca) grave','Compreensão relativamente preservada','Lesão unilateral à esquerda; consegue cantar canções conhecidas'],
 principios:['Entoar em 2 tons: sílaba tônica mais aguda','Uma batida da mão esquerda por sílaba','Frases funcionais e de alta frequência','Progressão: cantarolar → uníssono → retirada → repetição → resposta','Retirar a melodia ao final (sprechgesang → fala)'],
 dose:'Intensiva: 1 hora por dia, 5×/semana, por várias semanas é o ideal; menos que isso reduz o efeito.',
 inicio:['Confirmar critérios (compreensão, ausência de lesão bilateral)','Escolher 10–20 frases úteis com o paciente e a família','Linha de base: repetição e produção das frases sem MIT'],
 sess:[
  {n:'Nível 1', t:'Cantarolar e uníssono', obj:'Produzir frases curtas (2–3 sílabas) em uníssono.', prep:['Lista de frases com melodia marcada'],
   at:[
    {t:'Passos iniciais', min:20, il:'ritmo_mao', passos:['Sente-se de frente; segure a mão esquerda do paciente','Cantarole a melodia da frase batendo a mão dele (sem palavras)','Entoem a frase juntos, com batidas','Você entoa junto e depois para no meio (retirada); ele continua','Ele repete sozinho logo após o seu modelo'], obs:['Acompanha o ritmo?','Em que passo falha?'], ok:'Repete a frase entoada sozinho após o modelo (passo 4).', mat:'mit_frases'}]},
  {n:'Nível 2', t:'Repetição com pausa e resposta', obj:'Frases de 4–5 sílabas e responder a perguntas.', prep:['Frases do nível 2'],
   at:[
    {t:'Pausa e pergunta', min:25, il:'ritmo_mao', passos:['Entoe a frase; espere 6 s; o paciente repete','Faça uma pergunta entoada (“o que você quer?”) e ele responde com a frase','Diminua a batida aos poucos'], obs:['Responde à pergunta com a frase?','Mantém sem batida?'], ok:'80% das frases como resposta a pergunta.', mat:'mit_frases'}]},
  {n:'Nível 3', t:'Fala ritmada', obj:'Passar da entonação para a fala com prosódia normal.', prep:['Frases longas e funcionais'],
   at:[
    {t:'Sprechgesang', min:25, il:'ritmo_mao', passos:['Fale as frases com ritmo exagerado mas sem cantar','Depois em velocidade normal','Use nas conversas da sessão'], obs:['Frases fluentes sem melodia?'], ok:'Usa 10 frases funcionais na conversa.', mat:'mit_frases'}]},
 ],
 avancar:'Mude de nível quando atingir o último passo do nível atual na maioria das frases.',
 alta:['Frases funcionais usadas no dia a dia','Prosódia aceitável sem melodia'],
 seNao:[
  {s:'Não acompanha o ritmo', c:'Apraxia de membro ou atenção', a:'Use batida sem segurar a mão, ou só a melodia; reduza para 2 sílabas.'},
  {s:'Só funciona cantando', c:'Retirada da melodia rápida demais', a:'Fique mais tempo no sprechgesang; volte a entoar quando travar.'},
  {s:'Nenhum progresso após 4–6 semanas', c:'Perfil sem indicação (compreensão ruim)', a:'Reavalie a compreensão; troque para treino de roteiros ou CAA.'}],
 trocar:'Sem progresso ou com compreensão comprometida: Script Training, CIAT (se moderada) ou CAA.',
 refs:['Sparks R, Helm N, Albert M. Aphasia rehabilitation resulting from melodic intonation therapy. Cortex, 1974.','Norton A et al. Melodic Intonation Therapy: shared insights on how it is done and why it might help. Ann NY Acad Sci, 2009.']};

M.sfa = { nome:'Análise de Traços Semânticos', sigla:'SFA', idade:'Adultos (e adaptável a crianças)', ev:'forte', cert:'Não exige certificação. Protocolo de Boyle e Coelho (1995).',
 resumo:'Tratamento de anomia: diante de uma figura que não consegue nomear, a pessoa descreve 6 traços semânticos (categoria, uso, ação, propriedades, local, associação) numa grade. Isso ativa a rede de significado e facilita encontrar a palavra.',
 quando:['Anomia em afasia fluente ou não fluente','Compreensão suficiente para seguir a grade','Também útil em dificuldade de acesso lexical em crianças'],
 principios:['A pessoa gera os traços (não só escolhe)','Completar a grade sempre, acertando ou não o nome','Treinar itens e também observar não treinados','Pode ser feito em discurso (SFA em conversa)','Ensina uma estratégia que a pessoa usa sozinha'],
 dose:'2–3×/semana, 45–60 min, com 20–30 itens por sessão; 8–12 semanas.',
 inicio:['Teste de nomeação com 60–100 figuras (3 vezes, para estabilidade)','Escolher 20–30 itens que erra para tratar e 20 para controle','Registrar nomeação também em discurso (descrição de cena)'],
 sess:[
  {n:'1–3', t:'Aprender a grade', obj:'Usar a grade com apoio do terapeuta.', prep:['Tabuleiro de pistas impresso','Figuras de itens comuns'],
   at:[
    {t:'Grade com apoio', min:30, il:'grade_sfa', passos:['Mostre a figura e peça o nome','Acertando ou não, preencham os 6 traços (o paciente diz, você escreve)','Se não conseguir um traço, dê escolhas (“serve para comer ou para vestir?”)','Peça o nome de novo','Se errar, dê o nome, peça repetição e revise os traços'], obs:['Quantos traços gera sozinho?','Nomeia após a grade?'], ok:'Gera 4+ traços sozinho por item.', mat:'sfa_grade'}]},
  {n:'4–12', t:'Uso independente e em discurso', obj:'Usar a estratégia sozinho e na conversa.', prep:['Figuras de cena para descrever'],
   at:[
    {t:'Estratégia sozinho', min:30, il:'grade_sfa', passos:['O paciente faz a grade sem ajuda','Retire a grade impressa: ele lembra os traços de cabeça','Em descrição de cena, quando travar, use a estratégia','Sondagem de itens treinados e não treinados a cada 3 sessões'], obs:['Usa a estratégia espontaneamente?','Melhora em não treinados?'], ok:'80% dos itens treinados nomeados em 2 sondagens.', mat:'sfa_figuras'}]},
 ],
 avancar:'Troque a lista quando atingir 80% em 2 sondagens; inclua palavras do dia a dia do paciente.',
 alta:['Nomeação funcional na conversa','Usa a estratégia de forma autônoma quando trava'],
 seNao:[
  {s:'Gera traços mas não acha o nome', c:'Problema mais fonológico que semântico', a:'Acrescente pistas fonológicas (primeira sílaba) ou troque para Análise de Componentes Fonológicos (PCA).'},
  {s:'Não consegue gerar traços', c:'Compreensão ou semântica muito comprometidas', a:'Use escolha entre opções; itens mais concretos e frequentes.'},
  {s:'Melhora só nos treinados', c:'Esperado com frequência', a:'Treine itens úteis para o paciente; pratique em conversa.'}],
 trocar:'Sem melhora em 6–8 semanas: considere PCA, VNeST ou abordagem funcional.',
 refs:['Boyle M, Coelho CA. Application of semantic feature analysis as a treatment for aphasic dysnomia. AJSLP, 1995.','Efstratiadou EA et al. A systematic review of SFA therapy studies for aphasia. JSLHR, 2018.']};

M.vnest = { nome:'Fortalecimento da Rede Verbal', sigla:'VNeST', idade:'Adultos', ev:'moderada', cert:'Não exige certificação. Protocolo de Lisa Edmonds (2009, tutorial 2014).',
 resumo:'Tratamento centrado no verbo: a pessoa gera pares de “quem” e “o quê” para um verbo (o chef MEDE a farinha), lê as frases, julga frases certas e erradas e expande com onde/quando/por quê. Busca generalização para frases e discurso.',
 quando:['Afasia leve a moderada (também moderada a grave com adaptações)','Dificuldade em produzir frases e verbos','Compreensão para seguir os passos'],
 principios:['O verbo organiza a frase e ativa os papéis temáticos','Gerar vários pares para o mesmo verbo','Ir do verbo para a frase completa','Julgamento semântico de frases','Itens funcionais e generalização para discurso'],
 dose:'2–3×/semana, 60 min, cerca de 10–12 verbos por bloco; 10 semanas nos estudos.',
 inicio:['Sondagem de produção de frases com verbos treinados e não treinados','Amostra de discurso (contar um acontecimento)','Escolher 10 verbos transitivos frequentes'],
 sess:[
  {n:'1–10', t:'Sessão completa VNeST', obj:'Gerar 3 pares agente-objeto para cada verbo e frases expandidas.', prep:['Cartões de verbo e fichas em branco'],
   at:[
    {t:'Gerar a rede do verbo', min:25, il:'verbo_rede', passos:['Coloque o cartão do verbo no centro (MEDIR)','Peça 3 pares de “quem” e “o quê” (costureira-tecido, chef-farinha)','Se travar, dê opções escritas para escolher','O paciente lê as 3 frases em voz alta','Escolha um par e expanda: onde? quando? por quê?'], obs:['Quantos pares gera sozinho?','Produz a frase completa?'], ok:'3 pares sozinho em 80% dos verbos.', mat:'vnest'},
    {t:'Julgamento de frases', min:10, il:'verbo_rede', passos:['Leia frases com o verbo, certas e absurdas (“o cachorro mede a farinha”)','O paciente diz se faz sentido e corrige as erradas','Termine pedindo o verbo de memória e 1 par sem pistas'], obs:['Reconhece frases absurdas?'], ok:'90% de julgamento correto.', mat:'vnest'}]},
 ],
 avancar:'Troque o conjunto de verbos após o bloco; sonde verbos não treinados e discurso.',
 alta:['Frases mais completas e informativas no discurso','Ganho em itens não treinados'],
 seNao:[
  {s:'Não gera nenhum par', c:'Gravidade alta', a:'Use escolha entre 2–4 opções escritas/figuras; reduza para 1 par.'},
  {s:'Gera pares mas não monta a frase', c:'Dificuldade sintática', a:'Dê a estrutura (“___ mede ___”) e retire aos poucos.'},
  {s:'Sem generalização para conversa', c:'Pouca prática em discurso', a:'Acrescente ao final da sessão contar algo usando os verbos do dia.'}],
 trocar:'Sem progresso: considere Script Training para frases funcionais ou SFA para nomes.',
 refs:['Edmonds LA, Nadeau SE, Kiran S. Effect of VNeST on lexical retrieval of content words in sentences in persons with aphasia. Aphasiology, 2009.','Edmonds LA. Tutorial for VNeST. Perspectives on Neurophysiology and Neurogenic Speech and Language Disorders, 2014.']};

M.ciat = { nome:'Terapia de Linguagem Induzida por Restrição', sigla:'CIAT', idade:'Adultos', ev:'moderada', cert:'Não exige certificação. Protocolos de Pulvermüller (2001) e CIAT II (Johnson et al., 2014).',
 resumo:'Terapia intensiva em formato de jogo de cartas: os participantes pedem cartas só falando (sem gestos ou apontar). A exigência verbal aumenta aos poucos (modelagem) e a prática é concentrada em poucos dias.',
 quando:['Afasia crônica leve a moderada','Pessoa que compensa muito com gestos e evita falar','Disponibilidade para 2–3 horas por dia'],
 principios:['Prática concentrada (cerca de 3 h/dia por 10 dias)','Restrição: só comunicação verbal no jogo','Modelagem: aumentar a exigência conforme o sucesso','Jogos comunicativos (pedido real com consequência)','Pacote de transferência para a vida real (CIAT II)'],
 dose:'Clássico: 3 h/dia, 10 dias seguidos (30 h). Adaptações: 3–4 h/dia por 5 dias ou formato individual.',
 inicio:['Avaliação (MTL, Boston) e escala funcional de comunicação','Definir o nível inicial de exigência (nome / frase / com atributos)','Combinar com a família a fase de transferência'],
 sess:[
  {n:'Dias 1–3', t:'Nível 1: nome do objeto', obj:'Pedir as cartas com a palavra.', prep:['2 jogos de cartas com 15 pares de figuras','Barreira (pasta em pé) para esconder as cartas'],
   at:[
    {t:'Jogo de pares só verbal', min:45, il:'jogo_cartas', passos:['Distribua as cartas; cada um esconde as suas atrás da barreira','Na sua vez, o jogador pede uma carta só falando','Quem tem dá a carta; forma-se o par','Se o paciente gesticular, lembre a regra com gentileza','Aceite aproximações no início e vá exigindo mais (modelagem)'], obs:['% de pedidos verbais','Quantas pistas precisou?'], ok:'80% dos pedidos verbais com a palavra correta.', mat:'ciat_cartas'}]},
  {n:'Dias 4–7', t:'Nível 2: frase de pedido', obj:'Pedir com frase (“você tem a maçã?”).', prep:['Cartas com cores e números'],
   at:[
    {t:'Pedidos com frase e atributo', min:45, il:'jogo_cartas', passos:['Exija frase completa: “você tem a maçã?”','Depois inclua atributo: “a maçã vermelha” / “duas maçãs”','Inclua respostas: “sim, eu tenho” / “não, não tenho”','Inclua cortesia: nome do parceiro, “por favor”'], obs:['Complexidade média dos pedidos'], ok:'80% de frases completas no nível exigido.', mat:'ciat_cartas'}]},
  {n:'Dias 8–10', t:'Transferência', obj:'Levar a fala para situações reais.', prep:['Lista de situações da vida (ligar, pedir no mercado)'],
   at:[
    {t:'Missões do dia', min:30, il:'conversa', passos:['Combine 2 situações reais por dia em que só usará a fala','A família registra o que aconteceu','Discutam as dificuldades no dia seguinte'], obs:['Uso relatado da fala em casa'], ok:'Cumpre as missões com sucesso relatado.', mat:'registro'}]},
 ],
 avancar:'Suba o nível de exigência quando o paciente cumprir o atual em 80% dos pedidos por 2 rodadas.',
 alta:['Ganho na escala funcional de comunicação','Manutenção após 3–6 meses (fazer reavaliação)'],
 seNao:[
  {s:'Frustração intensa com a restrição', c:'Exigência acima do nível', a:'Baixe o nível de modelagem; permita escrita como apoio temporário.'},
  {s:'Cansaço com a intensidade', c:'Resistência física e cognitiva', a:'Divida em 4 blocos de 45 min com pausas; considere a versão de 5 dias.'},
  {s:'Ganhos não aparecem em casa', c:'Faltou transferência', a:'Inclua o pacote de transferência e treine a família.'}],
 trocar:'Afasia grave ou sem tolerância à intensidade: MIT, Script Training ou CAA.',
 refs:['Pulvermüller F et al. Constraint-induced therapy of chronic aphasia after stroke. Stroke, 2001.','Johnson ML et al. An enhanced protocol for constraint-induced aphasia therapy II: a case series. AJSLP, 2014.','Balardin JB, Miotto EC. A review of constraint-induced therapy applied to aphasia rehabilitation. Dement Neuropsychol, 2009.']};

M.script = { nome:'Treino de roteiros', sigla:'Script training', idade:'Adultos', ev:'moderada', cert:'Não exige certificação. Inclui variações como o VISTA (vídeo).',
 resumo:'A pessoa e o terapeuta escrevem juntos um monólogo ou diálogo curto sobre uma situação importante. O roteiro é praticado frase a frase, com apoio que vai sendo retirado, até ser falado de forma fluente e automática.',
 quando:['Afasia não fluente e apraxia de fala adquirida','Pessoa motivada por situações específicas (pedir, apresentar-se)','Pode ser praticado em casa com gravação'],
 principios:['Conteúdo escolhido pela pessoa e com as palavras dela','Prática de tarefa inteira (o roteiro todo), não só de partes','Muita repetição até automatizar','Retirada do apoio: ler junto → ler só → falar sem ler','Uso em situação real'],
 dose:'2–5×/semana, 30–60 min, mais prática diária em casa com áudio ou vídeo; 3–6 semanas por roteiro.',
 inicio:['Escolher 2–3 situações reais e importantes','Escrever o roteiro (3–6 frases) com as palavras do paciente','Linha de base: % de palavras corretas sem apoio'],
 sess:[
  {n:'1–2', t:'Escrever o roteiro', obj:'Ter um roteiro curto, pessoal e treinável.', prep:['Cartões de situação impressos','Celular para gravar'],
   at:[
    {t:'Criar o texto juntos', min:20, il:'roteiro', passos:['Conversem sobre a situação (padaria, médico, apresentar-se)','Escreva frases curtas com as palavras que o paciente consegue','Leia em voz alta; ajuste o que for difícil','Grave você lendo devagar para a prática em casa'], obs:['O roteiro tem significado para o paciente?','Comprimento adequado?'], ok:'Roteiro de 3–6 frases aprovado pelo paciente.', mat:'roteiro'}]},
  {n:'3–12', t:'Praticar e retirar o apoio', obj:'Falar o roteiro sem ler, com fluência.', prep:['Roteiro e gravação'],
   at:[
    {t:'Hierarquia de prática', min:30, il:'roteiro', passos:['Leiam juntos (coral) cada frase','O paciente lê sozinho','Você cobre a frase e ele fala de memória','Pratique o roteiro inteiro; depois faça um ensaio da situação real (role-play)','Meça % de palavras corretas'], obs:['Em que passo da hierarquia está?','Velocidade e pausas'], ok:'≥ 90% de palavras corretas sem apoio escrito.', mat:'roteiro'}]},
 ],
 avancar:'Comece um novo roteiro quando o atual estiver em 90% sem apoio em 2 sessões; mantenha revisões.',
 alta:['Usa os roteiros nas situações reais','Relata mais confiança para se comunicar'],
 seNao:[
  {s:'Não progride na hierarquia', c:'Roteiro longo ou difícil', a:'Encurte as frases; use palavras mais fáceis; faça partes antes do todo.'},
  {s:'Fala o roteiro mas trava na vida real', c:'Falta de ensaio realista', a:'Faça role-play com variações e, se possível, uma visita real com a fono.'},
  {s:'Não pratica em casa', c:'Falta de material', a:'Grave áudio ou vídeo no celular dele; combine horário fixo.'}],
 trocar:'Se não automatizar em 6 semanas, use MIT para fluência ou CAA para as situações-chave.',
 refs:['Youmans G, Holland A, Muñoz ML, Bourgeois M. Script training and automaticity in two individuals with aphasia. Aphasiology, 2005.','Cherney LR et al. Computerized script training for aphasia. AJSLP, 2008.']};
