let suma = 0;
let termino = 2;

for (let index = 0; index < 10; index++) {
  console.log(termino);
  suma = suma + termino;
  termino = termino * 2;
}

console.log("Suma total: " + suma);