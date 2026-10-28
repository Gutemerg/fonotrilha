M.recast = { nome:'Reformulação conversacional e estimulação focada', sigla:'Recasting', idade:'2–10 anos', ev:'forte', cert:'Não exige certificação.',
 resumo:'Durante a conversa e a brincadeira, o terapeuta repete o que a criança disse corrigindo e ampliando a gramática-alvo (“dois carro” → “dois carrOS!”), com alta frequência e sem pedir repetição. Na estimulação focada, o alvo aparece muitas vezes no modelo do adulto.',
 quando:['TDL com erros de morfossintaxe (plural, verbos, artigos, concordância)','Crianças que já combinam palavras','Também em atraso de linguagem com MLU baixo'],
 principios:['Escolher 1–2 alvos de cada vez, no nível de desenvolvimento seguinte','Alta taxa: cerca de 1,5 reformulações por minuto','Contexto natural e motivador','Não exigir imitação','Variar os exemplos (muitos verbos diferentes no passado, não só um)'],
 dose:'Estudos eficazes usam mais de 8 semanas, 2×/semana, 30 min, com alta taxa de reformulação.',
 inicio:['Amostra de linguagem de 50–100 enunciados (gravação de brincadeira)','Identificar os erros gramaticais mais frequentes','Medir o uso correto do alvo em contextos obrigatórios (%)'],
 sess:[
  {n:'1–4', t:'Estimulação focada', obj:'A criança ouvir o alvo muitas vezes em contexto significativo.', prep:['Brinquedos que forçam o alvo (vários objetos iguais para plural; ações terminadas para o passado)','Boneco para narrar as ações'],
   at:[
    {t:'Bombardeio com o alvo', min:15, il:'conversa', passos:['Monte a brincadeira com muitas chances do alvo (ex.: “o boneco PULOU, o carro CAIU, o pato NADOU”)','Narre a brincadeira usando o alvo com ênfase leve','Use verbos/palavras variados (mínimo 10 diferentes)','Conte quantas vezes produziu o alvo (meta: 30+)'], obs:['A criança presta atenção?','Começa a usar o alvo sozinha?'], ok:'30+ modelos do alvo em 15 min.', mat:'recast'}]},
  {n:'5–16', t:'Reformulação', obj:'Corrigir e ampliar a fala da criança no momento em que ela fala.', prep:['Atividade conversacional (jogo, livro, faz de conta)'],
   at:[
    {t:'Reformular sem corrigir', min:25, il:'conversa', passos:['Deixe a criança falar livremente','Quando errar o alvo, repita a frase dela já correta, com ênfase no alvo','Não diga “não é assim”; continue a conversa','Faça perguntas que levam ao alvo (“o que ele fez ontem?”)','Registre as reformulações e os usos espontâneos'], obs:['Taxa de reformulação por minuto','Uso correto em contextos obrigatórios'], ok:'Uso correto do alvo em 80% dos contextos obrigatórios, em amostra sem treino.', mat:'recast'}]},
 ],
 avancar:'Troque de alvo quando o uso correto chegar a 80% na amostra de linguagem; acrescente ensino explícito se ficar parado.',
 alta:['Gramática compatível com a idade nas amostras','Escola relata melhora na expressão oral e escrita'],
 seNao:[
  {s:'Não aparece o alvo após 8 semanas', c:'Alvo acima do nível ou taxa baixa', a:'Confira a taxa (≥ 1,5/min); escolha um alvo mais próximo do desenvolvimento.'},
  {s:'Usa só na sessão', c:'Falta de generalização', a:'Treine os pais na reformulação; use o alvo em atividades diferentes.'},
  {s:'Progresso lento em crianças maiores', c:'Ensino implícito sozinho é insuficiente', a:'Acrescente ensino explícito da regra com apoio visual (ex.: codificação por formas e cores).'}],
 trocar:'Combine com ensino explícito e narrativa quando a reformulação sozinha não for suficiente.',
 refs:['Fan S et al. Optimal dosage characteristics of recasting for DLD: a scoping review. JSLHR, 2025.','Plante E et al. Maximizing treatment efficiency in DLD: positive effects in half the time. AJSLP, 2019.','Frizelle P et al. The impact of intervention dose form on oral language outcomes for children with DLD. JSLHR, 2021.']};

M.vocab = { nome:'Ensino de vocabulário com elaboração semântica e fonológica', sigla:'Vocabulário', idade:'4–14 anos', ev:'moderada', cert:'Não exige certificação.',
 resumo:'Ensino explícito de palavras novas trabalhando significado (categoria, função, relação), forma sonora (sílabas, primeiro som, rima) e uso em frases. Muitas exposições espaçadas e a palavra escrita ajudam na retenção.',
 quando:['TDL com vocabulário reduzido ou “palavra na ponta da língua”','Dificuldade de compreensão de textos escolares','Defasagem de vocabulário acadêmico'],
 principios:['Escolher palavras úteis para a escola e a vida','Elaboração semântica e fonológica juntas','Muitas exposições (12+ por palavra) espaçadas no tempo','Recuperar a palavra (lembrar), não só ouvir','Mostrar a palavra escrita'],
 dose:'2×/semana, 30–45 min, 4–6 palavras novas por semana, com revisão.',
 inicio:['TVIP e nomeação','Lista de palavras do conteúdo escolar com o professor','Pré-teste: definir e usar as palavras-alvo'],
 sess:[
  {n:'1–8', t:'Mapa da palavra', obj:'Construir uma representação rica de cada palavra.', prep:['Cartas do jogo de adivinhar','Figuras e objetos reais'],
   at:[
    {t:'Construir o mapa', min:20, il:'vocabulario', passos:['Apresente a palavra num contexto (história, objeto)','Preencham o mapa: significado com palavras da criança, parecidos/contrários, sons (sílabas, primeiro som)','Façam um desenho e uma frase','Revise as palavras das sessões anteriores (recuperação)'], obs:['Explica o significado com as próprias palavras?','Lembra a forma sonora?'], ok:'Define e usa em frase 80% das palavras da semana.', mat:'vocab_mapa'}]},
  {n:'9+', t:'Recuperação e uso', obj:'Lembrar e usar as palavras em contextos novos.', prep:['Jogos de adivinhação e categorias'],
   at:[
    {t:'Adivinha a palavra', min:15, il:'vocabulario', passos:['Dê pistas semânticas e a criança adivinha','Inverta: a criança dá as pistas para você','Use as palavras em uma história ou explicação escolar'], obs:['Recupera sem pista fonológica?'], ok:'Recupera 80% das palavras treinadas após 2 semanas.', mat:'vocab_mapa'}]},
 ],
 avancar:'Introduza novas palavras quando as anteriores forem retidas na revisão após 2 semanas.',
 alta:['Vocabulário receptivo e expressivo na faixa esperada','Autonomia para aprender palavras novas (estratégia)'],
 seNao:[
  {s:'Esquece de uma semana para outra', c:'Poucas exposições ou sem recuperação', a:'Aumente as exposições e as revisões espaçadas; peça à família 5 min de revisão.'},
  {s:'Sabe o significado mas não lembra o nome', c:'Acesso fonológico', a:'Reforce a parte sonora: sílabas, primeiro som, rima, escrita.'}],
 trocar:'Sem retenção: avalie memória fonológica e combine com consciência fonológica.',
 refs:['Wright L, Pring T, Ebbels S. Effectiveness of vocabulary intervention for older children with (developmental) language disorder. IJLCD, 2018.','Beck IL, McKeown MG, Kucan L. Bringing Words to Life. Guilford, 2013.']};

M.dupla = { nome:'Plano para dupla excepcionalidade e enriquecimento', sigla:'AH/SD', idade:'5 anos ao adulto', ev:'emergente', cert:'Não exige certificação. Trabalho em equipe com neuropsicologia, psicopedagogia e escola.',
 resumo:'Roteiro para investigar quando a alta habilidade esconde uma dificuldade (dislexia, TDAH, TEA, TPAC) e montar o plano: remediação da dificuldade usando os pontos fortes e enriquecimento de linguagem para manter o interesse.',
 quando:['Criança/adulto com AH/SD e queixa escolar, social ou de fala','Discrepância grande entre oralidade e escrita','Frustração, perfeccionismo e evitação de tarefas'],
 principios:['Olhar para forças e dificuldades ao mesmo tempo','Usar os interesses e o raciocínio como motor da terapia','Ritmo mais rápido e desafios reais','Ensino explícito da estratégia (a pessoa entende o porquê)','Trabalhar autoestima e frustração com a equipe'],
 dose:'Semanal, 45–50 min. A remediação fonológica para dislexia associada costuma ser mais intensiva (2×/semana).',
 inicio:['Aplicar o roteiro de triagem (forças × dificuldades)','Avaliar leitura e escrita, consciência fonológica, RAN, processamento auditivo e pragmática conforme a queixa','Combinar com a família e a escola o que será trabalhado'],
 sess:[
  {n:'1–2', t:'Investigação', obj:'Mapear forças, dificuldades e o impacto no dia a dia.', prep:['Roteiro de triagem (no app)','Tarefas de leitura, escrita e conversa'],
   at:[
    {t:'Mapa de forças e dificuldades', min:30, il:'lupa', passos:['Converse sobre interesses e sobre o que é difícil','Aplique tarefas curtas em cada área do roteiro','Compare desempenho oral × escrito e velocidade × precisão','Defina com a equipe a hipótese e os encaminhamentos'], obs:['Discrepâncias marcantes','Reação a erro e frustração'], ok:'Hipótese e plano definidos com a equipe.', mat:'de_triagem'}]},
  {n:'3+', t:'Remediação com os pontos fortes', obj:'Tratar a dificuldade usando raciocínio e interesses.', prep:['Material do método indicado (CF, pragmática, FE)'],
   at:[
    {t:'Estratégia explicada', min:25, il:'lupa', passos:['Explique como a dificuldade funciona (ex.: como o cérebro liga som e letra)','Use materiais do tema preferido','Avance rápido quando dominar','Peça para a pessoa ensinar a estratégia de volta'], obs:['Ritmo de aprendizagem','Engajamento'], ok:'Metas do método escolhido atingidas.', mat:'cf_registro'},
    {t:'Enriquecimento de linguagem', min:15, il:'palco', passos:['Escolha um desafio (argumentar, ironia, resumir, apresentar)','Prepare juntos e apresente','Dê retorno sobre clareza e adaptação ao ouvinte'], obs:['Ajusta a linguagem ao ouvinte?'], ok:'Cumpre o desafio com retorno positivo do ouvinte.', mat:'enriquecimento'}]},
 ],
 avancar:'Siga o critério do método aplicado à dificuldade; aumente a complexidade do enriquecimento conforme o interesse.',
 alta:['Dificuldade remediada ou compensada','Bem-estar escolar e social'],
 seNao:[
  {s:'Recusa atividades “fáceis”', c:'Tédio ou perfeccionismo', a:'Explique o objetivo, dê autonomia na escolha do material e acelere os níveis.'},
  {s:'Escola não reconhece a dificuldade', c:'Bom desempenho esconde o problema', a:'Faça relatório mostrando a discrepância e as adaptações recomendadas.'},
  {s:'Ansiedade intensa', c:'Autoexigência', a:'Trabalhe em conjunto com a psicologia; celebre o processo e não só o resultado.'}],
 trocar:'Reavalie a hipótese com a equipe se a dificuldade não responder ao método indicado.',
 refs:['Alves RJR, Nakano TC. A dupla-excepcionalidade: relações entre AH/SD, Asperger, TDAH e transtornos de aprendizagem. Rev Psicopedag, 2015.','Relato de caso AH/SD + dislexia: CoDAS (SciELO).','Revisão integrativa sobre linguagem em AH/SD: Rev. CEFAC, 2020.']};
