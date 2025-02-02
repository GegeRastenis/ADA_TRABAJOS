/*Ejercicio 10: Cliente que detecta pérdida de conexión 
 Consigna 
Crea un cliente que:
1. Si deja de recibir datos durante 10 segundos, muestre " No hay 
datos del servidor" y cierre la conexión.
 Pistas 
• Usa setTimeout() que se reinicie con cada mensaje recibido.
• Si pasan 10 segundos sin mensajes, cierra con client.end()*/

const net = require('net'); 
const PORT = 5000; 
const HOST = 'localhost'; 

const client = net.createConnection({port: PORT, host: HOST}, ()=>{
    console.log('Conectando al servidor'); 
}); 

let timeout; 
client.on('data', (data)=>{
    console.log('Servidor:', data.toString()); 
    clearTimeout(timeout); 
    timeout = setTimeout(()=>{
    console.log('No hay datos del servidor. Cerrando conexion...'); 
    client.end(); 
    },10000); 
}); 

client.on('error', (err) =>{
console.error('Error en la conexion', err.message); 
client.end(); 
}); 

