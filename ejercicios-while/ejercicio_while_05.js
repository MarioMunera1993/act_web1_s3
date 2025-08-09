let numeroIngresado = prompt("Ingresa un numero: ");

let numeroEntero = parseInt(numeroIngresado);


let factorial = 1;
let i = numeroEntero;
let pasos = "";

console.log("Calculando el factorial de: " + numeroEntero + "...");

while (i > 0) {
    factorial = factorial * i;

    if (pasos === "") {
        pasos = i;
    } else {
        pasos = `${pasos} x ${i}`;
    }

    console.log(`Paso ${numeroEntero - i + 1}: ${pasos} = ${factorial}`);

    i = i - 1;
}

console.log(`El factorial de ${numeroEntero} es: ${factorial}`);