let nombreIngresado = prompt("Ingresa Nombre a buscar");
let nombres = ["Mario","Luz","Victoria","Samuel"];


while (true) {
    if (nombres.includes(nombreIngresado)) {
        console.log(`El nombre: ${nombreIngresado} si existe en el arreglo`);
        break;
    } else {
        console.log(`El nombre: ${nombreIngresado} no existe en el arreglo`);
        break;
    }
}
