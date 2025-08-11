let suma = 0;
let contador = 0;
let max;
let min;
let primera = true;

while (true) {
  let entrada = prompt("Ingresa una calificación (o -1 para terminar):");
  let calificacion = parseFloat(entrada);

  if (calificacion === -1) {
    break;
  }

  if (isNaN(calificacion)) {
    continue;
  }

  suma += calificacion;
  contador++;

  if (primera) {
    max = calificacion;
    min = calificacion;
    primera = false;
  } else {
    if (calificacion > max) max = calificacion;
    if (calificacion < min) min = calificacion;
  }
}

if (contador > 0) {
  let promedio = suma / contador;
  console.log("Promedio: " + promedio);
  console.log("Calificación más alta: " + max);
  console.log("Calificación más baja: " + min);
} else {
  console.log("No se ingresaron calificaciones.");
}