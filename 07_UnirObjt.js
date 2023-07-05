//Unir objetos
const producto = {
  nombre: "Tablet",
  precio: 120,
  disponible: true,
};

const cliente = {
  nombre: "Jason",
  premium: true,
};
//Forma 1
const nuevoObjt = Object.assign(cliente, producto);

console.table(nuevoObjt);

//Forma 2
const nuevoObjt2 = {
  producto,
  cliente,
};

console.table(nuevoObjt2.cliente)
