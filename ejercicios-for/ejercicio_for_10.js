let texto = "anita lava la tina";

texto = texto.toLowerCase();

let limpio = "";
let i;

for (i = 0; i < texto.length; i++) {
  if (texto.charAt(i) !== ' ') {
    limpio += texto.charAt(i);
  }
}
let esPalindromo = true;
for (i = 0; i < Math.floor(limpio.length / 2); i++) {
  if (limpio.charAt(i) !== limpio.charAt(limpio.length - 1 - i)) {
    esPalindromo = false;
    break;
  }
}

if (esPalindromo) {
  console.log("Es palíndromo");
} else {
  console.log("No es palíndromo");
}