/*Declara dos variables numéricas numero1 y numero2. Pide al usuario 
que ingrese dos números y muestra cuál es mayor o si son iguales.*/
const prompt = require("prompt-sync")({ sigint: true})
let numero = parseFloat (prompt("escribe un numero"));
let numero2 = parseFloat (prompt("escribe otro numero"));
if (numero > numero2){
    console.log(`el numero ${numero} que ingresaste es mayor que ${numero2}`);
}
else if (numero2 > numero){
        console.log(`el numero ${numero2}que ingresaste es mayor que ${numero}`);
    }
else if (numero==numero2){
    console.log(`el numero ${numero} que ingresaste es igual al otro numero ${numero2}`);
}