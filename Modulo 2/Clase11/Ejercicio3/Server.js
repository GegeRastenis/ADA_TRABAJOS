/*Ejercicio 3: Servidor TCP que Obtiene Información de la Ruta
Objetivo: Crear un servidor TCP que acepte una ruta y responda con 
la base, el directorio, y la extensión del archivo usando 
path.basename, path.dirname, y path.extname.
Pasos:
1. Configuración del Servidor:
o Crea un servidor TCP que escuche en un puerto específico 
(por ejemplo, 8082).
2. Comando para Obtener Información de la Ruta:
o El servidor debe recibir una ruta desde el cliente.
o Usa path.basename, path.dirname, y path.extname para 
obtener la base del nombre, el directorio y la extensión 
del archivo, respectivamente.
3. Responder al Cliente:
o Envía la información al cliente en un formato legible.
Instrucciones:
• Ejecuta el servidor y conecta un cliente.
• Envía rutas completas (e.g., /home/user/docs/file.txt) para 
verificar la funcionalidad*/

const net = require('net'); 
const path = require('path'); 

const server = net.createServer((socket)=>{
    console.log('Cliente conectado'); 

    socket.on('data', (data)=>{
        const rutaRecibida = data.toString().trim(); 

        const baseName = path.basename(rutaRecibida); 
        const dirName = path.dirname(rutaRecibida); 
        const extName = path.extname(rutaRecibida); 

        const respuesta = `Base del Nombre : ${baseName}\n`+ 
        `Directorio: ${dirName}\n` + 
        `Extension del Archivo: ${extName}`; 

        socket.write(respuesta); 

    }); 

    socket.on('end', ()=>{
        console.log('Cliente desconectado'); 
    })
}); 

server.listen(8082, ()=>{
    console.log('Servidor escuchando desde el puerto 8082'); 
}); 