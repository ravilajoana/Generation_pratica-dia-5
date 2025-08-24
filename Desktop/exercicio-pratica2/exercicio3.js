// Entrada
let salarioBruto = 2000.00;
let adicionalNoturno = 500.00;
let horasExtras = 100.00;
let descontos = 200.00;

// Processamento
let salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos;

// Saída
console.log("Salário Líquido: " + salarioLiquido.toFixed(2));
