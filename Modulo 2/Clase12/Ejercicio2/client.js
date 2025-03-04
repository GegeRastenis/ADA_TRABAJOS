/*2. Cliente TCP:
o El cliente debe conectarse al servidor y enviar un ID de hotel.
o Debe recibir la respuesta del servidor y mostrarla en la 
consola.
o El cliente debe permitir al usuario ingresar el ID del hotel que 
desea consultar.
Estructura del Proyecto: 
• models/hotelModel.js: Modelo para manejar la lista de hoteles.
• views/hotelView.js: Vista para formatear la respuesta.
• controllers/hotelController.js: Controlador para manejar las 
solicitudes.
• server.js: Servidor TCP.
• client.js: Cliente TCP.*/

const net = require('net')
const readline = require('readline'); 

const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
})

const options = {
    port: 4001, 
    host: 'localhost',
}; 

const hotelConsultado = (hotelId)=>{
const client = net.createConnection(options); 


    client.on('connect', ()=>{
    console.log(`Conectado al servidor. Solicitando disponibilidad del hotel con ID: ${hotelId}`); 
    client.write(hotelId); 
    });

    client.on('data', (data)=>{
        console.log('Respuesta del servidor', data.toString()); 
        client.end(); 
    })

    client.on('close', ()=>{
        console.log('Conexion cerrada'); 
        rl.close; 
    })

    client.on('error', (err)=>{
        console.error(err.message); 
        rl.close
    }); 

}; 

rl.question('Ingrese el ID del hotel requerido: ', (hotelId)=>{
    hotelConsultado(hotelId); 
}); 