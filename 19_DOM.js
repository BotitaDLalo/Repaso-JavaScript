//DOM
//* Document se refiere a mi html
/**
 ** QuerySelector limita hasta 1 solo resultado
 ** QuerySelectroAll puede obtener mas de una coincidencia
 */
const heading = document.querySelector('.heading')

console.log(heading);
console.log(heading.textContent);
console.log(heading.innerHTML);
console.log(heading.tagName);
console.log(heading.classList);
console.log(heading.id);

heading.textContent= 'Nuevo titulo'


const selectorAll = document.querySelectorAll('.navegacion a')
console.log(selectorAll);

const selector = document.querySelector('.navegacion a')
console.log(selector);