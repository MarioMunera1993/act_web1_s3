/*
Utiliza un ciclo while para calcular la suma de todos los números pares entre 1 y 50. Muestra el resultado final y 
cuántos números pares se sumaron.
*/

let contador = 1
let sumarPares = 0
let contarPares = 0

while (contador <= 50) {
    if (contador % 2 === 0) {
        sumarPares += contador //sumarPares = sumarPares + contador
        contarPares += 1 // contarPares = contarPares + 1
    }
    contador++
}

console.log(sumarPares)
console.log(contarPares)
