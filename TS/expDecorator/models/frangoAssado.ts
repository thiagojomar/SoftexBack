import { iSanduiche } from "./iSanduiche";

export class SanduicheFrangoAssado implements iSanduiche{
    getDescricao(): string {
        return "Sanduíche de Frango Assado";
    }

    getPreco(): number {
        return 4.50;
    }
}