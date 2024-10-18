/**
 * Verificação de Número Par ou Ímpar
 * @author Erica Viana
 */

// Importar bibliotecas necessárias
const input = require('readline-sync') // Biblioteca readline-sync para ler entradas do usuário
const colors = require('colors') // Biblioteca colors para adicionar cores ao texto no console

// Variáveis - O algoritmo
let numero

// Limpar a tela do console antes de uma nova entrada
console.clear()

// Exibir o texto entre "" (aspas)
console.log("Verificação de número par ou ímpar") // Exibe uma mensagem de introdução ao usuário

// Entrada - Atribuir valores as variáveis
numero = Number(input.question("Digite um numero: ")) // Recebe o número do usuário

// Processamento (Fórmula para cálculo do código) e Saída (Resultado do processamento)
if (numero % 2 === 0) {
    console.log(`${numero} é par.`.green) // Exibe o resultado em verde se for par
} else {
    console.log(`${numero} é ímpar.`.red) // Exibe o resultado em vermelho se for ímpar
}

// Comando para instalação da biblioteca readline-sync e colors
// npm install readline-sync colors

-----

Explicação detalhada dos principais itens usados
    
Bibliotecas:
- readline-sync: Usada para capturar a entrada do usuário no terminal.
- colors: Utilizada para exibir o resultado com cores no console.

Estrutura:
    Variáveis:
        numero: armazena o número inserido pelo usuário.
    Entrada:
        Utiliza input.question() da biblioteca readline-sync para ler o número fornecido pelo usuário.
    Processamento:
        A verificação se o número é par ou ímpar é feita com a operação % (módulo). Se o resto da divisão por 2 for 0, o número é par.
    Saída:
        O resultado é exibido usando console.log(), com a cor verde (.green) se o número for par e vermelha (.red) se for ímpar.
