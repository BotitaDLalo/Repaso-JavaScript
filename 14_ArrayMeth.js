// Array methods con arrow functions

const tecnologias = ["Vue", "JavaScript", "Node", "Mongo", "Docker"];
const numeros = [10, 31, 32];

//? Includes
//* Sirve para comprobar si un elemento existe en un arreglo
let resultado = tecnologias.includes("Node");

//? findIndex
//* Obtener el indice de un arreglo
resultado = tecnologias.findIndex((tec) => tec === "Node");

//? Some
//* Devuelve un true si almenos un elemento del arreglo, cumple con una condicion
resultado = numeros.some((numero) => numero > 33);

//? Find
//* Devuelve el elemento que cumpla con la condicion
resultado = numeros.find((numero) => numero === 10);

//? Every
//* Devuelve un true si todos los elementos del arreglo, cumplen con la condicion
resultado = numeros.every((numero) => numero < 33);

//? Reduce
//* Reduce un arreglo hasta un solo valor
//* Donde:
/**
*$ "array": 
Es la matriz en la que se aplicará el método reduce.

*$ "acumulador":
Es el valor acumulado resultante de la iteración anterior. 
En la primera iteración, si se proporciona un "valorInicial", será igual a ese valor. 
De lo contrario, será igual al primer elemento de la matriz.

*$"elementoActual": 
Es el elemento actual que se está procesando en la matriz.

*$"índiceActual" (opcional):
Es el índice del elemento actual en la matriz.

*$"arreglo" (opcional):
Es la matriz original sobre la cual se está aplicando "reduce".

*$ "valorInicial" (opcional):
Es el valor inicial del acumulador. Si no se proporciona, 
el primer elemento de la matriz se tomará como valor inicial.
 */

resultado = numeros.reduce((total, numero) => numero + total);

console.log(resultado);
