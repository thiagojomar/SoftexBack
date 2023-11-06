"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Computador = void 0;
var Computador = /** @class */ (function () {
    function Computador(ram, ssd, cpu, tipo, preco) {
        this.ram = ram;
        this.ssd = ssd;
        this.cpu = cpu;
        this.tipo = tipo;
        this.preco = preco;
    }
    Computador.prototype.getRam = function () {
        return this.ram;
    };
    Computador.prototype.getSSD = function () {
        return this.ssd;
    };
    Computador.prototype.getCPU = function () {
        return this.cpu;
    };
    Computador.prototype.getTipo = function () {
        return this.tipo;
    };
    Computador.prototype.getPreco = function () {
        return this.preco;
    };
    Computador.prototype.toString = function () {
        return "Computador Tipo: ".concat(this.tipo, " | Mem. RAM: ").concat(this.ram, "GB | CPU: ").concat(this.cpu, "GHz | SSD: ").concat(this.ssd, "GB | Pre\u00E7o: R$").concat(this.preco);
    };
    return Computador;
}());
exports.Computador = Computador;
