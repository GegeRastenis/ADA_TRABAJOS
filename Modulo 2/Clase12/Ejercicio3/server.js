/*2. Cliente TCP:
o El cliente debe conectarse al servidor y enviar el título de una 
película.
o Debe recibir la respuesta del servidor y mostrarla en la 
consola.
o El cliente debe permitir al usuario ingresar el título de la 
película que desea consultar.
Estructura del Proyecto: 
• models/movieModel.js: Modelo para manejar la lista de películas.
• views/movieView.js: Vista para formatear la respuesta.
• controllers/movieController.js: Controlador para manejar las 
solicitudes.
• server.js: Servidor TCP.
• client.js: Cliente TCP*/

const net = require('net')

const {handleMovieRequest} = require('./Controllers/MoviesControllers')

const server = net.createServer((socket)=>{
    console.log('Cliente conectado')

    socket.on('data', (data)=>{
        const movieTitle = data.toString().trim()
        console.log(`Solicitud recibida: Titulo de la pelicula ${movieTitle}`); 

        const response = handleMovieRequest(movieTitle); 

        socket.write(response); 
    })

    socket.on('end', ()=>{
        console.log('Cliente desconectado'); 
    })

    socket.on('err', ()=>{
        console.error(err)
    })
})

server.listen(4002, ()=>{
    console.log('Servidor escuchando desde el puerto 4002');
})
