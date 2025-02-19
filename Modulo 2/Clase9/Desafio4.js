/*DESAFÍO 4: Cliente con Mensajes Temporizados y Cierre Programado 
Objetivo: Enviar mensajes cada 5 segundos y cerrar la conexión tras 
20 segundos.
El cliente debe:
Conectarse y enviar un mensaje inicial.
Enviar un mensaje "Mensaje automático" cada 5 segundos.
Escuchar el evento 'data' y mostrar los datos recibidos.
Cerrar la conexión con client.end() tras 20 segundos*/

const { log } = require('console');
const net = require('net'); 
const PORT = 5000; 
const HOST = 'localhost'; 

const client = net.createConnection({port: PORT, host: HOST}, ()=>{
    console.log('Conectando al servidor'); 
    client.write('Hola servidor! Soy el cliente!')
})

setTimeout(() =>{
    console.log('Aloooo servidor!...'); 
    client.write()
},5000); 

client.on('data', (data)=>{
    console.log('Mensaje recibido', data.toString())
}); 

setTimeout(()=>{
    console.log('Cerrando la conexion tras inactividad...'); 
    client.end(); 
}, 20000); 

client.on('error', (err)=>{
    console.log('Error: ', err.message); 
}); 