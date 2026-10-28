#!/bin/bash
# Gera index.html (artifact claude.ai) e web/index.html (site com Neon)
cd /home/claude/fono
JS="01-art.js 02-play.js 03-data-a.js 03-data-b.js 03-data-c.js 03-data-d.js 06-cena.js 07-logica.js 08-familia.js 09-evitar.js 09b-contagem.js 09c-roteiro.js 09d-depois.js 09e-medida.js 09f-troca.js 09g-neon.js 13-extra.js 11-app.js"
{ cat 10-head.html 12-body.html; echo '<script>'; cat $JS; echo '</script>'; } > index.html
mkdir -p web
cp /tmp/claude-0/-home-claude/8c8867bc-606d-5802-b5ca-95953405bd55/scratchpad/nb/neon.js web/neon.js
cat $JS > web/app.js
{ echo '<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">'; cat 10-head.html; echo '<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 64 64%22%3E%3Crect width=%2264%22 height=%2264%22 rx=%2214%22 fill=%22%230B6E74%22/%3E%3Ccircle cx=%2232%22 cy=%2232%22 r=%2212%22 fill=%22%23fff%22/%3E%3C/svg%3E"><meta name="theme-color" content="#0B6E74">'; echo '</head><body>'; cat 12-body.html;
  echo '<script>window.FT_NEON_URL="https://ep-muddy-voice-b6prijiz.c-2.sa-east-1.aws.neon.tech/neondb";</script>';
  echo '<script src="neon.js"></script><script src="app.js"></script></body></html>'; } > web/index.html
node --check web/app.js && echo BUILD_OK
