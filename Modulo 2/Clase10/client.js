/*Parte 2: Crear el Cliente TCP 
1. Descripción: Crea un cliente TCP en Node.js que se conecte al 
servidor en el puerto 5000. El cliente debe permitir al usuario 
ingresar mensajes en la consola y enviar esos mensajes al servidor. 
El cliente debe mostrar la respuesta del servidor en la consola.
2. Requisitos:
o El cliente debe conectarse al servidor en el puerto 5000 y en 
la dirección localhost.
o Debe permitir al usuario ingresar mensajes y enviarlos al 
servidor.
o Debe mostrar en la consola la respuesta del servidor.
o El cliente debe manejar la desconexión y mostrar un mensaje 
cuando se desconecta
Instrucciones
1. Configuración:
o Crea dos archivos, server.js y client.js, y coloca el código 
proporcionado en cada uno.
o Asegúrate de que el módulo readline-sync esté instalado en 
el proyecto (para el cliente) usando npm install readline-sync.
2. Ejecución:
o Ejecuta primero el servidor usando node server.js.
o Luego, ejecuta el cliente usando node client.js.
o Prueba enviando mensajes desde el cliente y verifica que el 
servidor los reciba y responda adecuadamente*/

const readline = require('readline-sync');
const net = require('net'); 

const options = {
    port: 5000, 
    host: 'localhost',
}; 

const client = net.createConnection(options); 

client.on('connect', ()=>{
    console.log('Se ha conectado exitosamente al servidor'); 
    sendline(); 
})

client.on('data', (data)=>{
    console.log('El servidor dice: ' + data.toString()); 
    sendline(); 
})

client.on('error', (err)=>{
    console.log(err.message); 
})

client.on('close', ()=>{
    console.log('Cerrando conexion con el servidor'); 
})

function sendline() {
    let line = readline.question('\nIngresa algun mensaje\t')
    if(line == "0"){
        client.end()
    }else{
        client.write(line)
    }
}