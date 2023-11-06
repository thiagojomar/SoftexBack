import { Veiculo } from "./veiculo";

export class Carro extends Veiculo{
    private potencia: number;
    private numPortas: number;

    constructor(modelo: string, marca: string, numRodas: number, cor: string, potencia: number, numPortas: number) {
        super(modelo, marca,numRodas, cor);
        this.potencia = potencia;
        this.numPortas = numPortas;
    }

    public override clone(modelo: string, marca: string, numRodas: number, cor: string, potencia?: number, numPortas?: number): Veiculo {
        let bibiti = Object.create(this);
        bibiti.modelo = modelo;
        bibiti.marca = marca;
        bibiti.numRodas = numRodas;
        bibiti.cor = cor;
        bibiti.potencia = potencia;
        bibiti.numPortas = numPortas;
        return bibiti   
    }

    public override toString(): string {
        return super.toString() + ` - Potencia: ${this.potencia} - Número de Portas: ${this.numPortas}`;
        
    }
}