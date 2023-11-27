import { AdaptadorGalinha } from "./adaptadorGalinha";
import { AdaptadorPato } from "./adaptadorPato";
import { GalinhaRhodeIsland } from "./galinhaRhodeIsland";
import { iGalinha } from "./iGalinha";
import { iPato } from "./iPato";
import { PatoMarreco } from "./patoMarreco";

class AdaptadorPatoDemo {
    static main() {
        const PatoZe: iPato = new PatoMarreco();
        const PatinhoZezinho: iGalinha = new AdaptadorPato(PatoMarreco);

        const GalinhaZefa: iGalinha = new GalinhaRhodeIsland();
        const GalinhaZefinha: iPato = new AdaptadorGalinha(GalinhaRhodeIsland);

        console.log("Pato marreco agindo como uma galinha:");
        PatinhoZezinho.cacarejar();
        PatinhoZezinho.ciscar();
        PatinhoZezinho.postura();

        console.log("Galinha Rhode Island agindo como um pato:");
        GalinhaZefinha.gasnar();
        GalinhaZefinha.nadar();
        
    }
}

AdaptadorPatoDemo.main();