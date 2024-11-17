/*Escribe un programa que pida al usuario que ingrese tres números y 
determine cuál es el mayor de los tres.*/
const prompt = require("prompt-sync")({ sigint: true})
let number = parseFloat (prompt("ingresa un numero"));
let number2 = parseFloat (prompt("ingresa otro numero"));
let number3 = parseFloat (prompt("vuelve a ingresar un numero"));
if (number > number2 && number > number3){
    console.log (`el mayor de los numeros que ingresaste es el numero ${number}`);
}
else if (number2 > number && number2 >number3){
    console.log (`el mayor de los numeros que ingresaste es el numero ${number2}`);
}
else if (number3 > number && number3 >number2){  
console.log (`el mayor de los numeros que ingresaste es el numero ${number3}`);
}