/*Ejercicio 6: Calculadora de promedio 
Escribe una función que reciba un array de números y devuelva el 
promedio.
Consigna:
• Usa un bucle for para sumar los números.
• Divide la suma total entre la cantidad de elementos del array.*/

let calificaciones = [8, 9, 10, 7, 6]; 
let suma = 0; 

function calcularPromedio(calificaciones){
    for(let i = 0; i < calificaciones.length; i++){
    suma += calificaciones[i];
   }
let promedio = suma / calificaciones.length; 
return promedio
}

console.log(calcularPromedio(calificaciones));