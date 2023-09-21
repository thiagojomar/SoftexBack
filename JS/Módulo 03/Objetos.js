class Banco{
    constructor(nome, conta, saldo, tipoConta, agencia){
        this.nome = nome;
        this.conta = conta;
        this.saldo = saldo;
        this.tipoConta = tipoConta;
        this.agencia = agencia;
    }
    //buscar saldo
    extrato(){
        console.log(`Seu saldo é ${this.saldo}.`);
    }
    //depósito
    deposito(valor){
        console.log(`Saldo Antigo: ${this.saldo}.`);
       let novoSaldo =  this.saldo += valor;
       this.saldo = novoSaldo;
       console.log(`Saldo Atual: ${this.saldo}`);
    }
    //saque
    saque(valor){ 
        console.log(`Saldo Antigo: ${this.saldo}.`);
        let novoSaldo = this.saldo -= valor;
        this.saldo = novoSaldo;
        console.log(`Saldo Atual: ${this.saldo}`);
    }
    //numero da conta
    numConta(){
        console.log(`O número da sua conta é ${this.conta} e o da Agência é ${this.agencia}.`);	
    }
}
    
//Criando Conta
var usuario = new Banco();
window.alert("Bem vindo ao Banco JOMAR\nInciando o Sistema de Criação de Contas.")
usuario.nome = prompt("Informe seu nome completo:");
usuario.conta = Number(prompt("Informe a número da sua conta com 6 digitos: "));
usuario.agencia = Number(prompt("Informe o número da sua agência com 4 digitos: "));
usuario.tipoConta = prompt("Deseja abrir uma CC(Conta Corrente) ou CP(Conta Poupança");
usuario.saldo = parseFloat(prompt("Qual o valor do depósito incial: "));

window.alert(`Bem Vindo ao nosso Banco\n ${usuario.nome}\n sua conta foi criada com sucesso.`);
console.log(usuario)
var op = Number(prompt(`Dados da Conta.\n\t Ag: ${usuario.agencia}\n\t Conta: ${usuario.conta}\n\t Tipo de Conta: ${usuario.tipoConta}\n\t Saldo: ${usuario.saldo}\nDeseja Realizar alguma operação?\n (1 - Sim | 2 - Não)`));
if (op === 1) {
    
    do {
        let op2 = Number(prompt(`Insira o número correspondente a operação desejada:\n\t1 - Mostrar Extrato\n\t2 - Fazer Depósito\n\t3 - Fazer um Saque\n\t4 - Mostrar número da Conta`));
        switch (op2) {
            case 1:
                usuario.extrato();
                break;
                
            case 2:
                valor = parseFloat(prompt("Informe o Valor que você deseja depositar: "));
                usuario.deposito(valor);
                console.log(`Você fez um depósito de ${valor} e seu Saldo Atual é de ${usuario.saldo}`)
                break;
            
            case 3:
                valor = parseFloat(prompt("Informe o Valor que você deseja sacar: "));
                usuario.saque(valor);
                break;
            
            case 4:
                usuario.numConta();
                break;

            default:
                op2 = "Operação Invalida.";
                break;
        }
        console.log(`Seu Saldo Atual é: ${usuario.saldo}.`);
        var op3 = Number(prompt("Deseja Realizar mais alguma Operação?\n\t|1 - SIM |2- NÃO|"));
    } while (op3 === 1);
    console.log("Obrigado pelo seu tempo, volte sempre.");
} else {
    console.log(usuario);
    console.log("Obrigado pelo seu tempo, volte sempre.");
}



