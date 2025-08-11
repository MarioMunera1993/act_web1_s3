base = 2
exponente = 5
let resultado = 1;
let expoOriginal = exponente;
let i;
let negativo = false;
  
console.log("Calculando: (" + base + ")^" + expoOriginal);
console.log("Inicio: resultado = 1");

for (i = 1; i <= exponente; i++) {
let antes = resultado;
resultado = resultado * base;
console.log("Paso # " + i + ": " + antes + " * " + base + " = " + resultado);
}

if (negativo) {
console.log("Exponente negativo: tomamos el inverso 1 / " + resultado);
resultado = 1 / resultado;
}

console.log("Resultado final: " + resultado);
