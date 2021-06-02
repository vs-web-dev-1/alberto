const url = "https://api.frankfurter.app/latest";

fetch(url)
  .then((respose) => respose.json())
  .then((data) => {
    console.log(data);
    const fechaCadena = data.date;
    console.log(fechaCadena);
    const fechaNumber = Date.parse(fechaCadena);
    console.log("Unix:" + fechaNumber);
    const fecha = new Date(fechaNumber);
    console.log("ISO:" + fecha.toISOString());
    const fechaEuropea = `${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()}`;
    console.log("Europa:" + fechaEuropea);
    const spanFecha = document.getElementById("fecha");
    spanFecha.innerText = fechaEuropea;
    const objetoCotizaciones = data.rates;
    const ulCotizaciones = document.getElementById("cotizaciones");
    while (ulCotizaciones.firstChild) {
      ulCotizaciones.removeChild(ulCotizaciones.firstChild);
    }
    console.log(ulCotizaciones.childNodes);
    const divisas = Object.keys(objetoCotizaciones);
    divisas.forEach((divisa) => {
      const liDivisa = document.createElement("li");

      const spanDivisa = document.createElement("span");
      spanDivisa.classList.add("divisa");
      spanDivisa.innerText = divisa + " : ";

      const spanCotizacion = document.createElement("span");
      spanCotizacion.classList.add("contravalor");
      const cotizacion = objetoCotizaciones[divisa];
      spanCotizacion.innerText = cotizacion;
      liDivisa.appendChild(spanDivisa);
      liDivisa.appendChild(spanCotizacion);
      ulCotizaciones.appendChild(liDivisa);
    });
  });

//   // usando esperas en lugar de promesas
// async function obtenerDatos() {
//   const response = await fetch(url);
//   if (response.ok) {
//     const data = await response.json();
//     console.log(data);
//   } else {
//     console.log("Error: " + response.status);
//   }
// }
// obtenerDatos();
