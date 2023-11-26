import { iSanduiche } from "./iSanduiche";

export abstract class Adicional implements iSanduiche{
    protected sanduiche: iSanduiche;

    constructor(sanduiche: iSanduiche) {
        this.sanduiche = sanduiche;
    }

    getDescricao(): string {
        return this.sanduiche.getDescricao();
    }

    getPreco(): number {
        return this.sanduiche.getPreco();
    }
}