/*Clasificación de palabras según su longitud 
Tienes una lista de palabras en una oración. Debes:
1. Dividir la oración en palabras individuales.
2. Clasificar las palabras en dos categorías:
▪ Cortas (menos de 5 letras)
▪ Largas (5 letras o más)
3. Mostrar ambas listas de palabras clasificadas.
4. La oración es: "JavaScript es un lenguaje poderoso y versátil"*/

let oracion = "JavaScript es un lenguaje poderoso y versátil";
let division = oracion.split(' '); 
console.log(division); 

let palabrasCortas = []; 
let palabrasLargas = [];

for(let i = 0; i < division.length; i++){
    let palabra = division[i]; 
    if(palabra.length < 5){
        palabrasCortas.push(palabra);
    }
    else{
        palabrasLargas.push(palabra); 
    }
}
console.log(`Esta es la lista de palabras cortas: ${palabrasCortas}`); 
console.log(`Esta es la lista de palabras largas: ${palabrasLargas}`); 