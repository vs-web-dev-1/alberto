const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export function obtenerPares(numeros) {
  const pares = [];
  for (let index = 0; index < numeros.length; index++) {
    const numero = numeros[index];
    if (numero % 2 === 0) {
      pares.push(numero);
    }
  }
  return pares;
}

export function obtenerParesFuncional(numeros) {
  return numeros.filter((numero) => numero % 2 === 0);
}

export function obtenerParesFuncionalGrande(numeros) {
  return numeros.filter(function (numero) {
    return numero % 2 === 0;
  });
}

export function obtenerCuadrados(numeros) {
  return numeros.map((numero) => numero * numero);
}

const pares = obtenerPares(numeros);

// console.log(pares);
function libertad(elemento, index, array) {}
