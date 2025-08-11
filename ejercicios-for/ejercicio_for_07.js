let matriz = [];
let i, j;

for (i = 0; i < 5; i++) {
  matriz[i] = [];
  for (j = 0; j < 5; j++) {
    matriz[i][j] = i + j;
  }
}

let salida = "";
for (i = 0; i < 5; i++) {
  for (j = 0; j < 5; j++) {
    salida += matriz[i][j] + (j < 4 ? " " : "");
  }
  salida += "\n";
}

console.log(salida);