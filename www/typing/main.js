const frase = "en un lugar de la mancha";
let inicio;
let haTerminado = false;

const nodoMensaje = document.getElementById("mensaje");
const nodoFrase = document.getElementById("frase");
const botonEmpezar = document.getElementById("empezar");
const inputLoTecleado = document.getElementById("lo-tecleado");

nodoMensaje.innerText = "";
nodoFrase.innerText = frase;

botonEmpezar.addEventListener("click", () => {
  inicio = Date.now();
  haTerminado = false;
});
inputLoTecleado.addEventListener("input", () => {
  if (haTerminado) return;
  const ahora = Date.now();
  const tiempo = (ahora - inicio) / 1000;
  const loTecleado = inputLoTecleado.value;
  if (loTecleado === frase) {
    nodoMensaje.innerText = "Felicidades ✨🎉🎈🌈 has tardado " + tiempo;
    haTerminado = true;
  } else {
    nodoMensaje.innerText = "aún no va bien ❌👀🐱‍🐉 llevas " + tiempo;
  }
});
