import { iPato } from "./iPato";

export class PatoMarreco implements iPato{
    gasnar(): void {
        console.log("QUACK! QUACK!");
    }

    nadar(): void {
        console.log("O pato está nadando no lago!");
        
    }
}