let radioMedio = 40;
const PI = 3.14;
// PI = 9;
let rueda = 2 * PI * radioMedio;
const bici = {
  marca: "BH",
  precio: 89,
  radio: radioMedio,
};
bici.rueda = 2 * PI * bici.radio;
// bici = {};
console.log("Mi bici " + bici.marca + " tiene una rueda de " + bici.rueda + " cm.");
let biciRadioMedio = bici.radio == radioMedio;
console.log(biciRadioMedio);
let biciRadioMedio2 = bici.radio === "40";
console.log(biciRadioMedio2);
let uno = 1;
let dos = 2;
let mayor = dos > uno;
let menor = uno < dos;
let mayorIgual = dos >= dos;
let distinto = uno != dos;
let superDistinto = uno !== dos;
let superIgual = uno === uno;
let cierto = true;
cierto = 1;
let falso = false;
falso = 0;
falso = !cierto;
