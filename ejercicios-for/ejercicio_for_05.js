var cadenaOriginal = "Mario Munera";
var cadenaInvertida = "";

for (var i = cadenaOriginal.length - 1; i >= 0; i--) {
  cadenaInvertida += cadenaOriginal.charAt(i);
}

console.log("Original: " + cadenaOriginal);
console.log("Invertida: " + cadenaInvertida);
