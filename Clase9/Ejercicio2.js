/*Define dos constantes, RANGO_MINIMO y RANGO_MAXIMO, con 
valores numéricos de tu elección. Pide al usuario que ingrese un 
número y verifica si está dentro del rango definido por las constantes.*/
const prompt = require("prompt-sync")({ sigint: true})
const RANGO_MINIMO = 2;
const RANGO_MAXIMO = 10;
let numero = parseFloat(prompt("Escribe un numero"));
if (numero >=RANGO_MINIMO && numero <=RANGO_MAXIMO){
    console.log (`el numero ${numero} que ingresaste esta dentro del rango`);
}
else {
console.log (`el numero ${numero} que ingresaste esta fuera del rango`);    
}
