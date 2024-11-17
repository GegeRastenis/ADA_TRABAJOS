/*Este ejercicio es ideal para familiarizarse con la manipulación de cadenas de 
texto y la función prompt(). Escribe un programa que:
1. Solicite al usuario que ingrese su nombre.
2. Muestre un saludo personalizado usando el nombre ingresado.
Requisitos:
• Utiliza prompt() para recibir el nombre del usuario.
• Muestra un mensaje utilizando concatenación de cadenas*/
const prompt = require("prompt-sync")({ sigint: true})
let nombre = (prompt("ingrese un nombre"))
console.log(`Hola, mi nombre es ${nombre} y me estoy volviendo loca programando`);

