import { GalinhaRhodeIsland } from "./galinhaRhodeIsland";
import { iPato } from "./iPato";

export class AdaptadorGalinha implements iPato{
    private readonly galinha: GalinhaRhodeIsland;

    constructor(galinha : GalinhaRhodeIsland){
        this.galinha = galinha;
    }

    gasnar(): void {
        console.log("QUACK! QUACK!");
        
    }

    nadar(): void {
        console.log("O pato está ciscando.");
        
        
    }
}