import { SanduicheFrangoAssado } from "./frangoAssado";
import { iSanduiche } from "./iSanduiche";
import { Pepperoni } from "./pepperoni";
import { QueijoMussarelaRalado } from "./queijoMussarela";

const meuSanduiche : iSanduiche = new SanduicheFrangoAssado()
const addPepperoni: SanduicheFrangoAssado = new Pepperoni(meuSanduiche);
const addQueijo: SanduicheFrangoAssado = new QueijoMussarelaRalado(addPepperoni);
const sanduba = addQueijo



// Exibindo a descrição e o custo do sanduíche
console.log(`Sanduíche: ${sanduba.getDescricao()}`);
console.log(`Custo: R$ ${sanduba.getPreco().toFixed(2)}`);
