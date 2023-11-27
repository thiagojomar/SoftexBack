import { iGalinha } from "./iGalinha";
import { PatoMarreco } from "./patoMarreco";

export class AdaptadorPato implements iGalinha{
    private readonly pato: PatoMarreco;

    constructor(pato: PatoMarreco) {
        this.pato = pato;
    }
    
    cacarejar(): void {
        console.log("COCOROCÓ");
        
    }

    ciscar(): void {
        console.log("O pato está ciscando ao lado da lagoa!");
    }

    postura(): void {
        console.log("O pato está chocando o ovo.")
    }

}