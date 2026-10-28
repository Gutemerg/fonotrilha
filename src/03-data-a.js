/* ===== Quadros ===== */
const CONDS = [
 { id:'tea', nome:'TEA', longo:'Transtorno do Espectro Autista', cor:'c1', pic:'olhar',
   resumo:'Dificuldades na comunicação social e na interação, com padrões restritos e repetitivos. O perfil de linguagem varia de não falante a fluente com alterações pragmáticas.',
   foco:['Atenção compartilhada e engajamento','Intenção comunicativa e pedidos','Imitação e brincar simbólico','Comunicação alternativa quando a fala não basta','Pragmática nos falantes verbais'],
   aval:['PROC (Protocolo de Observação Comportamental)','ABFW – pragmática e vocabulário','VB-MAPP ou Checklist do Modelo Denver (definir alvos)','M-CHAT-R/F como rastreio (0–30 meses)','ADOS-2 em equipe multiprofissional'],
   metodos:['esdm','jasper','pecs','caa','hanen','emt','pragmatica'] },
 { id:'tdah', nome:'TDAH', longo:'Transtorno do Déficit de Atenção com Hiperatividade', cor:'c2', pic:'parar',
   resumo:'A fono atua nas consequências do TDAH na linguagem: processamento auditivo, processamento fonológico, leitura e escrita, organização do discurso e uso da linguagem para se autorregular.',
   foco:['Habilidades auditivas (figura-fundo, ordenação, memória)','Consciência fonológica e leitura','Organização da narrativa e do discurso','Fala interna e autoinstrução','Escuta em sala de aula'],
   aval:['Avaliação do Processamento Auditivo Central (encaminhar audiologista)','CONFIAS (consciência fonológica)','PROLEC (leitura) e TDE-II (desempenho escolar)','Nomeação automática rápida (RAN)','Amostra de narrativa (reconto)'],
   metodos:['ta','cf','narrativa','fe'] },
 { id:'down', nome:'Síndrome de Down', longo:'Trissomia do cromossomo 21', cor:'c3', pic:'gostar',
   resumo:'Hipotonia orofacial, alterações de alimentação e respiração, compreensão melhor que expressão, memória visual como ponto forte e memória auditiva de curto prazo como ponto fraco. Pode haver apraxia associada.',
   foco:['Motricidade orofacial, alimentação e respiração','Comunicação total: fala + sinais + figuras','Vocabulário e combinação de palavras','Leitura precoce (via visual)','Inteligibilidade de fala'],
   aval:['Protocolo de Motricidade Orofacial (AMIOFE ou MBGR)','ABFW – fonologia e vocabulário','Avaliação de alimentação e deglutição','Audiometria e imitanciometria (otite é frequente)','Triagem de apraxia quando a fala é muito inconsistente'],
   metodos:['mo','sinaiscaa','leitura','emt','hanen','dttc'] },
 { id:'apraxia', nome:'Apraxia de fala', longo:'Apraxia de Fala na Infância (AFI)', cor:'c4', pic:'olhar',
   resumo:'Transtorno do planejamento e da programação motora da fala: erros inconsistentes, dificuldade nas transições entre sons e sílabas, prosódia alterada (tonicidade errada) e tateio articulatório.',
   foco:['Precisão dos movimentos em palavras inteiras','Transições suaves entre sílabas','Tonicidade e prosódia','Prática intensa e frequente','Comunicação funcional enquanto a fala se constrói'],
   aval:['DEMSS (Dynamic Evaluation of Motor Speech Skill)','ABFW – fonologia (inconsistência)','Avaliação oromotora não verbal × verbal','Repetição de polissílabas e diadococinesia','Amostra de fala espontânea (inteligibilidade)'],
   metodos:['dttc','rest','ndp','mit','caa'] },
 { id:'afasia', nome:'Afasia', longo:'Afasia adquirida (AVC, TCE, tumor)', cor:'c5', pic:'telefone',
   resumo:'Perda ou alteração da linguagem após lesão cerebral. Pode afetar nomeação, compreensão, repetição, leitura e escrita. O tipo (fluente / não fluente) e a gravidade orientam a escolha do método.',
   foco:['Acesso lexical (nomeação)','Produção de frases (verbos e argumentos)','Fluência e fala automática funcional','Uso da fala em situações reais','Apoio ao parceiro de comunicação'],
   aval:['Bateria MTL-Brasil (Montreal-Toulouse)','Teste de Boston (BDAE) e Nomeação de Boston','Token Test (compreensão)','Avaliação funcional da comunicação','Escala de qualidade de vida (SAQOL-39)'],
   metodos:['sfa','vnest','mit','ciat','script','caa'] },
 { id:'tdl', nome:'TDL', longo:'Transtorno do Desenvolvimento da Linguagem', cor:'c6', pic:'livro',
   resumo:'Dificuldade persistente de linguagem sem causa biomédica conhecida: gramática (morfossintaxe), vocabulário, narrativa e compreensão de frases complexas. Afeta a alfabetização.',
   foco:['Morfossintaxe (plural, verbos, artigos, frases complexas)','Vocabulário em profundidade','Narrativa','Consciência fonológica e leitura','Participação dos pais e da escola'],
   aval:['ABFW – vocabulário e fonologia','PROC / amostra de linguagem (EMS, MLU)','TVIP (vocabulário receptivo)','Repetição de pseudopalavras e de frases','Reconto de história'],
   metodos:['recast','narrativa','vocab','hanen','cf','ta'] },
 { id:'di', nome:'Deficiência intelectual', longo:'Deficiência intelectual / atraso global', cor:'c7', pic:'ajuda',
   resumo:'Limitação no funcionamento intelectual e no comportamento adaptativo. A linguagem acompanha o perfil cognitivo; o foco é comunicação funcional, generalização e participação na rotina.',
   foco:['Intenção comunicativa e pedidos','Vocabulário funcional da rotina','Combinação de palavras','CAA como ponte ou como sistema principal','Treino dos parceiros de comunicação'],
   aval:['ABFW e PROC','Avaliação funcional da comunicação (o que, como e com quem comunica)','Inventário de vocabulário da rotina com a família','Avaliação de CAA (acesso, símbolos, tamanho)','Audição e visão'],
   metodos:['emt','caa','hanen','sinaiscaa','pecs'] },
 { id:'ahsd', nome:'Altas habilidades', longo:'Altas habilidades / superdotação (AH/SD)', cor:'c8', pic:'sol',
   resumo:'Não é um transtorno. A fono atua quando há dupla excepcionalidade (AH/SD + dislexia, TDAH, TEA, TPAC) ou queixas específicas, e pode oferecer enriquecimento de linguagem. Alto desempenho pode mascarar a dificuldade.',
   foco:['Investigar discrepâncias entre oralidade e escrita','Remediação fonológica e leitura (AH/SD + dislexia)','Pragmática e conversa (AH/SD + TEA)','Fluência: taquifemia','Enriquecimento: argumentação e oratória'],
   aval:['Avaliação neuropsicológica (equipe)','Leitura e escrita: PROLEC, ditado, velocidade de leitura','CONFIAS e RAN','Processamento auditivo','Amostra de conversa e de fala (fluência, velocidade)'],
   metodos:['dupla','cf','pragmatica','fe'] },
];

/* ===== Métodos (parte A) ===== */
const M = {};

M.esdm = { nome:'Modelo Denver de Intervenção Precoce', sigla:'ESDM', idade:'12–60 meses', ev:'forte', cert:'Método com certificação própria. Este roteiro mostra os princípios para preparar sessões; para aplicar como ESDM, faça a formação oficial.',
 resumo:'Intervenção naturalista e desenvolvimental: ensina comunicação, imitação e brincar dentro de rotinas lúdicas que a criança escolhe, com o adulto como parceiro de brincadeira e alvos definidos pelo Checklist do Currículo.',
 quando:['Crianças pequenas com TEA ou suspeita','Pouca atenção compartilhada e imitação','Família disponível para aprender as estratégias'],
 principios:['Seguir o interesse da criança e entrar na brincadeira','Afeto positivo: o adulto é mais divertido que o brinquedo','Rotinas de atividade conjunta com 4 fases: preparar, tema, variação, fechar','Muitas oportunidades de aprendizagem por minuto, com reforço natural (a própria brincadeira)','Ajuda do menor ao maior e retirada gradual da ajuda'],
 dose:'Idealmente intensivo (muitas horas por semana somando terapeutas e família). Na clínica: 2–3 sessões de 45–60 min por semana + orientação parental semanal.',
 inicio:['Aplicar o Checklist do Currículo (ou observação estruturada) e escolher 2–3 alvos por área','Fazer o inventário de interesses: brinquedos, músicas, brincadeiras corporais','Linha de base: contar em 10 min quantas vezes a criança olha, imita, pede'],
 sess:[
  {n:'1–2', t:'Vínculo e mapa de interesses', obj:'Tornar-se o parceiro preferido e descobrir o que motiva a criança.', prep:['Caixa com 8–10 brinquedos variados (bolha, balão, pião, carrinho, massinha)','Sala com poucos estímulos e brinquedos em prateleira alta'],
   at:[
    {t:'Rotina social sensorial (balão)', min:10, il:'brincar_frente', passos:['Sente-se de frente, na altura dos olhos da criança','Encha o balão devagar com expressão exagerada e pare antes de soltar','Espere 3–5 s olhando para a criança','Qualquer sinal (olhar, som, mão) = solte o balão na hora','Repita 5–8 vezes; depois varie (balão “voa” para outro lado)'], obs:['Olha para o seu rosto antes de pedir?','Antecipa (sorri antes de você soltar)?','Usa gesto, vocalização ou palavra?'], ok:'Olha ou faz sinal em pelo menos 3 de 5 pausas.', mat:'esdm_rotina'},
    {t:'Imitação de ações com objetos', min:10, il:'brincar_frente', passos:['Tenha dois conjuntos iguais (dois carrinhos, dois tambores)','Primeiro imite VOCÊ o que a criança faz','Depois faça uma ação nova simples e diga o nome (“bate, bate!”)','Espere a imitação; se não vier, ajude fisicamente com leveza e retire logo','Comemore e devolva a liderança à criança'], obs:['Percebe que você a imita?','Imita ação com objeto, com ou sem ajuda?'], ok:'Imita 2 ações diferentes com ajuda parcial.', mat:'registro'}]},
  {n:'3–6', t:'Pedidos e atenção compartilhada', obj:'Criar oportunidades para pedir e para compartilhar o interesse.', prep:['Itens preferidos em potes transparentes difíceis de abrir','Brinquedos com várias peças (dá para entregar uma de cada vez)'],
   at:[
    {t:'Pedir para continuar', min:12, il:'ambiente', passos:['Entregue as peças uma por vez (encaixe, trilho, blocos)','Pare e espere: a criança precisa pedir a próxima','Aceite o nível atual (olhar + estender a mão) e modele um passo acima (“mais”)','Depois de 3–4 sucessos, espere o novo nível'], obs:['Forma do pedido: olhar, gesto, som, palavra','Precisa de quanta ajuda?'], ok:'Pede sozinho no nível-alvo em 80% das oportunidades.', mat:'registro'},
    {t:'Mostrar e apontar', min:8, il:'brincar_frente', passos:['Coloque algo surpreendente na sala (bichinho escondido, luz)','Aponte, olhe para a criança e para o objeto e diga “olha!”','Espere que ela siga seu apontar','Depois de seguir, crie situações para ela apontar para você'], obs:['Segue apontar a distância?','Alterna o olhar entre você e o objeto?'], ok:'Segue apontar em 4 de 5 tentativas.', mat:'jasper_nivel'}]},
  {n:'7–12', t:'Palavras e brincar funcional', obj:'Passar de gestos para palavras e ampliar o brincar.', prep:['Materiais de faz de conta: panelinhas, boneco, carrinho','Lista de 10 palavras-alvo da rotina da família'],
   at:[
    {t:'Rotina de faz de conta', min:15, il:'brincar_frente', passos:['Monte a cena (comida do boneco)','Modele ações de um passo com fala curta: “come”, “bebe”, “dorme”','Use a regra do “+1”: se a criança usa 1 palavra, você usa 2','Faça variação a cada 3–4 minutos para não perder o interesse','Feche guardando juntos e nomeando'], obs:['Faz ações simbólicas com o boneco?','Usa palavras na brincadeira?'], ok:'Usa 5 palavras diferentes espontaneamente na sessão.', mat:'esdm_rotina'},
    {t:'Orientação aos pais (10 min finais)', min:10, il:'pais', passos:['Mostre uma estratégia por vez (ex.: pausa e espera)','Peça ao pai/mãe para fazer a brincadeira enquanto você dá dicas','Combine 2 rotinas da casa para praticar (banho, refeição)'], obs:['O responsável consegue esperar?','Responde às tentativas da criança?'], ok:'O responsável aplica a estratégia em 3 oportunidades seguidas.', mat:'hanen_owl'}]},
  {n:'13+', t:'Combinação de palavras e generalização', obj:'Frases de 2 palavras, comentários e uso com outras pessoas.', prep:['Novos parceiros (irmão, avó, outro terapeuta) se possível','Atividades de grupo pequeno'],
   at:[
    {t:'Expansão para 2 palavras', min:15, il:'brincar_frente', passos:['Responda à palavra da criança acrescentando uma (“carro” → “carro rápido”)','Crie escolhas que exigem 2 palavras (“carro azul ou carro vermelho?”)','Elogie com naturalidade e continue a brincadeira'], obs:['Combina palavras?','Comenta, além de pedir?'], ok:'10 combinações de 2 palavras em 30 min.', mat:'registro'}]},
 ],
 avancar:'Avance cada alvo quando a criança o faz sozinha em 80% das oportunidades por 2 sessões e com pelo menos 2 pessoas.',
 alta:['Atingiu os alvos do nível do Checklist e foi reavaliada para o nível seguinte','Comunica-se de forma funcional em casa e na escola','Família aplica as estratégias sem apoio'],
 seNao:[
  {s:'A criança não se engaja: foge, fica só com o objeto', c:'Atividade pouco motivadora ou exigência alta demais', a:'Volte para rotinas sociais sensoriais (cócegas, balanço, bolha). Diminua a exigência e aumente o afeto. Reveja o inventário de interesses com a família.'},
  {s:'Só pede quando ajudada fisicamente', c:'Ajuda que não é retirada (dependência de ajuda)', a:'Use o atraso de tempo: espere 3 s, 5 s, depois 7 s antes de ajudar. Troque ajuda física por gesto e depois só olhar de expectativa.'},
  {s:'Repete as palavras (ecolalia) sem função', c:'Modelo dado como pergunta ou longo demais', a:'Modele frases que a criança pode usar como suas (“eu quero bola”, não “você quer bola?”). Use palavras curtas e funcionais.'},
  {s:'Comportamento disruptivo em toda sessão', c:'Regulação sensorial, transições difíceis ou fuga da demanda', a:'Converse com a TO e a psicologia. Use rotina visual de início e fim, avisos antes de trocar e intervalos de regulação.'},
  {s:'Sem palavras após 3–4 meses de intervenção intensa', c:'Possível apraxia associada ou dificuldade motora oral', a:'Introduza CAA (prancha ou PECS) sem abandonar a fala. Faça triagem para apraxia (DEMSS).'}],
 trocar:'Se após 12 semanas não houver aumento de engajamento e pedidos, combine com PECS ou CAA e reavalie com a equipe.',
 refs:['Rogers SJ, Dawson G. Early Start Denver Model for Young Children with Autism. Guilford, 2010.','Rogers SJ, Dawson G, Vismara L. Autismo: compreender e agir em família (guia para pais).']};

M.jasper = { nome:'JASPER', sigla:'JASPER', idade:'1–8 anos', ev:'forte', cert:'Desenvolvido por Connie Kasari (UCLA). Há treinamento oficial; aqui estão os princípios para preparar a sessão.',
 resumo:'Ensina os fundamentos da comunicação social — atenção compartilhada, brincar simbólico, engajamento e regulação — usando estratégias naturalistas dentro de rotinas de brincar.',
 quando:['TEA com pouca atenção compartilhada','Brincar repetitivo ou limitado','Pode ser aplicado por pais e professores'],
 principios:['Avaliar o nível de brincar e trabalhar no nível dominado e no seguinte','Imitar e modelar o brincar da criança','Construir e expandir rotinas de brincar','Programar gestos e linguagem dentro da rotina','Regular: ajustar o ambiente para manter a criança engajada'],
 dose:'Estudos usam cerca de 20 sessões em 10 semanas (2× por semana, 30–60 min), muitas vezes mediadas pelos pais.',
 inicio:['Avaliar níveis de brincar (do simples ao simbólico) e atenção compartilhada','Escolher brinquedos do nível certo (nem fácil nem difícil demais)','Linha de base: % do tempo em engajamento conjunto em 10 min de brincar livre'],
 sess:[
  {n:'1–3', t:'Montar a base', obj:'Estabelecer engajamento conjunto em uma rotina simples.', prep:['Brinquedos do nível de brincar da criança (ex.: blocos, argolas)','Duas cópias de cada peça (uma para você imitar)'],
   at:[
    {t:'Imitar e modelar', min:15, il:'brincar_frente', passos:['Sente-se de frente com os brinquedos entre vocês','Imite exatamente o que a criança faz com o brinquedo','Comente com 1–2 palavras (“torre!”)','Depois de 3–4 imitações, modele um passo novo no mesmo nível','Volte a imitar para manter o engajamento'], obs:['Tempo em engajamento conjunto (alternando atenção entre você e o brinquedo)','A criança aceita a sua participação?'], ok:'Engajamento conjunto em mais de 50% do tempo da atividade.', mat:'jasper_nivel'}]},
  {n:'4–8', t:'Expandir rotinas de brincar', obj:'Aumentar o número de passos e a variedade do brincar.', prep:['Acrescente peças que permitem novas ações (bonequinho para a torre, carro para a garagem)'],
   at:[
    {t:'Rotina com vários passos', min:15, il:'brincar_frente', passos:['Construa a rotina juntos (montar a garagem → carro entra → carro sai)','Alternem turnos','Acrescente um passo novo de cada vez','Quando a criança repetir sempre igual, introduza uma variação pequena'], obs:['Quantos passos a rotina tem?','A criança aceita variação sem sair da atividade?'], ok:'Rotina de 4+ passos mantida por 5 minutos.', mat:'jasper_nivel'}]},
  {n:'9–20', t:'Atenção compartilhada e linguagem', obj:'Ensinar a criança a iniciar: mostrar, apontar, alternar o olhar e comentar.', prep:['Objetos surpresa para dentro da rotina'],
   at:[
    {t:'Programar a atenção compartilhada', min:15, il:'troca_figura', passos:['Dentro da rotina, crie um momento de surpresa (uma peça engraçada)','Modele apontar + olhar + comentário (“olha, um pato!”)','Pause para dar chance da criança mostrar ou apontar','Responda sempre com interesse e um comentário'], obs:['Responde à atenção compartilhada?','Inicia (mostra, aponta, entrega para compartilhar)?'], ok:'2 iniciativas espontâneas de atenção compartilhada por 10 min.', mat:'jasper_nivel'}]},
 ],
 avancar:'Suba o nível de brincar quando a criança faz o nível atual com variedade e espontaneamente.',
 alta:['Engajamento conjunto sustentado na maior parte do brincar','Inicia atenção compartilhada com gestos e palavras','Pais/professores aplicam as estratégias'],
 seNao:[
  {s:'Brincar repetitivo e rígido (só enfileira)', c:'Comportamento restrito ocupa a rotina', a:'Use a repetição como base: entre na fila e transforme em rotina (a fila vira trem). Faça variações mínimas.'},
  {s:'Sai da atividade o tempo todo', c:'Nível de brincar alto ou baixo demais / desregulação', a:'Reavalie o nível de brincar. Reduza os brinquedos à vista. Faça pausas de regulação.'},
  {s:'Não segue o apontar', c:'Pré-requisito de atenção ainda frágil', a:'Comece com apontar de perto (tocar o objeto) e afaste aos poucos.'},
  {s:'Pais não conseguem aplicar', c:'Muitas estratégias de uma vez', a:'Ensine uma estratégia por semana com vídeo-feedback da própria família.'}],
 trocar:'Sem ganho de engajamento em 8–10 semanas: combine com ESDM ou ABA naturalista e reavalie.',
 refs:['Kasari C, Gulsrud A, Shire S, Strawbridge C. The JASPER Model for Children with Autism. Guilford, 2021.','Waddington H et al. The effects of JASPER intervention for children with ASD: a systematic review. Autism, 2021.']};

M.pecs = { nome:'Sistema de Comunicação por Troca de Figuras', sigla:'PECS', idade:'Todas as idades', ev:'forte', cert:'Protocolo da Pyramid Educational Consultants. A formação Nível 1 é recomendada; o manual oficial descreve os procedimentos completos.',
 resumo:'Sistema de comunicação alternativa em 6 fases. Começa ensinando a entregar uma figura para pedir um item e avança para discriminar figuras, montar frases, responder e comentar. Não usa dica verbal, para evitar dependência.',
 quando:['Não falantes ou com fala pouco funcional','Não iniciam a comunicação','TEA, DI, síndromes, apraxia severa'],
 principios:['Começar pelo que a pessoa quer (inventário de reforçadores)','Ensinar a INICIAR, não a responder','Dois adultos na fase I: parceiro de comunicação e ajudante físico atrás','Sem dicas verbais (“me dá a figura”)','Correção de erro sistemática a partir da fase III'],
 dose:'Sessões curtas e frequentes, com muitas trocas (20–40 por sessão) e uso em todas as rotinas do dia.',
 inicio:['Inventário de reforçadores: teste 10–15 itens e ordene pela preferência','Linha de base: como a pessoa pede hoje (pega sozinha, puxa a mão, chora)','Prepare a pasta de comunicação com velcro'],
 sess:[
  {n:'Fase I', t:'Como se comunicar', obj:'Ao ver um item desejado, pegar a figura e entregá-la ao parceiro.', prep:['Um item muito desejado e sua figura','Um segundo adulto (ajudante) atrás da pessoa'],
   at:[
    {t:'Troca com ajuda física', min:15, il:'troca_figura', passos:['O parceiro mostra o item desejado, sem falar nada','Quando a pessoa estende a mão, o ajudante (atrás) guia a mão para pegar a figura e entregar','O parceiro recebe a figura e entrega o item NA HORA, nomeando (“bolha!”)','Retire a ajuda física aos poucos (mão → pulso → cotovelo → nada)','Troque de item a cada poucas trocas'], obs:['Inicia a busca pela figura sozinho?','Em que ponto da ajuda ainda depende?'], ok:'Troca independente em 80% das oportunidades.', mat:'pecs_fase1'}]},
  {n:'Fase II', t:'Distância e persistência', obj:'Ir até a pasta e até o parceiro, mesmo a distância.', prep:['Pasta de comunicação a 1–3 metros'],
   at:[
    {t:'Aumentar a distância', min:15, il:'troca_figura', passos:['Afaste o parceiro aos poucos','Depois afaste a pasta','Varie parceiros, locais e itens','Mantenha a entrega imediata do item'], obs:['Atravessa a sala para pedir?','Pede com outras pessoas?'], ok:'Busca a pasta e o parceiro a 3 m em 80% das trocas.', mat:'pecs_dados'}]},
  {n:'Fase III', t:'Discriminação de figuras', obj:'Escolher a figura certa entre várias.', prep:['Uma figura de item preferido e uma de item neutro/não desejado'],
   at:[
    {t:'Escolher entre duas figuras', min:15, il:'prancha', passos:['Coloque 2 figuras: uma preferida e uma não preferida','Entregue o item correspondente à figura que ela der','Se entregar a errada, dê o item errado e observe a reação (correção de erro)','Faça a checagem de correspondência: “pode pegar” e veja se pega o item da figura'], obs:['Escolhe a figura do item que de fato quer?','Passa na checagem de correspondência?'], ok:'80% de discriminação correta com 5 figuras.', mat:'pecs_fase1'}]},
  {n:'Fases IV–VI', t:'Frases, perguntas e comentários', obj:'Montar “eu quero + item”, responder “o que você quer?” e comentar (“eu vejo…”).', prep:['Tira de frase e cartão “eu quero”','Cartões de atributos (cor, tamanho)'],
   at:[
    {t:'Montar a frase', min:15, il:'prancha', passos:['Fase IV: o cartão “eu quero” fica na tira; a pessoa acrescenta o item e entrega a tira','Leia apontando cada figura e faça uma pausa antes do nome do item (espaço para fala)','Acrescente atributos: “eu quero bola grande”','Fase V: pergunte “o que você quer?” e retire a dica aos poucos','Fase VI: ensine “eu vejo / eu ouço” para comentar'], obs:['Monta a frase sozinho?','Vocaliza durante a leitura da tira?'], ok:'Frase de 3 cartões montada sozinha em 80% das trocas.', mat:'pecs_frase'}]},
 ],
 avancar:'Mude de fase quando atingir o critério da fase atual em 2 sessões seguidas, com pelo menos 2 parceiros.',
 alta:['Comunica pedidos e comentários de forma espontânea em vários ambientes','Transição para fala ou para dispositivo com voz quando indicado'],
 seNao:[
  {s:'Não estende a mão para nenhum item', c:'Reforçador fraco', a:'Refaça o inventário. Use itens consumíveis pequenos ou atividades muito rápidas (bolha, cócegas).'},
  {s:'Entrega figura sem olhar para o parceiro', c:'Troca virou mecânica', a:'Na fase II, afaste o parceiro e espere-o se virar; a pessoa precisa buscar o parceiro.'},
  {s:'Erra sempre na fase III', c:'Figuras parecidas ou não reconhece a figura', a:'Use figura mais real (foto, miniatura), aumente o contraste entre as opções e volte para 2 figuras.'},
  {s:'Depende da dica “o que você quer?”', c:'Fase V iniciada cedo ou dica verbal nas fases iniciais', a:'Volte a criar tentações sem fala. Retire qualquer dica verbal.'},
  {s:'Família não usa em casa', c:'Pasta inacessível ou sem itens de casa', a:'Faça a pasta com itens da rotina da casa e treine a família em uma sessão.'}],
 trocar:'Se a fase I não for atingida em 4–6 semanas, revise reforçadores e pré-requisitos; considere CAA com acionamento de voz ou sinais.',
 refs:['Frost L, Bondy A. The Picture Exchange Communication System Training Manual. 2ª ed. Pyramid, 2002.','Pyramid Educational Consultants. PECS: an evidence-based practice. pecsusa.com']};

M.caa = { nome:'CAA com modelagem (prancha de vocabulário essencial)', sigla:'CAA', idade:'Todas as idades', ev:'moderada', cert:'Não exige certificação. Requer avaliação de acesso (apontar, olhar, varredura) e escolha do sistema.',
 resumo:'Comunicação Aumentativa e Alternativa usando pranchas ou aplicativos com vocabulário essencial (palavras de alta frequência como quero, mais, parar). O parceiro modela apontando os símbolos enquanto fala, sem exigir resposta.',
 quando:['Fala ausente ou ininteligível','Apraxia severa, TEA não falante, DI, afasia grave','Para reduzir frustração enquanto a fala se desenvolve'],
 principios:['CAA não impede a fala; costuma favorecê-la','Modelar sem esperar: o parceiro usa a prancha enquanto fala','Palavras sempre no mesmo lugar (aprendizagem motora)','Vocabulário essencial + algumas palavras específicas da rotina','Prancha disponível o tempo todo, em todos os ambientes'],
 dose:'Modelagem diária em todas as rotinas. Sessões de 30–45 min, 1–3× por semana, com treino dos parceiros.',
 inicio:['Avaliar acesso: aponta com o dedo? olhar? precisa de varredura?','Avaliar símbolos: reconhece foto, desenho, palavra escrita?','Escolher 12–24 células conforme visão e motricidade','Linha de base: formas atuais de comunicação'],
 sess:[
  {n:'1–3', t:'Apresentar a prancha e modelar', obj:'Mostrar a prancha como forma de comunicação real.', prep:['Prancha impressa e plastificada (ou tablet)','Atividade motivadora com chances de usar “mais”, “parar”, “de novo”'],
   at:[
    {t:'Modelagem na brincadeira', min:15, il:'prancha', passos:['Brinque com algo que a pessoa gosta (bolha, música)','Toda vez que falar uma palavra-alvo, aponte o símbolo junto (“MAIS bolha”)','Fale devagar, enfatize a palavra apontada e faça pausas','Não peça para a pessoa apontar; apenas mostre','Se ela tocar qualquer símbolo, responda como se fosse intencional'], obs:['Olha para a prancha quando você aponta?','Toca símbolos, mesmo que por acaso?'], ok:'Olha para a prancha durante a modelagem na maioria das vezes.', mat:'caa_prancha'}]},
  {n:'4–10', t:'Uso com ajuda e tentações', obj:'A pessoa usar a prancha para pedir e recusar.', prep:['Situações de tentação: pote fechado, brinquedo que para','Lista de palavras-alvo da semana'],
   at:[
    {t:'Criar a necessidade de comunicar', min:15, il:'ambiente', passos:['Pare a atividade no ponto alto e espere 5 s','Se não usar a prancha, modele de novo apontando “mais”','Aceite aproximações (tocar perto do símbolo)','Ensine também “parar” e “acabou” para recusar'], obs:['Inicia o uso sozinho?','Usa para recusar além de pedir?'], ok:'Usa 3 palavras sozinho em situações planejadas.', mat:'caa_registro'}]},
  {n:'11+', t:'Combinar símbolos e generalizar', obj:'Frases de 2–3 símbolos e uso fora da clínica.', prep:['Treino com família e escola','Prancha na mochila, na geladeira, no carro'],
   at:[
    {t:'Expandir para 2 símbolos', min:15, il:'prancha', passos:['Quando a pessoa usar 1 símbolo, modele 2 (“quero” → “quero + comer”)','Leia de volta a mensagem dela, apontando','Crie situações que pedem combinação (escolher ação e objeto)'], obs:['Combina 2 símbolos?','Usa com pessoas diferentes?'], ok:'10 combinações por sessão; uso relatado em casa.', mat:'caa_registro'}]},
 ],
 avancar:'Amplie o vocabulário quando a pessoa usa as palavras atuais em mais de uma rotina; aumente o número de células quando acessar bem as atuais.',
 alta:['Sistema de CAA robusto, levado para todos os ambientes','Parceiros modelam sem apoio','Transição para fala, quando ela se tornar funcional'],
 seNao:[
  {s:'Não olha para a prancha', c:'Prancha longe do campo visual ou atividade pouco motivadora', a:'Coloque a prancha entre vocês e o brinquedo; aumente a motivação; use símbolos maiores.'},
  {s:'Aponta aleatoriamente', c:'Explorando o sistema (normal) ou não entendeu símbolos', a:'Responda a tudo como mensagem (a pessoa aprende o efeito). Se persistir, reduza o número de células.'},
  {s:'Família tem receio de que pare de falar', c:'Crença comum', a:'Explique que a evidência mostra o contrário e mostre a fala acontecendo junto.'},
  {s:'Usa só na clínica', c:'Falta de modelagem em casa', a:'Faça visita/vídeo da rotina da casa e escolha 2 rotinas fixas para modelagem diária.'}],
 trocar:'Se não houver uso intencional após 3 meses, reavalie acesso motor, visão e tipo de símbolo; considere PECS para ensinar a iniciar.',
 refs:['Sennott SC, Light JC, McNaughton D. AAC modeling intervention research review. RPSD, 2016.','Biggs EE et al. Systematic review of interventions involving aided AAC modeling. AJIDD, 2018.']};

M.hanen = { nome:'Mediação parental (estratégias Hanen)', sigla:'Hanen', idade:'0–5 anos', ev:'moderada', cert:'Os programas “It Takes Two to Talk” e “More Than Words” exigem certificação Hanen. Aqui estão as estratégias para orientar a família.',
 resumo:'Ensina pais a estimular a linguagem nas rotinas do dia a dia. A estratégia central é Observar, Esperar e Escutar (OOE), deixando a criança iniciar, e depois responder e expandir.',
 quando:['Atraso de linguagem, TDL, TEA, DI, Down','Família disponível para participar','Complemento de qualquer outro método'],
 principios:['Os pais são os principais agentes da linguagem','Ficar cara a cara com a criança','Observar, Esperar (até 10 s) e Escutar','Responder a toda tentativa e acrescentar uma palavra','Rotinas repetidas são as melhores aulas'],
 dose:'Orientação semanal (sessão com a família) e prática diária de 10–15 min em 2–3 rotinas. Mudanças costumam aparecer após 6–8 semanas.',
 inicio:['Identificar o estágio: descobridor, comunicador, primeiras palavras, combinador','Filmar 5 min de interação pai-criança (linha de base)','Escolher com a família 2 rotinas da casa'],
 sess:[
  {n:'1–2', t:'Observar, Esperar, Escutar', obj:'Os pais darem espaço para a criança iniciar.', prep:['Vídeo da interação inicial','Cartão OOE impresso para a família'],
   at:[
    {t:'Vídeo-feedback', min:20, il:'pais', passos:['Assistam juntos ao vídeo de 5 min','Pare o vídeo nos momentos em que a criança tentou se comunicar','Pergunte: “o que ela queria dizer?”','Mostre onde a espera foi curta','Pratique ao vivo: o responsável brinca e você sinaliza a hora de esperar'], obs:['Quanto tempo o responsável espera?','Percebe tentativas sutis da criança?'], ok:'O responsável espera 5+ segundos em 3 situações seguidas.', mat:'hanen_owl'}]},
  {n:'3–6', t:'Responder e acrescentar', obj:'Responder às tentativas com a palavra certa e acrescentar uma.', prep:['Brinquedos de rotina da casa'],
   at:[
    {t:'Imitar, interpretar, comentar', min:20, il:'pais', passos:['Ensine 3 respostas: imitar o som da criança, interpretar o gesto em palavra, comentar','Pratique a regra do +1 (criança “água” → adulto “água gelada”)','Use poucas palavras e repita muito','Combine o diário da semana'], obs:['O responsável responde ou faz perguntas?','Usa frases curtas?'], ok:'Mais respostas do que perguntas no vídeo da semana.', mat:'hanen_owl'}]},
  {n:'7+', t:'Rotinas de pessoas e livros', obj:'Brincadeiras sem objetos e leitura compartilhada.', prep:['Livro de figuras simples','Músicas com gestos'],
   at:[
    {t:'Leitura compartilhada', min:15, il:'pais', passos:['Deixe a criança escolher a página','Aponte, nomeie e espere','Repita o mesmo livro várias vezes na semana','Deixe lacunas em frases repetidas para a criança completar'], obs:['A criança completa as lacunas?','Aponta e nomeia?'], ok:'Completa 3 lacunas de frases conhecidas.', mat:'registro'}]},
 ],
 avancar:'Introduza a próxima estratégia quando a família aplicar a atual com naturalidade no vídeo da rotina.',
 alta:['Família aplica as estratégias de forma autônoma','Criança evoluiu para o estágio seguinte de comunicação'],
 seNao:[
  {s:'Pais fazem muitas perguntas e testes (“o que é isso?”)', c:'Hábito comum', a:'Troque perguntas por comentários. Use o vídeo para contar quantas perguntas versus comentários.'},
  {s:'Não praticam em casa', c:'Rotina pesada, falta de tempo', a:'Reduza para 5 min em 1 rotina que já existe (banho). Aceite o possível.'},
  {s:'Criança não inicia mesmo com espera', c:'Estágio inicial ou TEA', a:'Use brincadeiras corporais e interrompa no ponto alto; combine com estratégias de engajamento (JASPER, ESDM).'}],
 trocar:'Sem mudança após 8–10 semanas: acrescente terapia direta (EMT, reformulação) ou CAA.',
 refs:['Pepper J, Weitzman E. It Takes Two to Talk. The Hanen Centre, 2004.','Roberts MY, Kaiser AP. The effectiveness of parent-implemented language interventions: a meta-analysis. AJSLP, 2011.']};

M.emt = { nome:'Ensino Incidental Ampliado', sigla:'EMT', idade:'2–6 anos (adaptável)', ev:'forte', cert:'Não exige certificação. Baseado nos estudos de Ann Kaiser (Vanderbilt).',
 resumo:'Intervenção naturalista que combina interação responsiva (seguir a criança, modelar, expandir) com técnicas de ensino incidental (espera, pergunta, escolha, modelo) dentro de rotinas e brincadeiras.',
 quando:['DI, síndrome de Down, TEA, atraso de linguagem','Já tem alguma intenção comunicativa','Ideal com participação dos pais'],
 principios:['Arranjo do ambiente: criar motivos para comunicar','Interação responsiva: seguir o foco da criança','Modelar linguagem um pouco acima do nível atual','Expandir o que a criança diz','Ensino incidental: apoio do menor ao maior e entrega imediata'],
 dose:'2–3 sessões por semana de 20–30 min + pais aplicando em casa. Estudos com crianças com DI somaram cerca de 19 horas de intervenção.',
 inicio:['Medir o comprimento médio do enunciado (MLU) e o número de palavras diferentes em 10 min','Escolher 3–5 alvos (palavras ou combinações)','Listar brinquedos e rotinas preferidas'],
 sess:[
  {n:'1–4', t:'Arranjo do ambiente e interação responsiva', obj:'Aumentar as iniciativas da criança.', prep:['Itens à vista e fora do alcance','Potes transparentes difíceis de abrir'],
   at:[
    {t:'Tentações de comunicação', min:15, il:'ambiente', passos:['Coloque um brinquedo preferido num pote transparente fechado','Dê porções pequenas (um bloco de cada vez)','Faça algo inesperado (põe o sapato no boneco errado)','Espere a criança iniciar e responda com a palavra-alvo'], obs:['Quantas iniciativas em 10 min?','Que forma elas têm?'], ok:'Dobro de iniciativas em relação à linha de base.', mat:'emt_ambiente'}]},
  {n:'5–12', t:'Sequência de apoio (ensino incidental)', obj:'Produzir os alvos com o mínimo de ajuda.', prep:['Lista de alvos da semana'],
   at:[
    {t:'Do menor ao maior apoio', min:20, il:'ambiente', passos:['A criança mostra interesse (olha para o pote)','1º espere 5 s','2º pergunta aberta: “o que você quer?”','3º escolha: “bola ou carro?”','4º modelo: “diga: bola”','Entregue logo após qualquer resposta adequada e expanda (“bola! bola grande”)'], obs:['Em qual nível de apoio responde?','Precisa menos apoio com o passar das sessões?'], ok:'Responde ao nível de pergunta aberta em 70% das oportunidades.', mat:'emt_ambiente'}]},
  {n:'13+', t:'Pais aplicando e generalização', obj:'Uso dos alvos em casa com os pais.', prep:['Vídeo de casa ou sessão com o responsável'],
   at:[
    {t:'Treino do responsável', min:20, il:'pais', passos:['Explique e mostre uma estratégia','O responsável faz e você dá retorno na hora','Combine metas para a semana'], obs:['O responsável usa a sequência de apoio?','A criança usa os alvos com ele?'], ok:'Responsável aplica a sequência corretamente em 80% das oportunidades.', mat:'hanen_owl'}]},
 ],
 avancar:'Troque o alvo quando aparecer de forma espontânea em 2 sessões; aumente o tamanho do alvo (1 → 2 palavras).',
 alta:['MLU e número de palavras diferentes cresceram e se mantêm','Família aplica as estratégias'],
 seNao:[
  {s:'Responde só ao modelo, nunca à pergunta', c:'Alvo acima do nível ou ajuda alta demais', a:'Escolha alvos mais fáceis; aumente o tempo de espera antes de dar o modelo.'},
  {s:'Frustração quando você retém o item', c:'Espera longa demais para o nível da criança', a:'Encurte a espera e aceite formas mais simples; retire o item da vista se houver choro.'},
  {s:'Não há iniciativas', c:'Pouca motivação ou ambiente com tudo acessível', a:'Reorganize o ambiente; use itens muito preferidos; combine com CAA ou sinais.'}],
 trocar:'Se depois de 12 semanas não houver aumento de palavras diferentes, reavalie audição, cognição e motricidade oral; considere CAA.',
 refs:['Kaiser AP, Roberts MY. Parent-implemented EMT with preschool children who have intellectual disabilities. JSLHR, 2013.','Hancock TB, Kaiser AP. Enhanced Milieu Teaching. In: McCauley R, Fey M. Treatment of Language Disorders in Children. Brookes.']};

M.pragmatica = { nome:'Linguagem social e pragmática', sigla:'Pragmática', idade:'5 anos ao adulto', ev:'moderada', cert:'Não exige certificação. Combina ensino explícito, modelagem, ensaio e prática com pares.',
 resumo:'Ensino estruturado de habilidades de conversa — iniciar, manter tema, trocar turnos, perceber o outro, encerrar — e de linguagem não literal, para falantes verbais com TEA ou dupla excepcionalidade.',
 quando:['TEA com boa linguagem estrutural','AH/SD com dificuldades sociais','Dificuldade em turnos, interesses restritos, linguagem literal'],
 principios:['Ensinar a regra social de forma explícita e visual','Modelar, ensaiar, praticar e generalizar','Usar os interesses da pessoa como ponte','Treinar com pares sempre que possível','Valorizar o estilo próprio: o objetivo é participação, não “normalização”'],
 dose:'Semanal, 45–50 min; ideal em pequeno grupo (2–4) a partir da fase de prática.',
 inicio:['Amostra de conversa de 10 min com registro de turnos, perguntas e mudanças de tema','Perguntar à pessoa e à família quais situações são difíceis','Escolher 2 habilidades-alvo'],
 sess:[
  {n:'1–3', t:'Começar e terminar uma conversa', obj:'Iniciar e encerrar de forma adequada.', prep:['Cartões de habilidades','Roteiros curtos de cumprimento'],
   at:[
    {t:'Roteiro de início', min:15, il:'conversa', passos:['Explique a habilidade com o cartão “COMEÇAR”','Mostre um exemplo bom e um ruim (pode ser exagerado e engraçado)','Pratiquem com o roteiro escrito','Retire o roteiro aos poucos'], obs:['Faz contato antes de começar (chama o nome, olha ou se aproxima)?','Usa a abertura sem o roteiro?'], ok:'Inicia sozinho em 4 de 5 ensaios.', mat:'pragmatica'}]},
  {n:'4–8', t:'Manter o tema e fazer perguntas', obj:'Manter 3+ turnos sobre o mesmo assunto, inclusive o do outro.', prep:['Lista de temas do interesse da pessoa e de temas neutros'],
   at:[
    {t:'Conversa com fichas de turno', min:20, il:'conversa', passos:['Cada um tem fichas; cada fala no tema vale uma ficha no centro','Combine: depois de falar, fazer uma pergunta ao outro','Comece por um tema da pessoa e depois troque para um seu','Pare para refletir quando sair do tema (“estávamos falando de…”)'], obs:['Quantos turnos no mesmo tema?','Faz perguntas de volta?'], ok:'5 turnos no tema do outro com 1 pergunta.', mat:'pragmatica'}]},
  {n:'9+', t:'Ler o outro e linguagem não literal', obj:'Perceber emoções, desinteresse e entender expressões e ironia.', prep:['Cartões de emoção','Lista de expressões (“chover canivete”)'],
   at:[
    {t:'Detetive de sinais', min:20, il:'emocao', passos:['Mostre fotos/vídeos curtos e pergunte o que a pessoa sente e como sabe','Pratique perceber desinteresse (olhar para longe, respostas curtas)','Treine o que fazer: perguntar ou mudar de assunto','Explique expressões e ironias com exemplos da vida dela'], obs:['Identifica a emoção pelo rosto e pelo contexto?','Ajusta a conversa ao perceber sinais?'], ok:'Identifica 80% das emoções e explica 3 expressões.', mat:'pragmatica'}]},
 ],
 avancar:'Passe à habilidade seguinte quando a atual aparecer em situação não ensaiada (relato da escola ou da família).',
 alta:['Participa de conversas com pares com satisfação própria','Família e escola relatam generalização'],
 seNao:[
  {s:'Faz na sessão, mas não em outros lugares', c:'Treino só com o adulto', a:'Inclua pares, faça prática em ambientes reais e combine missões semanais.'},
  {s:'Resiste ou acha a atividade boba', c:'Habilidade sem sentido para a pessoa', a:'Discuta por que a habilidade importa para os objetivos DELA; use interesses e humor.'},
  {s:'Ansiedade alta nas práticas', c:'Exposição rápida demais', a:'Gradue a dificuldade; trabalhe junto com a psicologia.'}],
 trocar:'Se não houver avanço em 3 meses, reavalie compreensão de linguagem e ansiedade com a equipe.',
 refs:['Adams C et al. The Social Communication Intervention Project. IJLCD, 2012.','Winner MG. Thinking About You Thinking About Me. Think Social Publishing.']};
