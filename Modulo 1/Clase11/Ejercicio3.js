/*Crea un programa que le pida al usuario un número positivo. El programa 
deberá contar desde el 1 hasta ese número e imprimir cada valor en la consola. 
Usa un ciclo for para realizar la tarea.*/
const prompt = require("prompt-sync")({ sigint: true})
let number = parseInt(prompt("Please enter a positive number "));
for (let i = 0; i < number; i++) {
    console.log(`Counting up to ${i + 1}`);
}