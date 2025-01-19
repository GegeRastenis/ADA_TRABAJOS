/*Ejercicio 1: ¡Crea tu perfil digital! 
Consigna:
Imagina que acabas de unirte a una red social donde puedes crear tu 
perfil digital básico. Tu misión es:
1. Crear un archivo llamado perfil.json.
2. Dentro de este archivo, guarda información sobre ti: nombre, edad 
y tu ciudad favorita.
3. Usa el módulo fs para escribir este archivo desde Node.js.
 Pista: Utiliza JSON.stringify para convertir tu información en un 
formato que pueda guardarse en el archivo.*/

const fs = require('fs')

const perfil = {
    nombre: 'Giselle',
    edad: 43,
    ciudadFavorita: 'Nueva York'
}

fs.writeFile('perfil.json', JSON.stringify(perfil, null, 2), (err) =>{
    if(!err){
        console.log("Perfil creado exitosamente, revisa el archivo: 'perfil.json")
    }else{
        throw err
    }
})