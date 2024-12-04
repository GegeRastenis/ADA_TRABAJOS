/*Número par o impar
Crea una función declarada llamada esPar que reciba un número y 
devuelva "Es par" si el número es par o "Es impar" si el número es impar. 
Usa una variable local para guardar el resultado.*/

function esPar(numero){
    if(numero % 2 === 0){
        return `El numero ${numero} es par`;
    }
    else{
        return `El numero ${numero} es impar`;
    }
}
console.log(esPar(55));