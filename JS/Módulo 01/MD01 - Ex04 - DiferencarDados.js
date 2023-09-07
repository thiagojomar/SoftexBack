var nome, salario, idade, diploma;

nome = String;
salario = Number;
idade = Number;
diploma = Boolean;

console.log("CADASTRO DE FUNCIONÁRIOS");

nome = String(prompt("Insira o seu nome: "));
salario = parseFloat(prompt("Insira o seu salário: "));
idade = parseInt(prompt("Qual a sua idade: "));
diploma = Boolean(prompt("Possui diploma? ( 1 - Sim | 2 - Não ) "));