/*Pide al usuario que ingrese su peso en kilogramos y conviértelo a 
libras. Muestra el resultado con un mensaje. (Averigua como pasar de 
kg a libras, Pista: 2.20462)*/
const prompt = require("prompt-sync")({ sigint: true})
let kilogramos = parseFloat(prompt("Ingrese su peso en Kg"));
console.log (`su peso en convertido en libras es ${kilogramos*2.20462}`);
