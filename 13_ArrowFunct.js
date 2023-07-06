//Funciones flecha
const tecnologias = ["Vue", "JavaScript", "Node", "Mongo", "Docker"];

const sumar = (num1 = 0, num2 = 0) => {
  console.log(num1 + num2);
};

sumar(5, 5);

//? foreach
const arregloForEach = tecnologias.forEach((tec) =>
  console.log("forEach: " + tec)
);

//? map
const arregloMap = tecnologias.map((tec) => tec);

console.log(arregloMap);

//? filter
const tecnologias2 = tecnologias.filter((tec) => tec !== "Node");
console.log("tecnologias 2: ", tecnologias2);
