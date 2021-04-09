const cssFolder = './lib/css/mode/';
const fs = require('fs');
const path = require('path');

let cssFile = `
import { css } from 'lit-element'\n
`;

fs.readdirSync(cssFolder).forEach(file => {
  const contents = fs.readFileSync(
    path.join(__dirname, cssFolder, file),
    'utf8'
  );
  const name = file.split('.')[0];

  cssFile += `export const css_mode_ea_${name} = css\`${contents}\`\n`
});

fs.writeFileSync('./src/CssMode.ts', cssFile)
