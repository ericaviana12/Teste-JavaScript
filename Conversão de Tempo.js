/**
 * Conversão de Tempo (Minutos para Horas e minutos)
 * @author Erica Viana
 */

// Importar a biblioteca readline-sync
const input = require('readline-sync')

// Variáveis - O algoritmo
let minutos, horas, minutosRestantes

// Limpar a tela do console antes de uma nova entrada
console.clear()

// Exibir o texto entre "" (aspas)
console.log("Conversão de minutos para horas e minutos") // Exibe uma mensagem de introdução ao usuário

// Entrada - Atribuir valores as variáveis
minutos = Number(input.question("Digite o tempo em minutos: ")) // Solicita ao usuário que digite o tempo em minutos e converte para número

// Processamento - Fórmula para cálculo do código
horas = Math.floor(minutos / 60) // Cálculo das horas - Math.floor() - Arredonda para baixo o resultado da divisão de minutos por 60, obtendo o número total de horas.
minutosRestantes = minutos % 60 // Cálculo dos minutos restantes - O operador % (módulo) é utilizado para obter o restante da divisão de minutos por 60, que representa os minutos que não completam uma hora.

// Saída - Resultado do processamento
console.log(`${minutos} minutos equivale a ${horas} horas e ${minutosRestantes} minutos.`) // Exibe o resultado formatado, informando ao usuário a equivalência de minutos em horas e minutos.

// Comando para instalação da biblioteca readline-sync
// npm install readline-sync
