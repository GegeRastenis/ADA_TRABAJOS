/*Crea un programa que le pida al usuario un número y luego imprima su tabla de 
multiplicar desde el 1 hasta el 10. Usa un ciclo for.*/
const prompt = require("prompt-sync")({ sigint: true})
let number = parseInt(prompt("Enter a number: "));
for (let i = 1; i <= 10; i++){
    console.log (number * i);
}