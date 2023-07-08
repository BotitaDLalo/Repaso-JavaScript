//Promises
const url = "https://jsonplaceholder.typicode.com/comments";
//* Fetch solo puede leer texto plano o JSON

const consultarAPI = () => {
  fetch(url)
    .then((res) => {
      console.log("desde el primer then", res);
      return res.json();
    })
    .then((res) => {
      console.log("desde el segundo then");
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      console.log("todo listo");
    });
};

consultarAPI();
