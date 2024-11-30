//Ciclo For Array
/*Crear un programa que permita registrar las notas de varios estudiantes 
usando arrays y mostrarlas por pantalla:
1. Crear un array para almacenar las notas.
2. Define un array vacío llamado notas donde almacenaremos las notas 
de los estudiantes.
3. Pide al usuario que ingrese las notas de varios estudiantes una por 
una utilizando el método prompt.
4. Usa un bucle for para solicitar las notas y asignarlas directamente a 
posiciones específicas del array notas.
5. Imprime en consola las notas ingresadas usando el array notas.*/

const prompt = require("prompt-sync")({ sigint: true})
let notas = []
let cantidad_notas = parseInt(prompt("Cuantas notas vas a ingresar? "));
let calificacion;

for(let i = 0; i < cantidad_notas; i++){
    calificacion = parseInt(prompt(`Ingrese la nota ${i+1}: `));
    notas.push(calificacion);
    //notas[i] = calificacion; 
}
console.log(notas);




