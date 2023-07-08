const heading = document.querySelector(".heading");

heading.textContent = "un nuevo heading";
// heading.classList.remove('text-4xl')

const inputNombre = document.querySelector("#nombre");
console.log(inputNombre);

inputNombre.value = "valor por defecto";

const enlaces = document.querySelectorAll(".navegacion a");

enlaces.forEach((enlaces) => (enlaces.textContent = "nuevo enlace"));
