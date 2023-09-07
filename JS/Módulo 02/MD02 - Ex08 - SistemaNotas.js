/*O Código abaixo pede 3 notas do aluno informa a média das notas 
e caso o mesmo tenha uma média inferior a 7 informa que ele foi reprovado*/

var nota1, nota2, nota3, media;

nota1 = parseFloat(prompt("Insira a primeira nota: "));
nota2 = parseFloat(prompt("Insira a segunda nota: "));
nota3 = parseFloat(prompt("Insira a terceira nota: "));

media = (nota1 + nota2 + nota3)

media /= 3

console.log("A média do aluno é: " + media)

media >= 7 ? console.log("O Aluno foi APROVADO") : console.log("O Aluno foi REPROVADO")

/*O Código abaixo pede duas notas do aluno e informa quanto ele precisa tirar na
próxima avaliação para obter uma média 7*/

var n1, n2, n3, media;

n1 = parseFloat(prompt("Informe a primeira nota: "));
n2 = parseFloat(prompt("Informe a segunda nota: "));
media = n1 + n2;

console.log("Você obteve " + media + " pontos.");

n3 = 21 - media ;

console.log("Precisa de " + n3 +" na proxima prova para ser aprovado com a média 7.");