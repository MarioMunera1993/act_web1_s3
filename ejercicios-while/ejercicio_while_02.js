let contador = 1
let sumarPares = 0
let contarPares = 0

while (contador <= 50) {
    if (contador % 2 === 0) {
        sumarPares += contador
        contarPares += 1
    }
    contador++
}

console.log("La suma de todos los pares es: " + sumarPares)
console.log("Los pares contados fueron: " + contarPares)
