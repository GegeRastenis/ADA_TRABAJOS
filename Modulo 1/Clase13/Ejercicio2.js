/*Número mayor (función expresada)
Crea una función expresada llamada encontrarMayor que reciba dos 
números como parámetros y devuelva el número mayor.*/

let encontrarMayor = function(primerNumero, segundoNumero){
    if(primerNumero>segundoNumero){
        return `El numero mayor es ${primerNumero}`;
    }
    else{
        return `El numero mayor es ${segundoNumero};`
    }
}
console.log(encontrarMayor(15, 20));