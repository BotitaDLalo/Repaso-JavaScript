//Optional chaining
//* Sirve para que el programa no deje de funcionar,
//* en caso que no exista una propiedad en un objeto

const alumnos = {
  nombre: "Pepe",
  clase: "Programacion",
  aprobado: true,
};

console.log(alumnos.apellido?.ape);
