// generateSvgSprite.ts

import { globSync } from 'glob';
import fs from 'fs';
import { HTMLElement, parse } from 'node-html-parser';
import path from 'path';
import { optimize } from 'svgo';

const svgFiles = globSync('public/pixels/*.svg');
const symbols = [];

svgFiles.forEach(file => {
  const code = fs.readFileSync(file, 'utf-8');
  const result = optimize(code).data;
  const svgElement = parse(result).querySelector('svg');
  const symbolElement = parse('<symbol/>').querySelector('symbol');
  const fileName = path.basename(file, '.svg');

  svgElement.childNodes.forEach(child => symbolElement.appendChild(child));

  symbolElement.setAttribute('id', fileName);

  if (svgElement.attributes.viewBox) {
    symbolElement.setAttribute('viewBox', svgElement.attributes.viewBox);
  }

  symbols.push(symbolElement.toString());
});

const svgSprite = `<svg>${symbols.join('')}</svg>`;

fs.writeFileSync('src/components/Sprites.astro', svgSprite);