/*DESAFÍO 6: Cliente con Control Inteligente de Reintentos y Máximo 
de Fallos 
Objetivo: Crear un cliente TCP que intente reconectarse si la 
conexión se pierde, pero que abandone después de 5 intentos fallidos.
El cliente debe:
Intentar conectarse al servidor.
Si se desconecta, volver a intentar cada 2 segundos.
Llevar un contador de intentos fallidos.
Si llega a 5 intentos fallidos, terminar el proceso con un mensaje de 
error.
Manejar adecuadamente los eventos 'error', 'close' y 'data'.
PISTA: Usen un contador global de intentos y un setTimeout() para 
gestionar los reintentos*/

const net = require('net');
const PORT = 5000;  
const HOST = 'localhost'; 
const maxIntentos = 5; 
const intervalo = 2000; 

let contadorIntentos = 0; 



function conectarCliente(){
const client = net.createConnection({port: PORT, host: HOST},()=>{
console.log('Conectando al servidor'); 
contadorIntentos = 0; 
  }); 

    client.on('data', (data)=>{
    console.log('Mensaje recibido del servidor', data.toString()); 
  }); 

    client.on('close', ()=>{
    console.log('Conexion cerrada con el servidor'); 
    intentoReconexion(); 
  }); 

    client.on('error', (err)=>{
    console.log('Error: ', err.message); 
    intentoReconexion(); 
  }); 

}

function intentoReconexion(){
    if(contadorIntentos < maxIntentos){
        contadorIntentos ++; 
        console.log(`Intento de reconexion: ${contadorIntentos} de ${maxIntentos}`); 
        setTimeout(conectarCliente, intervalo); 
    }else{
        console.error('No se pudo conectar al servidor, despues de 5 intentos. Terminando proceso'); 
        process.exit(1);  
    }
}

conectarCliente();  