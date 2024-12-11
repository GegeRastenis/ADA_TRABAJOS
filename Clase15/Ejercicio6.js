/*Buscar la última posición de un elemento repetido 
Tienes una lista de números [2, 5, 7, 2, 8, 7]. Encuentra y muestra la última 
posición en la que aparece el número 7.*/
let numeros = [2, 5, 7, 2, 8, 7]; 
let ultimoEncontrado = numeros.lastIndexOf(7); 
console.log(`El Nro 7 fue encontrado por ultima vez en el indice ${ultimoEncontrado}`);