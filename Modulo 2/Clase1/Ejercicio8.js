/*Ejercicio 8: Contador de letras 
Crea una función que reciba una cadena de texto y una letra, y devuelva 
cuántas veces aparece esa letra en la cadena.
Consigna:
• Usa un bucle for y condicionales.
• Haz que la búsqueda no distinga entre mayúsculas y minúsculas.*/
let texto = "programar es divertido"; 

function contandoLetras(texto){
    let contador = 0; 
    for(let i = 0; i < texto.length; i++){
        let letra = texto[i];
        if(letra !== ' '){ 
            contador ++;
        }
    }
    let letraBuscada = 'a'
    let contandoLasA = texto.split('').filter(letra => letra === letraBuscada).length; 
    console.log(`La letra ${letraBuscada} aparece ${contandoLasA} veces`); 
    return contador; 

}
contandoLetras(texto); 