/*Ejercicio 2: Implementar un timeout en la conexión 
 Consigna 
Modifica el cliente del Ejercicio 1 para que:
1. Si después de 5 segundos no ha recibido una respuesta, cierre la 
conexión.
2. Muestre " Tiempo de espera agotado" en la consola antes de 
cerrar*/

const net = require('net')

const PORT = 5000; 
const HOST = 'localhost'; 

const client = net.createConnection({port: PORT, host: HOST}, () =>{
console.log('Conectando al servidor'); 

client.setTimeout(5000, () =>{
    console.log('Tiempo de espera agotado, cerrando la conexion... '); 
    client.end()
    });
}); 