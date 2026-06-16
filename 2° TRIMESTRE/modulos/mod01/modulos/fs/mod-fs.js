
const fs = require(`fs`)

const arquivo = fs.readFileSync(`./festa.md`)
console.log(arquivo)    
const chalk = require(`chalk`).default
chalk.green(`Arquivo lido com sucesso!`)