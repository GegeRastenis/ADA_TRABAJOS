/*Escribe un programa que le pida al usuario dos números enteros (inicio y fin). El 
programa debe mostrar todos los números pares que se encuentran entre esos 
dos valores, incluyendo los límites si son pares. Utiliza un ciclo for para recorrer 
los números entre el inicio y el fin. Si el número inicial es mayor que el final, el 
programa debe mostrar un mensaje indicando que los valores son inválidos*/
const prompt = require("prompt-sync")({ sigint: true})
let inicial = parseInt(prompt("Ingresa un numero inicial"));
let final = parseInt(prompt("Ingresa un numero final"));
    if (inicial < final){
for(let i = inicial; i <= final; i++){
     if(i % 2 == 0){
    console.log(i);
     }
    }
} 
else{
    console.log("Los valores que ingresaste son invalidos");
}

