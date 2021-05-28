const frase = "en un lugar de la mancha";
const nodoMensaje = document.getElementById("mensaje");
nodoMensaje.innerText = "";
let inicio;
document.getElementById("frase").innerText = frase;
document.getElementById("empezar").addEventListener("click", () => {
  inicio = Date.now();
});
const inputLoTecleado = document.getElementById("lo-tecleado");
inputLoTecleado.addEventListener("input", () => {
  let ahora = Date.now();
  let tiempo = (ahora - inicio) / 1000;
  let loTecleado = inputLoTecleado.value;
  if (loTecleado === frase) {
    nodoMensaje.innerText = "Felicidades ✨🎉🎈🌈 has tardado " + tiempo;
    inicio = Date.now();
  } else {
    nodoMensaje.innerText = "aún no va bien ❌👀🐱‍🐉 llevas " + tiempo;
  }
});
