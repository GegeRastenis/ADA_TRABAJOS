/*Declara una variable que contenga una matriz de 5x5 llena de puros 
números enteros y positivos. Luego, escribe un algoritmo para sumar 
todos los números en la matriz.*/

let matriz = [
    [2, 4, 6, 8, 10],
    [1, 3, 5, 7, 9],
    [12, 14, 16, 18, 20], 
    [11, 13, 15, 17, 19],
    [22, 24, 26, 28, 30]
];
let suma = 0;
for(let fila = 0; fila < matriz.length; fila++){
    for(let columna = 0; columna < matriz[fila].length; columna++){
    suma += matriz[fila][columna];
    }
}
console.log(suma);

