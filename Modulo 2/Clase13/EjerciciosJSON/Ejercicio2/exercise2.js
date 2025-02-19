/*Ejercicio 2: Leer y Modificar un Archivo JSON 
Objetivo: Leer datos de un archivo JSON, modificarlos y guardarlos 
nuevamente.
Instrucciones: 
• Crea un archivo llamado data.json con el siguiente contenido:
• Crea un archivo llamado exercise2.js.
• Lee el archivo data.json, modifica el campo age a un nuevo valor, y 
guarda el archivo modificado.*/

const fs = require('fs'); 
const rutaArchivo = './data.json'; 

fs.readFile(rutaArchivo, 'utf-8', (err, data)=>{
    if(err){
        console.error(err); 
        return; 
    }

    const dataPersona = JSON.parse(data); 
    console.log(dataPersona); 

    let dataActualizada = {
    name: 'bob', 
    age: 35, 
    email: 'bob@example.com'
    };

    console.log('Data actualizada: ', dataActualizada); 

    const newData = JSON.stringify(dataActualizada, null, 2); 

fs.writeFile(rutaArchivo, newData, (err)=>{
    if(err){
        console.error(err); 
        return; 
    }
    console.log('Archivo actualizado correctamente'); 
  }); 

}); 