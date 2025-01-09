/*Define una constante PI con el valor de pi (3.14159). Pide al usuario 
que ingrese el radio de un círculo y calcula su área y perímetro 
utilizando la constante PI.*/
const prompt = require("prompt-sync")({ sigint: true})
const PI = 3.14159;
let radio = parseFloat(prompt("Ingrese el radio de su circulo"));
console.log(`el area de su circulo es ${PI*(radio*radio)} y el perimetro del mismo es ${2*PI*radio}`);
