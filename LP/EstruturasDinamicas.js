class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.filho = new ListaEncadeada();
        this.proximo = null;
    }
}

class ListaEncadeada {
    constructor() {
        this.head = null;
        this.size = 0;
    }


    isEmpty() {
        return this.size === 0;
    }


    getSize() {
        return this.size;
    }


    addInicio(content) {
        const pessoa = new Pessoa(content, null);
        if (this.isEmpty()) {
            this.head = pessoa;
        } else {
            pessoa.next = this.head;
            this.head = pessoa;
        }
        this.size++
    }


    addFinal(content) {
        const pessoa = new Pessoa(content, null);
        if (this.isEmpty()) {
            this.head = pessoa;
        } else {
            let anterior = this.head;
            while (anterior.next) {
                anterior = anterior.next;
            }
            anterior.next = pessoa;
        }
        this.size++;
    }


    print() {
        if (this.head === null) {
            console.log(`A lista está vazia.`);
        } else {
            let atual = this.head;
            while (atual.next !== null) {
                console.log(atual.content);
                atual = atual.next;
            }
            console.log(atual.content);
        }
    }
}

var listaPessoas = new ListaEncadeada();

var Thiago = new Pessoa("Thiago Jomar", 34);
var Cassio = new Pessoa("Cássio César", 34);
var Arianna = new Pessoa("Arianna de Souza", 4);
var Cleybson = new Pessoa("Cleybson César", 28);
var Davi = new Pessoa("Davi Ezequiel", 5);
var Caio = new Pessoa("Caio César", 38);
var CaioJr = new Pessoa("Caio Júnior", 11);

listaPessoas.addFinal(Thiago);
listaPessoas.addFinal(Cassio);
listaPessoas.addFinal(Cleybson);
listaPessoas.addFinal(Caio);

Thiago.filho.addFinal(Arianna);
Cleybson.filho.addFinal(Davi);
Caio.filho.addFinal(CaioJr);

console.log(listaPessoas)