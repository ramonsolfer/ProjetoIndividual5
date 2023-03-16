import readLineSync from 'readline-sync'
import chalk from 'chalk'

const propriedades = []
let input = ""
while (input != "sair"){
    propriedades.push(input)
    input=readLineSync.question(chalk.green("insira uma propriedade do CSS")).toLocaleLoweCase()

}
console.log(chalk.white.italic(propriedades.sort().join("\n"))) 