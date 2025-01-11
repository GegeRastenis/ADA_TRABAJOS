/*Ejercicio 7: Filtrar palabras largas 
Escribe una función que reciba un array de palabras y un número, y 
devuelva las palabras que tienen más caracteres que el número dado.
Consigna:
• Usa el método filter().
• Usa una función flecha para simplificar el código.*/
let palabras = ["javascript", "html", "css", "nodejs"]; 

const filtrarPalabras = (palabras, numero) => {
    let mayoresA5 = palabras.filter(palabra => palabra.length > numero); 
    return mayoresA5;
}

console.log(filtrarPalabras(palabras, 5)); 