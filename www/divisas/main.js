const url = "https://api.frankfurter.app/latest";

console.log("llamando... " + url);

// promesas
// fetch(url)
//   .then((respose) => respose.json())
//   .then((data) => console.log(data));

// console.log("llamanda terminada ");

async function obtenerDatos() {
  // esperas
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    console.log(data);
  } else {
    console.log("Error: " + response.status);
  }
}
obtenerDatos();
