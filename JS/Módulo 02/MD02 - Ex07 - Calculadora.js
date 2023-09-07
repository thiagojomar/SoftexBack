var num1, num2, op, result, resto;


console.log("CALCULADORA");

num1 = Number(prompt("Insira o primero número: "));
num2 = Number(prompt("Insira o segundo número: "));
op = Number(prompt("Qual operação você deseja fazer? \n1 - Soma (+) \n2 - Subtração (-)\n3 - Multiplicação (*)\n4 - Divisão (/) "));

if(op===1){
    result = num1 + num2
    console.log(`${num1} + ${num2} = ${result}`)
}else if(op===2){
    result = num1 - num2
    console.log(`${num1} - ${num2} = ${result}`)
}else if(op===3){
    result = num1 * num2
    console.log(`${num1} x ${num2} = ${result}`)
}else if(op===4){
    result = num1 / num2
    resto = num1 % num2
    console.log(`${num1} / ${num2} = ${parseInt(result)}`)
    console.log(`Resto: ${resto}`)
}else{
    console.log("Operação Inválida.")
}