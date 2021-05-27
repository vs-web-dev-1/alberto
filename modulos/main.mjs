import { obtenerCuadrados, obtenerPares } from "./numeros.mjs";

const numeros = [11, 12, 13, 14];

const pares = obtenerPares(numeros);
console.log(pares);

const cuadrados = obtenerCuadrados(pares);
console.log(cuadrados);

pares.forEach((par, index) =>
  console.log(
    `El cuadrado
    de ${par}
    es ${cuadrados[index]}`
  )
);
