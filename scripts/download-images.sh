#!/usr/bin/env bash
# Lädt die Bilder, die bisher auf Base44 lagen, nach public/images herunter.
# Muss nur einmal laufen (vor der Base44-Kündigung). Wird von der GitHub Action "Bilder sichern" ausgeführt.
set -euo pipefail
cd "$(dirname "$0")/.."
mkdir -p public/images
while read -r url; do
  [ -z "$url" ] && continue
  file="public/images/$(basename "$url")"
  if [ ! -s "$file" ]; then
    echo "Lade $file"
    curl -fsSL --retry 3 -o "$file" "$url"
  fi
done < scripts/base44-images.txt
