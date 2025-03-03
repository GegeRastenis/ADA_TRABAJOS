/*Ejercicio 1: Crear un Servidor TCP con Persistencia de Datos 
Consigna: 
Crea un servidor TCP que reciba mensajes de los clientes y los guarde en 
un archivo JSON. Luego, permite a los clientes consultar todos los 
mensajes almacenados.
Pasos: 
• Usa el módulo net para crear el servidor.
• Usa fs para guardar los mensajes en un archivo mensajes.json.
• Implementa un comando especial (ej: /historial) para que los 
clientes puedan consultar todos los mensajes.*/

const net = require('net');
const fs = require('fs');
const path = require('path');

const rutaMensajes = path.join(__dirname, 'mensajes.json'); 

if(!fs.existsSync(rutaMensajes)){
    fs.writeFileSync(rutaMensajes, '[]', 'utf-8'); 
}

const server = net.createServer((socket) =>{
    console.log('Cliente conectado'); 

    socket.on('data', (data) =>{
        const mensaje = data.toString().trim();
        let mensajito = []; 
        if (mensaje === '/historial'){
            const historial = fs.readFileSync(rutaMensajes, 'utf-8');
                socket.write(`Historial de mensajes: \n${historial}`);
        }else{
            const mensajes = JSON.parse(fs.readFileSync(rutaMensajes, 'utf-8') || '[]');
            mensajito.push({fecha: new Date().toISOString, mensaje});
            fs.writeFileSync(rutaMensajes, JSON.stringify(mensajes, null, 2), 'utf-8');
            socket.write('Mensaje guardado correctamente');
        }
    })

    socket.on('end', ()=>{
        console.log('Cliente desconectado'); 
    })
})

server.listen(3000, ()=>{
    console.log('Servidor escuchando desde el puerto 3000'); 
})