let contadorNumeros = 0;

while (true) {
    let numeroAleatorio = Math.floor(Math.random() * 100) + 1;

    if (numeroAleatorio > 95) {
        console.log(numeroAleatorio)
        break
    } else {
        console.log(numeroAleatorio)
        contadorNumeros++;
    }
}

console.log("se generaron "+ contadorNumeros + " numeros antes de salir un numero mayor a 95");