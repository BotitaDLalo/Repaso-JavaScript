//Destructure en 2 objetos
const producto = {
  nombre: "Tablet",
  precio: 120,
  disponible: true,
};

const cliente = {
  nombre: "Jason",
  premium: true,
};

const { nombre: nombreProducto } = producto;
const { nombre: nombreCliente } = cliente;

console.log(nombreProducto);
console.log(nombreCliente);