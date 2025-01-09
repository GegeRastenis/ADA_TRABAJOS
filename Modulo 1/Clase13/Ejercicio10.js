/*Factorial de un número (Ejercicio entrevista) 
Crea una función expresada llamada calcularFactorial que reciba un 
número y devuelva su factorial.*/

let calcularFactorial = function (numero){
    let n = 1;
    for(let i = 1; i <= numero; i++){
    n *=i;
}
return n;
};
console.log(calcularFactorial(3));
