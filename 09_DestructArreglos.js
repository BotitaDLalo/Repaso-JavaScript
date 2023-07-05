//Destructuring de arreglo
const tecnologias = ["Vue", "JavaScript", "Node", "Mongo", "Docker"];

//?Destructuring version corta
const [tec1, tec2, tec3] = tecnologias;

const [, , , tec4] = tecnologias;

//? Destructuring version larga
const js = tecnologias[1];

console.log(js);

console.log(tec1);
console.log(tec2);
console.log(tec3);
console.log(tec4);
