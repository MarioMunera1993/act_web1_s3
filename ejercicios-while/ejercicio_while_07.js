alert("Contador de digitos en un numero");

let numeroIngresado = prompt("Ingresa Numero");
let real = numeroIngresado
let dijitos = 0

if (numeroIngresado < 0) {
    console.log("Disculpa Ingresa solo numeros Positivos");
} else {
    if (numeroIngresado >= 0 && numeroIngresado <= 9) {
        console.log(`El numero ${numeroIngresado} tiene 1 Dijito`);
    } else {
        while (numeroIngresado > 0) {
        numeroIngresado = Math.floor(numeroIngresado / 10);
        dijitos++
    }
    console.log(`El Numero ${real} tiene ${dijitos} Dijitos`);
        
    }
    
}