const numeros = [];

export const TAMAÑO = 10;

function inicializarNumeros() {
  for (let i = 1; i <= TAMAÑO; i++) {
    numeros.push(i);
  }
}
function mostrarNumeros() {
  for (let i = 0; i < numeros.length; i++) {
    console.log(`En la posición ${i} tenemos ${numeros[i]}`);
  }
}

export function mostarPares() {
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      console.log(`En la posición ${i} está el par ${numeros[i]}`);
    }
  }
}

export function extraerPares() {
  return numeros.filter(function (numero) {
    return numero % 2 === 0;
  });
}

export function obtenerCuadrados() {
  return numeros.map((numero) => numero * numero);
}

export function obtenerCuadradosDePares() {
  // const pares = extraerPares();
  // return pares.map((par) => par * par);
  return numeros.filter(esPar).map((par) => par * par);
}

export function esPar(numero) {
  let TAMAÑO = 2;
  return numero % TAMAÑO === 0;
}

export const funcionesNumeros = {
  inicializar: inicializarNumeros,
  mostrar: mostrarNumeros,
  n: numeros,
  TAMAÑO: TAMAÑO,
};
