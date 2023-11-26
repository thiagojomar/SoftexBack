import { Adicional } from "./decorator";
import { iSanduiche } from "./iSanduiche";

export class QueijoMussarelaRalado extends Adicional{
    constructor(sanduiche: iSanduiche){
        super(sanduiche);
    }
    getDescricao(): string {
        return `${super.getDescricao()}, Queijo Mussarela Ralado`;
    }

    getPreco(): number {
        return super.getPreco() + 2.00;
    }
}