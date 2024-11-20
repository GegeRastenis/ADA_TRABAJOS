/*Usando las variables: 
Escribe un programa que pida al usuario que ingrese su nombre, su 
edad y su peso, y luego muestre un mensaje personalizado que incluya 
toda esta información.
Desglosando el ejercicio deberás:
1. Pide al usuario que ingrese su nombre.
2. Pide al usuario que ingrese su edad.
3. Pide al usuario que ingrese su peso.
4. Muestra un mensaje personalizado que incluya el nombre, la edad 
y el peso del usuario.
Pista: En el ejercicio anterior, declaramos valores en las variables. 
Ahora nos toca pedir datos al usuario, por lo que usaremos promptsync 
para solicitar esta información.*/
const prompt = require("prompt-sync")({ sigint: true})
let nombre = prompt("Escribe tu nombre");
let edad = parseInt(prompt("Escriba su edad"));
let peso = parseFloat (prompt("Escriba su peso"));
console.log (`Su nombre es ${nombre}, su edad es ${edad} y su peso es ${peso}`);