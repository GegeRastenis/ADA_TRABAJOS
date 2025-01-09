/*Convertir grados Celsius a Fahrenheit (Ejercicio entrevista)
Crea una función expresada llamada convertirCelsiusAFahrenheit que 
reciba una temperatura en grados Celsius y devuelva la temperatura en 
Fahrenheit.*/
const prompt = require("prompt-sync")({ sigint: true})
let Celsius = parseInt(prompt("Por favor ingrese su temperatura en grados Celsius: "));

let convertirCelsiusAFahrenheit = function(){
return (Celsius * 9 / 5) + 32;
}
console.log("Su temperatura en grados Fahrenheit es: ", convertirCelsiusAFahrenheit(Celsius));
