//Scope: Alcance
/**
 ** El scope determina la visibilidad y
 ** disponibilidad de las variables en diferentes
 ** partes de un programa,
 */

let precio = 300;

function laFuncion() {
  let precio = 150;
  console.log(precio);
}

laFuncion();
console.log(precio);
