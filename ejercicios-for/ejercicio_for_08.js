let frase = "Aca va la frase";

let a = 0, e = 0, i = 0, o = 0, u = 0;
let c;

frase = frase.toLowerCase();

for (let idx = 0; idx < frase.length; idx++) {
  c = frase.charAt(idx);
  if (c === 'a') { a++; }
  else if (c === 'e') { e++; }
  else if (c === 'i') { i++; }
  else if (c === 'o') { o++; }
  else if (c === 'u') { u++; }
}

console.log("a: " + a);
console.log("e: " + e);
console.log("i: " + i);
console.log("o: " + o);
console.log("u: " + u);