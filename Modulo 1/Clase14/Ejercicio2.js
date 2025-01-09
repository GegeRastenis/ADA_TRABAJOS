/*Calcular promedio de calificaciones
Solicita al usuario cinco calificaciones y usa una función flecha para calcular 
el promedio*/
const prompt = require("prompt-sync")({ sigint: true})
let suma = 0; 

const calcularPromedio = (calificaciones)=>{
    for(let i = 0; i < 5; i++){
   let calificaciones = parseFloat(prompt("Por favor ingrese su calificacion: ")); 
   suma += calificaciones;
   }
return suma / 5; 
 }
console.log(calcularPromedio());