const url = "https://api.frankfurter.app/latest";

fetch(url)
  .then((respose) => respose.json())
  .then((data) => {
    console.log(data);
    const fechaCadena = data.date;
    console.log(fechaCadena);
    const fechaNumber = Date.parse(fechaCadena);
    console.log(fechaNumber);
    const fecha = new Date(fechaNumber);
    console.log(fecha.toISOString());
    const fechaEuropea = fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear();
    console.log(fechaEuropea);
    const spanFecha = document.getElementById("fecha");
    spanFecha.innerText = fechaEuropea;
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
