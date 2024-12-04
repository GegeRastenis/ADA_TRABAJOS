/*Concatenar nombres (función expresada) 
Crea una función expresada llamada concatenarNombres que reciba dos 
nombres (nombre y apellido) como parámetros y devuelva el nombre 
completo concatenado*/
const prompt = require("prompt-sync")({ sigint: true})
let nombre = prompt("Por favor ingrese su nombre: "); 
let apellido = prompt("Por favor ingrese su apellido: "); 

let concatenarNombres = function (nombre, apellido){
    return `${nombre} ${apellido}`; 
}
console.log(concatenarNombres(nombre, apellido));