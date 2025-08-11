let contador = 0;

for (let index = 2; index <= 100; index++) {
    let esPrimo = true;
    for (let j = 2; j < index; j++) {
        if (index % j === 0) {
            esPrimo = false;
            break;
        }
        
    }
    if (esPrimo) {
        console.log(index);
        contador++;
    }
}

console.log("Total de numeros primos encontrado fue: " + contador);
