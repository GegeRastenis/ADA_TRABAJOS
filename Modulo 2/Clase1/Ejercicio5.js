/*Ejercicio 5: Generador de iniciales 🅰️
Escribe una función que reciba un nombre completo y devuelva las 
iniciales en mayúsculas.
Consigna:
• Usa el método split() para dividir el nombre.
• Usa un bucle for y métodos de string.*/
let nombre = "juan perez gomez";
let nombreDividido = []
function generarIniciales(nombre){
    nombreDividido = nombre.split(" ")
    console.log(nombreDividido); 
   
    return nombreDividido
    }
generarIniciales(nombre); 