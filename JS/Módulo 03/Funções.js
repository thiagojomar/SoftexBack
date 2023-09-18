//Função tradicional com parâmetros e um retorno de valor
function saudacao(nome) {
    window.alert(`Olá ${nome}, seja muito bem vindo!`)
}
var nome = prompt("Qual o seu nome: ")

saudacao(nome)

//Funcão tradicional com a palavra reservada "function" e sem nenhum parametro
function calc() {
    window.alert("Inicializando a Calculadora...")
}
calc()

//Função tradicional com parâmetros e um retorno de valor

function adicao(n1, n2) {
    return n1 + n2    
}

function subtracao(n1, n2) {
    return n1 - n2
}

function multiplicacao(n1, n2) {
    return n1 * n2
}

function divisao(n1, n2) {
    return n1 / n2
}

op = Number(prompt("Qual operação você deseja realizar:\nDigite o número correspondente. \n1 - Adição\n2 - Subtração\n3 - Multiplicação\n4 - Divisão"))
n1 = parseFloat(prompt("Digite um número: "));
n2 = parseFloat(prompt("Digite outro número: "));

if(op===1){
    let result = adicao(n1, n2);
    window.alert(`${n1} + ${n2} = ${result}`)
    
//Arrow Function com paramentros e que retorne um valor
}else if(op===2){
    let subt = (a,b) => {
        let result = a - b
        return result
    } 
    let result1 = subt(n1,n2)
    window.alert(`${n1} - ${n2} = ${result1}`)
}else if(op===3){
    let mult = (a, b) => (a * b);
    window.alert(`${n1} x ${n2} = ${mult(n1,n2)}`)
}else if(op===4){
    let div = (a, b) => (a / b);
    let rest = (a, b) => (a % b);
    window.alert(`${n1} / ${n2} = ${parseInt(div(n1,n2))}`)
    window.alert(`Resto: ${rest(n1,n2)}`)
}else{
    window.alert("Operação Inválida.")
};
