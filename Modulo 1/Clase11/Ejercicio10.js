/*Crea un programa donde la computadora seleccione un número al azar entre 1 
y 10. Luego, pide al usuario que adivine el número hasta 3 intentos. Si el usuario 
acierta en cualquiera de los intentos, muestra un mensaje de felicitación y detén 
los intentos restantes. Si no acierta después de los 3 intentos, muestra el 
número secreto. Usa un for para resolver este ejercicio*/
const prompt = require("prompt-sync")({ sigint: true})
let number = 5
for(let i = 3; i > 0; i--){
    let adivinanza = parseInt(prompt(`Adivina un numero del 1 al 10. Tienes ${i} chances:  `)); 
    if (adivinanza == number){
        console.log("Felicitaciones! Haz acertado");
        break;
    }
    else {
        console.log("Lo siento! No has acertado");
    }
    if (i === 1) {
        console.log(`Han pasado tus chances y no has acertado. El numero era ${number}`);
    }
}



         
    

    
