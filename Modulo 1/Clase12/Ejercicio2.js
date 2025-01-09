//Do While  
/*Escribe un programa que solicite al usuario ingresar una contraseña. Si la 
contraseña es incorrecta, debe volver a pedirla hasta que el usuario 
ingrese la correcta. La contraseña correcta es "1234".*/
const prompt = require("prompt-sync")({ sigint: true})
const password = '1234';

do{
    user = prompt("Please, enter your password ");
    if(user === password){
        console.log("Your password is correct");}
        else{
            console.log("Your password is wrong. Please try again ");
        }
    }

while(user != password); 