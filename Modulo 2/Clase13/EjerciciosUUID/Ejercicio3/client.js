/*2. Cliente TCP (client.js): 
o Importar el módulo net.
o Conectar al servidor TCP, recibir el objeto JSON, parsearlo y 
mostrar el UUID en la consola*/

const net = require('net'); 

const client = net.createConnection({port: 4040}, ()=>{
    console.log('Conectando con el servidor'); 
})

client.on('data', (data)=>{
    const respuesta = JSON.parse(data.toString()); 
    console.log(`Mensaje del servidor: ${respuesta.message}`); 
    console.log(`UUID recibido: ${respuesta.uuid}`); 
    client.end(); 
})