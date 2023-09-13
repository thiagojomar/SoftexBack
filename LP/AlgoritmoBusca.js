const ArrayNumeros = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7];

function buscaLinear (array, elemento) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === elemento) {
            return i;
        }
        
    }
    return -1;
}

const buscarElemento = 20;

const indiceElemento = buscaLinear(ArrayNumeros, buscarElemento);

if (indiceElemento !== -1) {
    console.log(`O Elemento procurado ${buscarElemento} foi encontrado no indice ${indiceElemento} do Array.`)
} else {
    console.log(`O Elemento procurado ${buscarElemento} não foi encontrado no Array.`)
}