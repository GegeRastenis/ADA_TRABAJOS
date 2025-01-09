/*Los números pueden ser pares o impares. Escribe un programa que le pida al 
usuario un número y determine si es par o impar. Muestra un mensaje 
explicativo indicando qué significa cada caso.*/
const prompt = require("prompt-sync")({ sigint: true})
let number = parseInt(prompt("Please enter a number "));
let mensaje = number % 2 == 0 ? `Your number is even`: `Your number is odd`;
console.log(mensaje);