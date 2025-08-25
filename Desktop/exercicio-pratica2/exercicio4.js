// exercicio4.js

const prompt = require("prompt-sync")(); // para ler entradas no terminal

// Entrada
let n1 = parseFloat(prompt("Digite o numero1: "));
let n2 = parseFloat(prompt("Digite o numero2: "));
let n3 = parseFloat(prompt("Digite o numero3: "));
let n4 = parseFloat(prompt("Digite o numero4: "));

// Processamento
let diferenca = (n1 * n2) - (n3 * n4);

// Saída
console.log("Diferença: " + diferenca.toFixed(1));