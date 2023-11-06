export abstract class Veiculo {
    protected modelo: string;
    protected marca: string;
    protected numRodas: number;
    protected cor: string;

    constructor(modelo: string, marca: string, numRodas: number, cor: string) {
        this.modelo = modelo;
        this.marca = marca;
        this.numRodas = numRodas;
        this.cor = cor;
    }

    public abstract clone(modelo: string, marca: string, numRodas: number, cor: string): Veiculo

    public tostring(): string{
        return `Marca: ${this.marca} - Modelo: ${this.modelo} - Número de Rodas ${this.numRodas} - Cor: ${this.cor}`
    }
}
