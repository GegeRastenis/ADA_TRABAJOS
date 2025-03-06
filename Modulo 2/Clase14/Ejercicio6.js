/*DESAFIO Ejercicio 6: Hash de Contraseña con Sal 
Crea un script en Node.js que permita al usuario ingresar una contraseña 
y un "sal" (un valor aleatorio que se usa para añadir seguridad). Luego, 
genera un hash de la contraseña combinada con el "sal" usando el 
algoritmo SHA-256. Muestra el hash generado*/

const crypto = require('crypto')
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
}); 

function hashPasswordAndSalt (password, salt){
const hash = crypto.createHash('sha256'); 
hash.update(password, salt); 
return hash.digest('hex'); 
}; 

rl.question('Por favor ingrese su contrasenia: ', (password)=>{
    rl.question('Por favor ingrese el "sal": ', (salt)=>{
        const hashGenerado = hashPasswordAndSalt(password, salt);

        console.log('El Hash generado es: ', hashGenerado); 

        rl.close(); 
    })
})

    