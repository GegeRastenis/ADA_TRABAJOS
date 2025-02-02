/*Ejercicio 3: Pausar y reanudar la recepción de datos 
 Consigna 
Crea un cliente TCP que:
1. Reciba mensajes continuamente del servidor.
2. Al recibir el primer mensaje, pause la recepción durante 3 
segundos.
3. Luego de los 3 segundos, reanude la recepción y siga mostrando 
los mensajes*/

const net = require('net')

const PORT = 5000; 
const HOST = 'localhost'; 

const client = net.createConnection({port: PORT, host: HOST}, () =>{
console.log('Conectando al servidor'); 

client.write('Hola servidor!')

setTimeout(()=>{ 
    console.log('Pausando la recepcion de datos...'); 
    client.pause();

    setTimeout(()=>{
        console.log('Reanudando la recepcion de datos...'); 
        client.resume();

        client.write('Otro mensaje despues de reanudar...'); 
        }, 3000);
     }, 3000);

});