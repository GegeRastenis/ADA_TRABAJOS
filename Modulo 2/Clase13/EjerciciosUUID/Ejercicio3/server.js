/*Objetivo: 
Crear un servidor TCP que responda con un objeto JSON que contenga 
un UUID v1 basado en el tiempo y la dirección MAC.
Pasos: 
1. Servidor TCP (server.js): 
o Importar los módulos net y uuid.
o Crear un servidor TCP que genere un UUID v1 basado en el 
tiempo.
o Enviar un objeto JSON con el UUID al cliente.*/

const net = require('net')
const {v1: uuidv1} = require('uuid');

const server = net.createServer((socket)=>{
    const idv1 = uuidv1(); 

    const respuesta = JSON.stringify({
        message: "Este es su UUIDV1", 
        uuid: idv1
    }); 

    socket.write(respuesta); 

    socket.on('end', ()=>{
        console.log('Conexion finalizada con el cliente'); 
    })
})

server.listen(4040, ()=>{
    console.log('Servidor escuchando desde el puerto 4040')
}); 