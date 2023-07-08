//Ternarios = (condicion) ? se ejecuta : no se ejecuta

const disponible = 500;
const total = 100;
const tarjeta = true;

disponible > total
  ? console.log("se puede pagar con saldo")
  : tarjeta
  ? console.log("se puede pagar con tarjeta")
  : console.log("no se puede pagar");

disponible > total ? console.log("hola") : console.log("no hola");
