/*Ejercicio 4: Ordenar una Lista de Números 
Crea un script en Node.js que permita al usuario ingresar una lista de 
números separados por comas. Ordena los números de menor a mayor y 
muestra la lista ordenada.*/

const readlineSync = require('readline-sync')

const numerosIngresados = readlineSync.question('Por favor ingrese una lista de 5 numeros separados por comas: '); 

const  numerosOrdenados = numerosIngresados.split(',').map(num => parseInt(num.trim(), 10));

numerosOrdenados.sort((a,b) => a - b); 

console.log(`Esta es su lista de numeros ingresados de menor a mayor: ${numerosOrdenados}`); 