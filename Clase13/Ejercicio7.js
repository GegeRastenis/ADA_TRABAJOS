/*Mensaje según la hora 
Declara una variable global llamada horaActual (puedes asignarle un valor 
fijo). Crea una función declarada llamada mostrarSaludo que imprima 
"Buenos días" si la hora es menor a 12, "Buenas tardes" si es menor a 18, o 
"Buenas noches" en cualquier otro caso.*/
const prompt = require("prompt-sync")({ sigint: true})
let horaActual = parseInt(prompt("Por favor ingrese su Hora Actualizada: "));

function mostrarSaludo(){
    if(horaActual < 12){
        return "Buenos Dias";
    }
    else if(horaActual > 12 && horaActual < 18){
        return "Buenas Tardes"; 
    }
    else{
        return "Buenas Noches";
    }
}
console.log(mostrarSaludo(horaActual));