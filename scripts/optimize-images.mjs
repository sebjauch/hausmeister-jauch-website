// Erzeugt aus den Originalbildern (originals/images) kleine WebP-Dateien für die Website (public/images).
// Aufruf: node scripts/optimize-images.mjs
import sharp from "sharp";
import { readdirSync, mkdirSync } from "node:fs";
import { parse } from "node:path";

const SRC = "originals/images";
const OUT = "public/images";
const LOGO = "744b80371_ChatGPTImage10Juni202615_54_43.png";
const ICON = "6bf64c176_websiteicon.png";

mkdirSync(OUT, { recursive: true });

for (const file of readdirSync(SRC).filter((f) => !f.startsWith("."))) {
  const { name } = parse(file);
  const input = `${SRC}/${file}`;
  if (file === LOGO) {
    await sharp(input).resize({ width: 1120, withoutEnlargement: true }).webp({ quality: 90, smartSubsample: true }).toFile(`${OUT}/logo.webp`);
    await sharp(input).resize({ width: 400 }).webp({ quality: 90, smartSubsample: true }).toFile(`${OUT}/logo-klein.webp`);
    await sharp(input).flatten({ background: "#ffffff" }).resize(1200, 630, { fit: "contain", background: "#ffffff" }).jpeg({ quality: 82 }).toFile(`${OUT}/vorschau.jpg`);
    continue;
  }
  if (file === ICON) {
    await sharp(input).resize(128, 128).webp({ quality: 90 }).toFile(`${OUT}/icon.webp`);
    await sharp(input).resize(64, 64).png().toFile(`${OUT}/favicon.png`);
    await sharp(input).flatten({ background: "#ffffff" }).resize(180, 180).png().toFile(`${OUT}/apple-touch-icon.png`);
    continue;
  }
  await sharp(input).rotate().resize({ width: 1200, height: 1200, fit: "inside", withoutEnlargement: true }).webp({ quality: 68 }).toFile(`${OUT}/${name}.webp`);
}
