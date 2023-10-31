"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Servidor = void 0;
var computador_1 = require("./computador");
var Servidor = /** @class */ (function (_super) {
    __extends(Servidor, _super);
    function Servidor(ram, ssd, cpu, tipo, preco, sistemaRaid, so) {
        var _this = _super.call(this, ram, ssd, cpu, tipo, preco) || this;
        _this.sistemaRaid = sistemaRaid;
        _this.so = so;
        return _this;
    }
    Servidor.prototype.getSistemaRaid = function () {
        return this.sistemaRaid;
    };
    Servidor.prototype.getSO = function () {
        return this.so;
    };
    Servidor.prototype.setSO = function (so) {
        this.so = so;
    };
    Servidor.prototype.setSistemaRaid = function (sistemaRaid) {
        this.sistemaRaid = sistemaRaid;
    };
    Servidor.prototype.toString = function () {
        return "Computador Tipo: ".concat(this.tipo, " | Mem. RAM: ").concat(_super.prototype.getRam.call(this), "GB | CPU: ").concat(_super.prototype.getCPU.call(this), "GHz | SSD: ").concat(_super.prototype.getSSD.call(this), "GB | Pre\u00E7o: R$ ").concat(_super.prototype.getPreco.call(this), " | Sistema Operacional: ").concat(this.so, " | Sistema Raid: ").concat(this.sistemaRaid);
    };
    return Servidor;
}(computador_1.Computador));
exports.Servidor = Servidor;
