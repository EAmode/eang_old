import path from 'path'
import { readdirSync, readFileSync, writeFileSync } from 'fs'
import { fileURLToPath } from 'url'

const cssFolder = './lib/css/mode/'
const __dirname = path.dirname(fileURLToPath(import.meta.url))

let cssFile = `
import { css } from 'lit'\n
`

readdirSync(cssFolder).forEach(file => {
  const contents = readFileSync(path.join(__dirname, cssFolder, file), 'utf8')
  const name = file.split('.')[0]

  cssFile += `export const css_mode_ea_${name} = css\`${contents}\`\n`
})

writeFileSync('./src/CssMode.ts', cssFile)
