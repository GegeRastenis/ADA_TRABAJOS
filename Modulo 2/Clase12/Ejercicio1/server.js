/*Ejercicio 1: Sistema de Gestión de Libros 
Consigna: 
Vamos a implementar un sistema de gestión de libros donde el cliente 
pueda solicitar información sobre un libro específico a través de su ID. El 
servidor procesará la solicitud, buscará el libro en una base de datos 
simulada (archivo JSON) y devolverá la información al cliente.
Pasos a seguir: 
1. Servidor TCP:
o El servidor debe escuchar en el puerto 4000.
o Debe recibir solicitudes del cliente que incluyan el ID de un 
libro.
o Utilizar el patrón MVC:
▪ Modelo: Encargado de leer el archivo JSON 
(books.json) que contiene la lista de libros y buscar el 
libro por ID.
▪ Vista: Encargada de formatear la respuesta que se 
enviará al cliente (en formato JSON).
▪ Controlador: Encargado de recibir la solicitud del 
cliente, llamar al modelo para obtener los datos y 
luego pasar esos datos a la vista para formatear la 
respuesta.
o El servidor debe enviar la respuesta al cliente y cerrar la 
conexión.*/

const net = require('net')

const controllersBooks = require('./Controllers/controllersBooks')

const server = net.createServer((socket)=>{
    console.log('Cliente conectado'); 

    socket.on('data', (data)=>{
        const bookId = data.toString().trim(); 
        console.log(`Solicitud recibida: ID ${bookId}`); 

        const response = controllersBooks.handleRequest(bookId)

        socket.write(response)
    })

    socket.on('end', ()=>{
        console.log('Cliente desconectado')
    })
})

server.listen(4000, ()=>{
    console.log('Servidor escuchando desde el puerto 4000'); 
})