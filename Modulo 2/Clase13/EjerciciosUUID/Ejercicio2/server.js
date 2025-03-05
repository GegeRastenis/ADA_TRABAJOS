/*Objetivo: 
Crear un servidor TCP que responda con un objeto JSON que contenga 
un UUID v5 basado en un nombre fijo y un espacio de nombres.
Pasos: 
1. Servidor TCP (server.js): 
o Importar los módulos net y uuid.
o Crear un servidor TCP que genere un UUID v5 basado en un 
nombre y un espacio de nombres.
o Enviar un objeto JSON con el UUID al cliente.*/

const net = require('net')
const {v5: uuidv5} = require('uuid')

const nameSpace = '6ba7b810-9dad-11d1-80b4-00c04fd430c8'

const server = net.createServer((socket)=>{

    const name = 'nombreDeUsuario'
    const idv5 = uuidv5(name, nameSpace); 
   
    const respuesta = JSON.stringify({
        message: "Este es tu uuidV5", 
        uuid: idv5
    })
    
    socket.write(respuesta); 

    socket.on('end', ()=>{
        console.log('Conexion finalizada con el cliente')
    })
})

server.listen(4000, ()=>{
    console.log('Servidor escuchando desde el puerto 4000'); 
})