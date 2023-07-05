//Manipulacion de objetos

const producto = {
  nombre: "Tablet",
  precio: 120,
  disponible: true,
};

//* Object freeze
/**
 * Object freeze sirve para congelar un objeto, practicamente lo hace constante
 * No permite añadir, reescribir y eliminar propiedades
 */
Object.freeze(producto);

//* Object seal
/**
 * Object seal es un poco menos estricto
 * Permite reescribir una propiedad, pero no permite añadir ni eliminar una propiedad
 */
Object.seal(producto);

//Rescribir una propiedad
producto.nombre = "Compu";

//Añadir una propiedad
producto.imagen = "imagen.jpg";

//Eliminar una propiedad 1
delete producto.disponible;

console.table(producto);

//Eliminar una propiedad 2
//? const {disponible,...producto2} = producto

console.table(producto2);
