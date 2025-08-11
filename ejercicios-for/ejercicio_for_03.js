// Crear un array de 20 números aleatorios (enteros de 0 a 99)
let array = [];
for (let i = 0; i < 20; i++) {
  array.push(Math.floor(Math.random() * 100));
}

// Variables para cálculos
let numeroMayor = array[0];
let numeroMenor = array[0];
let suma = 0;
let pares = 0;
let impares = 0;

// Un solo ciclo for para calcular todo
for (let i = 0; i < array.length; i++) {
  let n = array[i];

  if (n > numeroMayor) numeroMayor = n;
  if (n < numeroMenor) numeroMenor = n;

  suma += n;

  if (n % 2 === 0) {
    pares++;
  } else {
    impares++;
  }
}

let promedio = suma / array.length;

// Mostrar resultados
console.log("Array:", array);
console.log("Mayor:", numeroMayor);
console.log("Menor:", numeroMenor);
console.log("Suma total:", suma);
console.log("Promedio:", promedio);
console.log("Pares:", pares);
console.log("Impares:", impares);
