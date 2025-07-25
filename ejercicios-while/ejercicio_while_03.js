/*
Implementa un sistema que use un ciclo while para solicitar una contraseña al usuario hasta que ingrese "admin123". 
Debe mostrar cuántos intentos fallidos hubo antes del acceso correcto.
*/

let contrasenaCorrecta = "admin123";
let contadorIntentos = 0;

/*
Usamos While (true) para que se ejecute siempre solo hasta que el break lo rompa
*/

while (true) {
    let contrasenaIngresada = prompt("Ingrese la contraseña");
    if (contrasenaIngresada === contrasenaCorrecta) {
        alert("Los intentos fallidos fueron: " + contadorIntentos + " Antes de acceso correcto")
        break
    } else {
        contadorIntentos++
    }
    
}




