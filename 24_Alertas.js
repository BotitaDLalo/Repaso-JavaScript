// Alerts

const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  // Prevenir alertas duplicadas
  const alertaPrevia = document.querySelector(".alerta");
  alertaPrevia?.remove()

  // Generar alerta
  const alerta = document.createElement("DIV");
  alerta.textContent = "LOS CAMPOS SON OBLIGATORIOS";
  alerta.classList.add(
    "alerta",
    "bg-red-500",
    "text-white",
    "uppercase",
    "text-sm",
    "text-center",
    "p-2",
    "font-black"
  );
  console.log(alerta);

  const nombre = document.querySelector("#nombre").value;
  if (nombre === "") {
    console.log("Los campos son obligatorios");
    /**
     ** El método appendChild en JavaScript se utiliza para agregar
     ** un nuevo nodo como hijo al final de un elemento padre
     ** existente en el árbol DOM (Modelo de Objetos del Documento).
     */
    formulario.appendChild(alerta);

    setTimeout(() => {
      alerta.remove();
    }, 3000);
    return;
  }
  console.log("Todo bien :)");
});
