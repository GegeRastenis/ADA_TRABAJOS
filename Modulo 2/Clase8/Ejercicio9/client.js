/*Ejercicio 9: Cliente que reconecta automáticamente 
 Consigna 
Crea un cliente que:
1. Si la conexión falla, reintente conectarse cada 3 segundos hasta 
que tenga éxito.
 Pistas 
• Usa setTimeout() para intentar de nuevo tras 3 segundos.
• Llama a net.createConnection() dentro del reintento*/

const net = require('net'); 
const PORT = 5000; 
const HOST = 'localhost'; 

const client = net.createConnection({port: PORT, host: HOST}, ()=>{
    console.log('Conectado al Servidor');
    client.write('Hola Servidor!');  
}); 

client.on('error', (err) =>{
    console.log('Error en la conexion', err.message); 
    setTimeout(()=>{
        console.log('Intentando conectar al servidor nuevamente...'); 
        client = net.createConnection({port: PORT, host: HOST}); 
    },3000)
}); 

client.on('close', ()=>{
    console.log('Conexion cerrada'); 
    client.end(); 
}); 
