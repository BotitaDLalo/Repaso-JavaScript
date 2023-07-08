const heading = document.querySelector(".heading");
const enlaces = document.querySelectorAll(".navegacion a");

heading.addEventListener("click", () => {
  console.log(2 + 2);
  heading.textContent = "Titulo por el click";
});

enlaces.forEach((enlace) => {
  enlace.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(e.target);
    console.log("se dio click");
  });
});


