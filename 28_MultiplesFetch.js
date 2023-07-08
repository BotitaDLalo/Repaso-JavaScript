// Multiples fetch
const url = "https://jsonplaceholder.typicode.com/comments";
const url2 = "https://jsonplaceholder.typicode.com/photos";

const consultarAPI = async () => {
  const inicio = performance.now();

  const respuesta = await fetch(url);
  const resultado = await respuesta.json();

  
  const respuesta2 = await fetch(url2);
  const resultado2 = await respuesta2.json();


  console.log(resultado);
  console.log(resultado2);

  const fin = performance.now();
  console.log(`Resultado primer funcion: ${fin - inicio} ms`);
};

const consultarAPI2 = async () => {
  const inicio = performance.now();
  const [res, res2] = await Promise.all([fetch(url), fetch(url2)]);

  const resultado = await res.json();
  const resultado2 = await res2.json();

  console.log("En segunda consulta: " + resultado);
  console.log("En segunda consulta: " + resultado2);

  const fin = performance.now();
  
  console.log(`Resultado segunda funcion: ${fin - inicio} ms`);
};

consultarAPI();
consultarAPI2();
