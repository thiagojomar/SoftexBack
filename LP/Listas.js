//Criando Listas.
var nome, idade, cor;

nome = ["Luiz", "Antonio", "Severino", "João", "Rodrigo", "José", "Paulo", "André", "Thiago", "Cássio"];
idade = [10, 35, 68, 54, 25, 29, 19, 27, 33, 80]
cor = ["Azul", "Roxo", "Vermelho", "Amarelo", "Rosa", "Lilas", "Laranja", "Preto", "Branco", "Verde"];

//Imprimindo as Listas.
console.log(nome);
console.log(idade);
console.log(cor);

//Fazendo alterações pontuais
idade.splice(5, 1, 65);
cor.splice(3, 1, "Azul-Marinho");

console.log(nome);
console.log(idade);
console.log(cor);