const url = "https://api.frankfurter.app/latest";

const request = fetch(url);

const bodyJson = request.then((respose) => respose.json());

bodyJson.then((data) => procesarUltimaCotizacion(data));

function procesarUltimaCotizacion(data) {
  const spanFecha = document.getElementById("fecha");
  const objetoFecha = data.date;
  mostrarFecha(spanFecha, objetoFecha);

  const ulCotizaciones = preparaListaCotizaciones();
  const objetoCotizaciones = data.rates;
  mostrarCotizacionesDivisas(ulCotizaciones, objetoCotizaciones);
}

function mostrarFecha(spanFecha, fechaCadena) {
  console.log(fechaCadena);
  const fechaNumber = Date.parse(fechaCadena);
  console.log("Unix:" + fechaNumber);
  const fecha = new Date(fechaNumber);
  console.log("ISO:" + fecha.toISOString());
  const fechaEuropea = `${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()}`;
  console.log("Europa:" + fechaEuropea);

  spanFecha.innerText = fechaEuropea;
}

function preparaListaCotizaciones() {
  const ulCotizaciones = document.getElementById("cotizaciones");
  while (ulCotizaciones.firstChild) {
    ulCotizaciones.removeChild(ulCotizaciones.firstChild);
  }
  return ulCotizaciones;
}

function mostrarCotizacionesDivisas(ulCotizaciones, objetoCotizaciones) {
  const camposDivisas = Object.keys(objetoCotizaciones);
  camposDivisas.forEach((divisa) =>
    agregarCotizacionDivisa(divisa, ulCotizaciones, objetoCotizaciones)
  );
}

function agregarCotizacionDivisa(nombreDivisa, ulCotizaciones, objetoCotizaciones) {
  const cotizacion = objetoCotizaciones[nombreDivisa];

  const liDivisa = document.createElement("li");
  const spanNombreDivisa = document.createElement("span");
  const spanCotizacion = document.createElement("span");

  spanNombreDivisa.classList.add("divisa");
  spanNombreDivisa.innerText = nombreDivisa + " : ";

  spanCotizacion.classList.add("contravalor");
  spanCotizacion.innerText = cotizacion + " €";

  liDivisa.appendChild(spanNombreDivisa);
  liDivisa.appendChild(spanCotizacion);
  ulCotizaciones.appendChild(liDivisa);
}

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
