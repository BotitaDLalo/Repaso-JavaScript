//function expression

/**
 * # Hoisting
 * * Con una funcion, es posible llamar la funcion antes de que sea creada.
 * * En una variable, primero se debe declarar la funcion, y despues se manda a llamar
 *
 */

//$ funcion en variable
const sumarFuncion = function sumar(numero1 = 0, numero2 = 0) {
  console.log(numero1 + numero2);
  console.log(numero1, numero2);
};

//$ funcion
function sumar(numero1 = 0, numero2 = 0) {
  console.log(numero1 + numero2);
  console.log(numero1, numero2);
}

sumarFuncion(2, 2);

sumar(2, 2);
