/*Cuenta la cantidad total de letras en una lista de palabras 
Imagina que tienes una lista de palabras ['sol', 'luna', 'estrella']. Queremos 
saber cuántas letras hay en total entre todas las palabras. Por ejemplo, 
'sol' tiene 3 letras, 'luna' tiene 4, y 'estrella' tiene 8. La suma total debería 
ser 15*/
let wordList = ['sol', 'luna', 'estrella'];
let totalOfLetters = wordList.reduce(function(acumulador, word){
    return (acumulador + word) 
})
console.log (totalOfLetters.length); 