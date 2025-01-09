/*Lugar y números
Para practicar la implementación del algoritmo de búsqueda binaria, 
vamos a empezar con un ejemplo simple. Quiero que se familiaricen con 
la sintaxis del mismo, por lo que no hare énfasis en los datos, sino en la 
solución.
Dada la siguiente lista:*/

let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];


/*Utilizar el algoritmo de búsqueda binaria para responder los siguientes 
ítems:
o ¿Cuál es la posición del número 1?
o ¿Cuál es la posición del número 5?
o ¿Cuál es la posición del número 6?
o ¿Cuál es la posición del número 9?
o ¿Cuál es la posición del número 11?
Sabemos que responder estas preguntas es extremadamente fácil, ya 
que podemos leer el array, y determinar con un cálculo visual la posición 
de cada elemento, pero, la propuesta que les hago es que codeen un 
algoritmo de búsqueda binaria, que “busque” ese número, por ejemplo, el 
6, y nos indique por consola la posición del mismo.
El objetivo de este ejercicio es que puedan practicar la sintaxis sin añadir 
complejidad extra */

function busquedaBinaria (list, busqueda){
let masBajo = 0; 
let masAlto = list.length -1; 

while(masBajo <= masAlto){
    const medio = Math.floor((masBajo + masAlto) /2); 

    const search = list[medio]; 
    if(search === busqueda){
        return medio; 
    }
    if(search > busqueda){
        masAlto = medio -1;
    }
    else{
        masBajo = medio +1; 
    }
  }
  return null; 
}


console.log(`La posicion del numero 1 es: ${ busquedaBinaria(list, 1)}`);  
console.log(`La posicion del numero 5 es: ${ busquedaBinaria(list, 5)}`); 
console.log(`La posicion del numero 6 es: ${ busquedaBinaria(list, 6)}`); 
console.log(`La posicion del numero 9 es: ${ busquedaBinaria(list, 9)}`); 
console.log(`La posicion del numero 11 es: ${ busquedaBinaria(list, 11)}`); 
