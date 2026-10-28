/* ===== Pictogramas (viewBox 0 0 64 64) — usados nos materiais para imprimir ===== */
const SK = 'fill="none" stroke="var(--ink)" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"';
const T = 'fill="var(--tint)"';
const PIC = {
  bola:`<circle cx="32" cy="32" r="22" ${T} ${SK}/><path d="M12 26c12 6 28 6 40 0M12 38c12-6 28-6 40 0M32 10c-7 12-7 32 0 44" ${SK}/>`,
  bolha:`<circle cx="26" cy="30" r="14" ${T} ${SK}/><circle cx="44" cy="18" r="7" ${SK}/><circle cx="46" cy="44" r="9" ${SK}/><path d="M20 24a7 7 0 0 1 7-5" ${SK}/>`,
  biscoito:`<circle cx="32" cy="32" r="22" ${T} ${SK}/><circle cx="24" cy="26" r="2.5" fill="var(--ink)"/><circle cx="38" cy="22" r="2.5" fill="var(--ink)"/><circle cx="40" cy="38" r="2.5" fill="var(--ink)"/><circle cx="26" cy="40" r="2.5" fill="var(--ink)"/>`,
  copo:`<path d="M18 14h28l-4 40H22z" ${T} ${SK}/><path d="M20 26h24" ${SK}/><path d="M36 14l6-8" ${SK}/>`,
  carro:`<path d="M8 40V32l6-10h28l8 10h6v8z" ${T} ${SK}/><circle cx="20" cy="42" r="6" fill="var(--paper)" ${SK}/><circle cx="46" cy="42" r="6" fill="var(--paper)" ${SK}/><path d="M18 30h28" ${SK}/>`,
  musica:`<path d="M24 46V14l26-6v32" ${SK}/><circle cx="18" cy="46" r="7" ${T} ${SK}/><circle cx="44" cy="40" r="7" ${T} ${SK}/>`,
  casa:`<path d="M10 30L32 10l22 20" ${SK}/><path d="M16 26v28h32V26" ${T} ${SK}/><path d="M28 54V40h8v14" ${SK}/>`,
  sol:`<circle cx="32" cy="32" r="12" ${T} ${SK}/><path d="M32 6v8M32 50v8M6 32h8M50 32h8M13 13l6 6M45 45l6 6M51 13l-6 6M19 45l-6 6" ${SK}/>`,
  gato:`<path d="M16 26l-2-14 10 8h16l10-8-2 14c4 4 4 18-6 24H22c-10-6-10-20-6-24z" ${T} ${SK}/><circle cx="25" cy="34" r="2" fill="var(--ink)"/><circle cx="39" cy="34" r="2" fill="var(--ink)"/><path d="M29 40l3 2 3-2M14 40h8M42 40h8" ${SK}/>`,
  cachorro:`<path d="M18 22c0-6 6-10 14-10s14 4 14 10v14c0 10-6 16-14 16s-14-6-14-16z" ${T} ${SK}/><path d="M18 22c-6 0-8 12-4 16M46 22c6 0 8 12 4 16" ${SK}/><circle cx="26" cy="30" r="2" fill="var(--ink)"/><circle cx="38" cy="30" r="2" fill="var(--ink)"/><path d="M28 40h8l-4 4z" fill="var(--ink)" ${SK}/>`,
  maca:`<path d="M32 20c-12-6-22 2-20 16 2 14 12 20 20 16 8 4 18-2 20-16 2-14-8-22-20-16z" ${T} ${SK}/><path d="M32 20c0-6 2-10 6-12M34 14c6-2 10 0 12 4" ${SK}/>`,
  banana:`<path d="M12 18c4 22 22 34 42 30-2 6-10 8-18 7C20 52 10 38 12 18z" ${T} ${SK}/><path d="M12 18l-2-6" ${SK}/>`,
  livro:`<path d="M32 16c-8-4-16-4-22-2v36c6-2 14-2 22 2 8-4 16-4 22-2V14c-6-2-14-2-22 2z" ${T} ${SK}/><path d="M32 16v36" ${SK}/>`,
  sapato:`<path d="M8 44V28h14l6 8c8 2 22 2 28 8v4H8z" ${T} ${SK}/><path d="M24 36l4-4M30 38l4-4" ${SK}/>`,
  chave:`<circle cx="20" cy="32" r="10" ${T} ${SK}/><path d="M30 32h24M46 32v8M52 32v6" ${SK}/>`,
  cama:`<path d="M8 50V20M8 38h48v12M56 38v-6c0-4-4-6-8-6H26v12" ${SK}/><rect x="12" y="28" width="12" height="10" rx="3" ${T} ${SK}/>`,
  agua:`<path d="M32 8c10 14 16 22 16 30a16 16 0 0 1-32 0c0-8 6-16 16-30z" ${T} ${SK}/>`,
  peixe:`<path d="M10 32c8-12 26-14 36 0-10 14-28 12-36 0z" ${T} ${SK}/><path d="M46 32l10-8v16z" ${SK}/><circle cx="20" cy="30" r="2" fill="var(--ink)"/>`,
  flor:`<circle cx="32" cy="24" r="6" fill="var(--paper)" ${SK}/><path d="M32 18c-4-8 4-12 0-12M26 24c-8-2-10 6-14 4M38 24c8-2 10 6 14 4M32 30c0 4 0 8 0 26M32 46c-6-6-12-4-14 0M32 40c6-6 12-4 14 0" ${SK}/><circle cx="32" cy="24" r="12" ${T} ${SK} opacity=".55"/>`,
  pato:`<path d="M20 30c0-8 6-14 12-14s10 4 10 10l10-2-6 8c4 6 2 20-14 20S12 44 14 36z" ${T} ${SK}/><circle cx="34" cy="24" r="2" fill="var(--ink)"/>`,
  pao:`<path d="M10 34c0-12 10-18 22-18s22 6 22 18v14H10z" ${T} ${SK}/><path d="M22 26l4 8M32 24l2 8M42 26l-2 8" ${SK}/>`,
  balao:`<ellipse cx="32" cy="26" rx="14" ry="17" ${T} ${SK}/><path d="M32 43l-3 4h6zM32 47c-4 6 4 8 0 13" ${SK}/>`,
  dado:`<rect x="12" y="12" width="40" height="40" rx="6" ${T} ${SK}/><circle cx="22" cy="22" r="3" fill="var(--ink)"/><circle cx="32" cy="32" r="3" fill="var(--ink)"/><circle cx="42" cy="42" r="3" fill="var(--ink)"/>`,
  trem:`<rect x="8" y="24" width="20" height="18" rx="2" ${T} ${SK}/><rect x="32" y="18" width="22" height="24" rx="2" ${T} ${SK}/><circle cx="16" cy="46" r="4" ${SK}/><circle cx="40" cy="46" r="4" ${SK}/><circle cx="48" cy="46" r="4" ${SK}/><path d="M28 34h4M38 18v-8h8v8" ${SK}/>`,
  bebe:`<circle cx="32" cy="26" r="14" ${T} ${SK}/><path d="M24 26h2M38 26h2M28 32c2 2 6 2 8 0M18 54c2-10 26-10 28 0" ${SK}/>`,
  escova:`<path d="M10 46l30-30" ${SK} stroke-width="5"/><rect x="38" y="8" width="16" height="10" rx="2" transform="rotate(45 46 13)" ${T} ${SK}/>`,
  telefone:`<rect x="20" y="8" width="24" height="48" rx="5" ${T} ${SK}/><path d="M28 48h8" ${SK}/>`,
  mesa:`<path d="M8 22h48M14 22v30M50 22v30M14 34h36" ${SK}/><rect x="8" y="16" width="48" height="6" rx="2" ${T} ${SK}/>`,
  // core / ações
  quero:`<path d="M14 40c0-6 6-8 10-6l8 4V16a4 4 0 0 1 8 0v18l6 2c6 2 6 8 4 14l-4 6H24z" ${T} ${SK}/>`,
  mais:`<path d="M32 14v36M14 32h36" ${SK} stroke-width="5"/>`,
  parar:`<path d="M22 8h20l14 14v20L42 56H22L8 42V22z" ${T} ${SK}/><path d="M22 32h20" ${SK} stroke-width="4"/>`,
  ajuda:`<path d="M10 40l12-12 10 6 10-10 12 10" ${SK}/><path d="M22 28c-4 6-2 14 6 16h12c6-2 8-10 4-16" ${T} ${SK}/>`,
  eu:`<circle cx="32" cy="20" r="9" ${T} ${SK}/><path d="M16 54c0-12 8-20 16-20s16 8 16 20" ${T} ${SK}/><path d="M50 44l-8 4" ${SK}/>`,
  voce:`<circle cx="40" cy="20" r="9" ${T} ${SK}/><path d="M26 54c0-12 6-20 14-20s14 8 14 20" ${T} ${SK}/><path d="M6 36h14l-4-4M20 36l-4 4" ${SK}/>`,
  ir:`<path d="M10 32h36" ${SK} stroke-width="4"/><path d="M36 18l16 14-16 14" ${SK} stroke-width="4"/>`,
  olhar:`<path d="M6 32c8-12 18-18 26-18s18 6 26 18c-8 12-18 18-26 18S14 44 6 32z" ${T} ${SK}/><circle cx="32" cy="32" r="7" fill="var(--ink)"/>`,
  nao:`<circle cx="32" cy="32" r="22" ${T} ${SK}/><path d="M17 17l30 30" ${SK} stroke-width="4"/>`,
  sim:`<circle cx="32" cy="32" r="22" ${T} ${SK}/><path d="M20 33l8 8 16-18" ${SK} stroke-width="4"/>`,
  acabou:`<path d="M14 32c0-10 8-18 18-18s18 8 18 18" ${SK}/><path d="M10 40c8 4 36 4 44 0M18 50h28" ${SK}/><path d="M24 22l16 16M40 22L24 38" ${SK}/>`,
  abrir:`<rect x="10" y="26" width="44" height="26" rx="3" ${T} ${SK}/><path d="M10 26l10-14h24l10 14" ${SK}/><path d="M32 40V14M24 22l8-8 8 8" ${SK}/>`,
  gostar:`<path d="M32 52S10 40 10 24c0-8 6-12 11-12 5 0 9 3 11 7 2-4 6-7 11-7 5 0 11 4 11 12 0 16-22 28-22 28z" ${T} ${SK}/>`,
  fazer:`<path d="M14 50l20-20" ${SK} stroke-width="5"/><path d="M30 26l8-14 14 14-14 8z" ${T} ${SK}/>`,
  isso:`<path d="M10 30h24" ${SK} stroke-width="4"/><circle cx="46" cy="30" r="9" ${T} ${SK}/><path d="M28 22l8 8-8 8" ${SK} stroke-width="4"/>`,
  ligar:`<circle cx="32" cy="34" r="18" ${T} ${SK}/><path d="M32 8v22" ${SK} stroke-width="4"/>`,
  comer:`<path d="M20 8v16a6 6 0 0 0 12 0V8M26 8v48M44 8c-6 4-6 18 0 22v26" ${SK}/>`,
  beber:`<path d="M20 20h24l-3 34H23z" ${T} ${SK}/><path d="M38 20l6-12h6" ${SK}/>`,
  brincar:`<rect x="10" y="30" width="16" height="16" ${T} ${SK}/><rect x="30" y="30" width="16" height="16" ${SK}/><rect x="20" y="14" width="16" height="16" ${T} ${SK}/>`,
  dormir:`<path d="M44 14a20 20 0 1 0 6 30A16 16 0 0 1 44 14z" ${T} ${SK}/><path d="M42 8h8l-8 8h8" ${SK}/>`,
  banheiro:`<path d="M16 22h32v10a16 16 0 0 1-32 0z" ${T} ${SK}/><path d="M24 48v8h16v-8M20 22V10h10v12" ${SK}/>`,
  feliz:`<circle cx="32" cy="32" r="22" ${T} ${SK}/><circle cx="24" cy="27" r="2.5" fill="var(--ink)"/><circle cx="40" cy="27" r="2.5" fill="var(--ink)"/><path d="M22 38c5 7 15 7 20 0" ${SK}/>`,
  triste:`<circle cx="32" cy="32" r="22" ${T} ${SK}/><circle cx="24" cy="27" r="2.5" fill="var(--ink)"/><circle cx="40" cy="27" r="2.5" fill="var(--ink)"/><path d="M22 44c5-7 15-7 20 0" ${SK}/>`,
  bravo:`<circle cx="32" cy="32" r="22" ${T} ${SK}/><path d="M20 22l8 4M44 22l-8 4" ${SK}/><circle cx="25" cy="30" r="2.5" fill="var(--ink)"/><circle cx="39" cy="30" r="2.5" fill="var(--ink)"/><path d="M24 43h16" ${SK}/>`,
  medo:`<circle cx="32" cy="32" r="22" ${T} ${SK}/><circle cx="24" cy="27" r="4" ${SK}/><circle cx="40" cy="27" r="4" ${SK}/><ellipse cx="32" cy="42" rx="5" ry="6" ${SK}/>`,
  surpreso:`<circle cx="32" cy="32" r="22" ${T} ${SK}/><path d="M20 20c2-3 6-3 8 0M36 20c2-3 6-3 8 0" ${SK}/><circle cx="24" cy="28" r="2.5" fill="var(--ink)"/><circle cx="40" cy="28" r="2.5" fill="var(--ink)"/><circle cx="32" cy="42" r="5" ${SK}/>`,
  cansado:`<circle cx="32" cy="32" r="22" ${T} ${SK}/><path d="M20 28h8M36 28h8M26 42h12" ${SK}/>`,
  dor:`<circle cx="32" cy="32" r="22" ${T} ${SK}/><path d="M20 24l8 4-8 4M44 24l-8 4 8 4M24 44c4-4 12-4 16 0" ${SK}/>`,
  cozinhar:`<path d="M12 30h40v8a14 14 0 0 1-14 14H26a14 14 0 0 1-14-14z" ${T} ${SK}/><path d="M52 32h6M24 22c0-4 4-4 4-8M34 22c0-4 4-4 4-8" ${SK}/>`,
  medir:`<rect x="8" y="24" width="48" height="14" rx="2" ${T} ${SK}/><path d="M16 24v6M24 24v4M32 24v6M40 24v4M48 24v6" ${SK}/>`,
  dirigir:`<circle cx="32" cy="32" r="20" ${T} ${SK}/><circle cx="32" cy="32" r="5" ${SK}/><path d="M12 30h15M37 30h15M32 37v15" ${SK}/>`,
  escrever:`<path d="M14 50l4-12 26-26 8 8-26 26z" ${T} ${SK}/><path d="M38 18l8 8M10 56h24" ${SK}/>`,
  lavar:`<path d="M20 30h24v20a4 4 0 0 1-4 4H24a4 4 0 0 1-4-4z" ${T} ${SK}/><path d="M16 30h32M32 30V16h10v6" ${SK}/><path d="M42 26c0 3-2 3-2 5" ${SK}/>`,
  cortar:`<circle cx="18" cy="44" r="7" ${T} ${SK}/><circle cx="18" cy="20" r="7" ${T} ${SK}/><path d="M24 40l30-22M24 24l30 22" ${SK}/>`,
  pintar:`<path d="M12 44c8-2 8 8 0 10" ${SK}/><path d="M16 42l26-26 6 6-26 26z" ${T} ${SK}/>`,
  ler:`<path d="M32 18c-8-4-16-4-22-2v32c6-2 14-2 22 2 8-4 16-4 22-2V16c-6-2-14-2-22 2z" ${T} ${SK}/><path d="M16 26h10M16 32h10M38 26h10M38 32h10" ${SK}/>`,
  medico:`<rect x="12" y="18" width="40" height="34" rx="4" ${T} ${SK}/><path d="M24 18v-6h16v6M32 26v18M23 35h18" ${SK}/>`,
  mercado:`<path d="M6 12h8l6 28h30l6-20H18" ${SK}/><path d="M20 40h30" ${T} ${SK}/><circle cx="24" cy="50" r="4" ${SK}/><circle cx="46" cy="50" r="4" ${SK}/>`,
  onibus:`<rect x="10" y="10" width="44" height="38" rx="6" ${T} ${SK}/><path d="M10 30h44M18 48v6M46 48v6" ${SK}/><circle cx="20" cy="40" r="2.5" fill="var(--ink)"/><circle cx="44" cy="40" r="2.5" fill="var(--ink)"/>`,
  ouvido:`<path d="M22 26a12 12 0 0 1 24 0c0 10-8 10-8 18a6 6 0 0 1-12 0" ${T} ${SK}/><path d="M30 26a4 4 0 0 1 8 0c0 4-4 4-4 8" ${SK}/>`,
  mao:`<path d="M20 34V16a3 3 0 0 1 6 0v14V12a3 3 0 0 1 6 0v18V14a3 3 0 0 1 6 0v18-10a3 3 0 0 1 6 0v18c0 10-6 16-14 16-6 0-10-2-14-8l-6-10a3 3 0 0 1 5-3z" ${T} ${SK}/>`,
};

/* ===== Ilustrações de cena (viewBox 0 0 240 140) — uma por tipo de atividade ===== */
const L = 'fill="none" stroke="var(--ink)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"';
const F1 = 'fill="var(--tint)"', F2 = 'fill="var(--tint2)"';
const person = (x,y,s=1,flip=false)=>`<g transform="translate(${x} ${y}) scale(${flip?-s:s} ${s})"><circle cx="0" cy="-34" r="11" ${F2} ${L}/><path d="M-16 8c0-18 6-30 16-30s16 12 16 30" ${F1} ${L}/></g>`;
const kid = (x,y,flip=false)=>person(x,y,.72,flip);
const SCENE = {
  brincar_frente:`${person(70,110)}${kid(170,112,true)}<path d="M100 118h40" ${L}/><circle cx="120" cy="104" r="12" ${F2} ${L}/><path d="M110 98c6 4 14 4 20 0" ${L}/><path d="M84 66q36-22 72 2" ${L} stroke-dasharray="4 6"/><text x="120" y="40" text-anchor="middle" class="sv-t">olhar compartilhado</text>`,
  troca_figura:`${person(56,112)}${kid(186,114,true)}<rect x="130" y="70" width="26" height="30" rx="4" ${F2} ${L}/><circle cx="143" cy="85" r="7" ${L}/><path d="M156 86l20 4" ${L}/><path d="M128 84c-14 0-30 0-40 4" ${L} stroke-dasharray="4 5"/><path d="M92 82l-6 6 8 2" ${L}/><rect x="64" y="64" width="22" height="22" rx="11" ${F1} ${L}/><text x="120" y="30" text-anchor="middle" class="sv-t">entrega a figura → recebe o item</text>`,
  prancha:`<rect x="62" y="22" width="116" height="90" rx="8" ${F1} ${L}/>${[0,1,2,3].map(c=>[0,1,2].map(r=>`<rect x="${72+c*26}" y="${32+r*26}" width="20" height="20" rx="3" fill="var(--paper)" ${L}/>`).join('')).join('')}<path d="M150 96l18 22" ${L} stroke-width="5"/><circle cx="152" cy="94" r="4" fill="var(--ink)"/><text x="120" y="134" text-anchor="middle" class="sv-t">aponta + fala junto (modelagem)</text>`,
  boca_espelho:`<rect x="140" y="18" width="70" height="98" rx="10" ${F1} ${L}/><ellipse cx="175" cy="70" rx="20" ry="12" fill="var(--paper)" ${L}/><path d="M158 70c10 6 24 6 34 0" ${L}/>${person(70,112)}<path d="M90 76c12 0 26-2 40-8" ${L} stroke-dasharray="4 5"/><text x="70" y="22" text-anchor="middle" class="sv-t">olhe para a minha boca</text>`,
  toque_face:`<circle cx="120" cy="66" r="40" ${F2} ${L}/><circle cx="106" cy="56" r="3" fill="var(--ink)"/><circle cx="134" cy="56" r="3" fill="var(--ink)"/><ellipse cx="120" cy="84" rx="12" ry="6" fill="var(--paper)" ${L}/><path d="M162 92c-10 0-18-4-26-8" ${L} stroke-width="4"/><circle cx="134" cy="84" r="4" fill="var(--accent)"/><path d="M60 40l14 8M58 66h14M60 92l14-8" ${L}/><text x="120" y="134" text-anchor="middle" class="sv-t">pista tátil no ponto de articulação</text>`,
  silabas:`${['ba','di','GU'].map((s,i)=>`<rect x="${44+i*54}" y="44" width="46" height="46" rx="8" ${i==2?F2:F1} ${L}/><text x="${67+i*54}" y="74" text-anchor="middle" class="sv-b">${s}</text>`).join('')}<path d="M90 66h8M144 66h8" ${L}/><path d="M50 108c40 12 100 12 140 0" ${L} stroke-dasharray="3 6"/><text x="120" y="30" text-anchor="middle" class="sv-t">transição rápida + sílaba forte</text>`,
  ritmo_mao:`${person(70,112)}<path d="M120 90h60" ${L}/><rect x="128" y="78" width="34" height="12" rx="6" ${F2} ${L}/><path d="M150 50v20M144 56l6-6 6 6" ${L}/>${[0,1,2,3].map(i=>`<circle cx="${40+i*16}" cy="${30-(i%2?8:0)}" r="4" fill="var(--accent)"/>`).join('')}<path d="M36 34q24-22 56 0" ${L}/><text x="160" y="124" text-anchor="middle" class="sv-t">batida na mão esquerda</text>`,
  ouvido_som:`<path d="M96 52a24 24 0 0 1 48 0c0 20-16 20-16 36a12 12 0 0 1-24 0" ${F1} ${L}/><path d="M112 52a8 8 0 0 1 16 0c0 8-8 8-8 16" ${L}/><path d="M164 40q10 16 0 32M176 32q16 24 0 48M188 26q22 30 0 60" ${L}/><path d="M40 50h30M40 66h20M40 82h34" ${L} stroke-dasharray="2 5"/><text x="120" y="130" text-anchor="middle" class="sv-t">ouvir, discriminar, ordenar</text>`,
  rima:`<rect x="30" y="34" width="70" height="56" rx="8" ${F1} ${L}/><rect x="140" y="34" width="70" height="56" rx="8" ${F2} ${L}/><text x="65" y="68" text-anchor="middle" class="sv-b">gato</text><text x="175" y="68" text-anchor="middle" class="sv-b">pato</text><path d="M104 62h32" ${L}/><path d="M128 56l8 6-8 6" ${L}/><text x="120" y="118" text-anchor="middle" class="sv-t">o final soa igual?</text>`,
  historia:`${[0,1,2,3].map(i=>`<rect x="${24+i*50}" y="34" width="42" height="42" rx="5" ${i%2?F2:F1} ${L}/><text x="${45+i*50}" y="60" text-anchor="middle" class="sv-b">${i+1}</text>`).join('')}<path d="M30 96h180" ${L}/><path d="M200 90l10 6-10 6" ${L}/><text x="120" y="122" text-anchor="middle" class="sv-t">quem · onde · problema · ação · final</text>`,
  plano:`<rect x="70" y="18" width="100" height="104" rx="6" ${F1} ${L}/>${[0,1,2,3].map(i=>`<rect x="82" y="${32+i*22}" width="12" height="12" rx="2" fill="var(--paper)" ${L}/><path d="M102 ${38+i*22}h54" ${L}/>`).join('')}<path d="M84 37l3 3 6-6M84 59l3 3 6-6" stroke="var(--accent)" stroke-width="2.6" fill="none"/><text x="120" y="136" text-anchor="middle" class="sv-t">parar · pensar · fazer · conferir</text>`,
  alimentacao:`${kid(80,116)}<path d="M100 70l40-10" ${L} stroke-width="4"/><ellipse cx="148" cy="58" rx="12" ry="6" ${F2} ${L}/><rect x="166" y="72" width="34" height="40" rx="4" ${F1} ${L}/><path d="M178 72l10-26" ${L}/><text x="120" y="22" text-anchor="middle" class="sv-t">postura, colher, canudo, mastigação</text>`,
  sinal_mao:`<path d="M96 100V56a7 7 0 0 1 14 0v24V44a7 7 0 0 1 14 0v34V50a7 7 0 0 1 14 0v32-18a7 7 0 0 1 14 0v34c0 18-12 28-28 28-12 0-20-4-28-16l-10-18a7 7 0 0 1 10-6z" ${F1} ${L}/><path d="M60 40q-10 10 0 20M48 34q-18 16 0 32M180 40q10 10 0 20M192 34q18 16 0 32" ${L}/><text x="120" y="22" text-anchor="middle" class="sv-t">sinal + palavra falada</text>`,
  cartela_palavra:`<rect x="36" y="30" width="72" height="80" rx="6" ${F1} ${L}/><g transform="translate(48 38) scale(.75)">${PIC.bola}</g><text x="72" y="100" text-anchor="middle" class="sv-b">bola</text><rect x="132" y="50" width="72" height="40" rx="6" ${F2} ${L}/><text x="168" y="77" text-anchor="middle" class="sv-b">bola</text><path d="M110 70h18" ${L}/><text x="120" y="132" text-anchor="middle" class="sv-t">parear figura e palavra escrita</text>`,
  grade_sfa:`<circle cx="120" cy="70" r="20" ${F2} ${L}/><text x="120" y="75" text-anchor="middle" class="sv-b">?</text>${[[50,30],[190,30],[50,110],[190,110],[120,18],[120,124]].map(([x,y])=>`<rect x="${x-26}" y="${y-10}" width="52" height="20" rx="4" ${F1} ${L}/><path d="M${x} ${y}L120 70" ${L} stroke-dasharray="2 4"/>`).join('')}<text x="50" y="34" text-anchor="middle" class="sv-s">categoria</text><text x="190" y="34" text-anchor="middle" class="sv-s">uso</text><text x="50" y="114" text-anchor="middle" class="sv-s">ação</text><text x="190" y="114" text-anchor="middle" class="sv-s">local</text><text x="120" y="22" text-anchor="middle" class="sv-s">propriedades</text><text x="120" y="128" text-anchor="middle" class="sv-s">lembra…</text>`,
  verbo_rede:`<rect x="86" y="54" width="68" height="32" rx="6" ${F2} ${L}/><text x="120" y="75" text-anchor="middle" class="sv-b">MEDIR</text>${[[40,30,'quem?'],[40,110,'quem?'],[200,30,'o quê?'],[200,110,'o quê?']].map(([x,y,t])=>`<rect x="${x-30}" y="${y-12}" width="60" height="24" rx="5" ${F1} ${L}/><text x="${x}" y="${y+4}" text-anchor="middle" class="sv-s">${t}</text>`).join('')}<path d="M70 34l16 24M70 106l16-22M170 34l-16 24M170 106l-16-22" ${L}/>`,
  roteiro:`<rect x="58" y="18" width="124" height="104" rx="6" ${F1} ${L}/>${[0,1,2,3,4].map(i=>`<path d="M74 ${38+i*18}h${80-(i%2)*24}" ${L}/>`).join('')}<circle cx="190" cy="40" r="14" ${F2} ${L}/><path d="M186 34v12l10-6z" fill="var(--ink)"/><text x="120" y="136" text-anchor="middle" class="sv-t">ensaiar o roteiro até ficar automático</text>`,
  jogo_cartas:`${person(46,116,.8)}${person(194,116,.8,true)}<path d="M80 100h80" ${L}/><rect x="96" y="40" width="22" height="30" rx="3" ${F1} ${L} transform="rotate(-10 107 55)"/><rect x="122" y="40" width="22" height="30" rx="3" ${F2} ${L} transform="rotate(10 133 55)"/><path d="M60 36q60-20 120 0" ${L} stroke-dasharray="3 5"/><text x="120" y="22" text-anchor="middle" class="sv-t">"você tem a maçã vermelha?"</text>`,
  ambiente:`<rect x="30" y="56" width="70" height="50" rx="4" ${F1} ${L}/><path d="M30 56l35-24 35 24" ${L}/><rect x="56" y="74" width="18" height="14" rx="2" fill="var(--paper)" ${L}/><text x="65" y="125" text-anchor="middle" class="sv-s">fora do alcance</text>${kid(170,116,true)}<path d="M150 70q-30-30-70 0" ${L} stroke-dasharray="4 5"/><path d="M86 66l-6 4 8 2" ${L}/><text x="150" y="24" text-anchor="middle" class="sv-t">criar oportunidade de pedir</text>`,
  conversa:`${person(66,112)}${person(176,112,1,true)}<rect x="22" y="14" width="72" height="30" rx="10" ${F1} ${L}/><path d="M50 44l-4 10 14-10" ${F1} ${L}/><rect x="146" y="22" width="72" height="30" rx="10" ${F2} ${L}/><path d="M190 52l4 10-14-10" ${F2} ${L}/><path d="M36 26h44M36 34h30M160 34h44M160 42h24" ${L}/>`,
  emocao:`${['feliz','triste','bravo','medo'].map((k,i)=>`<g transform="translate(${18+i*54} 36) scale(.78)">${PIC[k]}</g>`).join('')}<text x="120" y="118" text-anchor="middle" class="sv-t">nomear, explicar, responder</text>`,
  lupa:`<circle cx="104" cy="62" r="34" ${F1} ${L}/><path d="M128 86l34 34" ${L} stroke-width="7"/><path d="M88 58h32M88 70h22" ${L}/><text x="120" y="22" text-anchor="middle" class="sv-t">investigar o perfil</text>`,
  palco:`<path d="M30 112h180" ${L}/><path d="M40 112V40h160v72" ${L}/><path d="M40 40q20 30 0 72M200 40q-20 30 0 72" ${F1} ${L}/>${person(120,110,.9)}<rect x="138" y="60" width="8" height="18" rx="4" fill="var(--ink)"/><text x="120" y="30" text-anchor="middle" class="sv-t">argumentar, explicar, apresentar</text>`,
  muro:`${[0,1,2,3].map(r=>[0,1,2,3,4].map(c=>`<rect x="${40+c*32+(r%2)*16}" y="${100-r*20}" width="30" height="18" rx="2" ${r<2?F2:F1} ${L}/>`).join('')).join('')}<text x="120" y="22" text-anchor="middle" class="sv-t">sons → sílabas → palavras → frases</text>`,
  vocabulario:`<circle cx="120" cy="70" r="22" ${F2} ${L}/><text x="120" y="75" text-anchor="middle" class="sv-s">palavra</text>${[[50,32],[190,32],[50,108],[190,108]].map(([x,y],i)=>`<rect x="${x-34}" y="${y-13}" width="68" height="26" rx="5" ${F1} ${L}/><text x="${x}" y="${y+4}" text-anchor="middle" class="sv-s">${['significa','parece','som/sílabas','uso na frase'][i]}</text><path d="M${x+(x<120?34:-34)} ${y}L${x<120?100:140} ${y<70?60:80}" ${L}/>`).join('')}`,
  pais:`${person(60,112)}${person(110,112,.95)}${kid(180,116,true)}<path d="M124 70q26-10 44 8" ${L} stroke-dasharray="4 5"/><rect x="18" y="16" width="70" height="26" rx="8" ${F2} ${L}/><text x="53" y="33" text-anchor="middle" class="sv-s">observe · espere</text><text x="160" y="30" text-anchor="middle" class="sv-t">orientar e treinar os pais</text>`,
};
/* ===== Brincadeiras para imprimir (jogos, cartas, tabuleiros) ===== */
const svgPic = (k, size=64) => `<svg viewBox="0 0 64 64" width="${size}" height="${size}" aria-hidden="true">${PIC[k]||''}</svg>`;
const cards = (items, cols=4, size=70, cls='') => `<div class="pg-grid c${cols}">${items.map(([k,l])=>`<div class="pg-card ${cls}">${svgPic(k,size)}<b>${l}</b></div>`).join('')}</div>`;
const note = t => `<p class="pg-note">${t}</p>`;
const howto = (passos) => `<div class="pg-how"><b>Como brincar</b><ol>${passos.map(p=>`<li>${p}</li>`).join('')}</ol></div>`;

const OBJ12 = [['bola','bola'],['carro','carro'],['gato','gato'],['cachorro','cachorro'],['banana','banana'],['maca','maçã'],['copo','copo'],['casa','casa'],['sol','sol'],['flor','flor'],['peixe','peixe'],['pato','pato']];

function tabuleiro(casas=30){
  const cols=6, rows=Math.ceil(casas/cols), W=110, H=96, pad=10;
  let s='';
  for(let i=0;i<casas;i++){
    const r=Math.floor(i/cols), c = r%2===0 ? i%cols : cols-1-(i%cols);
    const x=pad+c*W, y=pad+(rows-1-r)*H;
    const star = i>0 && i<casas-1 && i%5===0;
    const fill = i===0 ? '#CFEDEA' : i===casas-1 ? '#FFE2B8' : (i%2? '#F4FAF9':'#FFFFFF');
    s+=`<rect x="${x}" y="${y}" width="${W-8}" height="${H-8}" rx="14" fill="${fill}" stroke="#0B6E74" stroke-width="2.5"/>`;
    s+= i===0 ? `<text x="${x+(W-8)/2}" y="${y+52}" text-anchor="middle" font-size="18" font-weight="800" fill="#0B6E74">SAÍDA</text>`
      : i===casas-1 ? `<text x="${x+(W-8)/2}" y="${y+52}" text-anchor="middle" font-size="16" font-weight="800" fill="#B5650C">CHEGADA</text>`
      : `<text x="${x+14}" y="${y+26}" font-size="16" font-weight="800" fill="#0B6E74">${i}</text>`;
    if(star) s+=`<path transform="translate(${x+(W-8)/2-14} ${y+30}) scale(1.15)" d="M12 2l3 7 7 .6-5.3 4.6 1.6 7.1L12 17.6 5.7 21.3l1.6-7.1L2 9.6 9 9z" fill="#F5B841" stroke="#B5650C" stroke-width="1"/>`;
  }
  return `<svg viewBox="0 0 ${cols*W+pad*2} ${rows*H+pad*2}" width="100%" role="img" aria-label="Tabuleiro de trilha">${s}</svg>`;
}
function careta(boca, label){
  const mouths = {
    bico:'<ellipse cx="32" cy="44" rx="5" ry="4" fill="#E2504B" stroke="var(--ink)" stroke-width="2.2"/>',
    sorriso:'<path d="M20 40c6 8 18 8 24 0" fill="none" stroke="var(--ink)" stroke-width="3" stroke-linecap="round"/>',
    lingua_cima:'<ellipse cx="32" cy="44" rx="9" ry="6" fill="#7A2F2F"/><path d="M27 44c0-6 10-6 10 0z" fill="#F08A8A"/><path d="M27 37c2-3 8-3 10 0" stroke="#F08A8A" stroke-width="4" stroke-linecap="round"/>',
    bochecha:'<path d="M26 44h12" stroke="var(--ink)" stroke-width="3" stroke-linecap="round"/><circle cx="16" cy="40" r="7" fill="#F7B9B0" opacity=".8"/><circle cx="48" cy="40" r="7" fill="#F7B9B0" opacity=".8"/>',
    lingua_lado:'<ellipse cx="32" cy="44" rx="9" ry="5" fill="#7A2F2F"/><path d="M38 44c6 0 10 2 10 5-4 2-8 0-10-2z" fill="#F08A8A"/>',
    soprar:'<circle cx="32" cy="44" r="4" fill="#7A2F2F"/><path d="M44 42h8M44 46h10M44 38h6" stroke="#0B6E74" stroke-width="2.4" stroke-linecap="round"/>',
    beijo:'<path d="M28 41c2-2 6-2 8 0-2 2-2 4 0 6-2 2-6 2-8 0 2-2 2-4 0-6z" fill="#E2504B"/>',
    lingua_fora:'<ellipse cx="32" cy="43" rx="8" ry="4" fill="#7A2F2F"/><path d="M27 43c0 8 10 8 10 0z" fill="#F08A8A"/>',
  };
  return `<div class="pg-card big"><svg viewBox="0 0 64 64" width="86" height="86" aria-hidden="true"><circle cx="32" cy="32" r="26" fill="#FBE3D3" stroke="var(--ink)" stroke-width="2.4"/><circle cx="23" cy="27" r="2.8" fill="var(--ink)"/><circle cx="41" cy="27" r="2.8" fill="var(--ink)"/>${mouths[boca]}</svg><b>${label}</b></div>`;
}
function pseudo(){
  const C=['b','d','g','p','t','c'],V=['a','i','u'];const out=[];let s=7;const r=()=>{s=(s*9301+49297)%233280;return s/233280};
  const fix = w=>w.replace(/c([iI])/g,'qu$1').replace(/C([iI])/g,'QU$1').replace(/g([iI])/g,'gu$1').replace(/G([iI])/g,'GU$1');
  while(out.length<20){const sy=[0,1,2].map(()=>C[Math.floor(r()*C.length)]+V[Math.floor(r()*V.length)]);if(new Set(sy).size<3)continue;
    const w=out.length<10?sy[0].toUpperCase()+sy[1]+sy[2]:sy[0]+sy[1]+sy[2].toUpperCase(); if(!out.includes(w))out.push(w)}
  return out.map(fix);
}

const PLAY = {
  cartoes_itens:{ t:'Cartões de itens preferidos', tipo:'Cartas', h:()=>`${note('Recorte, plastifique e cole velcro no verso. Use só itens que a criança realmente quer.')}${cards([...OBJ12.slice(0,6),['bolha','bolha de sabão'],['biscoito','biscoito'],['musica','música'],['balao','balão'],['trem','trem'],['livro','livro']],4,80)}${howto(['Mostre o item real, sem falar.','Quando a criança estender a mão, ajude-a a pegar o cartão e entregar a você.','Entregue o item na hora, dizendo o nome dele.'])}` },
  tira_frase:{ t:'Tira de frase “Eu quero”', tipo:'Cartas', h:()=>`<div class="pg-strip"><div class="pg-card big">${svgPic('quero',80)}<b>EU QUERO</b></div><div class="pg-slot">cole o item</div><div class="pg-slot">cole o item</div></div><div class="pg-strip"><div class="pg-card big">${svgPic('olhar',80)}<b>EU VEJO</b></div><div class="pg-slot">cole o item</div><div class="pg-slot">cole o item</div></div>${cards([['mais','grande'],['mais','pequeno'],['bola','vermelho'],['bola','azul'],['quero','eu quero'],['olhar','eu vejo'],['ouvido','eu ouço'],['gostar','eu gosto']],4,58)}${howto(['A criança monta a frase na tira e entrega a tira inteira.','Leia apontando cada cartão e faça uma pausa antes do nome do item.'])}` },
  prancha_caa:{ t:'Prancha de comunicação (vocabulário essencial)', tipo:'Prancha', h:()=>`${note('Imprima em A4 paisagem e plastifique. As palavras ficam sempre no mesmo lugar.')}${cards([['eu','eu'],['voce','você'],['quero','quero'],['mais','mais'],['parar','parar'],['ajuda','ajuda'],['ir','ir'],['fazer','fazer'],['olhar','olhar'],['abrir','abrir'],['ligar','ligar'],['comer','comer'],['beber','beber'],['brincar','brincar'],['gostar','gosto'],['isso','isso'],['sim','sim'],['nao','não'],['acabou','acabou'],['banheiro','banheiro'],['feliz','feliz'],['triste','triste'],['dor','dor'],['dormir','dormir']],6,56)}${howto(['Na brincadeira, aponte o símbolo toda vez que falar a palavra.','Não exija resposta: mostre como se usa.'])}` },
  memoria_figuras:{ t:'Jogo da memória de figuras', tipo:'Jogo', h:()=>`${note('Imprima 2 cópias para formar os pares. Use poucas cartas no começo (3 a 4 pares).')}${cards(OBJ12,4,76)}${howto(['Espalhem as cartas viradas.','Cada um vira duas e diz o nome (ou você nomeia).','Olhe para a carta e para a criança: comente juntos (“olha, o gato!”).','Achou o par? Fica com ele.'])}` },
  loto_figuras:{ t:'Bingo de figuras', tipo:'Jogo', h:()=>`${[0,1].map(b=>`<div class="pg-board"><b>Cartela ${b+1}</b>${cards(OBJ12.slice(b*3,b*3+9).concat(OBJ12).slice(0,9),3,54)}</div>`).join('')}${note('Recorte também uma cópia das figuras para sortear.')}${howto(['Sorteie uma figura e diga o nome.','A criança procura na cartela e marca com uma tampinha.','Varie: a criança pede a figura que quer (“quero o gato”).'])}` },
  memoria_rimas:{ t:'Memória das rimas', tipo:'Jogo', h:()=>`${cards([['gato','gato'],['pato','pato'],['mao','mão'],['pao','pão'],['flor','flor'],['dor','dor']],3,80)}${howto(['Vire duas cartas e diga os nomes em voz alta.','Se terminarem com o mesmo som (gato/pato, mão/pão, flor/dor), é par!','Invente mais uma palavra que rime.'])}` },
  domino_silabas:{ t:'Dominó das sílabas', tipo:'Jogo', h:()=>`<div class="pg-domino">${[['bola','PA'],['pato','CA'],['casa','GA'],['gato','BO'],['banana','SA'],['sapato','BA'],['peixe','MA'],['maca','PEI']].map(([k,s])=>`<div class="d"><span>${svgPic(k,58)}</span><span class="sil">${s}</span></div>`).join('')}</div>${howto(['Encaixe a figura na peça que tem a sua primeira sílaba.','Bata palmas para contar as sílabas de cada figura.','Desafio: diga a palavra sem a primeira sílaba.'])}` },
  bingo_sons:{ t:'Bingo dos sons', tipo:'Jogo', h:()=>`${cards([['gato','gato'],['pato','pato'],['mao','mão'],['pao','pão'],['peixe','peixe'],['bola','bola'],['casa','casa'],['cama','cama'],['flor','flor']],3,60)}${howto(['Fale a palavra cobrindo a boca (sem leitura labial).','A criança marca a figura que ouviu.','Fica mais difícil: palavras parecidas (pato/bato) e barulho de fundo.'])}` },
  sequencia_historia:{ t:'História em sequência + cartões da história', tipo:'Cartas', h:()=>`<div class="pg-grid c4">${['A menina pegou a bola','A bola caiu na água','Ela pediu ajuda ao pai','O pai pegou a bola'].map((t,i)=>`<div class="pg-card">${svgPic(['bola','agua','ajuda','feliz'][i],62)}<b>${t}</b></div>`).join('')}</div><div class="pg-grid c3">${[['eu','Quem?'],['casa','Onde?'],['triste','Problema'],['olhar','Pensou/sentiu'],['fazer','O que fez?'],['feliz','Final']].map(([k,l])=>`<div class="pg-card big">${svgPic(k,56)}<b>${l}</b></div>`).join('')}</div>${howto(['Embaralhe e peça para ordenar as 4 cenas.','Conte a história apontando os cartões: quem, onde, problema, o que fez, final.','Depois a criança conta sozinha.'])}` },
  cartas_autoinstrucao:{ t:'Cartas Parar · Pensar · Fazer · Conferir', tipo:'Cartas', h:()=>`<div class="pg-grid c4">${[['parar','PARAR','O que preciso fazer?'],['olhar','PENSAR','Qual é o meu plano?'],['fazer','FAZER','Um passo de cada vez'],['sim','CONFERIR','Ficou como planejei?']].map(([k,a,b])=>`<div class="pg-card big">${svgPic(k,70)}<b>${a}</b><small>${b}</small></div>`).join('')}</div>${howto(['Jogo do detetive: antes de cada desafio, a criança vira as cartas em ordem e fala cada passo.','Comece falando alto, depois cochichando, depois “na cabeça”.'])}` },
  caretas:{ t:'Cartas das caretas (exercícios da boca)', tipo:'Cartas', h:()=>`<div class="pg-grid c4">${careta('bico','Bico de peixe')}${careta('sorriso','Sorriso grande')}${careta('lingua_cima','Língua no céu da boca')}${careta('bochecha','Bochecha de balão')}${careta('lingua_lado','Língua para o lado')}${careta('soprar','Soprar a vela')}${careta('beijo','Beijo estalado')}${careta('lingua_fora','Língua de cachorrinho')}</div>${howto(['Na frente do espelho, sorteie uma carta.','Façam a careta juntos e contem até 5.','Quem fizer certo ganha uma estrela.'])}` },
  futebol_sopro:{ t:'Futebol de sopro', tipo:'Tabuleiro', h:()=>`<svg viewBox="0 0 700 420" width="100%" role="img" aria-label="Campo de futebol para jogo de sopro"><rect x="10" y="10" width="680" height="400" rx="16" fill="#E3F3EA" stroke="#2F8A55" stroke-width="5"/><path d="M350 10v400" stroke="#2F8A55" stroke-width="4"/><circle cx="350" cy="210" r="60" fill="none" stroke="#2F8A55" stroke-width="4"/><rect x="10" y="150" width="60" height="120" fill="none" stroke="#2F8A55" stroke-width="4"/><rect x="630" y="150" width="60" height="120" fill="none" stroke="#2F8A55" stroke-width="4"/><rect x="0" y="175" width="14" height="70" fill="#F08A24"/><rect x="686" y="175" width="14" height="70" fill="#F08A24"/><text x="180" y="390" text-anchor="middle" font-size="22" font-weight="800" fill="#2F8A55">TIME 1</text><text x="520" y="390" text-anchor="middle" font-size="22" font-weight="800" fill="#2F8A55">TIME 2</text></svg>${howto(['Use uma bolinha de papel ou de isopor e um canudo.','Cada jogador sopra (com o canudo ou sem) para levar a bola ao gol do outro.','Lábios bem fechados no canudo!'])}` },
  cartoes_leitura:{ t:'Cartões figura + palavra', tipo:'Cartas', h:()=>`${note('Corte na linha tracejada: de um lado a figura, do outro a palavra.')}<div class="pg-grid c3">${[['bola','BOLA'],['casa','CASA'],['agua','ÁGUA'],['carro','CARRO'],['gato','GATO'],['pao','PÃO']].map(([k,w])=>`<div class="pg-card split">${svgPic(k,70)}<b class="pg-word">${w}</b></div>`).join('')}</div>${howto(['Coloque a palavra sobre a palavra igual (parear).','“Mostre BOLA” (selecionar).','“O que está escrito?” (ler).'])}` },
  sinais_rotina:{ t:'Cartões das palavras da rotina (sinais)', tipo:'Cartas', h:()=>`${note('Faça o sinal de Libras sempre junto com a palavra falada. Confira a forma de cada sinal em um dicionário de Libras.')}${cards([['comer','comer'],['beber','beber'],['mais','mais'],['acabou','acabou'],['ajuda','ajuda'],['dormir','dormir'],['banheiro','banheiro'],['brincar','brincar']],4,64)}${howto(['Mostre o cartão, faça o sinal e diga a palavra.','Use na rotina real: hora de comer, de dormir, de brincar.'])}` },
  tabuleiro_trilha:{ t:'Tabuleiro da trilha (muitas repetições)', tipo:'Tabuleiro', h:()=>`${tabuleiro(30)}${howto(['Cada vez que a criança fala o alvo, anda uma casa (ou joga o dado).','Na estrela, faz o alvo 3 vezes seguidas.','Chegou ao fim? Ganha a brincadeira favorita.','Ótimo para conseguir 50–100 repetições por sessão.'])}` },
  palavras_malucas:{ t:'Cartas das palavras malucas (ReST)', tipo:'Cartas', h:()=>`${note('MAIÚSCULAS = sílaba forte. Metade forte-fraco, metade fraco-forte.')}<div class="pg-grid c4">${pseudo().map(w=>`<div class="pg-card"><b class="pg-word" style="font-size:20px">${w}</b></div>`).join('')}</div>${howto(['Embaralhe e vire uma carta por vez.','A criança fala a palavra maluca “sem parar entre os pedaços” e com a sílaba forte bem forte.','Combine com o tabuleiro da trilha.'])}` },
  tabuleiro_pistas:{ t:'Tabuleiro de pistas da palavra', tipo:'Tabuleiro', h:()=>`<div class="pg-sfa"><div class="c">Coloque aqui<br>a figura</div>${['É um tipo de…','Serve para…','O que faz?','Como é? (cor, forma)','Onde fica?','Me lembra…'].map(t=>`<div><b>${t}</b><div class="pg-line"></div><div class="pg-line"></div></div>`).join('')}</div>${howto(['Mostre a figura e peça o nome.','Acertando ou não, preencham as 6 pistas.','Peça o nome de novo.'])}` },
  cartoes_nomeacao:{ t:'Cartões de objetos do dia a dia', tipo:'Cartas', h:()=>cards([['chave','chave'],['escova','escova de dente'],['telefone','telefone'],['copo','copo'],['cama','cama'],['sapato','sapato'],['livro','livro'],['mesa','mesa'],['onibus','ônibus'],['maca','maçã'],['pao','pão'],['medico','médico']],4,70) },
  cartoes_verbos:{ t:'Cartões de verbos (quem faz o quê?)', tipo:'Cartas', h:()=>`<div class="pg-vnest"><div class="w">QUEM?</div><div class="w">QUEM?</div><div class="v">VERBO</div><div class="w">O QUÊ?</div><div class="w">O QUÊ?</div></div>${cards([['medir','medir'],['cozinhar','cozinhar'],['dirigir','dirigir'],['escrever','escrever'],['lavar','lavar'],['cortar','cortar'],['pintar','pintar'],['ler','ler']],4,58)}${howto(['Coloque o verbo no centro.','O paciente diz quem faz e o que faz (o chef mede a farinha).','Leia as frases em voz alta.'])}` },
  cartoes_cena:{ t:'Cartões de situação para ensaiar', tipo:'Cartas', h:()=>cards([['pao','Na padaria'],['medico','No médico'],['telefone','Ligar para alguém'],['mercado','No mercado'],['onibus','No ônibus'],['voce','Apresentar-se']],3,70)+howto(['Escolham uma situação real do paciente.','Ensaiem o roteiro como teatro: você faz o atendente.']) },
  pares_ciat:{ t:'Jogo de pares (pedir só falando)', tipo:'Jogo', h:()=>`${note('Imprima 2 cópias. Use uma pasta em pé como barreira para esconder as cartas.')}${cards([['maca','maçã'],['banana','banana'],['copo','copo'],['chave','chave'],['sapato','sapato'],['livro','livro'],['carro','carro'],['casa','casa'],['flor','flor'],['peixe','peixe'],['bola','bola'],['telefone','telefone']],4,70)}${howto(['Cada um esconde suas cartas atrás da barreira.','Na sua vez, peça a carta só falando: “Você tem a maçã?”.','Aumente: “Você tem DUAS maçãs vermelhas?”.'])}` },
  cartoes_melodia:{ t:'Cartões de frases cantadas', tipo:'Cartas', h:()=>`<div class="pg-grid c3">${[['bom di-a','▼ ▲ ▼'],['o-bri-ga-do','▼ ▲ ▲ ▼'],['que-ro á-gua','▼ ▲ ▲ ▼'],['es-tou com fo-me','▼ ▼ ▲ ▼ ▲'],['po-de me a-ju-dar','▼ ▼ ▼ ▼ ▲ ▼'],['vou ao ba-nhei-ro','▼ ▼ ▼ ▲ ▼']].map(([f,m])=>`<div class="pg-card big"><b class="pg-word" style="font-size:19px">${f}</b><small style="font-size:16px;letter-spacing:.2em">${m}</small></div>`).join('')}</div>${howto(['▲ = nota aguda, ▼ = nota grave.','Uma batida na mão esquerda por sílaba.'])}` },
  cartoes_acoes:{ t:'Cartas das ações (o que aconteceu?)', tipo:'Cartas', h:()=>cards([['comer','comeu'],['beber','bebeu'],['dormir','dormiu'],['brincar','brincou'],['lavar','lavou'],['cortar','cortou'],['pintar','pintou'],['escrever','escreveu']],4,62)+howto(['Faça a ação com um boneco e narre no passado (“o boneco COMEU!”).','A criança escolhe a próxima carta e conta o que o boneco fez.','Se errar, repita a frase correta sem corrigir.']) },
  adivinha:{ t:'Jogo do “Adivinha o que é?”', tipo:'Jogo', h:()=>cards(OBJ12,4,64)+howto(['Escolha uma carta sem mostrar.','Dê pistas: “é um animal, faz miau, tem bigode”.','Quem adivinhar fica com a carta; depois troque os papéis.']) },
  cartoes_conversa:{ t:'Cartas da conversa e das emoções', tipo:'Cartas', h:()=>`<div class="pg-grid c4">${[['voce','COMEÇAR','Oi! Como foi seu fim de semana?'],['ouvido','PERGUNTAR','Faça 1 pergunta sobre o que o outro disse'],['ir','MUDAR DE ASSUNTO','Falando nisso…'],['acabou','TERMINAR','Preciso ir. Até amanhã!']].map(([k,a,b])=>`<div class="pg-card big">${svgPic(k,60)}<b>${a}</b><small>${b}</small></div>`).join('')}</div>${cards([['feliz','feliz'],['triste','triste'],['bravo','bravo'],['medo','com medo'],['surpreso','surpreso'],['cansado','cansado']],6,52)}${howto(['Sorteie uma carta de habilidade e pratiquem juntos.','Com as emoções: faça a cara e o outro adivinha.'])}` },
  cartas_desafio:{ t:'Cartas de desafio de linguagem', tipo:'Cartas', h:()=>`<div class="pg-grid c3">${['Explique o que é “justiça”','O que quer dizer “chover canivete”?','Conte um filme em 15 palavras','Convença alguém a ler seu livro favorito','Explique o seu jogo para um bebê','Dê 3 motivos para ter recreio maior'].map(t=>`<div class="pg-card big"><b>${t}</b></div>`).join('')}</div>${howto(['Sorteie uma carta.','Prepare em 1 minuto e apresente.','O ouvinte diz o que entendeu.'])}` },
  guia_pais:{ t:'Guia para os pais: Observe, Espere, Escute', tipo:'Para a família', h:()=>`<div class="pg-owl"><div><h3>Observe</h3><p>Fique na altura da criança, cara a cara.</p></div><div><h3>Espere</h3><p>Pare de falar e conte até 10.</p></div><div><h3>Escute</h3><p>Responda a qualquer tentativa como se fosse uma mensagem.</p></div></div><p style="margin-top:10px">Depois que ela se comunicar, repita com a palavra certa e acrescente uma: “bola” → “bola grande!”.</p>${howto(['Escolha 1 rotina por dia (banho, refeição, brincadeira).','Pratique 5 minutos.'])}` },
};

/* Mapeia o material antigo de cada atividade para a brincadeira correspondente */
const PLAYMAP = { pecs_fase1:'cartoes_itens', pecs_frase:'tira_frase', pecs_dados:'cartoes_itens', caa_prancha:'prancha_caa', caa_registro:'prancha_caa', hanen_owl:'guia_pais', emt_ambiente:'loto_figuras', esdm_rotina:'memoria_figuras', jasper_nivel:'memoria_figuras', ta_registro:'bingo_sons', cf_cartas:'memoria_rimas', cf_registro:'domino_silabas', narrativa:'sequencia_historia', fe_plano:'cartas_autoinstrucao', mo_down:'caretas', leitura_global:'cartoes_leitura', sinais:'sinais_rotina', dttc_lista:'tabuleiro_trilha', rest_lista:'palavras_malucas', ndp_muro:'tabuleiro_trilha', sfa_grade:'tabuleiro_pistas', sfa_figuras:'cartoes_nomeacao', vnest:'cartoes_verbos', roteiro:'cartoes_cena', ciat_cartas:'pares_ciat', mit_frases:'cartoes_melodia', recast:'cartoes_acoes', vocab_mapa:'adivinha', pragmatica:'cartoes_conversa', enriquecimento:'cartas_desafio', de_triagem:null, registro:null };
/* Brincadeira extra por método (além das que vêm das atividades) */
const PLAYEXTRA = { mo:['futebol_sopro'], dttc:['memoria_figuras'], ndp:['memoria_figuras'], rest:['tabuleiro_trilha'], cf:['bingo_sons'], ta:['memoria_rimas'], recast:['loto_figuras'], vocab:['memoria_figuras'] };
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
/* ===== Lógica de cada atividade: por que funciona (l) e o que esperamos (e) ===== */
const LOG = {
 'esdm:0:0':{l:'Rotinas sociais sensoriais colocam o adulto como a fonte da diversão: o balão só “acontece” com você. A pausa antes de soltar cria a necessidade de a criança sinalizar, e a resposta imediata ensina que comunicar tem efeito.',e:'Que a criança olhe para o seu rosto e use um sinal intencional (olhar, som, gesto) para pedir a continuação. É a base da intenção comunicativa e da atenção compartilhada.'},
 'esdm:0:1':{l:'Imitar a criança primeiro mostra que você está no mundo dela e aumenta o interesse por você. Com dois brinquedos iguais, ela pode copiar sem precisar disputar o objeto. A imitação é a principal porta de aprendizagem de gestos, sons e palavras.',e:'Que a criança perceba que é imitada e passe a copiar ações simples com objetos, primeiro com ajuda e depois sozinha.'},
 'esdm:1:0':{l:'Entregar as peças uma de cada vez multiplica as oportunidades de pedido dentro de uma brincadeira que a criança já quer. Aceitar o nível atual e modelar o seguinte é a progressão do mais fácil ao mais difícil.',e:'Que a criança peça com mais frequência e de forma mais elaborada: de olhar e estender a mão para gesto, som e, depois, palavra.'},
 'esdm:1:1':{l:'O objeto surpresa dá um motivo natural para compartilhar o interesse. Apontar, olhar para a criança e para o objeto mostra como o foco é dividido entre duas pessoas e uma coisa.',e:'Que a criança siga o seu apontar e o seu olhar e, depois, comece a apontar e a mostrar coisas para você.'},
 'esdm:2:0':{l:'O faz de conta une linguagem e brincar simbólico em uma rotina previsível. Modelar ações curtas com uma palavra e usar a regra do +1 dá um modelo um passo acima do nível da criança, fácil de absorver.',e:'Que a criança use palavras de ação e de objeto dentro da brincadeira e faça ações simbólicas com o boneco.'},
 'esdm:2:1':{l:'A criança passa muito mais horas com a família do que na clínica. Ensinar uma estratégia por vez, com prática e retorno na hora, transforma rotinas da casa em oportunidades de aprendizagem.',e:'Que o responsável aplique a estratégia sozinho e que a criança comece a usar em casa o que aprendeu na sessão.'},
 'esdm:3:0':{l:'Expandir a fala da criança com uma palavra a mais e criar escolhas que exigem duas palavras mostra a estrutura da frase no momento em que ela está motivada a se comunicar.',e:'Que a criança combine duas palavras de forma espontânea e passe a comentar, além de pedir.'},
 'jasper:0:0':{l:'Imitar o brincar da criança aumenta o engajamento conjunto, que é o alvo central do JASPER. Modelar um passo novo no mesmo nível de brincar amplia o repertório sem tirar a criança da zona em que ela tem sucesso.',e:'Mais tempo em engajamento conjunto: a criança alterna a atenção entre você e o brinquedo e aceita a sua participação.'},
 'jasper:1:0':{l:'Rotinas com vários passos dão estrutura e previsibilidade ao brincar, o que mantém a criança engajada por mais tempo. Cada passo novo e cada pequena variação ampliam o brincar e criam momentos naturais para comunicar e alternar turnos.',e:'Que a criança mantenha uma rotina de brincar com 4 ou mais passos por cerca de 5 minutos, aceite variações sem sair da atividade e participe alternando turnos com você.'},
 'jasper:2:0':{l:'A atenção compartilhada surge dentro do engajamento: quando a rotina já está estável, a surpresa gera vontade de mostrar e comentar. Modelar apontar, olhar e comentário ensina como compartilhar.',e:'Que a criança inicie atenção compartilhada por conta própria (mostrar, apontar, alternar o olhar, comentar), o que prevê ganhos futuros de linguagem.'},
 'pecs:0:0':{l:'A Fase I ensina a iniciar a comunicação, não a responder. O ajudante físico atrás evita dicas verbais, e a entrega imediata do item mostra que entregar a figura funciona. A ajuda é retirada aos poucos para evitar dependência.',e:'Que a pessoa, ao ver o item desejado, pegue a figura e a entregue ao parceiro sem nenhuma ajuda.'},
 'pecs:1:0':{l:'Comunicar de verdade exige ir até alguém. Aumentar a distância do parceiro e da pasta e variar pessoas e lugares ensina persistência e generaliza o uso.',e:'Que a pessoa busque a pasta e o parceiro, mesmo a distância, e use o sistema com pessoas e ambientes diferentes.'},
 'pecs:2:0':{l:'Na Fase III a pessoa aprende que cada figura significa algo diferente. Receber o item errado quando entrega a figura errada (correção de erro) e a checagem de correspondência tornam a escolha significativa.',e:'Que a pessoa escolha a figura certa entre várias e que a escolha corresponda ao item que ela realmente quer.'},
 'pecs:3:0':{l:'A tira de frase introduz a estrutura “eu quero + item”. Ler a tira com uma pausa antes do nome do item abre espaço para a fala, e os atributos (cor, tamanho) tornam a mensagem mais precisa.',e:'Que a pessoa monte frases de 2 a 3 cartões sozinha e, com frequência, vocalize ou fale junto durante a leitura da tira.'},
 'caa:0:0':{l:'A pessoa aprende uma língua vendo outros usarem. Na modelagem com a prancha, o parceiro aponta os símbolos enquanto fala, sem exigir resposta, como fazemos com a fala de um bebê.',e:'Que a pessoa preste atenção à prancha durante a modelagem e comece a tocar símbolos, primeiro de forma exploratória e depois com intenção.'},
 'caa:1:0':{l:'Criar uma necessidade real (o pote fechado, o brinquedo que para) dá um motivo para usar a prancha. Ensinar também “parar” e “acabou” garante que a comunicação sirva para recusar, não só para pedir.',e:'Que a pessoa use a prancha por iniciativa própria para pedir e recusar em situações planejadas.'},
 'caa:2:0':{l:'Responder com uma combinação de 2 símbolos mostra o próximo nível da linguagem. Ler de volta a mensagem confirma que ela foi entendida e valoriza a tentativa.',e:'Que a pessoa combine 2 símbolos e use a prancha também em casa e na escola.'},
 'hanen:0:0':{l:'Assistir ao próprio vídeo mostra aos pais as tentativas de comunicação que passam despercebidas e quanto tempo esperam. Ver e praticar na hora muda o comportamento mais do que uma explicação.',e:'Que o responsável espere pelo menos 5 segundos e perceba e responda às tentativas sutis da criança.'},
 'hanen:1:0':{l:'Imitar, interpretar e comentar transforma qualquer som ou gesto da criança em conversa. Frases curtas e repetidas, com uma palavra a mais, dão um modelo que ela consegue aprender.',e:'Que o responsável faça mais comentários do que perguntas e que a criança tenha mais turnos de comunicação nas rotinas da casa.'},
 'hanen:2:0':{l:'Ler o mesmo livro várias vezes deixa a linguagem previsível. Quando a criança já conhece a frase, a lacuna a convida a completar, o que fortalece vocabulário e participação.',e:'Que a criança aponte, nomeie e complete frases conhecidas durante a leitura.'},
 'emt:0:0':{l:'Quando tudo está ao alcance, a criança não precisa se comunicar. Arrumar o ambiente (potes fechados, porções pequenas, situações inesperadas) cria motivos naturais para iniciar a comunicação.',e:'Que a criança inicie a comunicação com mais frequência, cerca do dobro da linha de base.'},
 'emt:1:0':{l:'A sequência espera, pergunta aberta, escolha e modelo dá apenas o apoio necessário e sempre termina em sucesso, com entrega imediata e expansão. Com o tempo, a criança precisa de menos ajuda.',e:'Que a criança produza as palavras-alvo com o mínimo de apoio, respondendo já à pergunta aberta na maioria das oportunidades.'},
 'emt:2:0':{l:'Pesquisas com crianças com deficiência intelectual mostram ganhos maiores quando pais e terapeuta aplicam as estratégias juntos. O treino direto, com retorno na hora, garante que a técnica chegue à rotina.',e:'Que o responsável aplique a sequência de apoio corretamente em casa e que a criança use os alvos com ele.'},
 'pragmatica:0:0':{l:'Muitas regras sociais parecem óbvias, mas não são para pessoas com TEA. Deixar a regra explícita e visual, mostrar exemplos bons e ruins e ensaiar com roteiro torna a habilidade compreensível e treinável.',e:'Que a pessoa inicie uma conversa de forma adequada (chamar, olhar ou se aproximar e abrir o assunto) sem precisar do roteiro.'},
 'pragmatica:1:0':{l:'As fichas tornam visível algo abstrato: o ir e vir da conversa. Começar pelo tema da pessoa garante motivação; passar ao tema do outro treina flexibilidade e interesse pelo parceiro.',e:'Que a pessoa mantenha vários turnos no mesmo assunto, inclusive no tema do outro, fazendo perguntas de volta.'},
 'pragmatica:2:0':{l:'Ler emoções e sinais de desinteresse é ensinado como um trabalho de detetive: observar pistas no rosto, no corpo e no contexto. Explicar expressões com exemplos da própria vida torna a linguagem não literal concreta.',e:'Que a pessoa identifique emoções e sinais do outro, ajuste a conversa ao perceber desinteresse e entenda expressões comuns.'},
 'ta:0:0':{l:'Discriminar sons parecidos é a base para ouvir e escrever corretamente. Cobrir a boca tira a pista visual e obriga o sistema auditivo a trabalhar; ir de pares diferentes para pares mínimos aumenta a dificuldade aos poucos.',e:'Que a criança diferencie pares mínimos (pato/bato) só pela audição, com redução das trocas na fala e na escrita.'},
 'ta:1:0':{l:'Na escola, quase toda fala acontece com ruído. Treinar a compreensão com ruído crescente, sempre perto de 80% de acerto, fortalece a habilidade de figura-fundo.',e:'Que a criança entenda palavras, ordens e histórias com ruído de fundo, com menos pedidos de repetição em sala.'},
 'ta:1:1':{l:'No dia a dia, ouvimos partes da fala e completamos o resto pelo contexto. Treinar o fechamento auditivo com palavras e frases incompletas fortalece essa habilidade.',e:'Que a criança reconstrua palavras e frases com partes faltando, usando o contexto.'},
 'ta:2:0':{l:'Ordenar sons no tempo é a base para perceber a ordem dos sons nas palavras e seguir instruções. Aumentar o número de itens treina também a memória sequencial.',e:'Que a criança repita sequências de 4 ou mais sons ou sílabas na ordem certa e siga instruções de vários passos.'},
 'cf:0:0':{l:'A rima é o primeiro nível de consciência fonológica: a criança aprende a prestar atenção no som da palavra e não no significado. O jogo da memória dá repetição de forma divertida.',e:'Que a criança identifique e produza rimas, abrindo caminho para o trabalho com sílabas.'},
 'cf:1:0':{l:'Palmas e blocos tornam visível e concreta a unidade sílaba. Segmentar, identificar e depois manipular (tirar ou juntar sílabas) segue a ordem natural de dificuldade.',e:'Que a criança conte, identifique e manipule sílabas, habilidade diretamente ligada ao início da leitura e da escrita.'},
 'cf:2:0':{l:'O fonema é a unidade que a escrita alfabética representa. Ligar cada som à sua letra (letras móveis) dá o maior efeito sobre a leitura, segundo a evidência.',e:'Que a criança junte e troque sons para formar palavras e transfira isso para ler e escrever.'},
 'narrativa:0:0':{l:'Toda história tem uma estrutura previsível (personagem, cenário, problema, ação, final). Ensinar a estrutura de forma explícita, com ícones, dá à criança um mapa para entender e organizar histórias.',e:'Que a criança identifique as partes da história ao ouvir, o que melhora a compreensão oral e de leitura.'},
 'narrativa:1:0':{l:'Recontar exige organizar as ideias no tempo e ligá-las com conectivos. O mapa e as figuras servem de apoio que vai sendo retirado; a reformulação melhora a gramática no próprio discurso.',e:'Que a criança reconte histórias com começo, meio e fim, usando conectivos de tempo e causa.'},
 'narrativa:2:0':{l:'Contar fatos da própria vida é a narrativa mais usada no dia a dia (na escola, com amigos). Planejar antes, gravar e comparar com a linha de base mostra o progresso para a própria criança.',e:'Que a criança conte acontecimentos pessoais de forma organizada e compreensível, sem precisar do mapa.'},
 'fe:0:0':{l:'Na criança com TDAH, a fala interna que guia as ações ainda é pouco eficiente. Falar os passos em voz alta e depois internalizar (sussurro, “na cabeça”) usa a linguagem como freio e guia da ação.',e:'Que a criança pare antes de agir, planeje, execute e confira, usando os passos sozinha.'},
 'fe:1:0':{l:'Instruções longas sobrecarregam a memória de trabalho. Ensinar a repetir para si e a marcar cada parte nos dedos dá estratégias para guardar a informação até terminar a tarefa.',e:'Que a criança siga instruções de 4 a 5 partes, como as dadas em sala de aula.'},
 'fe:1:1':{l:'Muitas crianças com TDAH têm dificuldade em perceber o tempo, o que prejudica o planejamento. Estimar e comparar com o cronômetro treina a percepção de tempo de forma concreta.',e:'Que as estimativas de tempo fiquem mais próximas do real, ajudando a organizar tarefas e deveres.'},
 'fe:2:0':{l:'Planejar o que vai dizer antes de falar organiza o discurso, que costuma sair desordenado. Usar tarefas reais e missões semanais leva a estratégia para a escola e para casa.',e:'Que a criança explique ou relate algo em partes claras, de forma que o ouvinte entenda sem pedir esclarecimento.'},
 'mo:0:0':{l:'Na síndrome de Down, a hipotonia e a sensibilidade oral alterada dificultam a alimentação e a fala. Postura estável e estimulação sensorial preparam a musculatura e reduzem a defesa ao toque.',e:'Que a criança aceite o toque na face e dentro da boca sem defesa e melhore o fechamento dos lábios.'},
 'mo:1:0':{l:'Exercícios dentro de brincadeiras (caretas, sopro, canudo) dão a repetição necessária para ganhar força e controle de lábios e língua, sem que a criança perceba como esforço.',e:'Que a criança mantenha os lábios fechados e a língua dentro da boca no repouso e faça os movimentos sem compensar com a mandíbula.'},
 'mo:2:0':{l:'A mastigação é o exercício mais funcional que existe para a musculatura oral. Alimentos firmes no lado dos molares, alternando os lados, e a progressão das consistências treinam a função na situação real.',e:'Que a criança mastigue dos dois lados, aceite novas consistências sem engasgo e passe a usar copo aberto e canudo.'},
 'sinaiscaa:0:0':{l:'A memória visual é um ponto forte na síndrome de Down. O sinal feito junto com a palavra dá à criança um jeito de se comunicar antes da fala e reforça a palavra falada, que costuma substituir o sinal com o tempo.',e:'Que a criança imite e use os primeiros sinais para pedir e comentar, com menos frustração.'},
 'sinaiscaa:1:0':{l:'Combinar dois sinais é o mesmo passo de combinar duas palavras. Ler em voz alta o que a criança sinaliza e pausar antes da palavra convida a fala a aparecer junto.',e:'Que a criança combine 2 sinais ou palavras e comece a vocalizar junto com os sinais.'},
 'leitura:0:0':{l:'Parear palavras iguais não exige ler: a criança só compara formas. É o primeiro degrau da leitura global, garantindo sucesso e aproveitando a memória visual.',e:'Que a criança pareie palavras escritas entre 4 opções sem pistas.'},
 'leitura:1:0':{l:'Selecionar a palavra dita e depois nomeá-la avança da compreensão para a produção. A palavra escrita vira apoio visual para a fala e para formar frases.',e:'Que a criança reconheça e leia em voz alta um vocabulário funcional, servindo de base para a alfabetização.'},
 'dttc:0:0':{l:'Na apraxia, o problema está no planejamento do movimento. Falar junto e devagar, com pistas visuais e táteis, dá ao cérebro o modelo do movimento completo; acelerar aos poucos aproxima da fala natural.',e:'Que a criança produza as palavras-alvo com precisão de movimento (vogais certas, transições suaves) com apoio simultâneo.'},
 'dttc:0:1':{l:'A pista tátil mostra onde e como o movimento começa, informação que a criança com apraxia não acessa sozinha. Usar sempre a mesma pista e reduzi-la aos poucos evita dependência.',e:'Que a criança precise de cada vez menos apoio: do toque para o gesto e do gesto para nenhuma pista.'},
 'dttc:1:0':{l:'Repetir sem falar junto obriga a criança a planejar o movimento sozinha. A pausa antes de repetir e a prática aleatória seguem os princípios da aprendizagem motora, que favorecem a retenção.',e:'Que a criança mantenha a precisão em eco com pausa, sinal de que o plano motor está se formando.'},
 'dttc:2:0':{l:'O objetivo final é a fala espontânea no dia a dia. Provocar o alvo sem modelo, em frases e com entonações diferentes, testa se o movimento já está automatizado e generaliza o aprendizado.',e:'Que a criança use os alvos de forma espontânea, em frases, e que apareçam ganhos também em palavras não treinadas.'},
 'rest:0:0':{l:'Pseudopalavras não têm erros já habituais, então a criança treina o movimento limpo. A pré-prática com muito apoio garante que ela entende as três metas: sons, transição e sílaba forte.',e:'Que a criança produza as pseudopalavras com sons corretos, sem pausas entre as sílabas e com a tonicidade certa.'},
 'rest:1:0':{l:'Muitas repetições em ordem aleatória, com feedback só no fim do bloco, seguem os princípios da aprendizagem motora: o desempenho na sessão pode cair, mas a retenção a longo prazo aumenta.',e:'Que a criança atinja cerca de 80% nas três metas e que o aprendizado se mantenha entre as sessões.'},
 'rest:2:0':{l:'A sondagem sem apoio mede o que foi aprendido, não o que a criança faz com ajuda. Incluir palavras não treinadas e reais mostra se há generalização.',e:'Melhora em relação à linha de base nas palavras treinadas e não treinadas, inclusive nas palavras reais.'},
 'ndp:0:0':{l:'Na abordagem por camadas, a fala é construída de baixo para cima, como um muro. Associar cada som a uma figura-pista dá um apoio visual e lúdico para estabilizar sons e sílabas.',e:'Que a criança produza de forma estável os sons e as sílabas CV treinados.'},
 'ndp:1:0':{l:'Sequenciar sílabas é o passo seguinte: primeiro iguais (papa), depois com vogal ou consoante diferente. Manter alvos antigos na prática impede que o que foi aprendido se perca.',e:'Que a criança produza palavras de 2 sílabas variadas com precisão.'},
 'ndp:2:0':{l:'Com as camadas de baixo estáveis, a criança passa a palavras mais longas e frases. A frase-veículo dá uma estrutura fixa que reduz a carga de planejamento.',e:'Que a criança produza palavras de 3 sílabas e frases curtas com boa inteligibilidade.'},
 'mit:0:0':{l:'Na afasia não fluente, o canto costuma estar mais preservado que a fala. A melodia e a batida na mão esquerda recrutam redes do hemisfério direito e ajudam a pessoa a produzir frases que não consegue falar.',e:'Que a pessoa produza frases curtas entoadas sozinha logo após o modelo.'},
 'mit:1:0':{l:'Aumentar o tempo de espera e responder a perguntas aproxima a frase entoada do uso real. Diminuir a batida reduz o apoio aos poucos.',e:'Que a pessoa use as frases treinadas para responder perguntas, com menos apoio de ritmo.'},
 'mit:2:0':{l:'A fala ritmada (sprechgesang) é a ponte entre cantar e falar. Retirar a melodia aos poucos leva a frase para a prosódia normal.',e:'Que a pessoa use as frases funcionais na conversa sem cantar.'},
 'sfa:0:0':{l:'Na anomia, a palavra existe mas o acesso a ela falha. Descrever os traços do objeto ativa a rede de significados ao redor dele e “puxa” o nome. Completar a grade mesmo quando acerta reforça a rede.',e:'Que a pessoa gere a maioria dos traços sozinha e nomeie mais objetos depois de usar a grade.'},
 'sfa:1:0':{l:'O objetivo final é a pessoa usar a estratégia sozinha quando trava, inclusive na conversa. Retirar a grade impressa e praticar em discurso leva a técnica para a vida real.',e:'Que a pessoa nomeie os itens treinados, use a estratégia de forma espontânea ao travar e tenha alguma melhora em itens não treinados.'},
 'vnest:0:0':{l:'O verbo organiza a frase: ao lembrar quem faz e o que é feito, a pessoa ativa uma rede de palavras relacionadas. Gerar vários pares para o mesmo verbo fortalece essa rede e favorece frases em situações não treinadas.',e:'Que a pessoa gere pares agente-objeto sozinha e produza frases mais completas.'},
 'vnest:0:1':{l:'Julgar se a frase faz sentido obriga a pensar no significado do verbo e nos papéis de cada palavra. Corrigir frases absurdas aprofunda esse processamento.',e:'Que a pessoa reconheça e corrija frases sem sentido e lembre o verbo e um par sem pistas.'},
 'ciat:0:0':{l:'Na afasia crônica, a pessoa tende a evitar a fala e compensar com gestos (não uso aprendido). A restrição dentro de um jogo real, com prática intensa e aumento gradual da exigência, estimula a reorganização da linguagem.',e:'Que a pessoa faça os pedidos só falando, com a palavra correta, na maioria das rodadas.'},
 'ciat:1:0':{l:'Aumentar a exigência aos poucos (frase, atributo, cortesia) é a modelagem: o desafio cresce no mesmo ritmo da capacidade. Respostas e nomes do parceiro tornam o jogo mais parecido com uma conversa.',e:'Que a pessoa produza frases completas com atributos e respostas no nível exigido.'},
 'ciat:2:0':{l:'Ganhos que ficam só na clínica não mudam a vida da pessoa. O pacote de transferência leva a fala para situações reais com registro e conversa sobre as dificuldades.',e:'Que a pessoa use mais a fala em situações reais e que a família relate a diferença.'},
 'script:0:0':{l:'O roteiro é escrito sobre uma situação que importa para a pessoa e com as palavras dela. Isso aumenta a motivação e torna a prática útil de imediato.',e:'Ter um roteiro curto, pessoal e possível de treinar, aprovado pelo paciente.'},
 'script:1:0':{l:'Repetir o roteiro inteiro até ficar automático aproveita a fala automática, mais preservada na afasia. A retirada do apoio (ler junto, ler sozinho, falar sem ler) torna a pessoa independente.',e:'Que a pessoa fale o roteiro com pelo menos 90% das palavras corretas, sem o texto, e o use na situação real.'},
 'recast:0:0':{l:'Crianças com TDL precisam ouvir a forma gramatical muitas vezes, em contextos variados, para extrair a regra. A brincadeira planejada permite dezenas de modelos do alvo em poucos minutos.',e:'Que a criança preste atenção ao alvo e comece a usá-lo espontaneamente na brincadeira.'},
 'recast:1:0':{l:'A reformulação mostra a forma correta logo depois do erro, quando a criança compara a própria frase com a do adulto. Como não há correção explícita, a conversa e a motivação continuam.',e:'Que a criança use o alvo gramatical corretamente em 80% das situações em que ele é necessário, em conversa sem treino.'},
 'vocab:0:0':{l:'Aprender uma palavra de verdade é conhecer o significado, o som, a escrita e o uso. Trabalhar tudo isso junto (elaboração semântica e fonológica) cria uma representação mais forte e fácil de lembrar.',e:'Que a criança explique, com as próprias palavras, o significado das palavras novas e as use em frases.'},
 'vocab:1:0':{l:'Lembrar a palavra (recuperar) fortalece a memória mais do que só ouvi-la de novo. Dar e receber pistas no jogo treina essa recuperação de forma divertida.',e:'Que a criança recupere a maioria das palavras treinadas mesmo depois de duas semanas.'},
 'dupla:0:0':{l:'Na dupla excepcionalidade, a habilidade alta pode esconder a dificuldade, e vice-versa. Comparar desempenhos (oral × escrito, velocidade × precisão) mostra discrepâncias que uma avaliação comum não vê.',e:'Ter uma hipótese clara sobre forças e dificuldades e um plano definido com a equipe.'},
 'dupla:1:0':{l:'Pessoas com altas habilidades aprendem melhor quando entendem o porquê da estratégia. Usar o raciocínio e os temas de interesse mantém a motivação no trabalho com a dificuldade.',e:'Que a pessoa atinja as metas do método escolhido para a dificuldade (por exemplo, leitura) e aplique a estratégia sozinha.'},
 'dupla:1:1':{l:'O enriquecimento mantém o desafio no nível da pessoa e trabalha usos sofisticados da linguagem (argumentar, ironia, adaptar ao ouvinte), o que fortalece a autoestima.',e:'Que a pessoa cumpra o desafio e adapte a linguagem ao ouvinte, com retorno positivo de quem ouviu.'},
};
/* ===== Orientação para a família: o que fizemos (f, linguagem simples) e tarefa de casa (c) ===== */
const FAM = {
 'esdm:0:0':{f:'brincamos com balão e bolhas, parando antes de soltar para que a criança pedisse a continuação com o olhar, um som ou um gesto',c:'Brinque de encher o balão ou soprar bolhas e pare no meio. Espere a criança olhar para você ou fazer um som e, na hora, continue a brincadeira.'},
 'esdm:0:1':{f:'imitamos o que a criança fazia com os brinquedos e depois mostramos ações novas para ela copiar',c:'Pegue dois brinquedos iguais. Primeiro copie o que a criança faz; depois mostre uma ação nova (bater, empurrar) e espere ela copiar.'},
 'esdm:1:0':{f:'entregamos as peças uma de cada vez para a criança pedir a próxima',c:'Em um quebra-cabeça ou nos blocos, entregue uma peça por vez e espere a criança pedir (olhar, mão, som ou palavra) antes de dar a próxima.'},
 'esdm:1:1':{f:'mostramos objetos surpresa e apontamos para ensinar a criança a seguir o nosso olhar e a apontar',c:'Durante o dia, aponte coisas interessantes dizendo “olha!” e espere a criança olhar. Comemore quando ela apontar algo para você.'},
 'esdm:2:0':{f:'fizemos brincadeira de comidinha com o boneco, usando palavras curtas como “come” e “bebe”',c:'Brinquem de dar comida ao boneco. Use frases bem curtas e, quando a criança falar uma palavra, repita com uma palavra a mais (“água” → “água gelada”).'},
 'esdm:2:1':{f:'treinamos com você uma estratégia para usar em casa',c:'Pratique a estratégia combinada em 2 rotinas por dia (banho, refeição ou brincadeira), por 5 minutos.'},
 'esdm:3:0':{f:'ajudamos a criança a juntar duas palavras, oferecendo escolhas como “carro azul ou carro vermelho?”',c:'Ofereça escolhas com duas palavras (“suco de uva ou suco de laranja?”) e repita a frase da criança com uma palavra a mais.'},
 'jasper:0:0':{f:'entramos na brincadeira da criança, imitando e mostrando novas formas de brincar',c:'Sente-se de frente para a criança e imite o que ela faz com o brinquedo, comentando com 1 ou 2 palavras. Depois mostre uma ideia nova.'},
 'jasper:1:0':{f:'montamos uma brincadeira com vários passos (garagem, carro entra, carro sai), revezando a vez',c:'Monte uma brincadeira em passos com brinquedos de casa (carro na garagem, boneco dorme e acorda) e revezem a vez. Acrescente um passo novo de cada vez.'},
 'jasper:2:0':{f:'criamos surpresas na brincadeira para a criança mostrar e apontar para nós',c:'No meio da brincadeira, coloque algo inesperado e diga “olha!”. Espere a criança mostrar ou apontar e responda com entusiasmo.'},
 'pecs:0:0':{f:'ensinamos a criança a entregar uma figura para pedir o que quer',c:'Deixe as figuras dos itens preferidos à mão. Quando a criança entregar a figura, dê o item na hora e diga o nome dele.'},
 'pecs:1:0':{f:'treinamos a criança a ir até a pasta e até a pessoa para pedir, mesmo a distância',c:'Deixe a pasta de comunicação sempre no mesmo lugar e acessível. Peça que todos em casa atendam quando a criança trouxer uma figura.'},
 'pecs:2:0':{f:'ensinamos a criança a escolher a figura certa entre várias',c:'Ofereça duas figuras (uma que ela gosta e uma que não liga). Entregue exatamente o que a figura mostra, mesmo que seja a errada.'},
 'pecs:3:0':{f:'a criança montou frases com figuras: “eu quero + item”',c:'Use a tira de frase em casa. Leia apontando cada figura e faça uma pausa antes do nome do item para a criança tentar falar.'},
 'caa:0:0':{f:'usamos a prancha de comunicação apontando as palavras enquanto falávamos',c:'Ao brincar ou comer, aponte na prancha as palavras que você fala (“MAIS”, “ACABOU”). Não exija que a criança aponte: só mostre.'},
 'caa:1:0':{f:'criamos situações em que a criança precisou usar a prancha para pedir ou recusar',c:'Pare uma brincadeira no momento mais divertido e espere. Se ela não usar a prancha, mostre apontando “mais”.'},
 'caa:2:0':{f:'a criança começou a juntar dois símbolos na prancha',c:'Quando a criança apontar um símbolo, aponte dois (“quero” → “quero comer”) e leia em voz alta.'},
 'hanen:0:0':{f:'assistimos juntos ao vídeo da brincadeira para perceber as tentativas de comunicação da criança',c:'Na brincadeira, fique de frente, observe, espere até 10 segundos em silêncio e responda a qualquer tentativa da criança.'},
 'hanen:1:0':{f:'praticamos responder à criança imitando, interpretando e comentando',c:'Quando a criança fizer um som ou gesto, transforme em palavra (“ah, você quer a bola!”). Prefira comentar a perguntar.'},
 'hanen:2:0':{f:'fizemos leitura compartilhada deixando a criança participar',c:'Leia o mesmo livro várias vezes na semana. Deixe a criança escolher a página e pare antes de palavras conhecidas para ela completar.'},
 'emt:0:0':{f:'organizamos o ambiente para a criança precisar pedir (potes fechados, porções pequenas)',c:'Guarde alguns brinquedos e lanches em potes transparentes fechados, à vista. Espere a criança pedir antes de abrir.'},
 'emt:1:0':{f:'ajudamos a criança a falar a palavra com o mínimo de ajuda: esperar, perguntar, dar escolha e, só no fim, dar o modelo',c:'Quando a criança quiser algo, espere 5 segundos. Se não vier, pergunte “o que você quer?”; depois ofereça escolha; por último diga a palavra para ela repetir.'},
 'emt:2:0':{f:'treinamos com você a sequência de ajuda para usar em casa',c:'Use a sequência em 3 momentos por dia: esperar, perguntar, oferecer escolha e dar o modelo, sempre entregando o que a criança pediu.'},
 'pragmatica:0:0':{f:'treinamos como começar uma conversa',c:'Peça para ele cumprimentar e fazer uma pergunta a alguém da família todos os dias (“como foi seu dia?”).'},
 'pragmatica:1:0':{f:'praticamos manter a conversa no mesmo assunto e fazer perguntas ao outro',c:'No jantar, combine conversar sobre um assunto e incentive que ele faça uma pergunta sobre o que o outro contou.'},
 'pragmatica:2:0':{f:'treinamos perceber emoções e sinais das outras pessoas e entender expressões',c:'Ao ver um filme juntos, pause e pergunte como o personagem está se sentindo e como ele sabe disso.'},
 'ta:0:0':{f:'treinamos perceber a diferença entre palavras com sons parecidos (pato/bato)',c:'Brinque de “igual ou diferente”: cubra a boca e diga duas palavras; ela responde se são iguais.'},
 'ta:1:0':{f:'treinamos entender a fala com barulho de fundo',c:'Brinque de dar ordens simples com a TV baixa ligada. Evite conversar de longe ou de outro cômodo.'},
 'ta:1:1':{f:'treinamos completar palavras com um pedaço faltando',c:'Fale palavras incompletas (“bana…”) para a criança completar, como um jogo.'},
 'ta:2:0':{f:'treinamos lembrar e repetir sequências de sons na ordem',c:'Peça para repetir sequências (“palma, pé, palma”) e dê recados de 3 passos para ela cumprir.'},
 'cf:0:0':{f:'brincamos de rimas com jogo da memória',c:'Brinque de achar palavras que rimam (“gato rima com…”). Leiam versinhos e parlendas juntos.'},
 'cf:1:0':{f:'brincamos de bater palmas e montar blocos para cada pedacinho (sílaba) das palavras',c:'Bata palmas para cada sílaba de nomes da família e objetos da casa (“ca-ne-ca”). Pergunte qual é o primeiro pedaço.'},
 'cf:2:0':{f:'treinamos os sons das letras e a troca de sons para formar palavras novas',c:'Com letras móveis ou papel, troque uma letra e leiam a palavra nova (pato → bato). Use o som da letra, não o nome.'},
 'narrativa:0:0':{f:'lemos uma história e encontramos as partes: quem, onde, qual o problema e como terminou',c:'Ao ler uma história, pergunte: quem é? onde está? qual foi o problema? como terminou?'},
 'narrativa:1:0':{f:'a criança ordenou cenas e recontou a história',c:'Depois de um desenho ou livro, peça para ela contar o que aconteceu, ajudando com “e depois?” e “por quê?”.'},
 'narrativa:2:0':{f:'a criança contou um acontecimento da vida dela de forma organizada',c:'No fim do dia, peça para contar uma coisa que aconteceu, com começo, meio e fim.'},
 'fe:0:0':{f:'treinamos parar, pensar, fazer e conferir, falando os passos em voz alta',c:'Antes do dever de casa, peça para dizer o plano em voz alta e, no final, conferir se ficou certo.'},
 'fe:1:0':{f:'treinamos seguir instruções com várias partes, repetindo para si antes de fazer',c:'Dê recados com 3 partes e peça para repetir antes de fazer (“pegue a mochila, guarde o estojo e traga o caderno”).'},
 'fe:1:1':{f:'treinamos estimar quanto tempo as tarefas levam',c:'Antes de uma tarefa, pergunte quanto tempo ela acha que vai levar e cronometrem juntos.'},
 'fe:2:0':{f:'treinamos planejar o que vai dizer antes de falar',c:'Antes de contar algo importante, peça para pensar em começo, 2 ideias e fim.'},
 'mo:0:0':{f:'fizemos estimulação com toques no rosto e na boca para preparar a musculatura',c:'Durante a escovação, faça toques firmes nas bochechas em direção aos lábios, sempre avisando antes.'},
 'mo:1:0':{f:'fizemos exercícios de lábios e língua em forma de brincadeira (caretas, sopro, canudo)',c:'Faça as caretas na frente do espelho 2 vezes ao dia e brinquem de soprar bolhas. Use canudo curto para líquidos grossos.'},
 'mo:2:0':{f:'treinamos mastigar dos dois lados e novas consistências de alimento',c:'Ofereça um pedaço firme (cenoura cozida) no lado dos dentes de trás, alternando os lados. Prefira copo aberto e canudo à mamadeira.'},
 'sinaiscaa:0:0':{f:'usamos sinais junto com as palavras da rotina (comer, mais, acabou)',c:'Faça o sinal sempre junto com a palavra falada, em todas as refeições e rotinas. Comemore qualquer tentativa de sinal.'},
 'sinaiscaa:1:0':{f:'a criança juntou dois sinais (por exemplo, “mais + suco”)',c:'Quando a criança fizer um sinal, faça dois e fale a frase (“MAIS SUCO!”). Pause antes da palavra para ela tentar falar.'},
 'leitura:0:0':{f:'treinamos colocar palavras escritas iguais juntas',c:'Brinque com os cartões de palavras: coloque a palavra sobre a igual e leia em voz alta.'},
 'leitura:1:0':{f:'a criança treinou encontrar e ler palavras escritas',c:'Espalhe 3 cartões e peça “mostre BOLA”. Depois aponte um e pergunte “o que está escrito?”.'},
 'dttc:0:0':{f:'falamos as palavras juntos, bem devagar, com ajuda de toques e gestos para o movimento da boca',c:'Pratique 5 minutos por dia as palavras combinadas, falando juntos e devagar, de frente para a criança.'},
 'dttc:0:1':{f:'usamos toques no rosto como pista para o movimento de cada som',c:'Use as mesmas pistas que mostramos, apenas nas palavras combinadas. Vá diminuindo a ajuda aos poucos.'},
 'dttc:1:0':{f:'a criança repetiu as palavras logo depois do nosso modelo, muitas vezes, em um jogo de tabuleiro',c:'Jogue o tabuleiro em casa: a cada palavra dita, anda uma casa. Misture as palavras, sem repetir sempre na mesma ordem.'},
 'dttc:2:0':{f:'a criança usou as palavras treinadas sem modelo, em frases',c:'Crie situações para ela usar as palavras sozinha (“o que você quer?”). Não corrija: repita a palavra do jeito certo.'},
 'rest:0:0':{f:'treinamos “palavras malucas” para trabalhar o movimento da fala e a sílaba forte',c:'Treine 5 minutos por dia as palavras malucas, falando sem parar entre os pedaços e com a sílaba forte bem forte.'},
 'rest:1:0':{f:'a criança praticou muitas palavras malucas em ordem misturada',c:'Embaralhe as cartas e pratique 20 palavras por dia. Dê retorno só no final (“acertou 7 de 10!”).'},
 'rest:2:0':{f:'gravamos as palavras para medir o progresso',c:'Continue a prática diária; na próxima sessão comparamos as gravações.'},
 'ndp:0:0':{f:'treinamos sons com figuras-pista (a cobra para o som do “sss”)',c:'Use as figuras-pista para praticar os sons combinados, 10 repetições por dia, como brincadeira.'},
 'ndp:1:0':{f:'treinamos juntar sílabas para formar palavras',c:'Pratique as palavras da folha com o tabuleiro, 5 minutos por dia.'},
 'ndp:2:0':{f:'treinamos palavras mais longas e frases curtas',c:'Use as frases combinadas (“é um…”, “quero…”) nas brincadeiras do dia.'},
 'mit:0:0':{f:'treinamos frases cantadas com batidas na mão para ajudar a fala',c:'Cante as frases treinadas todos os dias, batendo levemente na mão esquerda a cada sílaba.'},
 'mit:1:0':{f:'treinamos responder a perguntas com as frases cantadas',c:'Faça as perguntas combinadas e deixe a pessoa responder com a frase cantada, com calma.'},
 'mit:2:0':{f:'passamos das frases cantadas para a fala com ritmo',c:'Pratique as frases faladas devagar, com ritmo, e use-as nas conversas do dia.'},
 'sfa:0:0':{f:'treinamos lembrar o nome dos objetos descrevendo suas características (para que serve, onde fica, como é)',c:'Quando a pessoa não lembrar uma palavra, ajude perguntando: para que serve? onde fica? como é? Evite dizer a palavra logo de cara.'},
 'sfa:1:0':{f:'a pessoa treinou usar sozinha a estratégia de descrever para lembrar a palavra',c:'Nas conversas, dê tempo para a pessoa usar a estratégia de descrever o objeto antes de ajudar.'},
 'vnest:0:0':{f:'treinamos frases a partir de verbos (quem faz o quê)',c:'Escolha um verbo do dia (cozinhar, lavar) e pergunte: quem faz isso? o que essa pessoa usa?'},
 'vnest:0:1':{f:'treinamos perceber frases certas e frases sem sentido',c:'Brinque de dizer frases engraçadas (“o cachorro dirige o carro”) e peça para corrigir.'},
 'ciat:0:0':{f:'jogamos cartas em que os pedidos eram feitos só falando, sem gestos',c:'Jogue o jogo de pares em casa: pedir a carta só falando. Tenha paciência e não complete a frase pela pessoa.'},
 'ciat:1:0':{f:'treinamos pedidos com frases completas, cores e quantidades',c:'No jogo de cartas, peça frases completas (“você tem a maçã vermelha?”).'},
 'ciat:2:0':{f:'combinamos situações reais para a pessoa usar a fala',c:'Ajude a cumprir as 2 “missões” do dia (pedir na padaria, atender o telefone) e anote como foi.'},
 'script:0:0':{f:'escrevemos juntos um roteiro curto para uma situação importante do dia a dia',c:'Ouça a gravação do roteiro com a pessoa uma vez por dia.'},
 'script:1:0':{f:'praticamos o roteiro até ficar automático',c:'Pratique o roteiro todos os dias: ler junto, ler sozinho e falar sem ler. Depois, ensaiem a situação de verdade.'},
 'recast:0:0':{f:'brincamos narrando as ações com a forma gramatical que estamos ensinando (por exemplo, o passado: “comeu”, “caiu”)',c:'Nas brincadeiras, narre o que aconteceu usando o passado (“o boneco CAIU!”), muitas vezes e com verbos diferentes.'},
 'recast:1:0':{f:'repetimos as frases da criança já corrigidas, sem dizer que ela errou',c:'Quando a criança errar, repita a frase do jeito certo e continue a conversa, sem pedir para ela repetir.'},
 'vocab:0:0':{f:'aprendemos palavras novas trabalhando o significado, o som e o uso',c:'Use as palavras novas da semana em situações reais e peça para explicar o que significam.'},
 'vocab:1:0':{f:'jogamos “adivinha o que é” para lembrar as palavras',c:'Brinque de dar pistas (“é um animal, tem bigode…”) e troquem os papéis.'},
 'dupla:0:0':{f:'investigamos os pontos fortes e as dificuldades de linguagem, leitura e escrita',c:'Observe e anote em quais situações a dificuldade aparece mais (leitura, escrita, conversa).'},
 'dupla:1:0':{f:'trabalhamos a dificuldade usando os interesses e o raciocínio do paciente',c:'Faça a atividade combinada usando um tema de que ele goste, 10 minutos por dia.'},
 'dupla:1:1':{f:'fizemos um desafio de linguagem (argumentar, explicar, apresentar)',c:'Proponha um desafio por semana: explicar um assunto de interesse para a família em 3 minutos.'},
};
/* ===== O que evitar em cada atividade: n = o que não fazer, p = por que atrapalha ===== */
const EVITAR = {
 'esdm:0:0':[{n:'Soltar o balão antes de a criança sinalizar',p:'Ela não aprende que comunicar gera o efeito; a brincadeira vira só estímulo sensorial.'},{n:'Exigir palavra ou contato visual “olha para mim” para continuar',p:'No TEA, a exigência alta gera fuga e quebra o engajamento. Aceite qualquer sinal intencional e suba o nível aos poucos.'},{n:'Ficar atrás ou ao lado da criança',p:'Sem estar de frente, ela não vê seu rosto, e o olhar compartilhado não acontece.'}],
 'esdm:0:1':[{n:'Usar um só brinquedo e tirá-lo da mão da criança para mostrar',p:'Disputa pelo objeto gera frustração e rompe o vínculo; por isso usamos dois conjuntos.'},{n:'Ajudar fisicamente sempre, sem retirar a ajuda',p:'Cria dependência de ajuda: a criança só imita quando é conduzida.'},{n:'Mostrar ações complexas ou várias de uma vez',p:'A imitação não acontece e a criança perde o interesse.'}],
 'esdm:1:0':[{n:'Deixar todas as peças ao alcance',p:'Se ela pega sozinha, não há motivo para pedir.'},{n:'Exigir sempre a palavra, mesmo quando ela ainda só olha e estende a mão',p:'Pular etapas gera frustração e comportamento de birra; o pedido regride.'},{n:'Demorar a entregar depois do pedido',p:'A ligação entre pedir e receber se perde.'}],
 'esdm:1:1':[{n:'Pegar o rosto ou a cabeça da criança para virar em direção ao objeto',p:'É invasivo, muitas crianças com TEA têm hipersensibilidade ao toque e isso não ensina a seguir o olhar.'},{n:'Apontar para longe logo no início',p:'O apontar a distância é mais difícil; comece tocando o objeto de perto.'},{n:'Encher a sala de estímulos',p:'Excesso de estímulos dispersa a atenção, e a surpresa perde o efeito.'}],
 'esdm:2:0':[{n:'Falar frases longas e muitas perguntas (“o que o boneco está fazendo?”)',p:'Sobrecarrega a compreensão e vira teste, não modelo de linguagem.'},{n:'Corrigir o jeito de brincar da criança',p:'Diminui a iniciativa; amplie a partir do que ela faz.'},{n:'Manter a mesma brincadeira até a criança cansar',p:'Sem variação, o interesse cai e a atividade termina em fuga.'}],
 'esdm:2:1':[{n:'Dar muitas orientações de uma vez aos pais',p:'Eles não conseguem aplicar e se sentem culpados; uma estratégia por vez.'},{n:'Só explicar, sem praticar com retorno',p:'Explicação sozinha raramente muda o comportamento na rotina.'},{n:'Propor atividades que não cabem na rotina da família',p:'Não serão feitas; use rotinas que já existem (banho, refeição).'}],
 'esdm:3:0':[{n:'Pedir para a criança repetir a frase (“fala: carro azul”)',p:'Vira exigência e pode reforçar ecolalia sem função; prefira expandir o que ela disse.'},{n:'Expandir com 3 ou mais palavras',p:'O modelo fica longe demais do nível dela; acrescente só uma.'},{n:'Interromper a brincadeira para ensinar palavras',p:'Quebra a motivação, que é o motor da aprendizagem neste método.'}],
 'jasper:0:0':[{n:'Assumir o controle do brinquedo e decidir a brincadeira',p:'No JASPER o engajamento nasce de seguir a criança; tomar o controle reduz o engajamento conjunto.'},{n:'Escolher brinquedos de nível muito acima do brincar atual',p:'A criança não consegue participar e volta a brincar sozinha ou de forma repetitiva.'},{n:'Encher o momento de fala e perguntas',p:'Excesso verbal compete com a atenção; comente com 1–2 palavras.'}],
 'jasper:1:0':[{n:'Introduzir várias mudanças ao mesmo tempo',p:'Crianças com TEA costumam ter rigidez; mudança grande gera recusa ou saída da atividade. Uma variação pequena por vez.'},{n:'Impedir a repetição de forma brusca',p:'A repetição é a base da rotina; use-a e varie aos poucos em vez de cortar.'},{n:'Fazer todos os passos você mesmo',p:'Sem alternar turnos, a criança vira espectadora e não pratica a interação.'}],
 'jasper:2:0':[{n:'Perguntar “o que é isso?” para testar',p:'Atenção compartilhada é para compartilhar, não para responder teste; a pergunta inibe a iniciativa.'},{n:'Ignorar a iniciativa da criança quando ela mostra algo',p:'Se ninguém responde, ela deixa de tentar.'},{n:'Ensinar o apontar antes de haver engajamento estável',p:'Sem engajamento, o gesto fica mecânico e sem função social.'}],
 'pecs:0:0':[{n:'Dar dicas verbais (“me dá a figura”, “o que você quer?”)',p:'A pessoa aprende a esperar a dica e não a iniciar, que é o objetivo da Fase I.'},{n:'Ensinar o nome do item ou pedir para falar nesta fase',p:'Mistura objetivos e atrasa a troca independente.'},{n:'Usar itens de que a pessoa não gosta muito',p:'Sem motivação real, não há troca.'}],
 'pecs:1:0':[{n:'Deixar a pasta guardada ou longe de onde a pessoa está',p:'Ela não terá como se comunicar quando precisar.'},{n:'Aumentar a distância de uma vez',p:'Gera erro e frustração; aumente aos poucos.'},{n:'Trabalhar sempre com a mesma pessoa e no mesmo lugar',p:'A comunicação não generaliza para casa e escola.'}],
 'pecs:2:0':[{n:'Corrigir dizendo “não, é essa” e apontar a figura certa',p:'Vira dica verbal e gestual; use a correção de erro do protocolo.'},{n:'Usar figuras muito parecidas no início',p:'A pessoa erra por não diferenciar, não por não entender o sistema.'},{n:'Pular a checagem de correspondência',p:'Você não sabe se ela escolheu a figura pelo que quer ou por acaso.'}],
 'pecs:3:0':[{n:'Exigir que a pessoa fale a frase antes de entregar o item',p:'Desmotiva e pode extinguir o uso do sistema; a fala é estimulada, não cobrada.'},{n:'Começar a Fase V (responder perguntas) antes de a frase estar firme',p:'A pessoa passa a esperar a pergunta e perde a espontaneidade.'},{n:'Ler a tira rápido demais',p:'Não sobra espaço para ela vocalizar junto.'}],
 'caa:0:0':[{n:'Exigir que a pessoa aponte antes de ter visto muitos modelos',p:'Ninguém aprende uma língua sem antes vê-la sendo usada; a cobrança gera recusa.'},{n:'Mudar os símbolos de lugar',p:'Quebra o aprendizado motor; a pessoa precisa achar a palavra sempre no mesmo ponto.'},{n:'Guardar a prancha quando a sessão acaba',p:'Comunicação é o dia todo; a prancha precisa estar sempre disponível.'}],
 'caa:1:0':[{n:'Ignorar toques “aleatórios” na prancha',p:'Explorar é parte do aprendizado; responder mostra o poder de cada palavra.'},{n:'Ensinar só a pedir',p:'Sem “parar” e “acabou”, a pessoa recusa por comportamento (choro, fuga).'},{n:'Criar tentações frustrantes demais',p:'Esperas longas geram crise; ajuste ao nível da pessoa.'}],
 'caa:2:0':[{n:'Completar a mensagem pela pessoa',p:'Ela deixa de construir a frase.'},{n:'Achar que a CAA vai impedir a fala',p:'A evidência mostra o contrário; retirar a CAA tira a voz da pessoa.'}],
 'hanen:0:0':[{n:'Criticar o responsável diante do vídeo',p:'Gera culpa e resistência; destaque o que ele faz bem antes de ajustar.'},{n:'Explicar sem mostrar no vídeo onde estava a tentativa',p:'O responsável não aprende a perceber os sinais sutis.'}],
 'hanen:1:0':[{n:'Ensinar os pais a fazer perguntas-teste (“que cor é?”)',p:'Perguntas-teste reduzem a iniciativa da criança e transformam a conversa em prova.'},{n:'Frases longas e rápidas',p:'A criança não consegue identificar as palavras.'}],
 'hanen:2:0':[{n:'Ler o texto do livro do início ao fim sem pausas',p:'A criança fica passiva; leitura compartilhada é conversa sobre o livro.'},{n:'Trocar de livro toda hora',p:'Sem repetição, a criança não consegue completar as frases.'}],
 'emt:0:0':[{n:'Antecipar o que a criança quer (dar antes que ela peça)',p:'Elimina a necessidade de comunicar.'},{n:'Deixar a criança frustrada por muito tempo',p:'A espera precisa ser curta; frustração alta gera crise e piora a relação.'}],
 'emt:1:0':[{n:'Dar o modelo de imediato, sem esperar',p:'A criança não tem chance de tentar sozinha e passa a depender do modelo.'},{n:'Reter o item depois de uma resposta adequada',p:'A entrega imediata é o que ensina que a palavra funciona.'},{n:'Escolher alvos muito acima do nível',p:'A criança só responde ao modelo e não avança.'}],
 'emt:2:0':[{n:'Pedir que os pais façam “sessões” formais em casa',p:'O método funciona dentro das rotinas naturais; sessões formais viram obrigação e são abandonadas.'},{n:'Não dar retorno sobre a aplicação',p:'Erros se repetem sem que os pais percebam.'}],
 'pragmatica:0:0':[{n:'Treinar com o objetivo de deixar a pessoa “normal”',p:'O objetivo é participação e bem-estar; forçar mascaramento aumenta ansiedade e exaustão em pessoas com TEA.'},{n:'Ensinar a regra sem explicar o porquê',p:'Sem sentido, a habilidade não é usada fora da sessão.'},{n:'Expor a pessoa a situações difíceis sem ensaio',p:'Gera ansiedade e reforça a evitação.'}],
 'pragmatica:1:0':[{n:'Proibir o tema de interesse da pessoa',p:'É o principal motor de motivação; use-o como ponte para outros temas.'},{n:'Corrigir em público ou na frente de colegas',p:'Expõe e pode gerar vergonha e recusa.'}],
 'pragmatica:2:0':[{n:'Ensinar emoções só com desenhos isolados',p:'Sem contexto, a pessoa não reconhece a emoção na vida real; use situações e vídeos.'},{n:'Explicar a ironia como “mentira”',p:'Confunde; explique a intenção de quem fala.'}],
 'ta:0:0':[{n:'Deixar a pessoa ver sua boca',p:'Ela usa a leitura labial e o sistema auditivo não é treinado.'},{n:'Começar pelos pares mínimos mais difíceis',p:'Muitos erros desmotivam; vá do fácil ao difícil.'}],
 'ta:1:0':[{n:'Aumentar o ruído quando a pessoa ainda erra muito',p:'Fora da faixa de 70–80% de acerto o treino gera frustração e não aprendizagem.'},{n:'Fazer blocos longos sem pausa em crianças com TDAH',p:'A atenção cai e os erros passam a ser de atenção, não de audição.'}],
 'ta:1:1':[{n:'Escolher palavras que a criança não conhece',p:'Ela não consegue completar por falta de vocabulário, e não por dificuldade auditiva.'}],
 'ta:2:0':[{n:'Aumentar vários parâmetros ao mesmo tempo (mais itens e sons mais parecidos)',p:'Você não sabe o que causou o erro e a criança se frustra.'},{n:'Deixar a criança ver o instrumento',p:'Ela usa a visão em vez da audição.'}],
 'cf:0:0':[{n:'Confundir rima com palavras que começam igual',p:'A criança aprende o conceito errado.'},{n:'Ficar meses só em rima quando a criança não progride',p:'Pode seguir para sílabas; a rima não é pré-requisito absoluto.'}],
 'cf:1:0':[{n:'Usar palavras escritas antes de a criança dominar a sílaba oral',p:'Mistura duas dificuldades.'},{n:'Separar sílabas de forma artificial (“ca… … …sa”)',p:'Distorce a palavra; fale natural e bata a palma junto.'}],
 'cf:2:0':[{n:'Ensinar o nome da letra (“eme”) em vez do som (/mmm/)',p:'O nome atrapalha juntar os sons para ler.'},{n:'Trabalhar fonemas sem ligar às letras',p:'O efeito sobre a leitura é bem menor.'}],
 'narrativa:0:0':[{n:'Ler a história inteira e só perguntar no final',p:'Exige muita memória, principalmente no TDL e no TDAH; pare a cada parte.'},{n:'Usar histórias sem um problema claro',p:'Sem problema, não há estrutura para ensinar.'}],
 'narrativa:1:0':[{n:'Corrigir a gramática interrompendo o reconto',p:'A criança perde o fio e desiste; reformule depois que ela terminar a frase.'},{n:'Retirar as figuras antes da hora',p:'Sem apoio, a narrativa desorganiza e a criança se frustra.'}],
 'narrativa:2:0':[{n:'Completar a história pela criança',p:'Ela não pratica a organização.'},{n:'Escolher um tema que ela não quer contar',p:'A motivação cai e a fala fica curta.'}],
 'fe:0:0':[{n:'Pular direto para a fala “na cabeça”',p:'A autoinstrução precisa ser externa antes de ser internalizada.'},{n:'Elogiar só o resultado',p:'O objetivo é o processo (parar e planejar); elogie o uso da estratégia.'}],
 'fe:1:0':[{n:'Dar instruções longas sem verificar se a criança ouviu',p:'Em TDAH, a falha pode ser de atenção inicial e não de memória.'},{n:'Repetir a instrução várias vezes por ela',p:'Ela não aprende a estratégia de repetir para si.'}],
 'fe:1:1':[{n:'Usar a diferença de tempo para repreender',p:'Gera ansiedade; a ideia é calibrar a percepção.'}],
 'fe:2:0':[{n:'Fazer o plano pela criança',p:'Ela não desenvolve a habilidade de planejar.'}],
 'mo:0:0':[{n:'Tocar a boca sem avisar ou de surpresa',p:'Aumenta a defesa oral e a recusa alimentar.'},{n:'Fazer estimulação com a criança mal posicionada',p:'Sem estabilidade do tronco, a musculatura oral não responde.'}],
 'mo:1:0':[{n:'Fazer exercícios isolados e repetitivos sem brincadeira',p:'A criança recusa e não há transferência para a fala e a alimentação.'},{n:'Insistir quando há engasgo ou tosse',p:'Pode haver risco de aspiração; pare e avalie.'}],
 'mo:2:0':[{n:'Manter só alimentos pastosos por medo',p:'Sem desafio de mastigação, a musculatura não se desenvolve.'},{n:'Avançar de consistência com engasgos frequentes',p:'Risco de aspiração; encaminhe para avaliação de deglutição.'},{n:'Usar mamadeira por tempo prolongado',p:'Reforça o padrão de língua anteriorizada típico da hipotonia.'}],
 'sinaiscaa:0:0':[{n:'Fazer o sinal sem falar a palavra',p:'O objetivo é apoiar a fala; o sinal sozinho não estimula a palavra.'},{n:'Cada pessoa da família usar um sinal diferente',p:'A criança não consegue aprender um sistema inconsistente.'}],
 'sinaiscaa:1:0':[{n:'Exigir o sinal perfeito',p:'A hipotonia dificulta a forma da mão; aceite aproximações.'}],
 'leitura:0:0':[{n:'Usar muitas palavras de uma vez',p:'Gera erro e desinteresse; comece com 4 a 6.'},{n:'Corrigir dizendo “errou”',p:'A abordagem é sem erro; dê apoio antes que ela erre.'}],
 'leitura:1:0':[{n:'Escolher palavras visualmente muito parecidas no início',p:'A criança confunde e perde a confiança.'}],
 'dttc:0:0':[{n:'Treinar sons isolados (só o /p/, só o /m/)',p:'Na apraxia, o problema é a transição entre os movimentos; som isolado não transfere para a palavra.'},{n:'Fazer poucas repetições por sessão',p:'Aprendizagem motora precisa de muitas tentativas (50 a 100 ou mais).'},{n:'Usar exercícios oromotores sem fala (soprar, estalar a língua)',p:'Não melhoram a fala na apraxia; o treino precisa ser com fala.'}],
 'dttc:0:1':[{n:'Usar pistas táteis diferentes para o mesmo som',p:'A criança não associa a pista ao movimento.'},{n:'Manter o toque para sempre',p:'Gera dependência; retire aos poucos.'}],
 'dttc:1:0':[{n:'Dar feedback em todas as tentativas',p:'Na aprendizagem motora, feedback constante melhora a sessão mas piora a retenção.'},{n:'Treinar os alvos sempre na mesma ordem (em bloco)',p:'A prática aleatória favorece a aprendizagem duradoura.'}],
 'dttc:2:0':[{n:'Considerar o alvo aprendido só pelo desempenho na sessão',p:'Faça sondagens sem apoio; o que vale é a retenção.'},{n:'Sessões só 1 vez por semana',p:'Em apraxia, frequência baixa mostra pouco efeito.'}],
 'rest:0:0':[{n:'Pular a pré-prática',p:'A criança não entende as três metas e pratica o erro.'},{n:'Usar palavras reais no lugar das pseudopalavras',p:'Palavras reais têm erros já automatizados, que se repetem.'}],
 'rest:1:0':[{n:'Dar feedback imediato e detalhado na fase de prática',p:'Melhora o desempenho na hora, mas reduz a aprendizagem duradoura.'},{n:'Fazer menos de 50 tentativas',p:'A dose é parte do efeito do método.'}],
 'rest:2:0':[{n:'Dar apoio ou feedback na sondagem',p:'A medida deixa de mostrar o que foi aprendido.'},{n:'Desistir porque a sondagem caiu no início',p:'É comum: desempenho e aprendizagem são diferentes. Avalie o bloco completo.'}],
 'ndp:0:0':[{n:'Pular camadas (ir para palavras sem ter os sons estáveis)',p:'A construção “de baixo para cima” é a lógica do método; pular gera erro e frustração.'}],
 'ndp:1:0':[{n:'Abandonar os alvos antigos',p:'Sem revisão, o que foi aprendido se perde.'}],
 'ndp:2:0':[{n:'Cobrar inteligibilidade perfeita na fala espontânea',p:'A frase-veículo é o passo intermediário; a fala livre vem depois.'}],
 'mit:0:0':[{n:'Usar o método em afasia com compreensão muito ruim',p:'A MIT exige compreensão razoável; sem ela, o paciente não acompanha os passos.'},{n:'Cantar melodias de músicas conhecidas',p:'A MIT usa 2 tons que imitam a entonação da fala; música conhecida não transfere para a fala.'},{n:'Bater a mão direita',p:'A batida é na mão esquerda para recrutar o hemisfério direito.'}],
 'mit:1:0':[{n:'Retirar a batida antes de a frase estar segura',p:'O paciente volta a travar.'}],
 'mit:2:0':[{n:'Manter o paciente cantando para sempre',p:'O objetivo é a fala com prosódia normal.'}],
 'sfa:0:0':[{n:'Dar o nome logo que o paciente trava',p:'Ele não ativa a rede de significados, que é o que o método treina.'},{n:'Pular a grade quando ele acerta o nome',p:'A grade completa reforça a rede e ajuda na generalização.'},{n:'Escolher objetos que ele não usa no dia a dia',p:'O ganho não aparece na vida real.'}],
 'sfa:1:0':[{n:'Treinar só com figuras isoladas',p:'Sem discurso, a estratégia não chega à conversa.'}],
 'vnest:0:0':[{n:'Dar os pares prontos',p:'O paciente precisa gerar as palavras para fortalecer a rede.'},{n:'Escolher verbos raros',p:'Treine verbos funcionais e frequentes.'}],
 'vnest:0:1':[{n:'Pular o julgamento de frases',p:'É a etapa que aprofunda o processamento do significado.'}],
 'ciat:0:0':[{n:'Permitir gestos ou apontar “só desta vez”',p:'Quebra a restrição, que é parte central do método contra o não uso aprendido.'},{n:'Aplicar em baixa intensidade (1 hora por semana)',p:'O efeito depende da prática concentrada.'},{n:'Ser rígido a ponto de humilhar',p:'A restrição deve ser gentil; frustração extrema faz o paciente abandonar.'}],
 'ciat:1:0':[{n:'Aumentar a exigência rápido demais',p:'A modelagem precisa acompanhar a capacidade, senão o paciente trava.'}],
 'ciat:2:0':[{n:'Encerrar a terapia sem a fase de transferência',p:'Os ganhos ficam restritos à clínica.'}],
 'script:0:0':[{n:'Escrever o roteiro com as suas palavras',p:'O paciente memoriza melhor e usa mais quando o texto é dele.'},{n:'Roteiros longos',p:'Dificultam a automatização; 3 a 6 frases curtas.'}],
 'script:1:0':[{n:'Treinar partes soltas em vez do roteiro inteiro',p:'O método usa a prática da tarefa inteira para automatizar.'},{n:'Ficar só na leitura',p:'O objetivo é falar sem o texto.'}],
 'recast:0:0':[{n:'Usar sempre o mesmo verbo ou palavra',p:'No TDL, a criança precisa de variedade para extrair a regra gramatical.'},{n:'Trabalhar muitos alvos ao mesmo tempo',p:'Diluir a dose reduz o efeito; 1 ou 2 alvos.'}],
 'recast:1:0':[{n:'Dizer “não é assim” ou pedir para repetir',p:'Interrompe a conversa e diminui a vontade de falar.'},{n:'Reformular pouco (taxa baixa)',p:'Abaixo de cerca de 1,5 por minuto o efeito cai muito.'}],
 'vocab:0:0':[{n:'Ensinar só a definição',p:'Sem forma sonora e uso, a palavra não é lembrada.'},{n:'Muitas palavras por semana',p:'Pouca profundidade; 4 a 6 por semana.'}],
 'vocab:1:0':[{n:'Dar a palavra logo que a criança trava',p:'Ela não treina a recuperação, que é o que fixa a palavra.'}],
 'dupla:0:0':[{n:'Concluir que não há dificuldade porque o desempenho geral é alto',p:'A alta habilidade pode mascarar dislexia, TDAH ou TEA.'},{n:'Avaliar sozinha, sem a equipe',p:'A dupla excepcionalidade exige olhar multiprofissional.'}],
 'dupla:1:0':[{n:'Usar materiais infantilizados ou repetitivos',p:'Gera tédio e recusa; use temas do interesse e ritmo mais rápido.'},{n:'Ignorar a frustração e o perfeccionismo',p:'Podem levar a evitar as tarefas; trabalhe junto com a psicologia.'}],
 'dupla:1:1':[{n:'Usar o enriquecimento como prêmio por acertar a parte difícil',p:'Desvaloriza o trabalho na dificuldade e aumenta a pressão.'}],
};

function evitarHTML(mid, ak, aberto=true){
  const ev = EVITAR[ak]; if(!ev||!ev.length) return '';
  const cs = condsOf(mid).map(c=>c.nome).join(', ');
  return `<details class="more evit" ${aberto?'open':''}><summary><span class="row" style="gap:8px;flex-wrap:nowrap"><span class="evx">!</span>O que evitar (e por que atrapalha)</span> ${I.chev}</summary>
   <div class="stack" style="gap:10px">
    ${cs?`<span class="sm mut">Indicação clínica deste método: <b style="color:var(--ink)">${esc(cs)}</b>. Feito do jeito errado, pode atrasar ou até piorar o desenvolvimento.</span>`:''}
    ${ev.map(e=>`<div class="evi"><b><span class="evn">Não faça:</span> ${esc(e.n)}</b><span>${esc(e.p)}</span></div>`).join('')}
   </div></details>`;
}
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
/* ===== Troca manual de método do paciente ===== */
function openTroca(pid, para){
  const p = patient(pid); if(!p) return;
  const c = condById(p.quadro); const doQuadro = c ? c.metodos : [];
  const outros = Object.keys(M).filter(x=>!doQuadro.includes(x));
  const opt = x => `<option value="${x}" ${x===(para||'')?'selected':''} ${x===p.metodo?'disabled':''}>${esc(M[x].sigla)}${M[x].nome!==M[x].sigla?" · "+esc(M[x].nome):""}${x===p.metodo?' (atual)':''}</option>`;
  openPane(`<div class="pane-h"><h3>Trocar método de ${esc(p.nome.split(' ')[0])}</h3><button class="ib" type="button" data-act="close" aria-label="Fechar">${I.close}</button></div>
  <div class="pane-b stack" style="gap:12px">
    <p class="sm mut">Método atual: <b style="color:var(--ink)">${p.metodo&&M[p.metodo]?esc(M[p.metodo].nome):'nenhum'}</b>. Os atendimentos já registrados continuam no prontuário.</p>
    <label class="f">Novo método<select id="tr-met"><option value="">Escolha…</option>
      ${doQuadro.length?`<optgroup label="Indicados para ${esc(c.nome)}">${doQuadro.map(opt).join('')}</optgroup>`:''}
      <optgroup label="Outros métodos">${outros.map(opt).join('')}</optgroup></select></label>
    <label class="f">Começar na etapa<select id="tr-blk"></select></label>
    <label class="f">Motivo da troca<textarea id="tr-mot" placeholder="Ex.: sem evolução após 8 atendimentos e plano B; perfil indica comunicação alternativa…"></textarea></label>
    <p class="sm" id="tr-msg" hidden style="color:var(--bad);font-weight:700"></p>
  </div>
  <div class="pane-f"><button type="button" class="btn" data-act="trocaok" data-id="${p.id}">Confirmar troca</button></div>`);
  const fill = ()=>{ const m=M[$('#tr-met').value]; $('#tr-blk').innerHTML = m ? m.sess.map((s,i)=>`<option value="${i}">Etapa ${i+1} · ${esc(s.t)}</option>`).join('') : '<option value="0">—</option>'; };
  $('#tr-met').addEventListener('change', fill); fill();
}
async function confirmaTroca(pid){
  const p = patient(pid); const para = $('#tr-met').value, blk = +$('#tr-blk').value || 0, mot = $('#tr-mot').value.trim();
  const msg = $('#tr-msg'); if(!para){ msg.hidden=false; msg.textContent='Escolha o novo método.'; return; }
  if(!mot){ msg.hidden=false; msg.textContent='Registre o motivo da troca (fica no prontuário).'; return; }
  const trocas = [...(p.trocas||[]), {de:p.metodo||'', para, blk, motivo:mot, data:new Date().toISOString()}];
  const et = {...(p.etapas||{})}; for(let i=0;i<blk;i++) et[para+':'+i] = et[para+':'+i] || todayISO();
  await Store.savePatient({...p, metodo:para, trocas, etapas:et});
  closePane(); toast('Método alterado'); S.ctxPid=p.id; ls.set('ctxPid',p.id); location.hash='m-'+para; render();
}
function trocasHTML(p){
  const l = p.trocas||[]; if(!l.length) return '';
  return `<div class="card stack" style="gap:8px"><b>Histórico de métodos</b>${[...l].reverse().map(t=>`<div class="sm" style="border-top:1px solid var(--line);padding-top:8px"><b>${fmtDate(t.data)}</b> · ${esc(M[t.de]?.sigla||'—')} → ${esc(M[t.para]?.sigla||t.para)}${t.blk?` (a partir da etapa ${t.blk+1})`:''}<p class="mut" style="margin-top:2px">${esc(t.motivo)}</p></div>`).join('')}</div>`;
}
/* ===== Versão web: login (Neon Auth) e dados (Neon Data API) ===== */
const NeonStore = (window.NeonJS && window.FT_NEON_URL) ? (()=>{
  const client = window.NeonJS.createClient(window.FT_NEON_URL);
  const T = { p:'pacientes', s:'sessoes', f:'perfis' };
  const err = (r, msg) => { if(r && r.error){ console.error(r.error); throw new Error(msg || r.error.message); } return r; };
  const NS = {
    client, user:null,
    async init(){
      S.mode = 'neon';
      let ses = null;
      try{ const r = await client.auth.getSession(); ses = r && r.data && r.data.session ? r.data : null; }catch(e){ console.error(e); }
      if(!ses){ S.needLogin = true; S.ready = true; render(); return; }
      NS.user = ses.user; S.needLogin = false; S.uid = ses.user.id;
      try{ await NS.load(); }catch(e){ console.error(e); toast('Não foi possível carregar os dados. Verifique a internet.'); }
      S.ready = true; render();
    },
    async load(){
      const [p, s, f] = await Promise.all([
        client.from(T.p).select('id,dados'), client.from(T.s).select('id,dados'), client.from(T.f).select('dados')]);
      err(p); err(s); err(f);
      S.patients = (p.data||[]).map(r=>({...r.dados, id:r.id}));
      S.sessions = (s.data||[]).map(r=>({...r.dados, id:r.id}));
      S.profile = {nome:(NS.user&&NS.user.name)||'', ...((f.data||[])[0]?.dados||{})};
    },
    async signIn(email, password){ const r = await client.auth.signIn.email({email, password}); if(r.error) throw r.error; return NS.init(); },
    async signUp(nome, email, password){ const r = await client.auth.signUp.email({email, password, name:nome}); if(r.error) throw r.error; await NS.init(); if(S.uid && !S.profile.nome) await Store.saveProfile({nome}); },
    async signOut(){ try{ await client.auth.signOut(); }catch(e){} S.patients=[]; S.sessions=[]; S.profile={nome:''}; S.uid=null; S.needLogin=true; S.loginMode=''; location.hash=''; render(); },
    async savePatient(p){
      if(!p.id) p.id = uid('p'); const {id, ...dados} = p;
      err(await client.from(T.p).upsert({id, dados, atualizado_em:new Date().toISOString()}), 'Não foi possível salvar o paciente.');
      const i=S.patients.findIndex(x=>x.id===id); if(i>=0) S.patients[i]=p; else S.patients.push(p); render(); return id;
    },
    async deletePatient(id){
      err(await client.from(T.s).delete().eq('paciente_id', id)); err(await client.from(T.p).delete().eq('id', id));
      S.patients=S.patients.filter(p=>p.id!==id); S.sessions=S.sessions.filter(s=>s.pid!==id); render();
    },
    async saveSession(s){
      if(!s.id) s.id = uid('s'); const {id, ...dados} = s;
      err(await client.from(T.s).upsert({id, paciente_id: s.pid, dados}), 'Não foi possível salvar o atendimento.');
      const i=S.sessions.findIndex(x=>x.id===id); if(i>=0) S.sessions[i]=s; else S.sessions.push(s); render(); return id;
    },
    async saveProfile(p){
      S.profile = {...S.profile, ...p};
      err(await client.from(T.f).upsert({user_id:S.uid, dados:S.profile, atualizado_em:new Date().toISOString()}), 'Não foi possível salvar o perfil.');
      render();
    }
  };
  return NS;
})() : null;

function vLogin(){
  const cad = S.loginMode==='cad';
  return `<div class="pad stack" style="gap:18px;max-width:440px;margin:0 auto;padding-top:32px">
    <div class="stack" style="gap:6px;align-items:center;text-align:center">
      <span class="mic" style="background:var(--p);width:64px;height:64px"><svg viewBox="0 0 64 64">${(PIC.olhar||'').replace(/var\(--ink\)/g,'#fff').replace(/var\(--tint\)/g,'rgba(255,255,255,.25)')}</svg></span>
      <h1 style="font-size:26px">FonoTrilha</h1><p class="mut">Guia clínico e prontuário para fonoaudiólogos</p></div>
    <div class="card stack" style="gap:12px">
      <h3>${cad?'Criar conta':'Entrar'}</h3>
      ${cad?`<label class="f">Seu nome<input id="lg-nome" autocomplete="name" placeholder="Ex.: Ana Souza"></label>`:''}
      <label class="f">E-mail<input id="lg-email" type="email" autocomplete="email" inputmode="email" placeholder="voce@email.com"></label>
      <label class="f">Senha<input id="lg-senha" type="password" autocomplete="${cad?'new-password':'current-password'}" placeholder="${cad?'Mínimo de 8 caracteres':''}"></label>
      <p class="sm" id="lg-msg" hidden style="color:var(--bad);font-weight:700"></p>
      <button type="button" class="btn" data-act="${cad?'signup':'signin'}">${cad?'Criar conta':'Entrar'} ${I.arrow}</button>
      <button type="button" class="tlink" data-act="lgmode" style="align-self:center">${cad?'Já tenho conta · Entrar':'Não tenho conta · Criar conta'}</button>
    </div>
    <p class="sm mut" style="text-align:center">Os dados dos pacientes ficam na sua conta e só você vê.</p>
  </div>`;
}
async function doLogin(kind){
  const msg=$('#lg-msg'); const email=($('#lg-email').value||'').trim(), senha=$('#lg-senha').value||'', nome=(($('#lg-nome')||{}).value||'').trim();
  const show = t => { msg.hidden=false; msg.textContent=t; };
  if(!email || !senha) return show('Preencha e-mail e senha.');
  if(kind==='signup' && !nome) return show('Informe seu nome.');
  if(kind==='signup' && senha.length<8) return show('A senha precisa ter pelo menos 8 caracteres.');
  const b = document.querySelector('[data-act="'+kind+'"]'); if(b) b.disabled=true; show('Aguarde…'); msg.style.color='var(--mut)';
  try{ if(kind==='signin') await NeonStore.signIn(email, senha); else await NeonStore.signUp(nome, email, senha); toast(kind==='signin'?'Bem-vinda de volta!':'Conta criada'); }
  catch(e){ msg.style.color='var(--bad)'; const m=(e&&e.message||'').toLowerCase();
    show(/invalid|incorrect|credential|password/.test(m) && kind==='signin' ? 'E-mail ou senha incorretos.' : /exist|already/.test(m) ? 'Já existe uma conta com este e-mail. Entre com ela.' : 'Não foi possível concluir. '+(e&&e.message||'Tente de novo.'));
    if(b) b.disabled=false; }
}
document.addEventListener('keydown', e=>{ if(e.key==='Enter' && S.needLogin && e.target.closest && e.target.closest('#lg-senha,#lg-email,#lg-nome')){ e.preventDefault(); doLogin(S.loginMode==='cad'?'signup':'signin'); } });
/* ===== Orientação para a família ===== */
function famText(sess){
  const p = patient(sess.pid); const m = M[sess.mid]; const blk = m.sess[sess.blk];
  const keys = blk.at.map((a,j)=>actKey(sess.mid,sess.blk,j));
  const nomeP = p ? p.nome.split(' ')[0] : 'o paciente';
  const como = sess.pct>=80 ? `${nomeP} foi muito bem e atingiu o objetivo desta etapa.` : sess.pct>=50 ? `${nomeP} está aprendendo e vamos continuar praticando nas próximas sessões.` : `${nomeP} ainda está no começo desta etapa; vamos ajustar a atividade para facilitar.`;
  const plays = [...new Set(keys.map(playOfKey).filter(Boolean))].map(k=>PLAY[k].t);
  const obs = (sess.acts||[]).map(a=>a.obs).filter(Boolean);
  return `Olá${p&&p.resp?', '+p.resp.split(' ')[0]:''}! ${S.profile.nome?'Aqui é '+S.profile.nome+'. ':''}Resumo da sessão de ${nomeP} (${fmtDate(sess.data||new Date().toISOString())}):

O que fizemos:
${keys.map(k=>FAM[k]?'• '+FAM[k].f.charAt(0).toUpperCase()+FAM[k].f.slice(1)+'.':'').filter(Boolean).join('\n')}

Como foi: ${como}${obs.length?'\nObservação: '+obs.join(' '):''}

Para fazer em casa (5 a 10 minutos por dia):
${keys.map(k=>FAM[k]?'• '+FAM[k].c:'').filter(Boolean).join('\n')}${plays.length?'\n\nVou enviar também a brincadeira para imprimir: '+plays.join(', ')+'.':''}

Qualquer dúvida, estou à disposição.`;
}
function openFam(sess){
  const p = patient(sess.pid); const tel = (p&&p.tel||'').replace(/\D/g,'');
  const txt = famText(sess);
  openPane(`<div class="pane-h"><h3>Orientação para a família</h3><button class="ib" type="button" data-act="close" aria-label="Fechar">${I.close}</button></div>
  <div class="pane-b"><p class="sm mut">Texto pronto em linguagem simples. Você pode editar antes de enviar.</p><textarea id="famtxt" style="min-height:300px;font-size:14px;line-height:1.5">${esc(txt)}</textarea>
  ${tel?`<p class="sm mut">WhatsApp do responsável: <span style="user-select:all;font-weight:700;color:var(--ink)">${esc(p.tel)}</span></p>`:`<p class="sm mut">Cadastre o telefone do responsável no perfil do paciente para abrir direto no WhatsApp.</p>`}
  <p class="sm" id="fammsg" hidden></p></div>
  <div class="pane-f"><button type="button" class="btn ghost" data-act="famcopy">Copiar texto</button>${tel?`<a class="btn" id="famwa" target="_blank" rel="noopener" href="https://wa.me/${tel.length<=11?'55'+tel:tel}?text=${encodeURIComponent(txt)}">Abrir no WhatsApp</a>`:''}</div>`);
}

/* ===== Modo capacitação ===== */
const capOf = mid => ((S.profile.cap||{})[mid]) || { lidos:[], best:null, tent:0 };
const CAPSEC = ['Visão geral','A lógica do método','Como medir o progresso','Quando não funciona'];
function capStatus(mid){ const c=capOf(mid); if(c.best!=null && c.best>=80) return ['Concluído','ev-forte']; if(c.lidos.length||c.tent) return ['Estudando','ev-moderada']; return ['Não iniciado','tagp']; }
function vCapList(){
  const f = S.capf || 'todos'; const ids = Object.keys(M).filter(id=>f==='todos'||condById(f).metodos.includes(id));
  const done = Object.keys(M).filter(id=>(capOf(id).best||0)>=80).length;
  return `${hdr('Capacitação','#')}<div class="pad stack">
    <div class="soft stack" style="gap:8px"><b style="font-size:16px;color:var(--pd)">Estude cada método e teste o que aprendeu</b><p class="sm">Cada módulo tem 4 partes de leitura e um quiz de 7 perguntas. O método é concluído com 80% de acerto no quiz.</p>
      <div class="row" style="justify-content:space-between"><span class="sm" style="font-weight:700">${done} de ${Object.keys(M).length} métodos concluídos</span></div><div class="bar"><i style="width:${Math.round(done/Object.keys(M).length*100)}%"></i></div></div>
    <div class="row" role="group" aria-label="Filtrar por quadro"><button type="button" class="tagp" data-capf="todos" style="cursor:pointer;${f==='todos'?'background:var(--p);color:#fff;border-color:var(--p)':'background:#fff'}">Todos</button>${CONDS.map(c=>`<button type="button" class="tagp" data-capf="${c.id}" style="cursor:pointer;${f===c.id?'background:var(--p);color:#fff;border-color:var(--p)':'background:#fff'}">${c.nome}</button>`).join('')}</div>
    ${ids.map(id=>{ const m=M[id]; const c=capOf(id); const [st,cl]=capStatus(id); return `<a class="li" href="#cap-${id}">${micon(id)}<span class="tx"><b>${esc(m.nome)}</b><span class="row" style="justify-content:space-between"><span>${c.lidos.length}/4 lidos${c.best!=null?' · quiz '+c.best+'%':''}</span><span class="pill ${cl}" style="${cl==='tagp'?'border:1px solid var(--line);color:var(--mut)':''}">${st}</span></span></span>${I.chev}</a>`; }).join('')}
  </div>`;
}
function vCap(id){
  const m=M[id]; const c=capOf(id); const open = S.capOpen ?? (c.lidos.length<4 ? [0,1,2,3].find(i=>!c.lidos.includes(i)) : -1);
  const sec = [
    `<p>${m.resumo}</p><div class="grid2"><div class="kpi"><span>Idade</span><b style="font-size:15px">${m.idade}</b></div><div class="kpi"><span>Evidência</span><b style="font-size:15px">${EVL[m.ev]}</b></div></div><p class="sm"><b>Indicado para:</b> ${condsOf(id).map(x=>x.longo).join('; ')}.</p><h3>Quando indicar</h3><div class="steps">${m.quando.map(x=>`<div>${I.ok}<span>${x}</span></div>`).join('')}</div><div class="card"><b>Intensidade</b><p class="sm" style="margin-top:4px">${m.dose}</p></div><div class="alert i"><span class="sm">${m.cert}</span></div>`,
    `<h3>Princípios</h3><div class="steps">${m.principios.map((x,i)=>`<div><span class="num">${i+1}</span><span>${x}</span></div>`).join('')}</div><h3>Por que cada atividade funciona</h3>${m.sess.map((s,i)=>`<div class="card stack" style="gap:8px"><span class="lbl">Etapa ${i+1} · ${esc(blkLabel(s))}</span><b>${esc(s.t)}</b><p class="sm mut">Objetivo: ${s.obj}</p>${s.at.map((a,j)=>{ const lg=LOG[actKey(id,i,j)]||{}; return `<div style="border-top:1px solid var(--line);padding-top:8px"><b class="sm">${esc(a.t)}</b><p class="sm" style="margin-top:2px">${esc(lg.l||'')}</p><p class="sm mut" style="margin-top:4px"><b>Esperamos:</b> ${esc(lg.e||'')}</p></div>`; }).join('')}</div>`).join('')}`,
    `<h3>Antes de começar: linha de base</h3><div class="steps">${m.inicio.map(x=>`<div>${I.ok}<span>${x}</span></div>`).join('')}</div><div class="card"><b>Critério para avançar</b><p class="sm" style="margin-top:4px">${m.avancar}</p></div><h3>Critérios por atividade</h3>${m.sess.flatMap((s,i)=>s.at.map(a=>`<div class="crit sm"><b style="color:var(--ok)">${esc(a.t)}:</b> ${a.ok}</div>`)).join('')}<h3>Critérios de alta</h3><div class="steps">${m.alta.map(x=>`<div>${I.ok}<span>${x}</span></div>`).join('')}</div>`,
    `${m.seNao.map(x=>`<div class="card stack" style="gap:4px;border-left:4px solid var(--bad)"><b>${esc(x.s)}</b><span class="sm mut">Causa provável: ${esc(x.c)}</span><span class="sm"><b style="color:var(--p)">O que fazer:</b> ${esc(x.a)}</span></div>`).join('')}<div class="alert i"><span class="sm"><b>Quando trocar de método:</b> ${esc(m.trocar)}</span></div><h3>O que evitar em cada atividade</h3><p class="sm mut">Erros de aplicação que atrapalham o desenvolvimento em ${esc(condsOf(id).map(x=>x.nome).join(', '))}.</p>${m.sess.flatMap((s,i)=>s.at.map((a,j)=>{ const ev=EVITAR[actKey(id,i,j)]||[]; return ev.length?`<div class="card stack" style="gap:8px"><b>${esc(a.t)}</b>${ev.map(e=>`<div class="evi"><b><span class="evn">Não faça:</span> ${esc(e.n)}</b><span>${esc(e.p)}</span></div>`).join('')}</div>`:''; })).join('')}`,
  ];
  return `${hdr('Capacitação','#capacitacao')}<div class="pad row" style="gap:14px;align-items:flex-start">${micon(id,54)}<div style="flex:1"><h2>${esc(m.nome)}</h2><p class="sm mut">${c.lidos.length}/4 partes lidas${c.best!=null?` · melhor nota no quiz: ${c.best}%`:''}</p></div></div>
  <div class="pad stack sec" style="gap:10px">
    ${CAPSEC.map((t,i)=>`<div class="card" style="padding:0;overflow:hidden"><button type="button" class="row" data-capopen="${i}" aria-expanded="${open===i}" style="width:100%;border:0;background:${open===i?'var(--pl)':'#fff'};padding:14px 16px;cursor:pointer;flex-wrap:nowrap;text-align:left"><span class="dot ${c.lidos.includes(i)?'ok':''}" style="width:26px;height:26px">${c.lidos.includes(i)?I.check:`<b class="sm" style="color:var(--mut)">${i+1}</b>`}</span><b style="flex:1">${t}</b>${I.chev}</button>
      ${open===i?`<div class="stack" style="padding:4px 16px 16px;gap:12px">${sec[i]}<button type="button" class="btn ${c.lidos.includes(i)?'ghost':''} sm" data-caplido="${i}" data-id="${id}">${c.lidos.includes(i)?'Lido ✓':'Marcar como lido e continuar'}</button></div>`:''}</div>`).join('')}
    <div class="card stack" style="gap:8px;border-color:var(--p)"><b>Quiz · 7 perguntas</b><p class="sm mut">Perguntas sobre indicação, princípios, lógica das atividades, critérios, plano B e o que evitar. Conclui com 80% ou mais.</p></div>
  </div>
  <div class="cta pad"><a class="btn" href="#quiz-${id}" data-act="quizstart" data-id="${id}">${c.tent?'Refazer o quiz':'Fazer o quiz'} ${I.arrow}</a></div>`;
}
function rng(seed){ let s=seed>>>0||1; return ()=>{ s^=s<<13; s>>>=0; s^=s>>17; s^=s<<5; s>>>=0; return s/4294967296; }; }
function shuffle(a,r){ a=[...a]; for(let i=a.length-1;i>0;i--){ const j=Math.floor(r()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; }
function buildQuiz(id, seed){
  const r=rng(seed), m=M[id], others=Object.keys(M).filter(o=>o!==id && !condsOf(o).some(c=>condsOf(id).some(x=>x.id===c.id)));
  const pool = others.length>=3 ? others : Object.keys(M).filter(o=>o!==id);
  const pick = arr => arr[Math.floor(r()*arr.length)];
  const acts = m.sess.flatMap((s,i)=>s.at.map((a,j)=>({a,k:actKey(id,i,j)})));
  const otherActs = pool.flatMap(o=>M[o].sess.flatMap((s,i)=>s.at.map((a,j)=>({a,k:actKey(o,i,j)}))));
  const first = t => (t||'').split(/(?<=\.)\s/)[0];
  const mk = (q, ok, wrong, exp) => { const opts = shuffle([ok, ...shuffle([...new Set(wrong.filter(w=>w&&w!==ok))],r).slice(0,3)], r); return {q, opts, ok:opts.indexOf(ok), exp}; };
  const Q=[];
  const cs = condsOf(id); Q.push(mk(`Para qual destes quadros o método “${m.nome}” está indicado neste guia?`, cs[Math.floor(r()*cs.length)].longo, CONDS.filter(c=>!cs.includes(c)).map(c=>c.longo), `Indicado para: ${cs.map(c=>c.longo).join('; ')}.`));
  const pr = pick(m.principios); Q.push(mk(`Qual destes é um princípio do método “${m.sigla}”?`, pr, pool.flatMap(o=>M[o].principios), `Princípios do método: ${m.principios.join('; ')}.`));
  const A1 = pick(acts); Q.push(mk(`Por que a atividade “${A1.a.t}” funciona?`, first(LOG[A1.k]?.l), otherActs.map(x=>first(LOG[x.k]?.l)), LOG[A1.k]?.l));
  const A2 = pick(acts.filter(x=>x!==A1).length?acts.filter(x=>x!==A1):acts); Q.push(mk(`Qual é o critério de sucesso da atividade “${A2.a.t}”?`, A2.a.ok, otherActs.map(x=>x.a.ok), `Critério: ${A2.a.ok}`));
  const sn = pick(m.seNao); Q.push(mk(`No ${m.sigla}, o que fazer quando: “${sn.s}”?`, sn.a, pool.flatMap(o=>M[o].seNao.map(x=>x.a)), `Causa provável: ${sn.c}. ${sn.a}`));
  const A3 = pick(acts); Q.push(mk(`O que esperamos alcançar com a atividade “${A3.a.t}”?`, LOG[A3.k]?.e, otherActs.map(x=>LOG[x.k]?.e), LOG[A3.k]?.e));
  const evActs = acts.filter(x=>(EVITAR[x.k]||[]).length);
  if(evActs.length){ const A4 = pick(evActs); const e = pick(EVITAR[A4.k]);
    const certos = m.sess.flatMap(s=>s.at.flatMap(a=>a.passos)).filter(t=>t.length<160);
    Q.push(mk(`Na atividade “${A4.a.t}”, qual destas atitudes deve ser EVITADA?`, e.n, certos, `Evite: ${e.n}. Por quê: ${e.p}`)); }
  return Q;
}
function vQuiz(id){
  const q = S.quiz; if(!q || q.id!==id){ S.quiz = { id, seed: Date.now()%100000, i:0, ans:[] }; }
  const Q = buildQuiz(id, S.quiz.seed); const st = S.quiz;
  if(st.i >= Q.length){
    const nOk = st.ans.filter((a,i)=>a===Q[i].ok).length; const pct = Math.round(nOk/Q.length*100);
    return `${hdr('Resultado do quiz','#cap-'+id)}<div class="pad stack"><div class="res ${pct>=80?'g':pct>=50?'y':'r'}"><b style="font-size:34px;color:${pct>=80?'var(--ok)':pct>=50?'var(--warn)':'var(--bad)'}">${pct}%</b><div><b>${pct>=80?'Método concluído!':'Quase lá'}</b><p class="sm">${nOk} de ${Q.length} acertos. ${pct>=80?'Você domina a lógica deste método.':'Revise as partes do módulo e tente de novo.'}</p></div></div>
      ${Q.map((x,i)=>`<div class="card stack" style="gap:6px"><span class="sm" style="font-weight:800;color:${st.ans[i]===x.ok?'var(--ok)':'var(--bad)'}">${st.ans[i]===x.ok?'Acertou':'Errou'} · pergunta ${i+1}</span><b class="sm">${esc(x.q)}</b><p class="sm"><b>Resposta:</b> ${esc(x.opts[x.ok])}</p></div>`).join('')}</div>
      <div class="cta pad"><div class="grid2"><a class="btn out" href="#cap-${id}">Voltar ao módulo</a><button type="button" class="btn" data-act="quizagain" data-id="${id}">Refazer</button></div></div>`;
  }
  const x = Q[st.i]; const answered = st.ans[st.i] != null;
  return `${hdr(`Pergunta ${st.i+1} de ${Q.length}`,'#cap-'+id)}<div class="pad stack">
    <div class="demo-steps">${Q.map((_,k)=>`<i class="${k<=st.i?'on':''}"></i>`).join('')}</div>
    <h2 style="font-size:18px;line-height:1.35">${esc(x.q)}</h2>
    ${x.opts.map((o,k)=>{ let sty=''; if(answered){ if(k===x.ok) sty='border-color:#2FA85A;background:var(--okbg)'; else if(k===st.ans[st.i]) sty='border-color:var(--bad);background:var(--badbg)'; }
      return `<button type="button" class="li" data-qans="${k}" ${answered?'disabled':''} style="${sty};align-items:flex-start"><span class="num" style="background:${answered&&k===x.ok?'#2FA85A':answered&&k===st.ans[st.i]?'var(--bad)':'var(--pl)'};color:${answered&&(k===x.ok||k===st.ans[st.i])?'#fff':'var(--pd)'}">${'ABCD'[k]}</span><span class="tx"><span style="font-size:14.5px;color:var(--ink)">${esc(o)}</span></span></button>`; }).join('')}
    ${answered?`<div class="alert ${st.ans[st.i]===x.ok?'':'r'}" style="${st.ans[st.i]===x.ok?'background:var(--okbg)':''};align-items:flex-start"><div><b style="color:${st.ans[st.i]===x.ok?'var(--ok)':'var(--bad)'}">${st.ans[st.i]===x.ok?'Correto!':'Não é essa'}</b><p class="sm" style="margin-top:4px">${esc(x.exp)}</p></div></div>`:''}
  </div>${answered?`<div class="cta pad"><button type="button" class="btn" data-act="qnext" data-id="${id}">${st.i===Q.length-1?'Ver resultado':'Próxima pergunta'} ${I.arrow}</button></div>`:''}`;
}
async function finishQuiz(id){
  const Q = buildQuiz(id, S.quiz.seed); const nOk = S.quiz.ans.filter((a,i)=>a===Q[i].ok).length; const pct = Math.round(nOk/Q.length*100);
  const cap = {...(S.profile.cap||{})}; const c = {...capOf(id)}; c.tent=(c.tent||0)+1; c.best = Math.max(c.best??0, pct); c.ult = todayISO(); cap[id]=c;
  try{ await Store.saveProfile({cap}); }catch(_){}
}
/* ===== FonoTrilha · app ===== */
const $ = (s, el=document) => el.querySelector(s);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const uid = (p='x') => p + Date.now().toString(36) + Math.random().toString(36).slice(2,7);
const todayISO = () => { const d=new Date(); return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0'); };
const fmtDate = iso => { if(!iso) return ''; const [y,m,d]=iso.slice(0,10).split('-'); return `${d}/${m}/${y}`; };
const ls = { get(k,d){ try{const v=localStorage.getItem('ft2:'+k);return v?JSON.parse(v):d;}catch(e){return d;} }, set(k,v){ try{localStorage.setItem('ft2:'+k,JSON.stringify(v));}catch(e){} } };

/* ---------- Ícones ---------- */
const I = {
  back:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M15 6l-6 6 6 6"/></svg>',
  close:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  chev:'<svg class="chev" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>',
  arrow:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  menu:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  search:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5A666B" stroke-width="2.2" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/></svg>',
  brain:'<svg width="52" height="52" viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 8a7 7 0 0 0-7 7 7 7 0 0 0-4 12 7 7 0 0 0 6 10c2 3 5 4 8 3V9a6 6 0 0 0-3-1z"/><path d="M28 8a7 7 0 0 1 7 7 7 7 0 0 1 4 12 7 7 0 0 1-6 10c-2 3-5 4-8 3V9a6 6 0 0 1 3-1z"/><path d="M15 20c2 0 4 1 5 3M33 20c-2 0-4 1-5 3M14 30c2-1 4-1 6 1M34 30c-2-1-4-1-6 1"/></svg>',
  user:'<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0B6E74" stroke-width="1.9" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.5 3.6-8 8-8s8 3.5 8 8"/></svg>',
  cal:'<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0B6E74" stroke-width="1.9" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4M8 14h2M14 14h2M8 17h2"/></svg>',
  layers:'<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0B6E74" stroke-width="1.9" aria-hidden="true"><path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5M3 17l9 5 9-5"/></svg>',
  play:'<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0B6E74" stroke-width="1.9" aria-hidden="true"><rect x="3" y="3" width="8" height="8" rx="2"/><rect x="13" y="13" width="8" height="8" rx="2"/><circle cx="17" cy="7" r="4"/><path d="M7 13l4 8H3z"/></svg>',
  print:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B5650C" stroke-width="2" aria-hidden="true"><path d="M6 9V3h12v6M6 18H4v-7h16v7h-2"/><rect x="6" y="14" width="12" height="7"/></svg>',
  tri:'<svg width="12" height="12" viewBox="0 0 24 24" fill="#fff" aria-hidden="true"><path d="M7 4l14 8-14 8z"/></svg>',
  check:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3.4" aria-hidden="true"><path d="M5 12l5 5 9-10"/></svg>',
  ok:'<svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#2FA85A"/><path d="M7 12l3.5 3.5L17 9" stroke="#fff" stroke-width="2.4" fill="none"/></svg>',
  warnI:'<svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#E08A1E"/><path d="M12 7v6M12 16.5v.5" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/></svg>',
  badI:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" aria-hidden="true"><path d="M12 7v6M12 17v.5"/></svg>',
  cam:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0B6E74" stroke-width="2.2" aria-hidden="true"><rect x="3" y="6" width="13" height="12" rx="2"/><path d="M16 10l5-3v10l-5-3"/></svg>',
  swap:'<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2F4FA8" stroke-width="2" aria-hidden="true"><path d="M4 12a8 8 0 0 1 14-5.3M20 12a8 8 0 0 1-14 5.3"/><path d="M18 3v4h-4M6 21v-4h4"/></svg>',
  plus:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>',
};
const MCOL = ['#1E8FC9','#E2504B','#7656D6','#EF8A22','#2FA85A','#0B6E74'];
const MICON = { esdm:'brincar', jasper:'olhar', pecs:'quero', caa:'isso', hanen:'voce', emt:'abrir', pragmatica:'feliz', ta:'ouvido', cf:'ler', narrativa:'livro', fe:'parar', mo:'beber', sinaiscaa:'mao', leitura:'ler', dttc:'mais', rest:'musica', ndp:'brincar', mit:'musica', sfa:'olhar', vnest:'fazer', ciat:'dado', script:'escrever', recast:'voce', vocab:'livro', dupla:'sol' };
const mcolor = id => MCOL[Object.keys(M).indexOf(id) % MCOL.length];
const micon = (id, size=50) => `<span class="mic" style="background:${mcolor(id)};width:${size}px;height:${size}px"><svg viewBox="0 0 64 64">${PIC[MICON[id]]||PIC.sol}</svg></span>`;
const EVL = { forte:'Alta evidência', moderada:'Média evidência', emergente:'Evidência emergente' };
const evPill = ev => `<span class="pill ev-${ev}">${EVL[ev]}</span>`;
const condById = id => CONDS.find(c=>c.id===id);
const condsOf = mid => CONDS.filter(c=>c.metodos.includes(mid));
const blkLabel = s => /^\d/.test(s.n) ? 'Sessões ' + s.n : s.n;
const actKey = (mid,blk,j) => `${mid}:${blk}:${j}`;
const playOfKey = k => (ACT[k]||{}).b || null;
const playsOfMethod = id => [...new Set(M[id].sess.flatMap((s,i)=>s.at.map((a,j)=>playOfKey(actKey(id,i,j)))).concat(PLAYEXTRA[id]||[]).filter(Boolean))];
const methodsOfPlay = k => Object.keys(M).filter(id => playsOfMethod(id).includes(k));

/* ---------- Estado ---------- */
const S = { patients:[], sessions:[], profile:{ nome:'' }, ready:false, mode:'local', tab:{}, ctxCond:null, ctxPid: ls.get('ctxPid', null), run: ls.get('run', null), pbSel:0, lastRes:null };
let DB = null, BASE = null, ASSETS = null;

/* ---------- Armazenamento (nuvem privada da conta; reserva no navegador) ---------- */
const Store = {
  async init(){
    if(NeonStore) return NeonStore.init();
    try{
      if(window.claude && window.claude.use){
        const [db, user] = await Promise.all([window.claude.use('db'), window.claude.use('user')]);
        const id = user ? await user.id() : null;
        if(db && id){
          DB = db; BASE = db.doc('data/users/' + id + '/clinica'); S.mode = 'nuvem';
          BASE.onSnapshot(sn => { if(sn.exists){ S.profile = {...S.profile, ...sn.data()}; } render(); }, ()=>{});
          BASE.collection('pacientes').onSnapshot(q => { S.patients = q.docs.map(d=>({id:d.id, ...d.data()})); S.ready=true; render(); }, ()=>{ Store.fallback(); });
          BASE.collection('sessoes').orderBy('data','asc').onSnapshot(q => { S.sessions = q.docs.map(d=>({id:d.id, ...d.data()})); render(); }, ()=>{});
          window.claude.use('assets').then(a => { ASSETS = a; }).catch(()=>{});
          return;
        }
      }
    }catch(e){}
    Store.fallback();
  },
  fallback(){ S.mode='local'; DB=null; S.patients=ls.get('patients',[]); S.sessions=ls.get('sessions',[]); S.profile=ls.get('profile',{nome:''}); S.ready=true; render(); },
  async savePatient(p){
    if(NeonStore) return NeonStore.savePatient(p);
    if(!p.id) p.id = uid('p');
    if(DB){ const {id, ...body} = p; await BASE.collection('pacientes').doc(id).set(body); }
    else { const i=S.patients.findIndex(x=>x.id===p.id); if(i>=0) S.patients[i]=p; else S.patients.push(p); ls.set('patients',S.patients); render(); }
    return p.id;
  },
  async deletePatient(id){
    if(NeonStore) return NeonStore.deletePatient(id);
    if(DB){ await BASE.collection('pacientes').doc(id).delete(); for(const s of S.sessions.filter(s=>s.pid===id)) await BASE.collection('sessoes').doc(s.id).delete(); }
    else { S.patients=S.patients.filter(p=>p.id!==id); S.sessions=S.sessions.filter(s=>s.pid!==id); ls.set('patients',S.patients); ls.set('sessions',S.sessions); render(); }
  },
  async saveSession(s){
    if(NeonStore) return NeonStore.saveSession(s);
    if(!s.id) s.id = uid('s');
    if(DB){ const {id, ...body} = s; await BASE.collection('sessoes').doc(id).set(body); }
    else { S.sessions.push(s); ls.set('sessions',S.sessions); render(); }
    return s.id;
  },
  async saveProfile(p){
    if(NeonStore) return NeonStore.saveProfile(p);
    S.profile = {...S.profile, ...p};
    if(DB){ await BASE.set(S.profile); } else { ls.set('profile',S.profile); render(); }
  }
};

/* ---------- Dados derivados ---------- */
const patient = id => S.patients.find(p=>p.id===id);
const sessOf = (pid, mid) => S.sessions.filter(s=>s.pid===pid && (!mid || s.mid===mid)).sort((a,b)=>a.data<b.data?-1:1);
const age = iso => { if(!iso) return ''; const b=new Date(iso+'T12:00'); const n=new Date(); let y=n.getFullYear()-b.getFullYear(), m=n.getMonth()-b.getMonth(); if(n.getDate()<b.getDate()) m--; if(m<0){y--;m+=12;} return y>0 ? `${y} ano${y>1?'s':''}${m?` e ${m} ${m>1?'meses':'mês'}`:''}` : `${m} ${m===1?'mês':'meses'}`; };
const initials = n => (n||'?').split(/\s+/).filter(Boolean).slice(0,2).map(w=>w[0].toUpperCase()).join('');
function blkInfo(pid, mid, i){
  const R = regraOf(mid); const d = porDia(sessOf(pid,mid).filter(s=>s.blk===i)); const pac = patient(pid);
  const manual = !!(pac && pac.etapas && pac.etapas[mid+':'+i]);
  let k=0; for(let j=d.length-1;j>=0 && d[j].ok;j--) k++;
  const ult = d.slice(-R.dias); const falta=[];
  if(k < R.dias) falta.push(`${Math.min(k,R.dias)} de ${R.dias} atendimentos seguidos na meta`);
  else { if(R.outra && !ult.some(x=>x.outra)) falta.push('falta 1 atendimento na meta feito também com outra pessoa');
    if(R.intervalo && (new Date(ult[ult.length-1].data)-new Date(ult[0].data))/864e5 < R.intervalo) falta.push(`os atendimentos precisam ter ${R.intervalo} dias ou mais entre eles`); }
  return { done: manual || !falta.length, manual, falta, dias:d.length, k };
}
function blkStatus(pid, mid){
  const m = M[mid]; const info = m.sess.map((_,i)=>blkInfo(pid, mid, i)); const done = info.map(x=>x.done);
  let cur = done.findIndex(d=>!d); if(cur<0) cur = m.sess.length-1;
  return { done, cur, info };
}
function decision(pct){ return pct>=80 ? {k:'g', t:'Evolução adequada!', d:'Atingiu o critério para avançar.'} : pct>=50 ? {k:'y', t:'Em aprendizagem', d:'Mantenha o alvo e ajuste o apoio.'} : {k:'r', t:'Abaixo do esperado', d:'Simplifique e consulte o plano B.'}; }
const avatar = (p, size=58) => `<span style="width:${size}px;height:${size}px;border-radius:50%;background:${['#CFE8E7','#FFE2B8','#E6DDF8','#DDEBFA'][(p?.nome||'').length%4]};display:grid;place-items:center;font-weight:800;font-size:${Math.round(size/2.8)}px;color:#08555A;flex-shrink:0">${esc(initials(p?.nome))}</span>`;

/* ---------- Componentes ---------- */
const hdr = (title, back='#', right='') => `<div class="hdr pad"><a class="ib" href="${back}" aria-label="Voltar" style="margin-left:-8px">${I.back}</a><span class="t">${esc(title)}</span>${right||'<span></span>'}</div>`;
const tabs = (key, items, def) => { const cur = S.tab[key] || def || items[0][0]; return `<div class="tabs pad" role="tablist">${items.map(([k,l])=>`<button type="button" role="tab" aria-selected="${k===cur}" data-tab="${key}:${k}">${l}</button>`).join('')}</div>`; };
const curTab = (key, def) => S.tab[key] || def;
const scene = k => `<svg class="sc" viewBox="0 0 240 140" role="img" aria-label="Ilustração da atividade">${SCENE[k]||SCENE.lupa}</svg>`;
const methodLi = id => { const m=M[id]; return `<a class="li" href="#m-${id}">${micon(id)}<span class="tx"><b>${esc(m.nome)}${m.sigla.length<=10&&!m.nome.includes(m.sigla)?` (${m.sigla})`:''}</b><span class="row" style="justify-content:space-between"><span>${m.idade} · ${m.sess.length} etapas</span>${evPill(m.ev)}</span></span>${I.chev}</a>`; };

/* ---------- Telas ---------- */
function vHome(){
  const nome = S.profile.nome ? `Olá, ${esc(S.profile.nome)}!` : 'Olá!';
  const hoje = S.patients.filter(p=>p.proxData===todayISO()).sort((a,b)=>(a.proxHora||'')<(b.proxHora||'')?-1:1);
  let cont = '';
  if(S.run){ const m=M[S.run.mid], p=patient(S.run.pid); cont = `<button type="button" class="cont" data-go="#atv"><span class="mic" style="background:#F6C68E;width:46px;height:46px"><svg viewBox="0 0 64 64">${PIC.musica}</svg></span><span style="flex:1;display:flex;flex-direction:column;gap:1px"><b style="color:var(--p);font-size:14.5px">Sessão em andamento</b><b style="font-size:14px">${esc(p?p.nome:'Sem paciente')} · ${esc(m.sigla)}</b><span class="sm mut">Atividade ${S.run.i+1} de ${m.sess[S.run.blk].at.length} · ${esc(m.sess[S.run.blk].t)}</span></span>${I.chev}</button>`; }
  else { const last = [...S.sessions].sort((a,b)=>a.data<b.data?1:-1)[0]; if(last && M[last.mid]){ const p=patient(last.pid); const st = p ? blkStatus(p.id,last.mid) : {cur:last.blk}; const s=M[last.mid].sess[st.cur];
    cont = `<a class="cont" href="#s-${last.mid}-${st.cur}" data-ctx="${p?p.id:''}"><span class="mic" style="background:#F6C68E;width:46px;height:46px"><svg viewBox="0 0 64 64">${PIC.livro}</svg></span><span style="flex:1;display:flex;flex-direction:column;gap:1px"><b style="color:var(--p);font-size:14.5px">Continue de onde parou</b><b style="font-size:14px">${esc(p?p.nome:'Treino')} · ${esc(condById(p?.quadro)?.nome||M[last.mid].sigla)}</b><span class="sm mut">${esc(M[last.mid].sigla)} · ${esc(s.t)}</span></span>${I.chev}</a>`; } }
  return `<div class="hero pad"><div class="top"><button class="ib" type="button" data-act="menu" aria-label="Menu" style="margin-left:-10px">${I.menu}</button><button class="ib" type="button" data-act="perfil" aria-label="Seu nome" style="margin-right:-10px"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.5 3.6-8 8-8s8 3.5 8 8"/></svg></button></div>
    <div class="brand">${I.brain}<div><b>FonoTrilha</b><span>Guia Clínico</span></div></div>
    <div class="search">${I.search}<input id="q" type="search" placeholder="Buscar paciente, método ou atividade…" aria-label="Buscar" autocomplete="off"><div class="results" id="results" hidden></div></div></div>
  <div class="sheet pad" style="padding-bottom:24px">
    <div class="greet">${avatar({nome:S.profile.nome||'F'},52)}<div><b style="font-size:19px">${nome}</b><p class="mut sm">${hoje.length?`Você tem ${hoje.length} sessão${hoje.length>1?'ões':''} hoje.`:'Vamos para mais uma sessão?'}</p></div></div>
    <div class="grid2">
      <a class="tile" href="#pacientes">${I.user}<span><b>Meus pacientes</b><span>${S.patients.length} cadastrado${S.patients.length===1?'':'s'}</span></span></a>
      <a class="tile" href="#quadros" data-ctx="">${I.cal}<span><b>Planejar sessão</b><span>Escolha o método</span></span></a>
      <a class="tile" href="#quadros">${I.layers}<span><b>Métodos</b><span>${Object.keys(M).length} métodos</span></span></a>
      <a class="tile" href="#brincadeiras">${I.play}<span><b>Brincadeiras</b><span>Imprimir e usar</span></span></a>
    </div>
    <a class="tile" href="#capacitacao"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0B6E74" stroke-width="1.9" aria-hidden="true"><path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c3 3 9 3 12 0v-5M22 9v6"/></svg><span style="flex:1"><b>Capacitação</b><span>Estude cada método e faça o quiz · ${Object.keys(M).filter(id=>((S.profile.cap||{})[id]?.best||0)>=80).length} de ${Object.keys(M).length} concluídos</span></span>${I.chev}</a>
    ${cont}
    <div class="stack" style="gap:8px"><span class="lbl">Agenda de hoje</span>
      ${hoje.length?`<div class="agenda">${hoje.map(p=>`<button type="button" data-go="#p-${p.id}"><b>${esc(p.proxHora||'--:--')}</b><span class="sm">${esc(p.nome.split(' ')[0])}</span></button>`).join('')}</div>`:`<p class="sm mut">Nenhuma sessão marcada para hoje. Defina a próxima sessão no cadastro do paciente.</p>`}
    </div>
    ${S.mode==='local'?`<p class="sm mut">Os dados estão salvos neste navegador. No app publicado e com login, ficam salvos na sua conta.</p>`:''}
  </div>`;
}

function vQuadros(){
  const p = patient(S.ctxPid);
  return `${hdr('Escolha o quadro clínico','#')}<div class="pad stack" style="padding-top:4px">
    ${p?`<div class="soft row" style="padding:10px 12px">${avatar(p,34)}<span class="sm" style="flex:1">Planejando para <b>${esc(p.nome)}</b></span><button type="button" class="tlink" data-act="clearctx">Trocar</button></div>`:''}
    <p class="mut">O app mostra os métodos indicados para cada quadro.</p>
    <div class="qgrid">${CONDS.map(c=>`<a class="q ${p&&p.quadro===c.id?'on':''}" href="#q-${c.id}"><svg viewBox="0 0 64 64">${PIC[c.pic]}</svg><b>${c.nome}</b><span>${c.longo}</span></a>`).join('')}</div></div>`;
}

function vCond(c){
  S.ctxCond = c.id; const t = curTab('cond','met');
  return `${hdr(c.nome,'#quadros')}<div class="pad row" style="gap:14px;padding-top:2px"><span class="mic" style="background:#1E8FC9;width:58px;height:58px"><svg viewBox="0 0 64 64">${PIC[c.pic]}</svg></span><div><h1>${c.nome}</h1><p class="mut">${c.longo}</p></div></div>
  ${tabs('cond',[['met','Métodos'],['vis','Visão geral'],['ava','Avaliação']])}
  <div class="pad stack" style="padding-top:14px">
  ${t==='met' ? c.metodos.map(methodLi).join('') : t==='vis' ? `<p>${c.resumo}</p><h3>Focos da terapia</h3><ul style="margin:0;padding-left:20px;display:grid;gap:6px">${c.foco.map(f=>`<li>${f}</li>`).join('')}</ul>` : `<p class="mut">Instrumentos para avaliar antes de escolher o método:</p>${c.aval.map(a=>`<div class="li" style="cursor:default"><span class="num">✓</span><span class="tx"><b style="font-weight:600">${a}</b></span></div>`).join('')}`}
  </div>`;
}

function vMethod(id){
  const m = M[id]; const t = curTab('met-'+id,'tri'); const p = patient(S.ctxPid);
  const st = p ? blkStatus(p.id,id) : null;
  const back = S.ctxCond && condById(S.ctxCond)?.metodos.includes(id) ? '#q-'+S.ctxCond : '#q-'+condsOf(id)[0].id;
  let body='';
  if(t==='tri'){
    body = `${p?`<div class="soft row" style="padding:10px 12px">${avatar(p,34)}<span class="sm" style="flex:1">Trilha de <b>${esc(p.nome)}</b> · ${st.done.filter(Boolean).length} de ${m.sess.length} etapas concluídas</span>${p.metodo===id?`<span class="tagp" style="flex:none">Método atual</span>`:`<button type="button" class="tlink" style="flex:none;min-height:32px" data-act="troca" data-id="${p.id}" data-mid="${id}">Usar este método</button>`}</div>
    ${p.metodo&&p.metodo!==id&&M[p.metodo]?`<p class="sm mut">O método atual de ${esc(p.nome.split(' ')[0])} é <b>${esc(M[p.metodo].sigla)}</b>. Para mudar, toque em “Usar este método”.</p>`:''}`:`<p class="sm mut">Escolha um paciente ao começar a sessão para acompanhar a trilha dele.</p>`}
    ${m.sess.map((s,i)=>{ const done = st&&st.done[i], now = st&&st.cur===i&&!done; return `<a class="step ${now?'now':''}" href="#s-${id}-${i}"><span class="dot ${done?'ok':now?'now':''}">${done?I.check:''}</span><span class="tx" style="flex:1;display:flex;flex-direction:column"><b style="font-size:14.5px">Etapa ${i+1}${now?' · em andamento':''}</b><span class="sm mut">${esc(blkLabel(s))} · ${esc(s.t)}</span>${st&&now?`<span class="sm" style="font-weight:700;color:var(--warn);margin-top:2px">${esc(st.info[i].falta.join(' · '))}</span>`:''}${st&&st.info[i].manual?`<span class="sm" style="font-weight:700;color:var(--ok);margin-top:2px">Concluída por decisão clínica</span>`:''}</span>${I.chev}</a>`; }).join('')}
    ${p&&st.done.every(Boolean)?depoisHTML(id,p):`<p class="sm mut"><b>Quando uma etapa é concluída:</b> ${esc(regraOf(id).txt)}</p>`}`;
  } else if(t==='sob'){
    body = `<div class="grid2"><div class="kpi"><span>Idade</span><b style="font-size:15px">${m.idade}</b></div><div class="kpi"><span>Nível de evidência</span><b style="font-size:15px">${EVL[m.ev]}</b></div></div>
    <div class="card"><h3>Intensidade</h3><p class="sm" style="margin-top:4px">${m.dose}</p></div>
    <div class="alert i"><span class="sm">${m.cert}</span></div>
    <h3>Quando indicar</h3><div class="steps">${m.quando.map(x=>`<div>${I.ok}<span>${x}</span></div>`).join('')}</div>
    <h3>Princípios</h3><div class="steps">${m.principios.map((x,i)=>`<div><span class="num">${i+1}</span><span>${x}</span></div>`).join('')}</div>
    <h3>Antes da 1ª sessão (linha de base)</h3><div class="steps">${m.inicio.map(x=>`<div>${I.ok}<span>${x}</span></div>`).join('')}</div>
    <div class="card"><h3>Critério para avançar</h3><p class="sm" style="margin-top:4px">${m.avancar}</p></div>
    <h3>Critérios de alta</h3><div class="steps">${m.alta.map(x=>`<div>${I.ok}<span>${x}</span></div>`).join('')}</div>
    <a class="btn out sm" href="#pb-${id}" data-pb="">Se não evoluir · Plano B</a><a class="btn ghost sm" href="#cap-${id}">Estudar este método (capacitação)</a>`;
  } else {
    body = `<ol style="margin:0;padding-left:20px;display:grid;gap:8px" class="sm">${m.refs.map(r=>`<li>${esc(r)}</li>`).join('')}</ol>`;
  }
  return `${hdr('', back, `<button class="ib" type="button" data-act="fav" data-id="${id}" aria-label="Favoritar" aria-pressed="${(S.profile.favs||[]).includes(id)}" style="margin-right:-8px"><svg width="22" height="22" viewBox="0 0 24 24" fill="${(S.profile.favs||[]).includes(id)?'#E2504B':'none'}" stroke="#E2504B" stroke-width="2" aria-hidden="true"><path d="M12 21s-8-5.2-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 5.8-8 11-8 11z"/></svg></button>`)}
  <div class="pad row" style="gap:14px;align-items:flex-start">${micon(id,58)}<div style="flex:1;display:flex;flex-direction:column;gap:4px"><h2>${esc(m.nome)}</h2><span class="sm mut">${condsOf(id).map(c=>c.nome).join(' · ')} · ${m.idade}</span>${evPill(m.ev)}</div></div>
  <p class="pad mut" style="margin-top:12px">${m.resumo}</p>
  ${tabs('met-'+id,[['tri','Trilha de sessões'],['sob','Sobre o método'],['ref','Referências']])}
  <div class="pad stack" style="padding-top:14px;gap:8px">${body}</div>`;
}

function vSessao(id, i){
  const m = M[id], s = m.sess[i]; const p = patient(S.ctxPid);
  const key = `prep:${id}:${i}`; const done = ls.get(key, []);
  const plays = [...new Set(s.at.map((a,j)=>playOfKey(actKey(id,i,j))).filter(Boolean))];
  const mins = s.at.reduce((a,x)=>a+x.min,0);
  return `${hdr('', '#m-'+id)}<div class="pad stack" style="gap:10px">
    <span class="sm mut">${esc(m.sigla)} · ${esc(blkLabel(s))}${p?' · '+esc(p.nome):''}</span>
    <h1>Etapa ${i+1} de ${m.sess.length}</h1>
    <div class="bar"><i style="width:${Math.round((i+1)/m.sess.length*100)}%"></i></div>
    <h2 style="margin-top:8px">${esc(s.t)}</h2>
    <p class="mut">Objetivo: ${s.obj}</p></div>
  <div class="pad stack sec">
    <div class="soft"><div class="row" style="justify-content:space-between;margin-bottom:6px"><h3 style="color:var(--pd)">O que preparar antes</h3><span class="sm" style="font-weight:800;color:var(--pd)" id="prepc">${done.length} de ${s.prep.length}</span></div>
      ${s.prep.map((x,j)=>`<label class="chk ${done.includes(j)?'done':''}"><input type="checkbox" id="prep-${id}-${i}-${j}" data-prep="${key}|${j}" ${done.includes(j)?'checked':''}><span>${x}</span></label>`).join('')}</div>
    ${plays.map(k=>`<button type="button" class="li" data-play="${k}"><span class="mic" style="background:#FFF1DE;width:48px;height:48px">${I.print}</span><span class="tx"><b>Brincadeira para imprimir</b><span>${esc(PLAY[k].t)}</span></span>${I.chev}</button>`).join('')}
    ${roteiroHTML(id, i)}
    ${p?(()=>{ const inf=blkInfo(p.id,id,i); return inf.done&&!inf.manual ? `<div class="crit sm"><b style="color:var(--ok)">Etapa concluída para ${esc(p.nome.split(' ')[0])}</b> pelo critério do método.</div>` : `<div class="card stack" style="gap:8px"><b class="sm">Situação de ${esc(p.nome.split(' ')[0])} nesta etapa</b><span class="sm ${inf.manual?'':'mut'}">${inf.manual?'Concluída por decisão clínica.':esc(inf.falta.join(' · '))+'.'}${!inf.manual&&inf.dias<2?' Registros feitos no mesmo dia contam como um único atendimento.':''}</span><button type="button" class="btn ${inf.manual?'ghost':'out'} sm" data-act="manualok" data-mid="${id}" data-blk="${i}">${inf.manual?'Desfazer conclusão manual':'Concluir etapa por decisão clínica'}</button></div>`; })():''}
    <span class="lbl" style="margin-top:6px">Atividades · ${mins} min</span>
    ${s.at.map((a,j)=>`<div class="row" style="flex-wrap:nowrap"><span class="num" style="background:var(--pl);color:var(--pd);border-radius:8px">${j+1}</span><span style="flex:1;font-weight:600">${esc(a.t)}</span><span class="sm mut">${a.min} min</span></div>`).join('')}
  </div>
  <div class="cta pad"><button type="button" class="btn" data-act="start" data-mid="${id}" data-blk="${i}">Começar sessão ${I.arrow}</button></div>`;
}

function vAtividade(){
  const r = S.run; if(!r) return vHome();
  const m=M[r.mid], s=m.sess[r.blk], a=s.at[r.i]; const p=patient(r.pid);
  const ak = actKey(r.mid,r.blk,r.i); const play = playOfKey(ak); const usa = (ACT[ak]||{}).u;
  return `${hdr('Atividades da sessão', '#s-'+r.mid+'-'+r.blk, `<button class="tlink" type="button" data-act="cancelrun">Sair</button>`)}
  <div class="pad stack" style="gap:14px">
    <div class="accent"><div class="row" style="justify-content:space-between"><span style="font-weight:700;color:var(--p);font-size:13.5px">Atividade ${r.i+1} de ${s.at.length}${p?' · '+esc(p.nome.split(' ')[0]):''}</span><span class="tagp">≈ ${a.min} min</span></div><h2>${esc(a.t)}</h2><span class="mut sm">${esc(s.obj)}</span></div>
    <div class="ill">${cena(ak)}<button type="button" class="playb" data-act="demo">${'<span>'+I.tri+'</span>'}Ver demonstração</button></div>
    <div class="stack" style="gap:10px"><h3>Passo a passo</h3><div class="steps">${a.passos.map((x,k)=>`<div><span class="num">${k+1}</span><span>${x}</span></div>`).join('')}</div></div>
    ${(()=>{ const lg = LOG[ak]||{}; return `<details class="more" open><summary>Lógica, objetivo e critério ${I.chev}</summary><div class="stack" style="gap:14px">
      ${lg.l?`<div class="stack" style="gap:4px"><span class="lbl" style="color:var(--p)">Por que essa atividade funciona</span><p style="font-size:14.5px;line-height:1.5">${esc(lg.l)}</p></div>`:''}
      ${lg.e?`<div class="stack" style="gap:4px"><span class="lbl" style="color:var(--p)">O que esperamos alcançar</span><p style="font-size:14.5px;line-height:1.5">${esc(lg.e)}</p></div>`:''}
      <div class="stack" style="gap:6px"><span class="lbl" style="color:var(--p)">O que observar</span><div class="steps">${a.obs.map(o=>`<div>${I.ok}<span>${o}</span></div>`).join('')}</div></div>
      ${contaHTML(ak, true)}
      <div class="crit"><b style="color:var(--ok)">Critério de sucesso:</b> ${a.ok}</div></div></details>
    ${evitarHTML(r.mid, ak)}`; })()}
    ${usa?`<div class="card row" style="flex-wrap:nowrap;gap:12px;padding:12px"><span class="mic" style="background:var(--pl);width:44px;height:44px"><svg viewBox="0 0 64 64" style="width:28px;height:28px">${PIC.brincar.replace(/var\(--ink\)/g,'#0B6E74').replace(/var\(--tint\)/g,'#CFE8E7')}</svg></span><span class="tx" style="flex:1;display:flex;flex-direction:column"><b style="font-size:14.5px">Material da atividade</b><span class="sm mut">${esc(usa)}</span></span></div>`:''}
    ${play?`<button type="button" class="li" data-play="${play}"><span class="mic" style="background:#FFF1DE;width:44px;height:44px">${I.print}</span><span class="tx"><b>Brincadeira para imprimir</b><span>${esc(PLAY[play].t)}</span></span>${I.chev}</button>`:''}
  </div>
  <div class="cta pad"><a class="btn" href="#reg">Registrar desempenho ${I.arrow}</a></div>`;
}

function vRegistro(){
  const r = S.run; if(!r) return vHome();
  const m=M[r.mid], s=m.sess[r.blk], a=s.at[r.i], x=r.acts[r.i];
  const tot = x.y + x.n; const ak = actKey(r.mid,r.blk,r.i); const md = medOf(ak); const ev = evalAct(x, r.mid, r.blk, r.i, r.pid); const aps = apoiosOf(r.mid, ak);
  const last = r.i === s.at.length-1; const cont = md.tipo==='cont' || md.tipo==='base';
  const cor = ev.score==null ? 'var(--mut)' : ev.score>=80 ? 'var(--ok)' : ev.score>=50 ? 'var(--warn)' : 'var(--bad)';
  const minT = md.min || 10;
  const status = !tot ? '' : ev.score==null ? (ev.note||'') : ev.ok ? 'Meta atingida.' : (md.tipo==='pct' && tot<minT ? `continue até ${minT} tentativas para decidir` : (ev.note || (cont||md.tipo==='seq' ? 'Ainda abaixo da meta.' : decision(ev.score).d)));
  return `<div class="hdr pad" style="grid-template-columns:1fr 44px"><span class="t" style="text-align:left;font-size:22px">Registrar desempenho</span><a class="ib" href="#atv" aria-label="Voltar para a atividade" style="margin-right:-8px">${I.close}</a></div>
  <div class="pad stack">
    <div class="card stack" style="gap:14px">
      <div class="row" style="justify-content:space-between"><h3>${esc(a.t)}</h3><span class="tagp">≈ ${a.min} min</span></div>
      <div class="metab"><span class="lbl">Meta desta atividade</span><b>${esc(metaTxt(md))}</b>${md.nota?`<span class="sm mut">${esc(md.nota)}</span>`:''}</div>
      ${contaHTML(ak)}
      ${cont ? `<button type="button" class="big y" data-act="hit" aria-label="Contar mais uma ocorrência" style="width:100%"><span class="c"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1E7F49" stroke-width="3.2" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg></span><span><b>${x.y}${md.meta&&md.tipo==='cont'?`<span style="font-size:18px;color:var(--mut)"> / ${md.meta}</span>`:''}</b><span class="sm mut">Contar +1 · ${esc(md.c||'ocorrências')}</span></span></button>`
      : `<div class="grid2">
        <button type="button" class="big y" data-act="hit" aria-label="Registrar acerto"><span class="c"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1E7F49" stroke-width="3.2" stroke-linecap="round" aria-hidden="true"><path d="M5 12l5 5 9-10"/></svg></span><span><b>${x.y}</b><span class="sm mut">Acertos</span></span></button>
        <button type="button" class="big n" data-act="miss" aria-label="Registrar erro"><span class="c"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#B23A34" stroke-width="3.2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg></span><span><b>${x.n}</b><span class="sm mut">Erros</span></span></button>
      </div>`}
      <div class="stack" style="gap:6px"><div class="row" style="justify-content:space-between"><span class="sm" style="font-weight:700">${cont?'Contagem':'Tentativas'}: ${tot}</span><button type="button" class="tlink" data-act="undo" ${tot?'':'disabled'}>Desfazer última</button></div>
        ${cont?'':`<div class="hist" aria-label="Histórico de tentativas">${x.hist.map(h=>`<i class="${h}"></i>`).join('')}${Array.from({length:Math.max(0,10-x.hist.length)},()=>'<i class="e"></i>').join('')}</div>`}
        ${tot?`<div class="row sm" style="font-weight:700;color:${cor}">${esc(ev.txt)} · ${esc(status)}</div>`:''}</div>
      ${aps.length>1?`<div class="stack" style="gap:6px"><span class="sm" style="font-weight:700">Nível de apoio</span>
        <div class="${aps.length>4?'segw':'seg'}" role="radiogroup" aria-label="Nível de apoio">${aps.map((o,k)=>`<button type="button" role="radio" aria-checked="${x.apoio===o}" data-apoio="${esc(o)}">${esc(o)}${k<=md.aceita&&md.aceita>0?' ✓':''}</button>`).join('')}</div>
        <span class="sm mut">${md.aceita>0?'✓ = o acerto vale para o critério com este apoio.':`Para o critério vale o acerto com “${esc(aps[0])}”.`}${APO_NOTA[r.mid]?' '+esc(APO_NOTA[r.mid]):''}</span></div>`:''}
    </div>
    <label class="f">Observações (opcional)<textarea id="obs" placeholder="Ex.: precisou de dica verbal nas primeiras tentativas…">${esc(x.obs)}</textarea></label>
    <label class="file" for="media">${I.cam} Anexar vídeo, áudio ou foto da evolução</label><input type="file" id="media" accept="video/*,audio/*,image/*" hidden>
    ${x.media.length?`<div class="media">${x.media.map(f=>f.url?`<a href="${esc(f.url)}" target="_blank" rel="noopener">${esc(f.name)}</a>`:`<span>${esc(f.name)}</span>`).join('')}</div>`:''}
    <p class="sm mut" id="mediamsg" hidden></p>
  </div>
  <div class="cta pad"><button type="button" class="btn" data-act="nextact">${last?'Ver resultado da sessão':'Salvar e próxima atividade'} ${I.arrow}</button></div>`;
}

function vResultado(){
  const r = S.run || S.lastRes; if(!r) return vHome();
  const saved = !S.run; const m=M[r.mid], s=m.sess[r.blk]; const p=patient(r.pid); const c = calcRun(r); const d = c.base ? {k:'y', t:'Linha de base registrada', d:'A partir do próximo atendimento, o app compara com este resultado.'} : c.ok ? {k:'g', t:'Meta atingida!', d:'Confirme no próximo atendimento para concluir a etapa.'} : c.pct>=80 ? {k:'y', t:'Quase lá', d:'Na média foi bem, mas nem todas as atividades atingiram a meta.'} : decision(c.pct);
  const apoioMain = (()=>{ const cnt={}; r.acts.forEach(a=>cnt[a.apoio]=(cnt[a.apoio]||0)+a.y+a.n); return Object.entries(cnt).sort((a,b)=>b[1]-a[1])[0]?.[0]||'—'; })();
  const hist = p ? sessOf(p.id, r.mid).slice(-5) : [];
  const bars = saved ? hist : hist.concat([{pct:c.pct, blk:r.blk, data:new Date().toISOString(), now:true}]);
  const R = regraOf(r.mid);
  const recs = c.ok ? [ `Para concluir a etapa: ${R.txt}`, r.blk<m.sess.length-1 ? `Depois disso, avance para a etapa ${r.blk+2}: ${m.sess[r.blk+1].t}` : 'Última etapa: depois de confirmar, avalie os critérios de alta', 'Enviar à família a brincadeira para fazer em casa'] : c.pct>=50 ? ['Repetir esta etapa no próximo atendimento','Ajustar o nível de apoio e retirá-lo aos poucos','Aumentar o número de oportunidades por atividade'] : ['Simplificar o alvo ou voltar uma etapa','Rever o reforçador e o ambiente','Consultar o plano B do método'];
  const kc = d.k==='g'?'var(--ok)':d.k==='y'?'var(--warn)':'var(--bad)', kf = d.k==='g'?'#2FA85A':d.k==='y'?'#E08A1E':'#C2453E';
  return `${hdr('Resultado da sessão', saved?(p?'#p-'+p.id:'#'):'#reg')}
  <div class="pad stack">
    <span class="sm mut">${esc(m.sigla)} · Etapa ${r.blk+1} · ${esc(s.t)}${p?' · '+esc(p.nome):''}</span>
    <div class="res ${d.k}"><svg width="50" height="50" viewBox="0 0 54 54" aria-hidden="true"><rect x="8" y="30" width="9" height="16" rx="2" fill="${kf}"/><rect x="22" y="${d.k==='r'?36:20}" width="9" height="${d.k==='r'?10:26}" rx="2" fill="${kf}"/><rect x="36" y="${d.k==='g'?10:d.k==='y'?26:40}" width="9" height="${d.k==='g'?36:d.k==='y'?20:6}" rx="2" fill="${kf}"/></svg><div><b style="font-size:18px;color:${kc}">${d.t}</b><p class="sm">${c.base?'':`${c.evs.filter(e=>e.ok).length} de ${c.evs.length} ${c.evs.length>1?'atividades':'atividade'} na meta. `}${d.d}</p></div></div>
    <div class="grid3"><div class="kpi"><b style="color:${kc}">${c.base?'—':c.pct+'%'}</b><span>Desempenho</span></div><div class="kpi"><b>${c.t}</b><span>Registros</span></div><div class="kpi"><b style="font-size:14px">${esc(apoioMain)}</b><span>Apoio principal</span></div></div>
    <p class="sm mut" style="margin-top:-4px">Desempenho: 80% significa que a meta da atividade foi atingida, seja ela em % de acerto, em contagem ou em acertos seguidos.</p>
    <div class="card stack" style="gap:10px"><b>Por atividade</b>
      ${c.evs.map((e,j)=>{ const pc=e.score??0; return `<div class="stack" style="gap:4px"><div class="prog"><span>${esc(s.at[j].t)}</span><span class="bar"><i style="width:${Math.min(100,pc)}%;background:${e.score==null?'#B9D9D7':pc>=80?'#2FA85A':pc>=50?'#E08A1E':'#C2453E'}"></i></span><b style="text-align:right">${e.ok?'✓':e.score==null?'base':pc+'%'}</b></div><span class="sm mut">${esc(e.txt)} · meta: ${esc(metaTxt(e.md))}${e.note?' · '+esc(e.note):''}</span></div>`; }).join('')}</div>
    ${R.outra?`<label class="chk ${r.outra?'done':''}" style="border:1px solid var(--line);border-radius:12px;padding:10px 12px"><input type="checkbox" data-act="outra" ${r.outra?'checked':''} ${saved?'disabled':''}><span><b>Feito também com outra pessoa</b> (responsável, professor ou outro terapeuta). No ${esc(m.sigla)}, a etapa só é concluída quando o critério aparece com pelo menos 2 pessoas.</span></label>`:''}
    ${bars.length>1?`<div class="card"><b>Evolução no método</b><div class="chart" style="margin-top:10px"><span class="meta" style="bottom:${80}%"></span>${bars.map((b,k)=>`<div class="col ${k===bars.length-1?'last':''}"><i style="height:${Math.max(4,b.pct)}%"></i><span>${b.now?'hoje':fmtDate(b.data).slice(0,5)} · ${b.pct}%</span></div>`).join('')}</div><p class="sm mut" style="margin-top:6px">Linha tracejada: meta atingida (80%)</p></div>`:''}
    <div class="soft stack" style="gap:10px;background:var(--bg)"><h3>Recomendações</h3>${recs.map(x=>`<div class="rec">${c.pct>=50||c.base?I.ok:I.warnI}<span>${x}</span></div>`).join('')}</div>
    ${!c.ok&&!c.base?`<a class="btn out sm" href="#pb-${r.mid}" data-pb="${c.pct}">Não evoluiu como esperado? Ver plano B</a>`:''}
    <button type="button" class="btn ghost sm" data-act="famrun">Orientação para a família</button>
  </div>
  <div class="cta pad">${saved?`<a class="btn" href="${p?'#p-'+p.id:'#'}">${p?'Ver prontuário do paciente':'Voltar ao início'} ${I.arrow}</a>`:`<button type="button" class="btn" data-act="saverun">${p?'Salvar no prontuário':'Concluir treino'} ${I.arrow}</button>`}</div>`;
}

function vPlanoB(id){
  const m=M[id]; const t=curTab('pb-'+id,'faz'); const sel=Math.min(S.pbSel, m.seNao.length-1); const x=m.seNao[sel];
  const pct = S.pbPct;
  const acts = x.a.split(/(?<=[.;])\s+/).filter(Boolean);
  let body='';
  if(t==='sin') body = `<p class="sm mut">Toque no sinal que você está observando:</p>${m.seNao.map((y,k)=>`<button type="button" class="step ${k===sel?'now':''}" data-pbsel="${k}"><span class="dot ${k===sel?'now':''}"></span><span style="flex:1;font-weight:700;font-size:14.5px">${esc(y.s)}</span></button>`).join('')}`;
  else if(t==='cau') body = m.seNao.map((y,k)=>`<div class="card ${k===sel?'':''}" style="${k===sel?'border-color:var(--p)':''}"><span class="lbl">Sinal</span><p style="font-weight:700;margin-top:2px">${esc(y.s)}</p><p class="sm mut" style="margin-top:6px">Causa provável: ${esc(y.c)}</p></div>`).join('');
  else if(t==='tro') body = `<div class="alert i" style="align-items:flex-start">${I.swap}<div><b style="color:var(--info)">Quando trocar de método?</b><p class="sm" style="margin-top:4px">${esc(m.trocar)}</p></div></div><span class="lbl">Outros métodos para ${esc(condsOf(id)[0].nome)}</span>${condsOf(id)[0].metodos.filter(o=>o!==id).map(methodLi).join('')}`;
  else body = `<div class="card"><span class="lbl">Sinal observado</span><p style="font-weight:800;margin-top:2px">${esc(x.s)}</p><p class="sm mut" style="margin-top:4px">Causa provável: ${esc(x.c)}</p><button type="button" class="tlink" data-tab="pb-${id}:sin" style="justify-self:start;min-height:36px">Trocar o sinal</button></div>
    <h3>O que fazer</h3><div class="steps">${acts.map((a,k)=>`<div><span class="num r">${k+1}</span><span>${esc(a)}</span></div>`).join('')}</div>
    <div class="alert i" style="align-items:flex-start;margin-top:6px">${I.swap}<div><b style="color:var(--info)">Quando trocar de método?</b><p class="sm" style="margin-top:4px">${esc(m.trocar)}</p></div></div>`;
  return `${hdr('Se não evoluir · Plano B', '#m-'+id)}
  <div class="pad"><div class="alert r"><span style="width:42px;height:42px;border-radius:50%;background:var(--bad);display:grid;place-items:center;flex-shrink:0">${I.badI}</span><div><b style="color:var(--bad)">${pct!=null?`Abaixo do esperado: ${pct}%`:'Não houve a evolução esperada?'}</b><p class="sm">${esc(m.sigla)} · veja o sinal, a causa provável e o que fazer.</p></div></div></div>
  ${tabs('pb-'+id,[['sin','Sinais'],['cau','Causas'],['faz','O que fazer'],['tro','Trocar']],'faz')}
  <div class="pad stack" style="padding-top:14px">${body}</div>
  <div class="cta pad"><div class="grid2"><a class="btn out" href="#m-${id}">Voltar à trilha</a><a class="btn" href="#q-${condsOf(id)[0].id}">Ver outro método</a></div></div>`;
}

function vPacientes(){
  const q = (S.pq||'').toLowerCase();
  const list = S.patients.filter(p=>!q || (p.nome||'').toLowerCase().includes(q)).sort((a,b)=>(a.nome||'').localeCompare(b.nome||''));
  return `${hdr('Meus pacientes','#', `<a class="ib" href="#novo" aria-label="Novo paciente" style="margin-right:-8px;color:var(--p)">${I.plus}</a>`)}
  <div class="pad stack">
    ${S.patients.length?`<div class="search">${I.search}<input id="pq" type="search" value="${esc(S.pq||'')}" placeholder="Buscar paciente" aria-label="Buscar paciente" style="border:1px solid var(--line)"></div>`:''}
    ${!S.ready?'<p class="mut">Carregando…</p>': list.length ? list.map(p=>{ const c=condById(p.quadro), mm=M[p.metodo]; const ss=sessOf(p.id); const last=ss[ss.length-1]; return `<a class="li" href="#p-${p.id}">${avatar(p,50)}<span class="tx"><b>${esc(p.nome)}</b><span>${esc([age(p.nasc), c?.nome, mm?.sigla].filter(Boolean).join(' · '))}</span><span>${last?`Última sessão: ${fmtDate(last.data)} · ${last.pct}%`:'Nenhuma sessão registrada'}</span></span>${I.chev}</a>`; }).join('')
      : S.patients.length ? `<p class="mut">Nenhum paciente com esse nome.</p>` : `<div class="empty">${I.user}<b style="color:var(--ink);font-size:16px">Nenhum paciente cadastrado</b><p class="sm">Cadastre o primeiro paciente para registrar sessões, evolução e anamnese.</p><a class="btn sm" href="#novo" style="max-width:280px">${I.plus} Cadastrar paciente</a><button type="button" class="tlink" data-act="exemplo" style="justify-self:center">Criar um paciente de exemplo</button></div>`}
  </div>`;
}

const ANAM = [['queixa','Queixa principal'],['gestacao','Gestação e parto'],['desenv','Desenvolvimento motor e da linguagem'],['saude','Saúde e audição (exames, otites, medicação)'],['escola','Escola e aprendizagem'],['familia','Família e rotina'],['interesses','Interesses e reforçadores'],['obs','Outras observações']];
function vForm(id){
  const p = id ? patient(id) : {}; if(id && !p) return vPacientes();
  const conds = CONDS.map(c=>`<option value="${c.id}" ${p.quadro===c.id?'selected':''}>${c.nome} — ${c.longo}</option>`).join('');
  const q = p.quadro || CONDS[0].id;
  const mets = condById(q).metodos.map(mid=>`<option value="${mid}" ${p.metodo===mid?'selected':''}>${M[mid].sigla} — ${M[mid].nome}</option>`).join('');
  return `${hdr(id?'Editar paciente':'Novo paciente', id?'#p-'+id:'#pacientes')}
  <form class="pad stack" id="pform" novalidate>
    <label class="f">Nome completo *<input type="text" id="f-nome" required value="${esc(p.nome)}" autocomplete="off"></label>
    <div class="grid2"><label class="f">Nascimento<input type="date" id="f-nasc" value="${esc(p.nasc)}"></label><label class="f">Frequência<input type="text" id="f-freq" placeholder="2× por semana" value="${esc(p.freq)}"></label></div>
    <label class="f">Quadro principal<select id="f-quadro">${conds}</select></label>
    <label class="f">Nível / observação do diagnóstico<input type="text" id="f-nivel" placeholder="Ex.: Nível 1 de suporte" value="${esc(p.nivel)}"></label>
    <label class="f">Método atual<select id="f-metodo"><option value="">Definir depois</option>${mets}</select></label>
    <div class="grid2"><label class="f">Responsável<input type="text" id="f-resp" value="${esc(p.resp)}"></label><label class="f">Telefone<input type="tel" id="f-tel" value="${esc(p.tel)}"></label></div>
    <div class="grid2"><label class="f">Próxima sessão<input type="date" id="f-pdata" value="${esc(p.proxData)}"></label><label class="f">Horário<input type="time" id="f-phora" value="${esc(p.proxHora)}"></label></div>
    <p class="sm mut" id="ferr" hidden></p>
    <div class="cta" style="padding-left:0;padding-right:0"><button type="submit" class="btn">${id?'Salvar alterações':'Cadastrar paciente'}</button>${id?`<button type="button" class="btn ghost sm" data-act="askdel" data-id="${id}" style="margin-top:10px;color:var(--bad)">Excluir paciente</button>`:''}</div>
  </form>`;
}

function vPaciente(id){
  const p = patient(id); if(!p) return S.ready ? `${hdr('Paciente','#pacientes')}<div class="pad empty">Paciente não encontrado.</div>` : '<p class="pad mut">Carregando…</p>';
  S.ctxPid = id; ls.set('ctxPid', id);
  const t = curTab('pac','res'); const c=condById(p.quadro); const ss = sessOf(p.id); const mm = M[p.metodo];
  let body = '';
  if(t==='res'){
    const used = [...new Set(ss.map(s=>s.mid))];
    const st = mm ? blkStatus(p.id, p.metodo) : null;
    body = `${used.length?`<div class="card stack" style="gap:12px"><div class="row" style="justify-content:space-between"><h3>Progresso por método</h3><button type="button" class="tlink" data-tab="pac:evo" style="min-height:32px">Ver evolução →</button></div>${used.map(mid=>{ const l=sessOf(p.id,mid); const last=l[l.length-1]; return `<div class="prog"><span>${esc(M[mid].sigla)} · etapa ${last.blk+1}</span><span class="bar"><i style="width:${last.pct}%;background:${last.pct>=80?'#2FA85A':last.pct>=50?'#E08A1E':'#C2453E'}"></i></span><b style="text-align:right">${last.pct}%</b></div>`; }).join('')}</div>`:`<div class="card"><p class="mut">Ainda não há sessões registradas.</p></div>`}
    <div class="grid2"><div class="kpi"><span>Método atual</span><b style="font-size:15px">${mm?esc(mm.sigla):'—'}</b></div><div class="kpi"><span>Atendimentos</span><b style="font-size:15px">${porDia(ss).length}${p.freq?' · '+esc(p.freq):''}</b></div></div>
    ${mm?`<a class="li" href="#s-${p.metodo}-${st.cur}"><span class="mic" style="background:var(--pl);width:46px;height:46px">${I.cal}</span><span class="tx"><b>Próxima sessão</b><span style="font-weight:700;color:var(--p);font-size:14px">${p.proxData?fmtDate(p.proxData)+(p.proxHora?' · '+esc(p.proxHora):''):'Data não definida'}</span><span>${esc(mm.sigla)} · Etapa ${st.cur+1} · ${esc(mm.sess[st.cur].t)}</span></span>${I.chev}</a>`:`<a class="btn out sm" href="#q-${p.quadro}">Escolher método para ${esc(p.nome.split(' ')[0])}</a>`}
    <button type="button" class="btn out sm" data-act="troca" data-id="${p.id}">${mm?'Trocar método':'Definir método'}</button>
    ${trocasHTML(p)}
    ${p.resp||p.tel?`<div class="card sm"><b>Responsável:</b> ${esc(p.resp||'—')}${p.tel?` · <span style="user-select:all">${esc(p.tel)}</span>`:''}</div>`:''}`;
  } else if(t==='evo'){
    const dias = porDia(ss); const last10 = dias.slice(-10);
    const lastBy = {}; ss.forEach(s=>{ lastBy[s.mid+':'+s.blk]=s; }); const noCrit = Object.values(lastBy).filter(s=>s.pct>=80).length;
    body = last10.length ? `<div class="card"><b>Acerto por atendimento</b><div class="chart" style="margin-top:12px;height:150px"><span class="meta" style="bottom:80%"></span>${last10.map((d,k)=>`<div class="col ${k===last10.length-1?'last':''}" title="${d.pct}%${d.regs.length>1?' · '+d.regs.length+' etapas no mesmo dia':''}"><i style="height:${Math.max(4,d.pct)}%"></i><span>${fmtDate(d.data).slice(0,5)}${d.regs.length>1?`<em class="ndia">${d.regs.length}</em>`:''}</span></div>`).join('')}</div><p class="sm mut" style="margin-top:6px">${last10.length===1?'1 atendimento':'Últimos '+last10.length+' atendimentos'} · cada barra é um dia · linha tracejada = meta 80%</p>${dias.some(d=>d.regs.length>1)?`<p class="sm" style="margin-top:6px;color:var(--warn);font-weight:700">O número sobre a data indica quantas etapas foram registradas no mesmo dia. A barra mostra o acerto somado do dia.</p>`:''}</div>
      <div class="grid3"><div class="kpi"><b>${Math.round(dias.reduce((a,d)=>a+d.pct,0)/dias.length)}%</b><span>Média geral</span></div><div class="kpi"><b>${Math.max(...dias.map(d=>d.pct))}%</b><span>Melhor atendimento</span></div><div class="kpi"><b>${noCrit}</b><span>Etapas no critério</span></div></div>` : `<div class="card"><p class="mut">A evolução aparece aqui depois do primeiro atendimento registrado.</p></div>`;
  } else if(t==='ses'){
    body = ss.length ? [...ss].reverse().map(s=>{ const m=M[s.mid]; const d=decision(s.pct); return `<details class="more"><summary><span style="display:flex;flex-direction:column;gap:2px"><span>${fmtDate(s.data)} · ${esc(m?.sigla||s.mid)} · Etapa ${s.blk+1}</span><span class="sm" style="font-weight:700;color:${d.k==='g'?'var(--ok)':d.k==='y'?'var(--warn)':'var(--bad)'}">${s.pct}% · ${d.t}</span></span>${I.chev}</summary><div class="stack" style="gap:10px">${s.acts.map(a=>`<div><b class="sm">${esc(a.t)}</b><p class="sm mut">${a.y} acertos · ${a.n} erros · apoio: ${esc(a.apoio)}</p>${a.obs?`<p class="sm">“${esc(a.obs)}”</p>`:''}${(a.media||[]).length?`<div class="media" style="margin-top:4px">${a.media.map(f=>f.url?`<a href="${esc(f.url)}" target="_blank" rel="noopener">${esc(f.name)}</a>`:`<span>${esc(f.name)}</span>`).join('')}</div>`:''}</div>`).join('')}${s.nota?`<p class="sm"><b>Nota da sessão:</b> ${esc(s.nota)}</p>`:''}<button type="button" class="btn ghost sm" data-fam="${s.id}">Orientação para a família</button></div></details>`; }).join('') : `<div class="card"><p class="mut">Nenhuma sessão registrada ainda.</p></div>`;
  } else {
    const an = p.anamnese || {};
    body = `<form id="aform" class="stack">${ANAM.map(([k,l])=>`<label class="f">${l}<textarea id="a-${k}" rows="3">${esc(an[k])}</textarea></label>`).join('')}<button type="submit" class="btn">Salvar anamnese</button>${an.atualizada?`<p class="sm mut">Atualizada em ${fmtDate(an.atualizada)}</p>`:''}</form>`;
  }
  return `${hdr('Perfil do paciente','#pacientes', `<a class="tlink" href="#ed-${p.id}">Editar</a>`)}
  <div class="pad"><div class="card row" style="gap:14px;flex-wrap:nowrap">${avatar(p,66)}<div style="display:flex;flex-direction:column;gap:2px;min-width:0"><b style="font-size:18px">${esc(p.nome)}</b><span class="sm mut">${esc(age(p.nasc)||'Idade não informada')}</span><span class="sm mut">${esc([c?.nome, p.nivel].filter(Boolean).join(' · '))}</span></div></div></div>
  ${tabs('pac',[['res','Resumo'],['evo','Evolução'],['ses','Sessões'],['ana','Anamnese']])}
  <div class="pad stack" style="padding-top:14px">${body}</div>
  ${t==='res'||t==='evo'?`<div class="cta pad"><button type="button" class="btn" data-act="planfor" data-id="${p.id}">Planejar sessão ${I.arrow}</button></div>`:''}`;
}

function vBrincadeiras(){
  const f = S.bf || 'todas'; const tipos = ['todas', ...new Set(Object.values(PLAY).map(p=>p.tipo))];
  const keys = Object.keys(PLAY).filter(k=>f==='todas'||PLAY[k].tipo===f);
  return `${hdr('Brincadeiras para imprimir','#')}
  <div class="pad stack"><p class="mut">Jogos, cartas e tabuleiros prontos para usar nas atividades. Toque para ver e baixar.</p>
    <div class="row" role="group" aria-label="Filtrar por tipo">${tipos.map(t=>`<button type="button" class="tagp" data-bf="${t}" style="cursor:pointer;${t===f?'background:var(--p);color:#fff;border-color:var(--p)':'background:#fff'}">${t==='todas'?'Todas':t}</button>`).join('')}</div>
    ${keys.map(k=>{ const ms = methodsOfPlay(k).map(id=>M[id].sigla); return `<button type="button" class="li" data-play="${k}"><span class="mic" style="background:#FFF1DE;width:48px;height:48px">${I.print}</span><span class="tx"><b>${esc(PLAY[k].t)}</b><span>${esc(PLAY[k].tipo)}${ms.length?' · '+esc(ms.slice(0,4).join(', '))+(ms.length>4?'…':''):''}</span></span>${I.chev}</button>`; }).join('')}
  </div>`;
}

/* ---------- Modais ---------- */
function openPane(html, side=false){ closePane(); const d=document.createElement('div'); d.className='ov'+(side?' side':''); d.id='ov'; d.innerHTML=`<div class="pane" role="dialog" aria-modal="true">${html}</div>`; document.body.appendChild(d); d.addEventListener('click',e=>{ if(e.target===d) closePane(); }); const f=d.querySelector('button,a,input'); if(f) f.focus(); }
function closePane(){ const d=$('#ov'); if(d) d.remove(); if(S.demoT){ clearInterval(S.demoT); S.demoT=null; } }
function toast(t){ const o=$('.toast'); if(o) o.remove(); const d=document.createElement('div'); d.className='toast'; d.setAttribute('role','status'); d.textContent=t; document.body.appendChild(d); setTimeout(()=>d.remove(),2600); }

function pageHTML(k){ return `<div class="page"><h2>${PLAY[k].t}</h2><div class="pg-sub">FonoTrilha · brincadeira para imprimir · ${PLAY[k].tipo}</div>${PLAY[k].h()}<div class="pg-foot">Material de apoio para uso clínico. Adapte ao paciente.</div></div>`; }
function openPlay(k){
  openPane(`<div class="pane-h"><h3>${esc(PLAY[k].t)}</h3><button class="ib" type="button" data-act="close" aria-label="Fechar">${I.close}</button></div><div class="sheet-scroll">${pageHTML(k)}</div><p class="sm mut pad" id="dlmsg" hidden style="padding-top:8px"></p><div class="pane-f"><button type="button" class="btn" data-dl="${k}">Baixar para imprimir</button></div>`);
}
async function downloadPlay(k){
  const msg=$('#dlmsg'); msg.hidden=false; msg.textContent='Preparando o arquivo…';
  const css=[...document.querySelectorAll('style')].map(s=>s.textContent).join('\n');
  const doc=`<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${PLAY[k].t}</title><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;700;800&display=swap"><style>${css}
@page{size:A4;margin:12mm} body{background:#fff;margin:0} .page{max-width:none;padding:0;border-radius:0} .pg-grid.c4{grid-template-columns:repeat(4,1fr)!important}.pg-grid.c6{grid-template-columns:repeat(6,1fr)!important}.pg-owl,.pg-sfa{grid-template-columns:repeat(3,1fr)!important}.pg-card,.pg-domino .d{break-inside:avoid}</style></head><body>${pageHTML(k)}<script>window.addEventListener('load',function(){setTimeout(function(){window.print()},500)})<\/script></body></html>`;
  if(NeonStore){ const w = window.open(URL.createObjectURL(new Blob([doc],{type:'text/html'})), '_blank'); msg.textContent = w ? 'A brincadeira abriu em outra aba com a janela de impressão (A4 ou “Salvar como PDF”).' : 'Permita pop-ups deste site para abrir a impressão.'; return; }
  try{ const dl = window.claude&&window.claude.use ? await window.claude.use('downloads') : null;
    if(!dl){ msg.textContent='O download não está disponível nesta visualização. Abra o app no claude.ai pelo navegador.'; return; }
    await dl.save({filename:'brincadeira-'+k.replace(/_/g,'-')+'.html', data:doc}); msg.textContent='Arquivo salvo. Abra no navegador: a janela de impressão aparece sozinha (A4 ou “Salvar como PDF”).';
  }catch(e){ msg.textContent = e&&e.code==='declined' ? 'Download cancelado.' : 'Não foi possível baixar agora. Tente de novo.'; }
}
function openDemo(){
  const r=S.run; const a=M[r.mid].sess[r.blk].at[r.i]; const ak=actKey(r.mid,r.blk,r.i); let k=0;
  const paint=()=>{ const t=$('#demotxt'); if(!t) return; const ill=$('#demoill'); if(ill) ill.innerHTML=cena(ak, a.passos[k]); t.innerHTML=`<span class="num" style="display:inline-grid;margin-right:8px">${k+1}</span>${esc(a.passos[k])}`; document.querySelectorAll('.demo-steps i').forEach((el,j)=>el.classList.toggle('on',j<=k)); };
  openPane(`<div class="pane-h"><h3>Demonstração · ${esc(a.t)}</h3><button class="ib" type="button" data-act="close" aria-label="Fechar">${I.close}</button></div><div class="pane-b"><div class="ill demo-ill" id="demoill"></div><div class="demo-steps">${a.passos.map(()=>'<i></i>').join('')}</div><p class="demo-txt" id="demotxt" aria-live="polite"></p><div class="grid3"><button type="button" class="btn ghost sm" id="dprev">Anterior</button><button type="button" class="btn ghost sm" id="dpause">Pausar</button><button type="button" class="btn sm" id="dnext">Próximo</button></div><p class="sm mut">A demonstração avança sozinha a cada passo. Os vídeos gravados das atividades entram aqui.</p></div>`);
  paint();
  const go=d=>{ k=(k+d+a.passos.length)%a.passos.length; paint(); };
  S.demoT=setInterval(()=>go(1),4200);
  $('#dprev').onclick=()=>go(-1); $('#dnext').onclick=()=>go(1);
  $('#dpause').onclick=e=>{ if(S.demoT){clearInterval(S.demoT);S.demoT=null;e.target.textContent='Continuar';} else {S.demoT=setInterval(()=>go(1),4200);e.target.textContent='Pausar';} };
}
function openPicker(mid, blk){
  const list=[...S.patients].sort((a,b)=>(a.nome||'').localeCompare(b.nome||''));
  openPane(`<div class="pane-h"><h3>Para qual paciente?</h3><button class="ib" type="button" data-act="close" aria-label="Fechar">${I.close}</button></div><div class="pane-b">${list.map(p=>`<button type="button" class="li" data-startp="${p.id}" data-mid="${mid}" data-blk="${blk}">${avatar(p,42)}<span class="tx"><b>${esc(p.nome)}</b><span>${esc([age(p.nasc), condById(p.quadro)?.nome].filter(Boolean).join(' · '))}</span></span>${I.chev}</button>`).join('')||'<p class="mut">Nenhum paciente cadastrado ainda.</p>'}<a class="btn out sm" href="#novo" data-act="close">${I.plus} Cadastrar novo paciente</a><button type="button" class="btn ghost sm" data-startp="" data-mid="${mid}" data-blk="${blk}">Treinar sem paciente (não salva no prontuário)</button></div>`);
}
function openMenu(){
  openPane(`<div class="pane-h"><h3>FonoTrilha</h3><button class="ib" type="button" data-act="close" aria-label="Fechar">${I.close}</button></div><div class="pane-b nav">
    <a href="#" data-act="close">${I.layers.replace('28','22').replace('28','22')} Início</a><a href="#pacientes" data-act="close">${I.user.replace(/28/g,'22')} Meus pacientes</a><a href="#quadros" data-act="close">${I.cal.replace(/28/g,'22')} Quadros e métodos</a><a href="#brincadeiras" data-act="close">${I.play.replace(/28/g,'22')} Brincadeiras para imprimir</a><a href="#capacitacao" data-act="close">${I.layers.replace(/28/g,'22')} Capacitação</a><button type="button" data-act="perfil">${I.user.replace(/28/g,'22')} Seu nome</button>
    <p class="sm mut" style="padding:12px">Guia de apoio ao planejamento clínico com base na literatura citada em cada método. Não substitui a avaliação individual nem as formações oficiais dos métodos registrados (PECS, Denver, JASPER, NDP3, Hanen).</p>
    <p class="sm mut" style="padding:0 12px">${S.mode==='nuvem'||S.mode==='neon'?'Seus dados ficam salvos na sua conta, visíveis só para você.':'Seus dados estão salvos neste navegador.'}</p>${S.mode==='neon'&&S.uid?`<p class="sm mut" style="padding:8px 12px 0">Conectada como <b>${esc((NeonStore.user&&NeonStore.user.email)||'')}</b></p><button type="button" class="btn ghost sm" style="margin:8px 12px" data-act="logout">Sair da conta</button>`:''}</div>`, true);
}
function openPerfil(){
  openPane(`<div class="pane-h"><h3>Seu nome</h3><button class="ib" type="button" data-act="close" aria-label="Fechar">${I.close}</button></div><form class="pane-b" id="nform"><label class="f">Como quer ser chamada(o)?<input type="text" id="n-nome" value="${esc(S.profile.nome)}" placeholder="Ex.: Dra. Mariana"></label><button type="submit" class="btn">Salvar</button></form>`);
}

/* ---------- Busca ---------- */
function search(q){
  const r=$('#results'); if(!r) return; const n=s=>String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,''); const nq=n(q.trim());
  if(nq.length<2){ r.hidden=true; return; }
  const hits=[];
  S.patients.forEach(p=>{ if(n(p.nome).includes(nq)) hits.push(`<button type="button" data-go="#p-${p.id}"><b>${esc(p.nome)}</b> <small>· paciente</small></button>`); });
  CONDS.forEach(c=>{ if(n(c.nome+' '+c.longo).includes(nq)) hits.push(`<button type="button" data-go="#q-${c.id}"><b>${c.nome}</b> <small>· quadro</small></button>`); });
  Object.entries(M).forEach(([id,m])=>{ if(n([m.nome,m.sigla].join(' ')).includes(nq)) hits.push(`<button type="button" data-go="#m-${id}"><b>${esc(m.sigla)}</b> — ${esc(m.nome)} <small>· método</small></button>`);
    m.sess.forEach((s,i)=>s.at.forEach(a=>{ if(n(a.t).includes(nq)) hits.push(`<button type="button" data-go="#s-${id}-${i}">${esc(a.t)} <small>· atividade de ${esc(m.sigla)}</small></button>`); })); });
  Object.entries(PLAY).forEach(([k,p])=>{ if(n(p.t).includes(nq)) hits.push(`<button type="button" data-play="${k}">${esc(p.t)} <small>· brincadeira</small></button>`); });
  r.innerHTML = hits.length ? hits.slice(0,14).join('') : '<p class="sm mut" style="padding:10px">Nada encontrado. Tente “PECS”, “afasia” ou “rima”.</p>'; r.hidden=false;
}

/* ---------- Roteamento ---------- */
let lastHash = null;
function render(){
  const h = location.hash.replace('#','');
  const app = $('#main'); let html; const focusId = document.activeElement && document.activeElement.id;
  if(S.needLogin) html=vLogin();
  else if(!h) html=vHome();
  else if(h==='quadros') html=vQuadros();
  else if(h.startsWith('q-') && condById(h.slice(2))) html=vCond(condById(h.slice(2)));
  else if(h.startsWith('m-') && M[h.slice(2)]) html=vMethod(h.slice(2));
  else if(/^s-[a-z]+-\d+$/.test(h)){ const [,mid,b]=h.split('-'); html = M[mid]&&M[mid].sess[+b] ? vSessao(mid,+b) : vHome(); }
  else if(h==='atv') html=vAtividade();
  else if(h==='reg') html=vRegistro();
  else if(h==='res') html=vResultado();
  else if(h.startsWith('pb-') && M[h.slice(3)]) html=vPlanoB(h.slice(3));
  else if(h==='pacientes') html=vPacientes();
  else if(h==='novo') html=vForm(null);
  else if(h.startsWith('ed-')) html=vForm(h.slice(3));
  else if(h.startsWith('p-')) html=vPaciente(h.slice(2));
  else if(h==='brincadeiras') html=vBrincadeiras();
  else if(h==='capacitacao') html=vCapList();
  else if(h.startsWith('cap-') && M[h.slice(4)]) html=vCap(h.slice(4));
  else if(h.startsWith('quiz-') && M[h.slice(5)]) html=vQuiz(h.slice(5));
  else html=vHome();
  // não redesenhar enquanto o usuário digita num formulário
  if(lastHash===h && document.activeElement && ['TEXTAREA','INPUT','SELECT'].includes(document.activeElement.tagName) && document.activeElement.type!=='checkbox' && document.activeElement.id!=='q') return;
  app.innerHTML = html;
  if(lastHash!==h) window.scrollTo(0,0);
  lastHash = h;
  if(focusId==='pq'){ const el=$('#pq'); if(el){ el.focus(); el.setSelectionRange(el.value.length,el.value.length); } }
}

function saveRun(){ ls.set('run', S.run); }
function startRun(pid, mid, blk){
  S.run = { pid: pid||null, mid, blk:+blk, i:0, start:new Date().toISOString(), acts: M[mid].sess[+blk].at.map((a,j)=>({ t:a.t, y:0, n:0, hist:[], apoio:apoiosOf(mid, actKey(mid,+blk,j))[0], obs:'', media:[] })) };
  if(pid){ S.ctxPid=pid; ls.set('ctxPid',pid); }
  saveRun(); closePane(); location.hash='atv';
}
async function exemplo(){
  const id = await Store.savePatient({ nome:'Lucas Exemplo', nasc:'2021-08-14', quadro:'tea', nivel:'Nível 1 de suporte (exemplo)', metodo:'jasper', resp:'Responsável exemplo', tel:'', freq:'2× por semana', proxData: todayISO(), proxHora:'14:00', exemplo:true, anamnese:{ queixa:'Paciente fictício para conhecer o app.', interesses:'Carrinhos, bolhas de sabão, música' } });
  const base = M.jasper.sess;
  const mk = (blk, d, ys, ns) => Store.saveSession({ pid:id, mid:'jasper', blk, data:d, pct: Math.round(ys.reduce((a,b)=>a+b,0)/(ys.reduce((a,b)=>a+b,0)+ns.reduce((a,b)=>a+b,0))*100), acts: base[blk].at.map((a,j)=>({ t:a.t, y:ys[j]||0, n:ns[j]||0, apoio:'Gesto', obs:'', media:[] })), exemplo:true });
  const day = n => { const d=new Date(); d.setDate(d.getDate()-n); return d.toISOString(); };
  await mk(0, day(14), [6], [4]); await mk(0, day(10), [8], [2]); await mk(1, day(5), [7], [3]);
  toast('Paciente de exemplo criado'); location.hash='p-'+id;
}

/* ---------- Eventos ---------- */
document.addEventListener('click', async e=>{
  const t = e.target.closest('[data-act],[data-go],[data-tab],[data-play],[data-dl],[data-prep],[data-apoio],[data-startp],[data-pbsel],[data-bf],[data-ctx],[data-pb],[data-fam],[data-capf],[data-capopen],[data-caplido],[data-qans],[data-dur]');
  if(!t){ const r=$('#results'); if(r && !e.target.closest('.search')) r.hidden=true; return; }
  if(t.dataset.ctx!==undefined){ S.ctxPid = t.dataset.ctx || null; ls.set('ctxPid', S.ctxPid); }
  if(t.dataset.pb!==undefined){ S.pbPct = t.dataset.pb==='' ? null : +t.dataset.pb; S.pbSel=0; }
  if(t.dataset.act==='outra'){ if(S.run){ S.run.outra=!S.run.outra; saveRun(); render(); } return; }
  if(t.dataset.dur){ ls.set('dur', +t.dataset.dur); render(); return; }
  if(t.dataset.go){ e.preventDefault(); location.hash=t.dataset.go; return; }
  if(t.dataset.tab){ const [k,v]=t.dataset.tab.split(':'); S.tab[k]=v; render(); return; }
  if(t.dataset.play){ e.preventDefault(); openPlay(t.dataset.play); return; }
  if(t.dataset.dl){ downloadPlay(t.dataset.dl); return; }
  if(t.dataset.bf){ S.bf=t.dataset.bf; render(); return; }
  if(t.dataset.fam){ const s=S.sessions.find(x=>x.id===t.dataset.fam); if(s) openFam(s); return; }
  if(t.dataset.capf){ S.capf=t.dataset.capf; render(); return; }
  if(t.dataset.capopen!==undefined){ const i=+t.dataset.capopen; const cur = S.capOpen ?? -2; S.capOpen = (cur===i) ? -1 : i; render(); t.scrollIntoView&&$('[data-capopen="'+i+'"]')?.scrollIntoView({block:'start'}); return; }
  if(t.dataset.caplido!==undefined){ const id=t.dataset.id, i=+t.dataset.caplido; const cap={...(S.profile.cap||{})}; const c={...capOf(id)}; c.lidos=[...new Set([...(c.lidos||[]),i])]; cap[id]=c; S.capOpen = [0,1,2,3].find(k=>!c.lidos.includes(k)) ?? -1; await Store.saveProfile({cap}); render(); const nx=$('[data-capopen="'+S.capOpen+'"]'); if(nx) nx.scrollIntoView({block:'start'}); return; }
  if(t.dataset.qans!==undefined){ if(S.quiz.ans[S.quiz.i]!=null) return; S.quiz.ans[S.quiz.i]=+t.dataset.qans; render(); return; }
  if(t.dataset.pbsel!==undefined){ S.pbSel=+t.dataset.pbsel; S.tab['pb-'+location.hash.slice(4)]='faz'; render(); return; }
  if(t.dataset.apoio){ S.run.acts[S.run.i].apoio=t.dataset.apoio; saveRun(); render(); return; }
  if(t.dataset.startp!==undefined){ startRun(t.dataset.startp, t.dataset.mid, t.dataset.blk); return; }
  const a = t.dataset.act; if(!a) return;
  if(a==='close'){ closePane(); return; }
  if(a==='menu') return openMenu();
  if(a==='perfil') return openPerfil();
  if(a==='demo') return openDemo();
  if(a==='clearctx'){ S.ctxPid=null; ls.set('ctxPid',null); render(); return; }
  if(a==='fav'){ const id=t.dataset.id; const f=new Set(S.profile.favs||[]); f.has(id)?f.delete(id):f.add(id); await Store.saveProfile({favs:[...f]}); render(); return; }
  if(a==='signin'||a==='signup'){ return doLogin(a); }
  if(a==='lgmode'){ S.loginMode = S.loginMode==='cad'?'':'cad'; render(); return; }
  if(a==='logout'){ closePane(); return NeonStore && NeonStore.signOut(); }
  if(a==='troca'){ return openTroca(t.dataset.id, t.dataset.mid); }
  if(a==='trocaok'){ return confirmaTroca(t.dataset.id); }
  if(a==='manualok'){ const p=patient(S.ctxPid); if(!p) return; const k=t.dataset.mid+':'+t.dataset.blk; const et={...(p.etapas||{})}; if(et[k]) delete et[k]; else et[k]=todayISO(); await Store.savePatient({...p, etapas:et}); toast(et[k]?'Etapa concluída por decisão clínica':'Conclusão manual desfeita'); render(); return; }
  if(a==='start'){ const p=patient(S.ctxPid); if(p) return startRun(p.id, t.dataset.mid, t.dataset.blk); return openPicker(t.dataset.mid, t.dataset.blk); }
  if(a==='planfor'){ const p=patient(t.dataset.id); S.ctxPid=p.id; ls.set('ctxPid',p.id); if(p.metodo&&M[p.metodo]){ location.hash='s-'+p.metodo+'-'+blkStatus(p.id,p.metodo).cur; } else location.hash='q-'+p.quadro; return; }
  if(a==='cancelrun'){ openPane(`<div class="pane-h"><h3>Sair da sessão?</h3><button class="ib" type="button" data-act="close" aria-label="Fechar">${I.close}</button></div><div class="pane-b"><p>Os registros desta sessão ainda não foram salvos no prontuário.</p></div><div class="pane-f"><button type="button" class="btn ghost" data-act="close">Continuar sessão</button><button type="button" class="btn" style="background:var(--bad)" data-act="discard">Descartar e sair</button></div>`); return; }
  if(a==='discard'){ const r=S.run; S.run=null; saveRun(); closePane(); location.hash = r ? 's-'+r.mid+'-'+r.blk : ''; return; }
  if(a==='hit'||a==='miss'){ const x=S.run.acts[S.run.i]; if(a==='hit'){x.y++;x.hist.push('y');} else {x.n++;x.hist.push('n');} saveRun(); if(navigator.vibrate) try{navigator.vibrate(15)}catch(_){}; render(); return; }
  if(a==='undo'){ const x=S.run.acts[S.run.i]; const h=x.hist.pop(); if(h==='y')x.y--; else if(h==='n')x.n--; saveRun(); render(); return; }
  if(a==='nextact'){ const o=$('#obs'); if(o) S.run.acts[S.run.i].obs=o.value; const last=S.run.i===M[S.run.mid].sess[S.run.blk].at.length-1; if(last){ saveRun(); location.hash='res'; } else { S.run.i++; saveRun(); location.hash='atv'; render(); } return; }
  if(a==='saverun'){
    const r=S.run; const c=fixRun(r); t.disabled=true;
    if(r.pid){ try{ await Store.saveSession({ pid:r.pid, mid:r.mid, blk:r.blk, data:new Date().toISOString(), inicio:r.start, pct:c.pct, ok:c.ok, outra:!!r.outra, acts:r.acts.map(({hist,...x})=>x) });
        const p=patient(r.pid); if(p && p.metodo!==r.mid) await Store.savePatient({...p, metodo:r.mid, trocas:[...(p.trocas||[]), {de:p.metodo||'', para:r.mid, blk:r.blk, motivo:'Troca automática: atendimento registrado com este método.', data:new Date().toISOString()}]});
        toast('Sessão salva no prontuário'); }catch(err){ t.disabled=false; toast('Não foi possível salvar. Verifique a conexão e tente de novo.'); return; } }
    else toast('Treino concluído');
    S.lastRes = r; S.run=null; saveRun(); location.hash = r.pid ? 'p-'+r.pid : ''; if(r.pid) S.tab.pac='res'; return; }
  if(a==='exemplo') return exemplo();
  if(a==='famrun'){ const r=S.run||S.lastRes; if(!r) return; const c=calcRun(r); openFam({pid:r.pid, mid:r.mid, blk:r.blk, pct:c.pct, data:new Date().toISOString(), acts:r.acts}); return; }
  if(a==='famcopy'){ const ta=$('#famtxt'); const msg=$('#fammsg'); try{ await navigator.clipboard.writeText(ta.value); msg.hidden=false; msg.textContent='Texto copiado. Cole no WhatsApp ou onde preferir.'; }catch(_){ ta.focus(); ta.select(); msg.hidden=false; msg.textContent='Texto selecionado: use Copiar do seu celular.'; } return; }
  if(a==='quizstart'||a==='quizagain'){ S.quiz={ id:t.dataset.id, seed:(Date.now()%100000)+1, i:0, ans:[] }; if(a==='quizagain'){ render(); window.scrollTo(0,0); } return; }
  if(a==='qnext'){ const Q=buildQuiz(t.dataset.id,S.quiz.seed); S.quiz.i++; if(S.quiz.i>=Q.length) await finishQuiz(t.dataset.id); render(); window.scrollTo(0,0); return; }
  if(a==='askdel'){ openPane(`<div class="pane-h"><h3>Excluir paciente?</h3><button class="ib" type="button" data-act="close" aria-label="Fechar">${I.close}</button></div><div class="pane-b"><p>O cadastro, a anamnese e todas as sessões deste paciente serão apagados. Essa ação não pode ser desfeita.</p></div><div class="pane-f"><button type="button" class="btn ghost" data-act="close">Cancelar</button><button type="button" class="btn" style="background:var(--bad)" data-act="dodel" data-id="${t.dataset.id}">Excluir</button></div>`); return; }
  if(a==='dodel'){ await Store.deletePatient(t.dataset.id); if(S.ctxPid===t.dataset.id){S.ctxPid=null;ls.set('ctxPid',null);} closePane(); toast('Paciente excluído'); location.hash='pacientes'; return; }
});
document.addEventListener('change', async e=>{
  const p=e.target.closest('[data-prep]');
  if(p){ const [k,j]=p.dataset.prep.split('|'); let v=ls.get(k,[]); v = p.checked ? [...new Set([...v,+j])] : v.filter(x=>x!==+j); ls.set(k,v); p.closest('label').classList.toggle('done',p.checked); const c=$('#prepc'); if(c) c.textContent=`${v.length} de ${document.querySelectorAll('[data-prep^="'+k+'|"]').length}`; return; }
  if(e.target.id==='f-quadro'){ const q=e.target.value; $('#f-metodo').innerHTML='<option value="">Definir depois</option>'+condById(q).metodos.map(mid=>`<option value="${mid}">${M[mid].sigla} — ${esc(M[mid].nome)}</option>`).join(''); return; }
  if(e.target.id==='media'){ const f=e.target.files[0]; if(!f) return; const msg=$('#mediamsg'); msg.hidden=false;
    if(!ASSETS){ msg.textContent= NeonStore ? 'Anexos de vídeo, áudio e foto chegam na próxima versão. Por enquanto, descreva nas observações.' : 'Os anexos ficam disponíveis no app publicado, com login. Por enquanto, descreva nas observações.'; return; }
    msg.textContent='Enviando '+f.name+'…';
    try{ const o=$('#obs'); if(o) S.run.acts[S.run.i].obs=o.value; const up=await ASSETS.upload(f); S.run.acts[S.run.i].media.push({id:up.id,url:up.url,name:f.name,type:f.type}); saveRun(); render(); toast('Anexo enviado'); }
    catch(err){ msg.textContent='Não foi possível enviar o arquivo (limite de 20 MB).'; } }
});
document.addEventListener('input', e=>{
  if(e.target.id==='q') search(e.target.value);
  if(e.target.id==='pq'){ S.pq=e.target.value; render(); }
  if(e.target.id==='famtxt'){ const w=$('#famwa'); if(w) w.href=w.href.split('?')[0]+'?text='+encodeURIComponent(e.target.value); }
  if(e.target.id==='obs' && S.run){ S.run.acts[S.run.i].obs=e.target.value; saveRun(); }
});
document.addEventListener('submit', async e=>{
  e.preventDefault();
  if(e.target.id==='pform'){
    const nome=$('#f-nome').value.trim(); const err=$('#ferr'); if(!nome){ err.hidden=false; err.textContent='Informe o nome do paciente.'; err.style.color='var(--bad)'; $('#f-nome').focus(); return; }
    const id = location.hash.startsWith('#ed-') ? location.hash.slice(4) : null; const old = id ? patient(id) : {};
    const p = {...old, id: id||undefined, nome, nasc:$('#f-nasc').value, freq:$('#f-freq').value.trim(), quadro:$('#f-quadro').value, nivel:$('#f-nivel').value.trim(), metodo:$('#f-metodo').value, resp:$('#f-resp').value.trim(), tel:$('#f-tel').value.trim(), proxData:$('#f-pdata').value, proxHora:$('#f-phora').value };
    try{ const nid = await Store.savePatient(p); toast(id?'Alterações salvas':'Paciente cadastrado'); location.hash='p-'+nid; }catch(_){ err.hidden=false; err.textContent='Não foi possível salvar. Tente de novo.'; }
    return;
  }
  if(e.target.id==='aform'){ const id=location.hash.slice(3); const p=patient(id); const an={}; ANAM.forEach(([k])=>an[k]=$('#a-'+k).value); an.atualizada=todayISO(); try{ await Store.savePatient({...p, anamnese:an}); toast('Anamnese salva'); }catch(_){ toast('Não foi possível salvar.'); } return; }
  if(e.target.id==='nform'){ await Store.saveProfile({nome:$('#n-nome').value.trim()}); closePane(); toast('Nome salvo'); render(); return; }
});
document.addEventListener('keydown', e=>{ if(e.key==='Escape') closePane(); });
window.addEventListener('hashchange', ()=>{ closePane(); if(location.hash.startsWith('#cap-')) S.capOpen=undefined; render(); });
render(); Store.init();
