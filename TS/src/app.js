"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fabricaComp_1 = require("./fabricaComp");
var servidorSoftex = fabricaComp_1.FabricaComp.createComp(32, 1000, 4.8, "servidor", 15000);
servidorSoftex.setSO("CentOS");
servidorSoftex.setSistemaRaid("RAID 1");
var pcSoftex = fabricaComp_1.FabricaComp.createComp(16, 512, 3.2, "pc", 4000);
pcSoftex.setMonitor("LG 24UHD");
if (servidorSoftex && pcSoftex) {
    console.log(servidorSoftex.toString());
    console.log(pcSoftex.toString());
}
