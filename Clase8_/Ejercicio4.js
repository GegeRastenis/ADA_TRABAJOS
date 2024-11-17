/*En este ejercicio, aprenderás a utilizar operadores aritméticos y condicionales. 
Debes escribir un programa que:
1. Solicite al usuario que ingrese un número entero.
2. Determine si el número es par o impar.
3. Muestre un mensaje indicando si el número es par o impar.
Requisitos:
• Utiliza el operador módulo (%) para comprobar si el número es divisible 
por 2.
• Usa una estructura if-else para mostrar el mensaje adecuado.*/
const prompt = require("prompt-sync")({ sigint: true})
let numero = parseFloat (prompt("escribe un numero entero"));
if (numero %2 ==0){
    console.log(`el numero ${numero} que ingresaste es par`)
}
else {console.log(`el numero que ingresaste es impar`)}