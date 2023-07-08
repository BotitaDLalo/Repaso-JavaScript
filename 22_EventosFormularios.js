const inputNombre = document.querySelector("#nombre");
const inputContr = document.querySelector("#password");
const heading = document.querySelector(".heading");

inputNombre.addEventListener("input", (e) => {
  console.log(e.target.value);
  console.log(e.target.value.length);
  console.log("escribiendo");
});

inputNombre.addEventListener("input", (e) => {
  heading.textContent = e.target.value;
});

inputContr.addEventListener("input", (e) => {
  e.target.type = "text";

  setTimeout(() => {
    e.target.type = "password";
  }, 200);
});
