//Eventos del DOM - Submit

const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const nombre = document.querySelector("#nombre").value;
  if (nombre === "") {
    console.log("Los campos son obligatorios");
    return
  } 
  console.log('Todo bien :)');
});
