/* ===== Cena da atividade: pessoas + objetos da atividade + ação do passo ===== */
/* Especificação de cada atividade: p = paciente (crianca | adulto | pais), o = objetos na mesa, b = brincadeira impressa (ou null), u = material real */
const ACT = {
 'esdm:0:0':{p:'crianca',o:['balao'],b:null,u:'Balões e bolhas de sabão'},
 'esdm:0:1':{p:'crianca',o:['carro','carro2'],b:null,u:'Dois conjuntos iguais de brinquedos (2 carrinhos, 2 tambores)'},
 'esdm:1:0':{p:'crianca',o:['blocos'],b:null,u:'Encaixes ou blocos para entregar um de cada vez'},
 'esdm:1:1':{p:'crianca',o:['pato'],b:null,u:'Um objeto surpresa (bichinho, brinquedo com luz)'},
 'esdm:2:0':{p:'crianca',o:['boneco','panela'],b:null,u:'Panelinhas, boneco e carrinho'},
 'esdm:2:1':{p:'pais',o:['blocos'],b:'guia_pais',u:'Brinquedos da rotina da família'},
 'esdm:3:0':{p:'crianca',o:['carro','carro2'],b:null,u:'Brinquedos em cores e tamanhos diferentes'},
 'jasper:0:0':{p:'crianca',o:['torre','blocos'],b:null,u:'Blocos ou argolas em dobro (um conjunto para você imitar)'},
 'jasper:1:0':{p:'crianca',o:['garagem','carro'],b:null,u:'Garagem, carrinhos e bonequinhos'},
 'jasper:2:0':{p:'crianca',o:['garagem','pato'],b:null,u:'A mesma rotina + um objeto surpresa'},
 'pecs:0:0':{p:'crianca',o:['cartao','bolha'],b:'cartoes_itens',u:'Item muito desejado + 2º adulto como ajudante'},
 'pecs:1:0':{p:'crianca',o:['pasta'],b:'cartoes_itens',u:'Pasta de comunicação com velcro'},
 'pecs:2:0':{p:'crianca',o:['cartao2'],b:'cartoes_itens',u:'Figura de item preferido + figura de item neutro'},
 'pecs:3:0':{p:'crianca',o:['tira'],b:'tira_frase',u:'Tira de frase e cartão “eu quero”'},
 'caa:0:0':{p:'crianca',o:['prancha','bolha'],b:'prancha_caa',u:'Prancha ou tablet + bolha de sabão'},
 'caa:1:0':{p:'crianca',o:['prancha','pote'],b:'prancha_caa',u:'Pote fechado com brinquedo dentro'},
 'caa:2:0':{p:'crianca',o:['prancha'],b:'prancha_caa',u:'Prancha de vocabulário essencial'},
 'hanen:0:0':{p:'pais',o:['tablet'],b:'guia_pais',u:'Vídeo de 5 min da família brincando'},
 'hanen:1:0':{p:'pais',o:['blocos'],b:'guia_pais',u:'Brinquedos da rotina da casa'},
 'hanen:2:0':{p:'pais',o:['livro'],b:null,u:'Livro de figuras simples'},
 'emt:0:0':{p:'crianca',o:['pote'],b:null,u:'Potes transparentes com brinquedos preferidos'},
 'emt:1:0':{p:'crianca',o:['pote','bola'],b:null,u:'Dois brinquedos para oferecer escolha'},
 'emt:2:0':{p:'pais',o:['pote'],b:'guia_pais',u:'Brinquedos preferidos da criança'},
 'pragmatica:0:0':{p:'jovem',o:['cartas'],b:'cartoes_conversa',u:'Cartas da conversa'},
 'pragmatica:1:0':{p:'jovem',o:['fichas'],b:'cartoes_conversa',u:'Fichas ou tampinhas para marcar os turnos'},
 'pragmatica:2:0':{p:'jovem',o:['emocoes'],b:'cartoes_conversa',u:'Cartas de emoções, fotos ou vídeos curtos'},
 'ta:0:0':{p:'crianca',o:['placas'],b:'bingo_sons',u:'Placas “igual” e “diferente”'},
 'ta:1:0':{p:'crianca',o:['celular'],b:'bingo_sons',u:'Celular com ruído de fundo'},
 'ta:1:1':{p:'crianca',o:['figuras'],b:null,u:'Lista de palavras com uma sílaba “apagada”'},
 'ta:2:0':{p:'crianca',o:['instrumentos'],b:null,u:'Apito e tambor (sons fino e grosso)'},
 'cf:0:0':{p:'crianca',o:['cartas'],b:'memoria_rimas',u:'Cartas da memória das rimas'},
 'cf:1:0':{p:'crianca',o:['silabas'],b:'domino_silabas',u:'Blocos coloridos (um por sílaba)'},
 'cf:2:0':{p:'crianca',o:['letras'],b:null,u:'Letras móveis e espelho'},
 'narrativa:0:0':{p:'crianca',o:['livro'],b:'sequencia_historia',u:'Livro curto com um problema claro'},
 'narrativa:1:0':{p:'crianca',o:['sequencia'],b:'sequencia_historia',u:'Cenas da história para ordenar'},
 'narrativa:2:0':{p:'crianca',o:['fotos'],b:'sequencia_historia',u:'Fotos de um passeio ou acontecimento real'},
 'fe:0:0':{p:'jovem',o:['quebra'],b:'cartas_autoinstrucao',u:'Quebra-cabeça ou jogo simples'},
 'fe:1:0':{p:'jovem',o:['papel'],b:null,u:'Lápis colorido e papel'},
 'fe:1:1':{p:'jovem',o:['relogio'],b:null,u:'Cronômetro'},
 'fe:2:0':{p:'jovem',o:['papel'],b:'cartas_autoinstrucao',u:'Tema real: explicar um jogo ou dar um recado'},
 'mo:0:0':{p:'crianca',o:['escova'],b:null,u:'Escova macia, luva e mordedor'},
 'mo:1:0':{p:'crianca',o:['espelho','bolha'],b:'caretas',u:'Espelho, bolhas, apito e canudo curto'},
 'mo:2:0':{p:'crianca',o:['prato','copo'],b:null,u:'Alimentos de consistências diferentes trazidos pela família'},
 'sinaiscaa:0:0':{p:'crianca',o:['comida'],b:'sinais_rotina',u:'Objetos e alimentos reais da rotina'},
 'sinaiscaa:1:0':{p:'crianca',o:['comida','copo'],b:'sinais_rotina',u:'Alimentos e bebidas reais'},
 'leitura:0:0':{p:'crianca',o:['palavra'],b:'cartoes_leitura',u:'Cartões de palavras (2 cópias)'},
 'leitura:1:0':{p:'crianca',o:['palavra'],b:'cartoes_leitura',u:'Cartões de palavras'},
 'dttc:0:0':{p:'crianca',o:['espelho'],b:'tabuleiro_trilha',u:'Espelho + tabuleiro para contar as repetições'},
 'dttc:0:1':{p:'crianca',o:['espelho'],b:null,u:'Nenhum: a pista é o toque no rosto'},
 'dttc:1:0':{p:'crianca',o:['tabuleiro'],b:'tabuleiro_trilha',u:'Tabuleiro da trilha e dado'},
 'dttc:2:0':{p:'crianca',o:['figuras'],b:'loto_figuras',u:'Figuras dos alvos'},
 'rest:0:0':{p:'crianca',o:['pseudo'],b:'palavras_malucas',u:'Cartas das palavras malucas'},
 'rest:1:0':{p:'crianca',o:['pseudo','tabuleiro'],b:'palavras_malucas',u:'Cartas das palavras malucas + tabuleiro'},
 'rest:2:0':{p:'crianca',o:['pseudo'],b:'palavras_malucas',u:'Cartas embaralhadas e gravador do celular'},
 'ndp:0:0':{p:'crianca',o:['figuras','espelho'],b:'tabuleiro_trilha',u:'Figuras-pista dos sons e espelho'},
 'ndp:1:0':{p:'crianca',o:['figuras','tabuleiro'],b:'tabuleiro_trilha',u:'Figuras de palavras CVCV + tabuleiro'},
 'ndp:2:0':{p:'crianca',o:['figuras'],b:'loto_figuras',u:'Figuras de palavras de 3 sílabas'},
 'mit:0:0':{p:'adulto',o:['frases'],b:'cartoes_melodia',u:'Cartões de frases cantadas'},
 'mit:1:0':{p:'adulto',o:['frases'],b:'cartoes_melodia',u:'Cartões de frases do nível 2'},
 'mit:2:0':{p:'adulto',o:['frases'],b:'cartoes_melodia',u:'Frases funcionais do paciente'},
 'sfa:0:0':{p:'adulto',o:['grade'],b:'tabuleiro_pistas',u:'Tabuleiro de pistas + figura'},
 'sfa:1:0':{p:'adulto',o:['figuras'],b:'cartoes_nomeacao',u:'Figuras de objetos e cenas'},
 'vnest:0:0':{p:'adulto',o:['verbos'],b:'cartoes_verbos',u:'Cartão do verbo + fichas em branco'},
 'vnest:0:1':{p:'adulto',o:['verbos'],b:'cartoes_verbos',u:'Frases certas e absurdas escritas'},
 'ciat:0:0':{p:'adulto',o:['barreira','cartas'],b:'pares_ciat',u:'2 cópias das cartas + pasta em pé como barreira'},
 'ciat:1:0':{p:'adulto',o:['barreira','cartas'],b:'pares_ciat',u:'Cartas com cores e quantidades'},
 'ciat:2:0':{p:'adulto',o:['celular'],b:'cartoes_cena',u:'Lista de situações reais do dia'},
 'script:0:0':{p:'adulto',o:['papel','celular'],b:'cartoes_cena',u:'Papel e celular para gravar'},
 'script:1:0':{p:'adulto',o:['papel'],b:'cartoes_cena',u:'Roteiro escrito e a gravação'},
 'recast:0:0':{p:'crianca',o:['boneco','panela'],b:'cartoes_acoes',u:'Boneco e objetos para fazer ações'},
 'recast:1:0':{p:'crianca',o:['livro'],b:'cartoes_acoes',u:'Jogo, livro ou faz de conta'},
 'vocab:0:0':{p:'crianca',o:['papel','figuras'],b:null,u:'Papel, figuras e objetos reais'},
 'vocab:1:0':{p:'crianca',o:['cartas'],b:'adivinha',u:'Cartas do jogo de adivinhar'},
 'dupla:0:0':{p:'jovem',o:['papel','livro'],b:null,u:'Tarefas curtas de leitura, escrita e conversa'},
 'dupla:1:0':{p:'jovem',o:['letras'],b:'domino_silabas',u:'Material do tema preferido do paciente'},
 'dupla:1:1':{p:'jovem',o:['microfone'],b:'cartas_desafio',u:'Cartas de desafio'},
};

/* Objetos (desenhados sobre a mesa; x = centro, y = 138 = tampo) */
const OBJ = {
 balao:x=>`<path d="M${x} 136v-44" stroke="#555" stroke-width="1.5"/><ellipse cx="${x}" cy="74" rx="20" ry="24" fill="#E2504B"/><path d="M${x-3} 98h6l-3 5z" fill="#C23B36"/><ellipse cx="${x-7}" cy="66" rx="5" ry="8" fill="#F28A86"/>`,
 carro:x=>`<path d="M${x-22} 136v-12l8-10h22l10 10h4v12z" fill="#D7372F"/><path d="M${x-13} 116l5-6h12l6 6z" fill="#F1B7B3"/><circle cx="${x-12}" cy="136" r="5" fill="#2A2A2A"/><circle cx="${x+12}" cy="136" r="5" fill="#2A2A2A"/>`,
 carro2:x=>`<path d="M${x-22} 136v-12l8-10h22l10 10h4v12z" fill="#2B7CC9"/><path d="M${x-13} 116l5-6h12l6 6z" fill="#B9D7F2"/><circle cx="${x-12}" cy="136" r="5" fill="#2A2A2A"/><circle cx="${x+12}" cy="136" r="5" fill="#2A2A2A"/>`,
 garagem:x=>`<path d="M${x-34} 138V104l34-20 34 20v34z" fill="#F4D58D" stroke="#B88A2E" stroke-width="2"/><rect x="${x-18}" y="112" width="36" height="26" fill="#8C6A3A"/><path d="M${x-18} 118h36M${x-18} 124h36M${x-18} 130h36" stroke="#6E522B" stroke-width="1.5"/>`,
 blocos:x=>`<rect x="${x-26}" y="118" width="20" height="20" rx="3" fill="#2FA85A"/><rect x="${x-4}" y="118" width="20" height="20" rx="3" fill="#F08A24"/><rect x="${x-15}" y="98" width="20" height="20" rx="3" fill="#2B7CC9"/><rect x="${x+18}" y="124" width="14" height="14" rx="3" fill="#E2504B"/>`,
 torre:x=>`<rect x="${x-10}" y="118" width="20" height="20" rx="3" fill="#7656D6"/><rect x="${x-10}" y="98" width="20" height="20" rx="3" fill="#2FA85A"/><rect x="${x-10}" y="78" width="20" height="20" rx="3" fill="#F08A24"/>`,
 pato:x=>`<ellipse cx="${x}" cy="126" rx="18" ry="12" fill="#F5C842"/><circle cx="${x+12}" cy="110" r="9" fill="#F5C842"/><path d="M${x+20} 110l9 2-9 3z" fill="#F08A24"/><circle cx="${x+14}" cy="108" r="1.8" fill="#222"/>`,
 boneco:x=>`<circle cx="${x}" cy="102" r="10" fill="#F2C29E"/><path d="M${x-12} 138c0-20 5-28 12-28s12 8 12 28z" fill="#E2504B"/><path d="M${x-10} 96c2-8 18-8 20 0" fill="#6B3D24"/>`,
 panela:x=>`<path d="M${x-20} 118h40v12a8 8 0 0 1-8 8H${x-12}a8 8 0 0 1-8-8z" fill="#9AA6AD"/><rect x="${x-22}" y="114" width="44" height="5" rx="2" fill="#7D8990"/><path d="M${x+22} 122h10" stroke="#7D8990" stroke-width="4" stroke-linecap="round"/>`,
 cartao:x=>`<rect x="${x-14}" y="108" width="28" height="30" rx="4" fill="#fff" stroke="#0B6E74" stroke-width="2"/><circle cx="${x}" cy="122" r="8" fill="none" stroke="#2B7CC9" stroke-width="2.5"/>`,
 cartao2:x=>`<rect x="${x-34}" y="106" width="28" height="32" rx="4" fill="#fff" stroke="#0B6E74" stroke-width="2"/><circle cx="${x-20}" cy="121" r="8" fill="#F5C842"/><rect x="${x+6}" y="106" width="28" height="32" rx="4" fill="#fff" stroke="#0B6E74" stroke-width="2"/><path d="M${x+12} 130h16l-3-14h-10z" fill="#9AA6AD"/>`,
 bolha:x=>`<circle cx="${x}" cy="96" r="10" fill="none" stroke="#5BB8E8" stroke-width="2"/><circle cx="${x+16}" cy="80" r="6" fill="none" stroke="#5BB8E8" stroke-width="2"/><circle cx="${x-12}" cy="78" r="5" fill="none" stroke="#5BB8E8" stroke-width="2"/><rect x="${x-6}" y="118" width="12" height="20" rx="3" fill="#7656D6"/>`,
 pasta:x=>`<rect x="${x-26}" y="104" width="52" height="34" rx="4" fill="#2B7CC9"/><rect x="${x-20}" y="110" width="12" height="12" rx="2" fill="#fff"/><rect x="${x-6}" y="110" width="12" height="12" rx="2" fill="#fff"/><rect x="${x+8}" y="110" width="12" height="12" rx="2" fill="#fff"/>`,
 tira:x=>`<rect x="${x-40}" y="114" width="80" height="24" rx="4" fill="#fff" stroke="#1F2328" stroke-width="2"/><rect x="${x-36}" y="118" width="22" height="16" rx="2" fill="#E3F3F2"/><rect x="${x-11}" y="118" width="22" height="16" rx="2" fill="#FFE2B8"/><rect x="${x+14}" y="118" width="22" height="16" rx="2" fill="#fff" stroke="#9AB8B9" stroke-dasharray="3 2"/>`,
 prancha:x=>`<rect x="${x-30}" y="96" width="60" height="42" rx="5" fill="#fff" stroke="#0B6E74" stroke-width="2"/>${[0,1,2,3].map(c=>[0,1].map(r=>`<rect x="${x-26+c*14}" y="${100+r*18}" width="11" height="15" rx="2" fill="${['#FFE2B8','#CFE8E7','#E6DDF8','#DDEBFA'][(c+r)%4]}"/>`).join('')).join('')}`,
 pote:x=>`<rect x="${x-16}" y="106" width="32" height="32" rx="6" fill="#DDEFF5" stroke="#7FB4C9" stroke-width="2"/><rect x="${x-18}" y="100" width="36" height="8" rx="3" fill="#F08A24"/><circle cx="${x}" cy="124" r="8" fill="#E2504B"/>`,
 bola:x=>`<circle cx="${x}" cy="124" r="14" fill="#F5C842"/><path d="M${x-14} 122c9 4 19 4 28 0M${x} 110c-5 9-5 19 0 28" stroke="#C99A1A" stroke-width="2" fill="none"/>`,
 tablet:x=>`<rect x="${x-30}" y="94" width="60" height="42" rx="5" fill="#2A2F33"/><rect x="${x-26}" y="98" width="52" height="34" rx="2" fill="#BFE3E2"/><path d="M${x-4} 108l10 7-10 7z" fill="#0B6E74"/>`,
 livro:x=>`<path d="M${x} 112c-10-6-22-6-32-3v28c10-3 22-3 32 3 10-6 22-6 32-3v-28c-10-3-22-3-32 3z" fill="#fff" stroke="#0B6E74" stroke-width="2"/><path d="M${x} 112v28" stroke="#0B6E74" stroke-width="2"/><circle cx="${x-16}" cy="122" r="6" fill="#F5C842"/><path d="M${x+6} 122h20M${x+6} 128h14" stroke="#9AA6AD" stroke-width="2"/>`,
 cartas:x=>`<rect x="${x-32}" y="110" width="22" height="28" rx="3" fill="#fff" stroke="#0B6E74" stroke-width="2" transform="rotate(-10 ${x-21} 124)"/><rect x="${x-11}" y="108" width="22" height="28" rx="3" fill="#fff" stroke="#0B6E74" stroke-width="2"/><rect x="${x+10}" y="110" width="22" height="28" rx="3" fill="#E3F3F2" stroke="#0B6E74" stroke-width="2" transform="rotate(10 ${x+21} 124)"/><circle cx="${x}" cy="120" r="5" fill="#E2504B"/>`,
 fichas:x=>[0,1,2,3,4].map(i=>`<ellipse cx="${x-24+i*12}" cy="${134-(i%2)*4}" rx="6" ry="4" fill="${['#E2504B','#2FA85A','#F5C842','#2B7CC9','#F08A24'][i]}"/>`).join(''),
 emocoes:x=>[0,1,2].map(i=>`<circle cx="${x-24+i*24}" cy="122" r="10" fill="#FFE2B8" stroke="#1F2328" stroke-width="1.5"/><circle cx="${x-27+i*24}" cy="119" r="1.3" fill="#1F2328"/><circle cx="${x-21+i*24}" cy="119" r="1.3" fill="#1F2328"/><path d="${['M'+(x-29)+' 125c3 3 7 3 10 0','M'+(x-5)+' 128c3-3 7-3 10 0','M'+(x+19)+' 126h10'][i]}" stroke="#1F2328" stroke-width="1.5" fill="none"/>`).join(''),
 placas:x=>`<rect x="${x-36}" y="108" width="32" height="24" rx="4" fill="#2FA85A"/><text x="${x-20}" y="124" text-anchor="middle" font-size="9" font-weight="800" fill="#fff">IGUAL</text><rect x="${x+4}" y="108" width="34" height="24" rx="4" fill="#E2504B"/><text x="${x+21}" y="124" text-anchor="middle" font-size="7.5" font-weight="800" fill="#fff">DIFERENTE</text>`,
 celular:x=>`<rect x="${x-10}" y="104" width="20" height="34" rx="4" fill="#2A2F33"/><rect x="${x-7}" y="108" width="14" height="24" rx="1" fill="#BFE3E2"/><path d="M${x+14} 108q6 8 0 16M${x+20} 104q10 12 0 24" stroke="#F08A24" stroke-width="2" fill="none"/>`,
 figuras:x=>`<rect x="${x-30}" y="108" width="26" height="30" rx="3" fill="#fff" stroke="#0B6E74" stroke-width="2"/><circle cx="${x-17}" cy="121" r="7" fill="#F5C842"/><rect x="${x+4}" y="108" width="26" height="30" rx="3" fill="#fff" stroke="#0B6E74" stroke-width="2"/><path d="M${x+10} 130l7-14 7 14z" fill="#2FA85A"/>`,
 instrumentos:x=>`<rect x="${x-30}" y="116" width="26" height="22" rx="4" fill="#E2504B"/><ellipse cx="${x-17}" cy="116" rx="13" ry="4" fill="#F4E3D0" stroke="#B23A34"/><rect x="${x+6}" y="126" width="26" height="8" rx="4" fill="#F5C842"/><circle cx="${x+30}" cy="130" r="6" fill="#F5C842"/>`,
 silabas:x=>['ba','na','na'].map((s,i)=>`<rect x="${x-36+i*25}" y="112" width="22" height="24" rx="4" fill="${['#2FA85A','#F08A24','#2B7CC9'][i]}"/><text x="${x-25+i*25}" y="129" text-anchor="middle" font-size="11" font-weight="800" fill="#fff">${s}</text>`).join(''),
 letras:x=>['P','A','T','O'].map((s,i)=>`<rect x="${x-40+i*21}" y="114" width="18" height="22" rx="3" fill="${['#E2504B','#2B7CC9','#2FA85A','#F08A24'][i]}"/><text x="${x-31+i*21}" y="130" text-anchor="middle" font-size="13" font-weight="800" fill="#fff">${s}</text>`).join(''),
 sequencia:x=>[0,1,2].map(i=>`<rect x="${x-36+i*25}" y="110" width="22" height="26" rx="3" fill="#fff" stroke="#0B6E74" stroke-width="2"/><text x="${x-25+i*25}" y="127" text-anchor="middle" font-size="12" font-weight="800" fill="#0B6E74">${i+1}</text>`).join(''),
 fotos:x=>`<rect x="${x-30}" y="108" width="34" height="26" rx="2" fill="#fff" stroke="#9AA6AD" stroke-width="2" transform="rotate(-6 ${x-13} 121)"/><path d="M${x-26} 128l8-10 8 8 6-4 6 6" stroke="#2FA85A" stroke-width="2" fill="none" transform="rotate(-6 ${x-13} 121)"/><rect x="${x-2}" y="110" width="34" height="26" rx="2" fill="#fff" stroke="#9AA6AD" stroke-width="2" transform="rotate(5 ${x+15} 123)"/><circle cx="${x+14}" cy="121" r="5" fill="#F5C842"/>`,
 quebra:x=>`<path d="M${x-30} 112h20a6 6 0 1 1 12 0h18v26H${x-30}z" fill="#7656D6"/><path d="M${x+4} 112h26v26H${x+4}v-8a6 6 0 1 0 0-10z" fill="#2FA85A"/>`,
 papel:x=>`<rect x="${x-24}" y="112" width="40" height="26" rx="2" fill="#fff" stroke="#9AA6AD" stroke-width="2"/><path d="M${x-18} 120h26M${x-18} 126h20M${x-18} 132h24" stroke="#9AA6AD" stroke-width="1.5"/><path d="M${x+14} 136l18-24 4 3-18 24z" fill="#F5C842" stroke="#B88A2E"/>`,
 relogio:x=>`<circle cx="${x}" cy="118" r="18" fill="#fff" stroke="#0B6E74" stroke-width="3"/><path d="M${x} 108v10l7 5" stroke="#1F2328" stroke-width="2.5" stroke-linecap="round" fill="none"/><rect x="${x-4}" y="96" width="8" height="5" rx="1" fill="#0B6E74"/>`,
 escova:x=>`<path d="M${x-30} 134l46-18" stroke="#2B7CC9" stroke-width="6" stroke-linecap="round"/><rect x="${x+12}" y="106" width="18" height="10" rx="2" fill="#fff" stroke="#2B7CC9" stroke-width="2" transform="rotate(-20 ${x+21} 111)"/>`,
 espelho:x=>`<ellipse cx="${x}" cy="104" rx="20" ry="26" fill="#DDEFF5" stroke="#9AA6AD" stroke-width="3"/><path d="M${x-8} 90l10-6M${x-10} 100l14-8" stroke="#fff" stroke-width="3"/><path d="M${x} 130v8M${x-12} 138h24" stroke="#9AA6AD" stroke-width="4" stroke-linecap="round"/>`,
 prato:x=>`<ellipse cx="${x}" cy="132" rx="26" ry="7" fill="#fff" stroke="#9AA6AD" stroke-width="2"/><ellipse cx="${x-6}" cy="127" rx="8" ry="4" fill="#F08A24"/><ellipse cx="${x+8}" cy="128" rx="7" ry="3.5" fill="#2FA85A"/>`,
 copo:x=>`<path d="M${x-10} 112h20l-3 26h-14z" fill="#DDEFF5" stroke="#7FB4C9" stroke-width="2"/><path d="M${x+4} 112l6-14" stroke="#E2504B" stroke-width="3"/>`,
 comida:x=>`<circle cx="${x-12}" cy="128" r="10" fill="#E2504B"/><path d="M${x-12} 118c0-4 2-6 4-7" stroke="#2FA85A" stroke-width="2"/><path d="M${x+2} 136c6-2 18-8 22-20 2 8-8 20-22 20z" fill="#F5C842"/>`,
 palavra:x=>`<rect x="${x-32}" y="112" width="64" height="26" rx="4" fill="#fff" stroke="#0B6E74" stroke-width="2"/><text x="${x}" y="130" text-anchor="middle" font-size="14" font-weight="800" fill="#1F2328" letter-spacing="1">BOLA</text>`,
 tabuleiro:x=>`<rect x="${x-34}" y="120" width="68" height="18" rx="3" fill="#fff" stroke="#0B6E74" stroke-width="2"/>${[0,1,2,3].map(i=>`<rect x="${x-31+i*16}" y="123" width="14" height="12" rx="2" fill="${i%2?'#CFE8E7':'#FFE2B8'}"/>`).join('')}<rect x="${x+20}" y="104" width="12" height="12" rx="2" fill="#fff" stroke="#1F2328" stroke-width="1.5"/><circle cx="${x+26}" cy="110" r="1.6" fill="#1F2328"/>`,
 pseudo:x=>`<rect x="${x-30}" y="110" width="60" height="28" rx="4" fill="#fff" stroke="#0B6E74" stroke-width="2"/><text x="${x}" y="129" text-anchor="middle" font-size="12" font-weight="800" fill="#1F2328">BAdigu</text>`,
 frases:x=>`<rect x="${x-34}" y="110" width="68" height="28" rx="4" fill="#fff" stroke="#0B6E74" stroke-width="2"/><text x="${x}" y="122" text-anchor="middle" font-size="9" font-weight="800" fill="#1F2328">bom di-a</text><text x="${x}" y="133" text-anchor="middle" font-size="8" fill="#0B6E74">▼ ▲ ▼</text>`,
 grade:x=>`<rect x="${x-34}" y="104" width="68" height="34" rx="3" fill="#fff" stroke="#0B6E74" stroke-width="2"/><rect x="${x-8}" y="112" width="16" height="18" rx="2" fill="#FFE2B8"/>${[[-28,108],[14,108],[-28,122],[14,122]].map(([dx,dy])=>`<rect x="${x+dx}" y="${dy+2}" width="14" height="8" rx="1" fill="#CFE8E7"/>`).join('')}`,
 verbos:x=>`<rect x="${x-14}" y="114" width="28" height="18" rx="3" fill="#0B6E74"/><text x="${x}" y="127" text-anchor="middle" font-size="7.5" font-weight="800" fill="#fff">MEDIR</text><rect x="${x-40}" y="108" width="20" height="12" rx="2" fill="#fff" stroke="#9AB8B9" stroke-dasharray="2 2"/><rect x="${x+20}" y="108" width="20" height="12" rx="2" fill="#fff" stroke="#9AB8B9" stroke-dasharray="2 2"/>`,
 barreira:x=>`<path d="M${x-4} 138V92h8v46z" fill="#2B7CC9"/>`,
 microfone:x=>`<rect x="${x-6}" y="98" width="12" height="22" rx="6" fill="#2A2F33"/><path d="M${x-10} 114a10 10 0 0 0 20 0M${x} 124v14M${x-8} 138h16" stroke="#2A2F33" stroke-width="2.5" fill="none"/>`,
};

/* Pessoas: fono à esquerda; paciente à direita */
const FONO = `<path d="M30 200c0-50 18-82 52-82s52 32 52 82z" fill="#2E8C8F"/><path d="M54 72c0-28 14-42 30-42s32 14 32 42c0 20-4 36-4 46H58c0-10-4-26-4-46z" fill="#6B3D24"/><ellipse cx="86" cy="76" rx="22" ry="25" fill="#F2C29E"/><path d="M62 66c4-20 18-28 30-26 14 2 20 14 18 24-12-8-30-8-48 2z" fill="#6B3D24"/><ellipse cx="80" cy="76" rx="2.4" ry="3" fill="#2A1A14"/><ellipse cx="96" cy="76" rx="2.4" ry="3" fill="#2A1A14"/><path d="M80 90c4 4 10 4 14 0" stroke="#B0584A" stroke-width="2.4" fill="none" stroke-linecap="round"/>`;
const PAC = {
  crianca:{ eye:[272,106], mouth:[272,118], top:80, svg:`<path d="M232 200c0-40 14-64 40-64s40 24 40 64z" fill="#F08A24"/><ellipse cx="272" cy="106" rx="20" ry="22" fill="#E5B48F"/><path d="M250 100c0-18 10-26 22-26s24 8 22 26c-6-8-20-12-44 0z" fill="#3A2418"/><ellipse cx="265" cy="106" rx="2.2" ry="2.8" fill="#2A1A14"/><ellipse cx="279" cy="106" rx="2.2" ry="2.8" fill="#2A1A14"/><path d="M266 118c3 3 8 3 11 0" stroke="#A8574A" stroke-width="2.2" fill="none" stroke-linecap="round"/>` },
  jovem:{ eye:[270,92], mouth:[270,104], top:62, svg:`<path d="M226 200c0-46 18-74 44-74s44 28 44 74z" fill="#7656D6"/><ellipse cx="270" cy="92" rx="21" ry="24" fill="#D9A47C"/><path d="M248 86c0-20 10-30 22-30s24 10 22 30c-4-12-30-14-44 0z" fill="#22160F"/><ellipse cx="263" cy="92" rx="2.2" ry="2.8" fill="#2A1A14"/><ellipse cx="277" cy="92" rx="2.2" ry="2.8" fill="#2A1A14"/><path d="M264 104c3 3 9 3 12 0" stroke="#9A4E40" stroke-width="2.2" fill="none" stroke-linecap="round"/>` },
  adulto:{ eye:[268,84], mouth:[268,98], top:52, svg:`<path d="M220 200c0-52 20-82 48-82s48 30 48 82z" fill="#3F6FB5"/><ellipse cx="268" cy="86" rx="22" ry="26" fill="#E8B996"/><path d="M246 80c0-22 10-32 22-32s24 10 22 32c-2-10-10-16-22-16s-20 6-22 16z" fill="#C9CCD1"/><ellipse cx="261" cy="84" rx="2.2" ry="2.8" fill="#2A1A14"/><ellipse cx="275" cy="84" rx="2.2" ry="2.8" fill="#2A1A14"/><path d="M262 98c3 3 9 3 12 0" stroke="#9A4E40" stroke-width="2.2" fill="none" stroke-linecap="round"/><path d="M258 70h20" stroke="#B4B8BE" stroke-width="2"/>` },
  pais:{ eye:[250,84], mouth:[250,98], top:52, svg:`<path d="M204 200c0-50 18-80 46-80s46 30 46 80z" fill="#2FA85A"/><ellipse cx="250" cy="86" rx="21" ry="25" fill="#C98E68"/><path d="M228 84c-2-24 10-36 22-36s26 10 22 36c-4-14-12-18-22-18s-18 4-22 18z" fill="#1E140E"/><ellipse cx="243" cy="86" rx="2.2" ry="2.8" fill="#2A1A14"/><ellipse cx="257" cy="86" rx="2.2" ry="2.8" fill="#2A1A14"/><path d="M244 98c3 3 9 3 12 0" stroke="#8A4536" stroke-width="2.2" fill="none" stroke-linecap="round"/><path d="M290 150c0-24 9-36 20-36s20 12 20 36z" fill="#F08A24"/><ellipse cx="310" cy="102" rx="13" ry="14" fill="#E5B48F"/><path d="M297 98c0-12 6-16 13-16s15 4 13 16c-4-6-14-8-26 0z" fill="#3A2418"/><circle cx="306" cy="103" r="1.6" fill="#2A1A14"/><circle cx="314" cy="103" r="1.6" fill="#2A1A14"/>` },
};

/* Ação do passo, deduzida do texto */
const norm = s => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'');
function acaoDoPasso(t){
  const n = norm(t);
  const r = [
    ['ouvir', /\b(ruido|boca coberta|sem leitura labial|sem que o paciente veja|toque (um|3|o)? ?(ruido|sons?)|no ruido)\b/],
    ['turnos', /\b(alternem|alterne turnos|turnos|sua vez|na sua vez|vez de cada)\b/],
    ['juntos', /\b(juntos|digam juntos|falem juntos|entoem|em unissono|leiam juntos|coral)\b/],
    ['espera', /\b(espere|aguarde|pause|pausa|pare antes|pare e espere|conte ate|espera)\b/],
    ['comemora', /\b(comemore|elogie|celebre|reforce|responda na hora|na hora|qualquer sinal|qualquer aproximacao)\b/],
    ['imita', /\b(imite|imitar|imita|imitacoes|mesmo que a crianca)\b/],
    ['entrega', /\b(entregue|entrega|de o item|ofereca|devolva|distribua|de uma instrucao)\b/],
    ['toque', /\b(toque|pista tatil|toques|estimule o labio|escova macia)\b/],
    ['ritmo', /\b(bata|batida|palma|batidas)\b/],
    ['escreve', /\b(escreva|escrevam|preencha|preencham|registre|anote|grave|planeje|planejem)\b/],
    ['arruma', /\b(sente-se|posicione|sala com|monte a cena|escolha|escolham|prepare|tenha dois)\b/],
    ['fala_p', /\b(peca para|peca ao|o paciente|a crianca (repete|diz|fala|nomeia|le|reconta|conta|responde|produz|pede|usa|ordena|faz|escolhe|vira))\b/],
    ['aponta', /\b(aponte|coloque|mostre|apresente|espalhe|monte)\b/],
    ['troca', /\b(troque|varie|mude|aumente|acrescente|embaralhe|misture|alterne|retire|afaste|reduza|volte|diminua)\b/],
    ['olhar', /\b(olhe|olhar|olhando)\b/],
  ];
  for(const [k,re] of r) if(re.test(n)) return k;
  return 'fala_f';
}
const citacao = t => { const m = t.match(/[“"]([^”"]{1,22})[”"]/); return m ? m[1] : ''; };

function cena(key, passo){
  const sp = ACT[key] || {p:'crianca',o:['cartas']}; const P = PAC[sp.p] || PAC.crianca;
  const xs = sp.o.length === 1 ? [176] : [150, 204];
  const ax = passo ? acaoDoPasso(passo) : null; const q = passo ? citacao(passo) : '';
  const ov = []; const target = [xs[0], 112];
  const bubble = (x, y, tx, who) => `<g><rect x="${x}" y="${y}" width="${Math.max(44, tx.length*6.6+20)}" height="28" rx="14" fill="#fff" stroke="#0B6E74" stroke-width="2"/><path d="M${who==='f'?x+14:x+Math.max(44,tx.length*6.6+20)-14} ${y+27}l${who==='f'?-6:6} 9 ${who==='f'?10:-10}-8z" fill="#fff" stroke="#0B6E74" stroke-width="2"/><text x="${x+Math.max(44,tx.length*6.6+20)/2}" y="${y+19}" text-anchor="middle" font-size="12" font-weight="800" fill="#0B6E74">${tx||'• • •'}</text></g>`;
  if(ax==='fala_f') ov.push(bubble(104, 18, q, 'f'));
  if(ax==='fala_p') ov.push(bubble(P.eye[0]-80, Math.max(8,P.top-40), q, 'p'));
  if(ax==='espera') ov.push(`<g transform="translate(${P.eye[0]+22} ${Math.max(10,P.top-34)})"><circle cx="16" cy="16" r="16" fill="#fff" stroke="#F08A24" stroke-width="3"/><path d="M16 7v9l6 4" stroke="#1F2328" stroke-width="2.6" fill="none" stroke-linecap="round"/></g><text x="${P.eye[0]-30}" y="${Math.max(24,P.top-14)}" font-size="13" font-weight="800" fill="#B5650C">espere…</text>`);
  if(ax==='entrega') ov.push(`<path d="M120 102 Q ${xs[0]} 70 ${P.eye[0]-34} 112" stroke="#0B6E74" stroke-width="3" fill="none" stroke-dasharray="6 6" stroke-linecap="round"/><path d="M${P.eye[0]-40} 104l8 9-11 3" stroke="#0B6E74" stroke-width="3" fill="none" stroke-linecap="round"/>`);
  if(ax==='aponta') ov.push(`<path d="M116 132 L ${xs[0]-20} 116" stroke="#F2C29E" stroke-width="10" stroke-linecap="round"/><circle cx="${xs[0]-18}" cy="115" r="6" fill="#F2C29E"/><path d="M${xs[0]-8} 100l6-8M${xs[0]+2} 104l8-4" stroke="#F08A24" stroke-width="2.6" stroke-linecap="round"/>`);
  if(ax==='olhar') ov.push(`<path d="M100 78 Q ${(100+xs[0])/2} 64 ${xs[0]} 100" stroke="#0B6E74" stroke-width="2.6" fill="none" stroke-dasharray="5 6"/><path d="M${P.eye[0]-12} ${P.eye[1]} Q ${(P.eye[0]+xs[0])/2} ${P.eye[1]-16} ${xs[0]+6} 100" stroke="#0B6E74" stroke-width="2.6" fill="none" stroke-dasharray="5 6"/>`);
  if(ax==='comemora') ov.push([[P.eye[0]-36,P.top-6],[P.eye[0]+30,P.top-14],[P.eye[0]+40,P.top+20],[P.eye[0]-46,P.top+24]].map(([x,y],i)=>`<path transform="translate(${x} ${Math.max(6,y)}) scale(${i%2?.8:1})" d="M12 2l3 7 7 .6-5.3 4.6 1.6 7.1L12 17.6 5.7 21.3l1.6-7.1L2 9.6 9 9z" fill="#F5B841"/>`).join('') + `<text x="${P.eye[0]-24}" y="${Math.max(18,P.top-18)}" font-size="13" font-weight="800" fill="#1E7F49">Isso!</text>`);
  if(ax==='troca') ov.push(`<g transform="translate(${xs[0]-18} 62)"><path d="M4 16a14 14 0 0 1 26-6M32 20a14 14 0 0 1-26 6" stroke="#7656D6" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M30 2v8h-8M6 34v-8h8" stroke="#7656D6" stroke-width="3" fill="none" stroke-linecap="round"/></g>`);
  if(ax==='toque') ov.push(`<path d="M128 140 Q 200 100 ${P.mouth[0]-14} ${P.mouth[1]+2}" stroke="#F2C29E" stroke-width="9" fill="none" stroke-linecap="round"/><circle cx="${P.mouth[0]-12}" cy="${P.mouth[1]+2}" r="5" fill="#F2C29E"/><circle cx="${P.mouth[0]-6}" cy="${P.mouth[1]}" r="9" fill="none" stroke="#F08A24" stroke-width="2.4"/>`);
  if(ax==='ritmo') ov.push(`<path d="M120 134l10-8M140 136l10-8M160 134l10-8" stroke="#F08A24" stroke-width="3" stroke-linecap="round"/><text x="128" y="118" font-size="12" font-weight="800" fill="#B5650C">tum · tum · tum</text>`);
  if(ax==='ouvir') ov.push(`<path d="M${P.eye[0]+26} ${P.eye[1]-6}q8 10 0 20M${P.eye[0]+34} ${P.eye[1]-12}q14 16 0 32" stroke="#F08A24" stroke-width="2.6" fill="none" stroke-linecap="round"/><path d="M104 88h-14" stroke="#B0584A" stroke-width="3"/><rect x="72" y="84" width="28" height="12" rx="6" fill="#F2C29E"/>`);
  if(ax==='juntos'){ ov.push(bubble(104, 18, q, 'f')); ov.push(bubble(P.eye[0]-70, Math.max(8,P.top-40), q, 'p')); }
  if(ax==='turnos') ov.push(`<path d="M128 98h${P.eye[0]-180}" stroke="#0B6E74" stroke-width="3" stroke-linecap="round"/><path d="M${P.eye[0]-60} 90l9 8-9 8" stroke="#0B6E74" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M128 112h${P.eye[0]-180}" stroke="#F08A24" stroke-width="3" stroke-linecap="round"/><path d="M136 104l-9 8 9 8" stroke="#F08A24" stroke-width="3" fill="none" stroke-linecap="round"/><text x="${(128+P.eye[0]-52)/2}" y="84" text-anchor="middle" font-size="12" font-weight="800" fill="#0B6E74">minha vez · sua vez</text>`);
  if(ax==='imita') ov.push(`<path d="M128 104h${P.eye[0]-180}" stroke="#7656D6" stroke-width="3" stroke-linecap="round"/><path d="M136 96l-9 8 9 8M${P.eye[0]-60} 96l9 8-9 8" stroke="#7656D6" stroke-width="3" fill="none" stroke-linecap="round"/><text x="${(128+P.eye[0]-52)/2}" y="92" text-anchor="middle" font-size="13" font-weight="800" fill="#7656D6">igual</text>`);
  if(ax==='arruma') ov.push(`<rect x="${xs[0]-48}" y="${sp.o.length>1?80:84}" width="${sp.o.length>1?150:96}" height="${sp.o.length>1?62:58}" rx="12" fill="none" stroke="#F08A24" stroke-width="2.6" stroke-dasharray="6 5"/>`);
  if(ax==='escreve') ov.push(`<g transform="translate(${xs[0]+14} 78)"><path d="M0 30l20-26 6 4-20 26z" fill="#F5C842" stroke="#B88A2E" stroke-width="1.5"/><path d="M0 30l-2 6 6-2" fill="#1F2328"/></g>`);
  return `<svg class="sc" viewBox="0 0 350 200" role="img" aria-label="Ilustração da atividade${passo?': '+esc(passo):''}">
    <rect width="350" height="200" fill="#E9F3F1"/><rect width="350" height="124" fill="#F4EDE3"/>
    <rect x="236" y="20" width="70" height="52" rx="4" fill="#fff" stroke="#D8CDBE" stroke-width="3"/><path d="M271 20v52M236 46h70" stroke="#D8CDBE" stroke-width="2"/>
    ${FONO}${P.svg}
    <rect x="0" y="138" width="350" height="62" fill="#E7A86A"/><rect x="0" y="134" width="350" height="8" fill="#D48E4E"/>
    ${sp.o.map((o,i)=>OBJ[o]?OBJ[o](xs[i]):'').join('')}
    ${ov.join('')}
  </svg>`;
}
