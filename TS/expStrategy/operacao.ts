import { Strategy } from "./iStrategy";
import { Calculadora } from "./model/calculadora";
import { Divisao } from "./model/divisao";
import { Multiplicacao } from "./model/multiplicacao";
import { Soma } from "./model/soma";
import { Subtracao } from "./model/subtracao";
import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


console.log("BEM VINDO A CALCULADORA");

rl.question('Digite o primeiro número: ', (n1) => {
    rl.question('Digite o segundo número: ', (n2) => {
        rl.question("Selecione a operação desejada: \n1 - SOMA \n2 - SUBTRAÇÃO \n3 - MULTIPLICAÇÃO \n4 - DIVISÃO \nOpção:", (op) => {
            let strategy: Strategy;
            switch (op) {
                case "1":
                    strategy = new Soma();
                    break;
                case "2":
                    strategy = new Subtracao();
                    break;
                case "3":
                    strategy = new Multiplicacao();
                    break;
                case "4":
                    strategy = new Divisao();
                    break;
                default:
                    console.log("OPERAÇÃO INVALIDA!");
                    rl.close();
                    return                    
            }

            const calculator = new Calculadora(strategy);
            const resultado = calculator.calcular(parseInt(n1), parseInt(n2));
            console.log(`O resultado é: ${resultado}`);
            rl.close();
            
        })
    })
})
