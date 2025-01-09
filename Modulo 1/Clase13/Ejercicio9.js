/*Contar hasta un número
Crea una función declarada llamada contarHasta que reciba un número y 
use un bucle para imprimir todos los números desde 1 hasta ese número.*/
const prompt = require("prompt-sync")({ sigint: true})
let numero = parseInt(prompt("Por favor ingrese un numero: "));
function contarHasta(numero){
for(let i = 1; i <= numero; i++){
    console.log(i);
  }
}
contarHasta(numero);