/*DESAFÍO 2: Cliente con Pausa y Reanudación de Datos 
Objetivo: Simular un cliente que pausa la recepción de datos por 5 
segundos y luego la reanuda.
El cliente debe:
Conectarse al servidor y enviar un mensaje inicial.
Escuchar el evento 'data' y mostrar los datos en consola.
Pausar la recepción de datos usando client.pause() a los 3 segundos.
Reanudar la recepción de datos con client.resume() a los 8 segundos.
Finalizar la conexión tras 15 segundos*/
 
const net = require('net'); 
const PORT = 5000; 
const HOST = 'localhost'; 
 
const client = net.createConnection({port: PORT, host: HOST}, ()=>{ 
     client.write('Hola Servidor!'); 
}); 

client.on('connect',()=>{
    console.log('Conectando al servidor...')
}); 

client.on('data',(data)=>{
console.log('Mensaje recibido', data.toString); 
}); 

setTimeout(()=>{
    console.log('Pausando la recepcion de datos'); 
    client.pause()
}, 3000); 

setTimeout(()=>{
    console.log('Se ha reanudado la recepcion de datos'); 
    client.resume()
}, 8000); 

setTimeout(()=>{
    console.log('Cerrando la conexion'); 
    client.end();
}, 15000); 

client.on('error', (err)=>{
console.log('Error: ', err.message);
}); 