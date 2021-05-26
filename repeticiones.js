// for (let huevos = 1; huevos <= 6; huevos++) {
//   console.log("Huevo: " + huevos);
//   console.log("romper");
//   console.log("vaciar");
// }

// let huevos = 6;
// let usados = 0;
// while (huevos > 0) {
//   //console.log("Huevo Nº: " + huevos);
//   usados++;
//   console.log(`Huevo Nº: ${huevos * 2}; he usado ${usados + 5}`);
//   console.log("romper");
//   console.log("vaciar");
//   huevos = huevos - 1;
//   //huevos--;
// }

// console.log(sabores[0]);
// console.log(sabores[5]);
// sabores.push("queso");
// console.log(sabores[4]);
// console.log(sabores);
// console.log(sabores.length);

let sabores = ["cebolla", "tomate", "chorizo", "gulas"];

for (let i = 0; i < sabores.length; i++) {
  console.log(`FOR: En la posición ${i} tenemos ${sabores[i]}`);
}

let i = 0;
while (i < sabores.length) {
  console.log(`WHILE: En la posición ${i} tenemos ${sabores[i]}`);
  i++;
}

function sumar(a, b) {
  return a + b;
}
sumar(2, 3);

let agregar = function (a, b) {
  return a + b;
};
agregar(2, 3);

let añadir = (a, b) => a + b;
añadir(2, 3);

sabores.forEach((sabor) => console.log(`FOR_EACH: ${sabor}`));
