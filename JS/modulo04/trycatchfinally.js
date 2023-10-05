console.log("VAMOS DIVIDIR DOIS NÚMEROS INTEIROS?");
do {
    let num1 = parseInt(prompt("Digite o primeiro número: "));
    let num2 = parseInt(prompt("Digite o segundo número: "));
    try {
        let divisao = num1 / num2
        if (num2 <= 0 ) {
            throw new Error("Divisor inválido, o segundo número não pode conter letras e precisa ser maior que 0.")
        } else {
            console.log(`A divisão de ${num1}/${num2} é ${divisao}`);
        }

    } catch (e) {
        console.log(e);

    } finally {
        var rep = prompt("Deseja repetir a operação? ( S | N ) ").toUpperCase();

    }
} while (rep === "S");

