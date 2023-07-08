// Async/Await
const url = "https://jsonplaceholder.typicode.com/comments";

const consultarAPI = async () => {
  fetch(url)
    .then((res) => {
      console.log("desde el primer then", res);
      return res.json();
    })
    .then((res) => {
      console.log("desde el segundo then");
      console.log(res);
    });

  try {
    const resp = await fetch(url);
    const resultado = await resp.json();
    console.log(resultado);
  } catch (error) {
    console.error(error);
  } finally {
    console.log("todo termino");
  }
};

consultarAPI();
