import { Strategy } from "../iStrategy";

export class Calculadora {
    private strategy: Strategy;

    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }
    public setStrategy(strategy: Strategy): void {
        this.strategy = strategy;
    }

    public calcular(num1: number, num2: number): number {
        return this.strategy.execute(num1, num2);
    }

}