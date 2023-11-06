import { Veiculo } from "./veiculo";

export class Moto extends Veiculo{
    private cilindrada: number;

    constructor(modelo: string, marca: string, numRodas: number, cor: string, cilindrada: number) {
        super(modelo, marca, numRodas, cor);
        this.cilindrada = cilindrada;
    }

    public override clone(modelo: string, marca: string, numRodas: number, cor: string, cilindrada?: number): Veiculo {
        let motinha = Object.create(this);
        motinha.modelo = modelo;
        motinha.marca = marca;
        motinha.numRodas = numRodas;
        motinha.cor = cor;
        motinha.cilindrada = cilindrada;
        return motinha;        
    }

    public override toString(): string {
        return super.toString() + ` - Colindrada: ${this.cilindrada}`;        
    }
}