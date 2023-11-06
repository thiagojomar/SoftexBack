import { iProduto } from "./iProduto";

export abstract class Computador implements iProduto {
    private ram: number;
    private ssd: number;
    private cpu: number;
    protected tipo: string;
    private preco: number;

    constructor(ram: number, ssd: number, cpu: number, tipo: string, preco: number) {
        this.ram = ram;
        this.ssd = ssd;
        this.cpu = cpu;
        this.tipo = tipo;
        this.preco = preco;
    }

    getRam(): number {
        return this.ram;
    }

    getSSD(): number {
        return this.ssd;
    }

    getCPU(): number {
        return this.cpu;
    }

    getTipo(): string {
        return this.tipo;
    }

    getPreco(): number {
        return this.preco;
    }

    toString(): string {
        return `Computador Tipo: ${this.tipo} | Mem. RAM: ${this.ram}GB | CPU: ${this.cpu}GHz | SSD: ${this.ssd}GB | Preço: R$${this.preco}`;
    }


}