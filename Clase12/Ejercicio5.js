//Arrays y condicionales
/*Crea un programa que solicite al usuario ingresar 5 nombres y los 
almacene en un array. Luego, solicita al usuario ingresar un nombre y 
verifica si ese nombre se encuentra en el array. (Pueden desglosar en 
pasos el código si eso les facilita su desarrollo)*/

const prompt = require("prompt-sync")({ sigint: true})
let name = []

for(let i = 0; i < 5; i++){
    let askname = prompt(`Escriba un nombre ${i+1}: `);
    name.push(askname);
}
console.log(name);

let askname2 = prompt("Por favor ingrese un nombre: ");
let encontrado = false;

for(let i = 0; i < name.length; i++){
    if(askname2 == name[i]){
        encontrado = true;
        break;
    }
}

if(encontrado == true){
        console.log("El nombre ingresado ha sido encontrado en el array");
    }
else{
    console.log("El nombre ingresado no pertenece al array");
}

