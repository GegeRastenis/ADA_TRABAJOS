/*Ejercicio 3: ¡Actualiza tu estilo! 
Consigna:
¿Has cambiado tu estilo o actividad reciente? ¡Es momento de actualizar 
tu perfil! Agrega un nuevo atributo hobby a tu perfil y guarda los cambios 
en el archivo perfil.json.
 Pista: Primero, lee el archivo existente, actualiza el objeto y vuelve a 
escribirlo.*/

const fs = require('fs')

fs.readFile('perfil.json', 'utf-8',function(err, data){
        if (err){
            console.log("No se pudo actualizar su perfil",err)
        } else{
            const perfil = JSON.parse(data); 
            perfil.hobby = "entrenar"; 
            fs.writeFile('perfil.json', JSON.stringify(perfil, null, 2), (err)=>{
            if(err){
            console.log("No se pudo actualizar su perfil", err); 
            }else{
             console.log("Perfil actualizado correctamente: se ha ingresado su nuevo hobby");
            }
        });
        }
    });
