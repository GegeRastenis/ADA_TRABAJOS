/*Escribe un programa que:
1. Pida al usuario que ingrese dos números.
2. Sume ambos números.
3. Muestre el resultado de la suma*/
const prompt = require("prompt-sync")({ sigint: true})
let numero = parseFloat (prompt("escribe un numero"));
let numero2 = parseFloat (prompt("escribe otro numero"));
console.log(`el numero total es ${numero+numero2}`);
