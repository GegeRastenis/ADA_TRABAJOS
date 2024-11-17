const prompt = require("prompt-sync")({ sigint: true})
let numero = parseFloat (prompt("escribe un numero")); 
console.log (numero*2); 