/*Ejercicio 1: Conectar y enviar un mensaje al servidor 
 Consigna 
Crea un cliente TCP que:
1. Se conecte a un servidor en localhost:5000.
2. Cuando la conexión se establezca, envíe el mensaje: "¡Hola, 
servidor!".
3. Escuche los datos recibidos y los muestre en consola.
 Pistas*/

const net = require('net')

const PORT = 5000; 
const HOST = 'localhost'; 

const client = net.createConnection({port: PORT, host: HOST}, () =>{
console.log('Conectando al servidor'); 

client.write('¡Hola, servidor!'); 
}); 