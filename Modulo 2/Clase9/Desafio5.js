/*DESAFÍO 5: Cliente con Eventos y Control de Referencias 
Objetivo: Aplicar ref() y unref() para controlar la terminación del 
proceso de Node.js.
El cliente debe:
Conectarse y enviar un mensaje inicial.
Escuchar los eventos 'data', 'end', 'close' y 'error'.
Llamar a client.unref() a los 10 segundos para permitir que el proceso 
termine.
A los 15 segundos, llamar a client.ref() para que el proceso se 
mantenga activo.
Cerrar la conexión a los 20 segundos.*/

const net = require('net'); 
const PORT = 5000; 
const HOST = 'localhost'; 

const client = net.createConnection({port: PORT, host: HOST}, ()=>{
    console.log('Conectando al servidor...'); 
    client.write('Hola Servidor, soy el cliente!'); 
}); 

client.on('data', (data) =>{
    console.log('Mensaje recibido', data.toString()); 
}); 

client.on('end', ()=>{
    console.log('El servidor ha cerrado la conexion...'); 
}); 

client.on('close', ()=>{
    console.log('Conexion cerrada con el servidor'); 
}); 

client.on('error', (err)=>{
    console.log('Error: ', err.message); 
}); 

setTimeout(()=>{
    console.log('Eliminando la referencia del Socket'); 
    client.unref()
}, 10000); 

setTimeout(()=>{
    console.log('Manteniendo la conexion activa'); 
    client.ref(); 
}, 15000); 

setTimeout(()=>{
    console.log('Cerrando la conexion con el servidor'); 
    client.end()
}, 20000); 

