import { Observer } from "./Observer";

export class Loja{
    private nome: string;
    private categoria: string;

    constructor(nome: string, categoria: string){
        this.nome = nome;
        this.categoria = categoria;
    }

    toString(): string{
        return `A Loja ${this.nome} vende produtos ${this.categoria}.`
    }

    publicarNovoProduto(text: string){
        Observer.publicarSpam(text)
    }
}