const url = "https://api.frankfurter.app/latest";

fetch(url)
  .then((respose) => respose.json())
  .then((data) => {
    console.log(data);
    const fecha = data.date;
    const spanFecha = document.getElementById("fecha");
    spanFecha.innerText = fecha;
  });

// async function obtenerDatos() {
//   // esperas
//   const response = await fetch(url);
//   if (response.ok) {
//     const data = await response.json();
//     console.log(data);
//   } else {
//     console.log("Error: " + response.status);
//   }
// }
// obtenerDatos();
