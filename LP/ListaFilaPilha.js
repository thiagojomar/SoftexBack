var numeros = [3, 7, 9, 1, 0];

//Esvaziando uma Fila (Desenfileirar)

numeros.shift();
console.log(numeros);
/*No caso acima o array se comporta como uma Fila que tem como
caracteristica o primeiro que entra é o primeiro que sai atraves da função:
array.shift(), então o primeiro a sair seria o 3, depois o 7, depois o 9 e assim
sucessivamente. */
 
//Desempilhando

numeros.pop();
console.log(numeros);
/*No caso acima o array se comporta como uma Pilha que tem como
caracteristica o primeiro que entra é o último que sai atraves da função:
array.pop(), então o primeiro a sair seria o 0, depois o 1, depois o 9 e assim
sucessivamente. */

//Fatiando o Array

numeros.splice(1,0,5);
console.log(numeros);
/*Já nesse caso estamos utilizando a função array.splice(), que representa um fatiamento no array
que vem seguido de 3 variaveis, a primeira indica onde haverá o corte no array pelo seu indice,
a segunda representa a quantidade de elementos que possivelmente sofrerão modificações
caso o número seja 0 nenhum elemento será modificado e o terceiro elemento indica o que sera inserido no array. */
