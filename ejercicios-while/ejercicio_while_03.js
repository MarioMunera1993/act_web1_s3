let contrasenaCorrecta = "admin123";
let contadorIntentos = 0;

while (true) {
    let contrasenaIngresada = prompt("Ingrese la contraseña");
    if (contrasenaIngresada === contrasenaCorrecta) {
        alert("Los intentos fallidos fueron: " + contadorIntentos + " Antes de acceso correcto")
        break
    } else {
        contadorIntentos++
    }
    
}




