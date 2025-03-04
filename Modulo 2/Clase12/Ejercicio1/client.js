/*2. Cliente TCP:
o El cliente debe conectarse al servidor y enviar un ID de libro.
o Debe recibir la respuesta del servidor y mostrarla en la 
consola.
o El cliente debe permitir al usuario ingresar el ID del libro que 
desea consultar.
Estructura del Proyecto: 
• models/bookModel.js: Modelo para manejar la lista de libros.
• views/bookView.js: Vista para formatear la respuesta.
• controllers/bookController.js: Controlador para manejar las 
solicitudes.
• server.js: Servidor TCP.
• client.js: Cliente TCP.*/

const net = require('net'); 

const client = net.createConnection({port: 4000}, ()=>{
    console.log('Conectado al Servidor'); 

    const bookId = '1'; 
    client.write(bookId)
}); 

client.on('data', (data)=>{
    console.log('Respuesta del servidor: ', data.toString()); 
    client.end()
})

client.on('end', ()=>{
    console.log('Conexion cerrada con el servidor'); 
})