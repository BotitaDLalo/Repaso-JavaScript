//Objetos
/**
 *?Los objetos son una colexion de propiedades
 *# Cada propiedad es una asociasion entre un nombre y una clave
 */

const objeto = {
  //*(llave o clave):(nombre)
  nombreProducto: "Compu",
  precioProducto: 300,
  disponible: true,
};

console.log(typeof objeto);
console.log(objeto);
console.table(objeto);

console.log("****************");
//¿ Acceder a una propiedad de un objeto
console.log("Acceder a propiedad de un objeto");

console.log("Forma de acceder 1: " + objeto.nombreProducto);
console.log("Forma de acceder 2: " + objeto["disponible"]);
//$ Destructuring
/* 
?  Destructuring crea una variable, y le asigna el valor del objeto al cual se le aplica el destructuring,
?  debe tener el mismo nombre, la variable del objeto, y la vairable creada
*/
const { precioProducto, precioNeto } = objeto;
console.log("Forma de acceder 3: " + precioProducto);
console.log("Forma de acceder 4: " + precioNeto);

//$ Object literal enhacement
const nombre = 'Luis'
const precio = 200

const nuevoObjeto = {
    nombre,
    nuevoPrecio: precio
}

console.table(nuevoObjeto);
