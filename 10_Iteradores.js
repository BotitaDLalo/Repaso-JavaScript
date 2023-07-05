//Iteradores en js
const tecnologias = ["Vue", "JavaScript", "Node", "Mongo", "Docker"];

/**
 * * for each solamente itera los elementos del arreglo, y no genera un nuevo arreglo
 *
 * * map genera un nuevo arreglo
 */

//? foreach
const arregloForEach = tecnologias.forEach(function (tec, i) {
  //   console.log(i);
  //   console.log(tec);
  return tec;
});

//?map
const arregloMap = tecnologias.map(function (tec, i) {
  //   console.log(i);
  //   console.log(tec);
  return tec;
});

console.log(arregloForEach);
console.log(arregloMap);
