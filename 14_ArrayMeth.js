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
resultado = numeros.reduce((total, numero) => numero + total, 0);


console.log(resultado);
