const PI = 3.14;

function saludar() {
  console.log("Hola mundo");
}
function saludarPorNombre(nombre, saludo = "Hola") {
  // console.log("Hola " + nombre);
  console.log(`${saludo} ${nombre}`);
}
function calcularCircunferencia(r = 1) {
  const c = 2 * PI * r;
  return c;
}

saludar();
saludarPorNombre("Alberto");
saludarPorNombre("Alberto", "Hello");

let radio = 5;
let circunferencia = calcularCircunferencia(radio);
console.log(circunferencia);
