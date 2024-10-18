/**
 * Calculadora simples
 * @author Erica Viana
 */

// Importar bibliotecas necessárias
const input = require('readline-sync') // Biblioteca readline-sync para ler entradas do usuário
const colors = require('colors') // Biblioteca colors para adicionar cores ao texto no console

// Variáveis - O algoritmo
let num1, num2, operacao, resultado // Declara variáveis para armazenar os números, a operação e o resultado

// Limpar a tela do console antes de uma nova entrada
console.clear()

// Exibir o texto entre "" (aspas)
console.log("Calculadora simples")

// Entrada - Atribuir valores as variáveis
num1 = Number(input.question("Digite o primeiro numero: ")) // Solicita ao usuário o primeiro número e converte para número
num2 = Number(input.question("Digite o segundo numero: ")) // Solicita ao usuário o segundo número e converte para número
operacao = input.question("Escolha a operaçcao (+, -, *, /): ") // Solicita ao usuário que escolha uma operação

// Processamento - Fórmula para cálculo do código
switch (operacao) { // Inicia uma estrutura de controle switch para determinar a operação
    case '+': // Caso de soma
        resultado = num1 + num2 // Calcula a soma e armazena o resultado
        break // Interrompe a execução do switch
    case '-': // Caso de subtração
        resultado = num1 - num2 // Calcula a subtração e armazena o resultado
        break // Interrompe a execução do switch
    case '*': // Caso de multiplicação
        resultado = num1 * num2 // Calcula a multiplicação e armazena o resultado
        break // Interrompe a execução do switch
    case '/': // Caso de divisão
        if (num2 !== 0) {
            resultado = num1 / num2 // Divide num1 por num2 (se num2 não for zero)
        } else {
            resultado = 'Erro: divisão por zero' // Exibe erro para divisão por zero
        }
        break;
    default: 
        resultado = 'Operação inválida' // Exibe erro para operação inválida
}

// Saída - Resultado do processamento
console.log(`Resultado: ${resultado}`.blue); // Exibe o resultado formatado em azul

// Comando para instalação da biblioteca readline-sync e colors
// npm install readline-sync colors

-----

Explicação detalhada dos principais itens usados

Bibliotecas:
- readline-sync: Para entrada de dados pelo usuário.
- colors: Para exibir o resultado com cores.

Estrutura:
  Variáveis:
      num1 e num2 armazenam os números inseridos.
      operacao armazena a operação escolhida (+, -, *, /).
      resultado armazena o valor final da operação.
  Entrada:
      Lê dois números e a operação a ser realizada, utilizando input.question().
  Processamento:
      Utiliza a estrutura switch para escolher a operação a ser realizada. Dependendo da escolha do usuário, o cálculo correto é feito e armazenado na variável resultado.
  Saída:
      Exibe o resultado em azul com .blue
