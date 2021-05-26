const ivaNormal = 21;
const precio = 50;

console.log("El precio sin IVA es: " + precio);

function calcularCouta(base, tipo = ivaNormal) {
  const cuota = (base * tipo) / 100;
  return cuota;
}

const cuota = calcularCouta(precio, 10);
console.log("La cuota de IVA es: " + cuota);

function calcularImporte(base, tipo = ivaNormal) {
  const cuota = calcularCouta(base, tipo);
  const importe = base + cuota;
  return importe;
}

const importe = calcularImporte(precio, 10);
console.log("El importe IVA incluido es: " + importe);

function obtenerDesglose(base, tipo = ivaNormal) {
  const desglose = {
    base: base,
    tipo: tipo,
    cuota: calcularCouta(base, tipo),
    importe: calcularImporte(base, tipo),
    formaDePago: {
      medio: "tarjeta",
      cambio: 0,
    },
  };
  return desglose;
}
console.log(obtenerDesglose(precio));
