/*Declara una variable nombre y pide al usuario que ingrese su nombre. 
Verifica si el nombre ingresado es igual a tu nombre.*/
const prompt = require("prompt-sync")({ sigint: true})
const name = "Giselle";
let name2 = prompt ("Please insert your name");
if (name == name2){
    console.log (`wow we have the same name ${name}`);
}
else {
    console.log (`We have different names`);
}