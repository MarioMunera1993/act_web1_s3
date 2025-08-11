let matriz = [];
let i, j;

// Crear la matriz 5x5 con suma de índices
for (i = 0; i < 5; i++) {
  matriz[i] = [];
  for (j = 0; j < 5; j++) {
    matriz[i][j] = i + j;
  }
}

// Mostrar la matriz formateada
let salida = "";
for (i = 0; i < 5; i++) {
  for (j = 0; j < 5; j++) {
    salida += matriz[i][j] + (j < 4 ? " " : "");
  }
  salida += "\n";
}

console.log(salida);