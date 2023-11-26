import { Adicional } from "./decorator";
import { iSanduiche } from "./iSanduiche";

export class Pepperoni extends Adicional{
    constructor(sanduiche: iSanduiche) {
        super(sanduiche);
    }

    getDescricao(): string {
        return `${super.getDescricao()}, Pepperoni`;
    }

    getPreco(): number {
        return super.getPreco() + 0.99;
    }
}
