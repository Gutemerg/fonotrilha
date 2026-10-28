/* ===== Como contar: t = o que é 1 tentativa, a = conta como acerto, e = conta como erro, q = quem é avaliado (opcional) ===== */
const CONTA = {
 'esdm:0:0':{t:'Cada pausa que você faz antes de soltar o balão.',a:'Na pausa, a criança olha para você, vocaliza, estende a mão ou faz um gesto pedindo mais.',e:'Não reage na pausa, olha para outro lugar ou sai da brincadeira.'},
 'esdm:0:1':{t:'Cada ação que você mostra com o objeto.',a:'Imita a ação (mesmo parecida) em até 5 segundos, sozinha ou com ajuda parcial.',e:'Não imita, faz outra coisa com o objeto ou só imita com ajuda física total.'},
 'esdm:1:0':{t:'Cada vez que você cria a oportunidade (peça segura, brinquedo parado).',a:'Pede no nível-alvo combinado (olhar, gesto, som ou palavra) sem ajuda.',e:'Pega sozinha, chora, desiste ou só pede após você dar o modelo.'},
 'esdm:1:1':{t:'Cada vez que você aponta para um objeto.',a:'Vira o olhar ou vai até o objeto apontado.',e:'Continua olhando para você, para o próprio objeto ou para outro lugar.'},
 'esdm:2:0':{t:'Cada vez que a criança fala uma palavra ou tenta falar.',a:'Palavra com função (nomeia, pede, comenta), dita sem você pedir para repetir.',e:'Só repete por ecolalia sem função ou fala apenas quando você pede.'},
 'esdm:2:1':{q:'Quem é avaliado: o responsável.',t:'Cada oportunidade que o responsável tem de aplicar a estratégia ensinada.',a:'O responsável aplica a estratégia corretamente (espera, imita, expande).',e:'Não aplica, faz pergunta-teste ou antecipa pela criança.'},
 'esdm:3:0':{t:'Cada vez que a criança se comunica com fala.',a:'Combina 2 palavras com sentido (“mais carro”, “bola azul”).',e:'Usa só 1 palavra ou só combina repetindo seu modelo imediato.'},
 'jasper:0:0':{t:'Cada intervalo de 1 minuto da atividade.',a:'No minuto, a criança ficou engajada com você e o brinquedo (olha, alterna, responde).',e:'No minuto, brincou sozinha, ficou repetitiva sem você ou se afastou.'},
 'jasper:1:0':{t:'Cada vez que a rotina completa é feita (do primeiro ao último passo).',a:'Mantém a rotina de 4 passos ou mais, alternando turnos com você.',e:'Interrompe antes do fim, sai da rotina ou só faz os passos com ajuda física.'},
 'jasper:2:0':{t:'Cada oportunidade criada (objeto novo, pausa, surpresa).',a:'Inicia sozinha: alterna o olhar, mostra, aponta ou entrega para compartilhar.',e:'Não inicia, ou aponta só para pedir (pedido não conta como atenção compartilhada).'},
 'pecs:0:0':{t:'Cada vez que o item desejado é oferecido.',a:'Pega a figura e entrega na sua mão sem ajuda física.',e:'Precisa de ajuda física, pega o item direto ou não faz a troca.'},
 'pecs:1:0':{t:'Cada troca, com a pasta ou o parceiro a distância.',a:'Vai até a pasta, pega a figura e leva ao parceiro sozinha.',e:'Não busca a pasta ou o parceiro, ou precisa ser conduzida.'},
 'pecs:2:0':{t:'Cada escolha entre as figuras apresentadas.',a:'Escolhe a figura certa e, na checagem, pega o item correspondente.',e:'Escolhe a figura errada ou, na checagem, recusa o item que pediu.'},
 'pecs:3:0':{t:'Cada pedido feito com a tira de frase.',a:'Monta a tira completa (“eu quero” + item) e entrega sozinha.',e:'Entrega só a figura do item, monta fora de ordem ou precisa de ajuda.'},
 'caa:0:0':{t:'Cada vez que você modela uma palavra na prancha.',a:'A pessoa olha para a prancha enquanto você aponta.',e:'Não olha para a prancha durante a modelagem.'},
 'caa:1:0':{t:'Cada situação planejada que pede comunicação.',a:'Usa a prancha sozinha para pedir, recusar ou comentar.',e:'Não usa a prancha, usa só comportamento (choro, puxar) ou só usa após modelo.'},
 'caa:2:0':{t:'Cada mensagem feita na prancha.',a:'Combina 2 símbolos ou mais com sentido.',e:'Usa só 1 símbolo ou combina apenas copiando seu modelo.'},
 'hanen:0:0':{q:'Quem é avaliado: o responsável.',t:'Cada situação no vídeo ou na prática em que a criança poderia se comunicar.',a:'O responsável espera 5 segundos ou mais antes de falar ou ajudar.',e:'Fala, pergunta ou resolve antes de 5 segundos.'},
 'hanen:1:0':{q:'Quem é avaliado: o responsável.',t:'Cada fala do responsável para a criança.',a:'Fala de imitar, interpretar ou comentar (“caiu!”, “você quer o carro”).',e:'Pergunta-teste (“que cor é?”) ou ordem (“fala bola”).'},
 'hanen:2:0':{t:'Cada pausa no fim de uma frase conhecida do livro.',a:'Completa a lacuna com a palavra (ou aproximação) sem ajuda.',e:'Não completa ou só completa depois que você fala a palavra.'},
 'emt:0:0':{t:'Cada tentação apresentada (pote fechado, brinquedo parado, item faltando).',a:'Inicia a comunicação sozinha (olhar, gesto, som ou palavra).',e:'Não inicia, tenta resolver sozinha ou desiste.'},
 'emt:1:0':{t:'Cada oportunidade de pedido.',a:'Responde no nível de pergunta aberta (“o que você quer?”) sem precisar de escolha ou modelo.',e:'Só responde quando você dá escolha (“bola ou carro?”) ou o modelo.'},
 'emt:2:0':{q:'Quem é avaliado: o responsável.',t:'Cada oportunidade em que o responsável deve aplicar a sequência.',a:'Aplica a sequência certa (espera → pergunta → escolha → modelo) e entrega em seguida.',e:'Pula etapas, dá o modelo de cara ou demora a entregar.'},
 'pragmatica:0:0':{t:'Cada ensaio de início de conversa.',a:'Inicia sozinho com o roteiro (cumprimento + pergunta ou comentário).',e:'Não inicia, inicia fora de contexto ou só inicia com sua dica.'},
 'pragmatica:1:0':{t:'Cada turno na conversa.',a:'O turno fica no tema do outro (comenta ou pergunta sobre o que foi dito).',e:'Muda para o próprio tema, não responde ou fala por cima.'},
 'pragmatica:2:0':{t:'Cada cena, foto ou expressão apresentada.',a:'Identifica a emoção certa ou explica corretamente a expressão.',e:'Nomeia a emoção errada ou interpreta a expressão ao pé da letra.'},
 'ta:0:0':{t:'Cada par de palavras falado (sem ver sua boca).',a:'Responde corretamente “igual” ou “diferente”.',e:'Responde errado ou precisa olhar sua boca.'},
 'ta:1:0':{t:'Cada palavra ou frase apresentada com ruído.',a:'Repete ou aponta corretamente o que ouviu.',e:'Repete outra palavra, não identifica ou pede para repetir.'},
 'ta:1:1':{t:'Cada palavra apresentada com um pedaço faltando.',a:'Completa e diz a palavra certa.',e:'Diz outra palavra ou não completa.'},
 'ta:2:0':{t:'Cada sequência de sons apresentada.',a:'Repete todos os sons na ordem certa.',e:'Erra um som, troca a ordem ou esquece itens.'},
 'cf:0:0':{t:'Cada par de cartas analisado.',a:'Identifica corretamente se as palavras rimam ou não.',e:'Junta palavras que não rimam ou não reconhece a rima.'},
 'cf:1:0':{t:'Cada palavra a segmentar ou a omitir sílaba.',a:'Bate o número certo de sílabas ou diz a palavra sem a sílaba pedida.',e:'Bate o número errado ou retira a sílaba errada.'},
 'cf:2:0':{t:'Cada palavra a juntar sons ou a trocar um som.',a:'Junta os sons na palavra certa ou faz a troca pedida corretamente.',e:'Forma outra palavra ou troca o som errado.'},
 'narrativa:0:0':{t:'Cada parte da história procurada (personagem, lugar, problema, tentativa, solução, final).',a:'Identifica a parte certa no texto ou na figura.',e:'Não encontra a parte ou confunde com outra.'},
 'narrativa:1:0':{t:'Cada parte da história no reconto.',a:'Inclui a parte, na ordem certa.',e:'Omite a parte ou a conta fora de ordem.'},
 'narrativa:2:0':{t:'Cada parte esperada da história pessoal.',a:'Inclui a parte sem usar o mapa.',e:'Omite a parte ou só inclui com o mapa ou sua pergunta.'},
 'fe:0:0':{t:'Cada tarefa feita com os 4 passos (o que fazer, como, fazer, conferir).',a:'Fala os 4 passos sozinho antes e durante a tarefa.',e:'Pula passos, começa direto ou só usa com sua dica.'},
 'fe:1:0':{t:'Cada instrução de várias partes.',a:'Executa todas as partes na ordem certa.',e:'Esquece uma parte, troca a ordem ou pede para repetir.'},
 'fe:1:1':{t:'Cada tarefa com previsão de tempo.',a:'A diferença entre o tempo previsto e o real é menor que 30%.',e:'A diferença é de 30% ou mais.'},
 'fe:2:0':{t:'Cada explicação planejada.',a:'Explica em 3 partes claras e o ouvinte entende sem perguntar.',e:'Explicação desorganizada ou o ouvinte precisa fazer perguntas para entender.'},
 'mo:0:0':{t:'Cada toque ou estímulo feito (face ou dentro da boca).',a:'Aceita o toque sem defesa (sem virar o rosto, chorar ou travar).',e:'Mostra defesa: vira o rosto, empurra, chora ou tem ânsia.'},
 'mo:1:0':{t:'Cada intervalo de 30 segundos durante o jogo.',a:'Lábios fechados em repouso no intervalo.',e:'Boca aberta ou língua para fora no intervalo.'},
 'mo:2:0':{t:'Cada porção oferecida na refeição.',a:'Mastiga com padrão adequado (dos dois lados) e engole sem engasgo.',e:'Engole sem mastigar, mastiga só de um lado ou engasga.'},
 'sinaiscaa:0:0':{t:'Cada oportunidade na rotina em que o sinal serve.',a:'Faz o sinal sozinha (aceite forma aproximada).',e:'Não sinaliza ou só faz o sinal imitando você na hora.'},
 'sinaiscaa:1:0':{t:'Cada mensagem da criança.',a:'Combina 2 sinais ou sinal + palavra com sentido.',e:'Usa só um sinal ou palavra.'},
 'leitura:0:0':{t:'Cada palavra a ser pareada.',a:'Coloca a palavra sobre a igual.',e:'Coloca sobre outra palavra.'},
 'leitura:1:0':{t:'Cada palavra pedida (“mostre…” ou “que palavra é?”).',a:'Mostra a palavra certa ou lê corretamente.',e:'Mostra outra palavra ou não lê.'},
 'dttc:0:0':{t:'Cada produção do alvo falando junto com você.',a:'Produz o alvo inteiro corretamente no nível simultâneo.',e:'Distorce som, erra a transição ou separa as sílabas.'},
 'dttc:0:1':{t:'Cada produção do alvo com a pista.',a:'Acerta o alvo só com o gesto (sem toque).',e:'Só acerta com o toque ou não acerta mesmo com toque.'},
 'dttc:1:0':{t:'Cada produção depois do seu modelo e da pausa.',a:'Repete o alvo corretamente após a pausa.',e:'Erra som, transição ou tonicidade.'},
 'dttc:2:0':{t:'Cada oportunidade de dizer o alvo sem modelo.',a:'Produz o alvo correto, espontâneo e com a prosódia certa.',e:'Erra o alvo ou só acerta com modelo.'},
 'rest:0:0':{t:'Cada pseudopalavra produzida.',a:'Acerta as três metas: sons, transição (sem pausa) e tonicidade.',e:'Erra qualquer uma das três metas.'},
 'rest:1:0':{t:'Cada pseudopalavra do bloco aleatório.',a:'Acerta as três metas.',e:'Erra qualquer uma das três metas.'},
 'rest:2:0':{t:'Cada item da sondagem (treinado ou não treinado), sem apoio.',a:'Acerta as três metas sem nenhum retorno seu.',e:'Erra qualquer uma das três metas.'},
 'ndp:0:0':{t:'Cada produção da sílaba com a figura-pista.',a:'Sílaba CV correta.',e:'Troca, omite ou distorce algum som.'},
 'ndp:1:0':{t:'Cada palavra CVCV produzida.',a:'Palavra inteira correta.',e:'Erra qualquer sílaba ou separa as sílabas.'},
 'ndp:2:0':{t:'Cada frase-veículo produzida.',a:'Frase completa e correta (veículo + palavra-alvo).',e:'Erra o alvo ou não completa a frase.'},
 'mit:0:0':{t:'Cada frase trabalhada no passo-alvo.',a:'Entoa a frase sozinho depois do modelo, com a batida.',e:'Não consegue entoar, trava ou só entoa junto com você.'},
 'mit:1:0':{t:'Cada pergunta feita sobre a frase.',a:'Responde usando a frase treinada.',e:'Não responde ou só responde com modelo.'},
 'mit:2:0':{t:'Cada oportunidade de usar uma frase funcional na conversa.',a:'Usa a frase com sentido, sem o canto.',e:'Não usa a frase ou só usa cantando com você.'},
 'sfa:0:0':{t:'Cada objeto ou figura trabalhado na grade.',a:'Gera 4 traços ou mais sozinho (grupo, uso, ação, propriedade, local, associação).',e:'Gera menos de 4 traços sem ajuda.'},
 'sfa:1:0':{t:'Cada item treinado na sondagem.',a:'Nomeia o item corretamente (sozinho ou usando a estratégia).',e:'Não nomeia ou diz outra palavra.'},
 'vnest:0:0':{t:'Cada verbo trabalhado.',a:'Gera 3 pares quem/o quê sozinho.',e:'Gera menos de 3 pares sem ajuda.'},
 'vnest:0:1':{t:'Cada frase apresentada para julgamento.',a:'Julga corretamente se a frase faz sentido.',e:'Julga errado.'},
 'ciat:0:0':{t:'Cada pedido de carta no jogo de pares.',a:'Pede só falando, com a palavra correta.',e:'Usa gesto, aponta, troca a palavra ou não pede.'},
 'ciat:1:0':{t:'Cada pedido no nível exigido (frase + atributo).',a:'Frase completa no nível pedido.',e:'Frase incompleta, sem o atributo ou com palavra errada.'},
 'ciat:2:0':{t:'Cada missão combinada para o dia a dia.',a:'Cumpre a missão e relata sucesso.',e:'Não tenta a missão ou não consegue se comunicar nela.'},
 'script:0:0':{t:'Cada frase do roteiro.',a:'O paciente aprova a frase como dele.',e:'A frase precisa ser reescrita.'},
 'script:1:0':{t:'Cada palavra do roteiro dito sem o texto escrito.',a:'Palavra correta e no lugar certo.',e:'Palavra omitida, trocada ou dita com apoio.'},
 'recast:0:0':{t:'Cada modelo do alvo que você produz.',a:'Modelo do alvo dito com clareza (conte para chegar a 30 ou mais).',e:'Não se aplica: aqui você conta os próprios modelos.'},
 'recast:1:0':{t:'Cada contexto em que o alvo gramatical é obrigatório.',a:'A criança usa o alvo corretamente.',e:'Omite o alvo ou usa a forma errada.'},
 'vocab:0:0':{t:'Cada palavra da semana.',a:'Define a palavra e a usa em uma frase correta.',e:'Não define ou usa a palavra fora do sentido.'},
 'vocab:1:0':{t:'Cada palavra treinada na adivinhação.',a:'Recupera a palavra sozinha.',e:'Não recupera ou só recupera com a primeira sílaba dada.'},
 'dupla:0:0':{t:'Cada área avaliada no mapa (forças e dificuldades).',a:'Área descrita com dados e combinada com a equipe.',e:'Área sem dados ou sem definição.'},
 'dupla:1:0':{t:'Cada tentativa na tarefa do método escolhido.',a:'Usa a estratégia explicada e acerta a tarefa.',e:'Não usa a estratégia ou erra a tarefa.'},
 'dupla:1:1':{t:'Cada desafio de linguagem proposto.',a:'Cumpre o desafio e o ouvinte entende ou dá retorno positivo.',e:'Não cumpre o desafio ou o ouvinte não entende.'},
};
function contaHTML(ak, compacto){
  const c = CONTA[ak]; if(!c) return '';
  const md = medOf(ak); const cont = md.tipo==='cont'||md.tipo==='base';
  const mid = ak.split(':')[0]; const aps = apoiosOf(mid, ak);
  return `<div class="conta stack" style="gap:8px">
    <b style="font-size:14.5px">Como contar nesta atividade</b>
    ${c.q?`<span class="sm" style="font-weight:700;color:var(--p)">${esc(c.q)}</span>`:''}
    ${cont?`<div class="cl"><span class="ct ok">Conta +1</span><span>${esc(c.a)}</span></div>
    <div class="cl"><span class="ct bad">Não conta</span><span>${esc(c.e)}</span></div>`:
    `<div class="cl"><span class="ct">1 tentativa</span><span>${esc(c.t)}</span></div>
    <div class="cl"><span class="ct ok">Acerto</span><span>${esc(c.a)}</span></div>
    <div class="cl"><span class="ct bad">Erro</span><span>${esc(c.e)}</span></div>`}
    ${compacto?`<div class="cl"><span class="ct">Meta</span><span>${esc(metaTxt(md))}</span></div>`:(aps.length>1?`<span class="sm mut">Se acertou com ajuda, marque ${cont?'+1':'Acerto'} e escolha o nível de apoio usado. ${md.aceita>0?'O acerto vale para o critério até o apoio marcado com ✓.':`Para o critério vale o acerto com “${esc(aps[0])}”.`}</span>`:'')}
  </div>`;
}
