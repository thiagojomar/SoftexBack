"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FabricaComp = void 0;
var servidor_1 = require("./model/servidor");
var pc_1 = require("./model/pc");
var FabricaComp = /** @class */ (function () {
    function FabricaComp() {
    }
    FabricaComp.createComp = function (ram, ssd, cpu, tipo, preco) {
        if (tipo.toLowerCase() == "servidor") {
            return new servidor_1.Servidor(ram, ssd, cpu, tipo, preco, "RAID 0", "CentOS");
        }
        else if (tipo.toLowerCase() == "pc") {
            return new pc_1.PC(ram, ssd, cpu, tipo, preco, "Monitor");
        }
        return null;
    };
    return FabricaComp;
}());
exports.FabricaComp = FabricaComp;
