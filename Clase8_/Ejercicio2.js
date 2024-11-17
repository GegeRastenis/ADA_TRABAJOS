const prompt = require("prompt-sync")({ sigint: true})
let numero = parseFloat(prompt("ingresa un numero, este puede ser positivo o negativo"));
/*En este ejercicio, practicarás el uso de condicionales (if, else). Escribe un 
programa en JavaScript que:
1. Pida al usuario que ingrese un número.
2. Verifique si el número es positivo, negativo o igual a cero.
3. Muestre un mensaje indicando cuál es el caso*/

if (numero > 0){
    console.log(`El numero ${numero} que ingresaste es positivo`)
}
else if (numero ==0){
    console.log(`El numero ${numero} que ingresaste es cero`)
}
else if (numero < 0){
    console.log(`El numero ${numero} que ingresaste es negativo`)
}
else {
    console.log(`Lo que ingresaste no es un numero`)}

 