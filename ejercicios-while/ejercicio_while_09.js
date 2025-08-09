alert("🎮 JUEGO: ADIVINA EL NÚMERO");
alert("Tienes que adivinar un número entre 1 y 50");
alert("Tienes máximo 7 intentos");
alert("Te daré pistas: 'muy alto', 'muy bajo', 'cerca'\n");

let numeroAleatorio = Math.floor(Math.random() * 50) + 1;
let intentos = 0;
let maximosIntentos = 7;
let gano = false;
let numeroIngresado = 0;
let diferencia = 0


while (intentos <= maximosIntentos && gano == false) {
    intentos++;
    numeroIngresado = prompt("Ingresa un numero positivo");

    diferencia = Math.abs(numeroAleatorio - numeroIngresado);

    if (numeroIngresado == numeroAleatorio) {
        alert("¡Correcto! Adivinaste el número en " + intentos + " intento(s).");
        gano=true
        break
    } else if(diferencia <= 2) {
        alert("¡Estás muy cerca!");
    }else if(numeroIngresado < numeroAleatorio){
        alert("Muy bajo.");
    }else{
        alert("Muy Alto.");
    }

    if (intentos === maximosIntentos) {
        alert("¡Se acabaron los intentos! El número era " + numeroAleatorio + ".");
        break;
    }
}