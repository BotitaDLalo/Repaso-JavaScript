//Arreglos
const tecnologias = ["Vue", "Mongo", "Java"];

//# push, pop, unshift, shift mutan el arreglo

//? Insertar un dato al final del arreglo
tecnologias.push("Python");

//? Eliminar un elemento del final del arreglo
tecnologias.pop();

//? Insertar un dato al principio del arreglo
tecnologias.unshift("Git");

//? Eliminar un dato al principio del arreglo
tecnologias.shift();

//? Eliminar un dato en medio del arreglo
//* .splice(posicion,elementos mas haya de la posicion que se quiera eliminar)
tecnologias.splice(1, 1);

//# Estos metodos generan otro arreglo, y no lo mutan
//? Insertar un dato con spread operator
const nuevoArreglo = ["Docker", ...tecnologias, "Python"];

//? Mostrar en consola un arreglo con un callback
//* Filter es para crear un arreglo a partir de otro arreglo
//*  Este método recorre cada elemento del arreglo original
//*  y ejecuta una función de prueba (callback) en cada uno de ellos.
// $ Si es TRUE en un elemento en particular: el elemento se incluye en el arreglo
//$ Si es un FALSE en un elemento en particular: el elemento no se incluye en el arreglo
tecnologias.filter(function (tech) {
  console.log("Callback: " + tech);
});

const tecnologias2 = tecnologias.filter(function (tech) {
  return tech !== "Mongo";
});
console.log("Tecnologias 2: " + tecnologias2);

console.log(tecnologias);
console.log(nuevoArreglo);
