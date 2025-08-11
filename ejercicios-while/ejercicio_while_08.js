let num1 = 0;        
let num2 = 1;        
let siguiente = 0;
let contador = 0;

console.log("1:", num1);
console.log("2:", num2);
contador = 2;

while (contador < 15) {
    siguiente = num1 + num2;
    contador++;
    console.log(contador + ":", siguiente);

    num1 = num2;
    num2 = siguiente;
}