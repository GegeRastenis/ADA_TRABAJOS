/*Crea un programa que le pida al usuario dos números y una operación 
matemática a realizar: suma, resta, multiplicación o división. Según la operación 
ingresada, el programa deberá calcular y mostrar el resultado. Si el usuario 
ingresa una operación inválida, el programa debe mostrar un mensaje de error. 
Usa switch para resolverlo.*/
const prompt = require("prompt-sync")({ sigint: true})
let number = parseInt(prompt("Ingrese un numero: "));
let number2 = parseInt(prompt("Ingrese otro numero: "));
let operacion = prompt("ingrese una operacion matematica suma, resta, division o multiplicacion: ");
switch(operacion){
   case 'suma':
   console.log(number + number2);
   break;
   case 'resta':
   console.log(number - number2);
   break;
   case 'division':
   console.log(number / number2);
   break;
   case 'multiplicacion':
   console.log(number * number2);
   break;
   default:
   console.log("Operacion matematica no reconocida, ingrese una valida");
}