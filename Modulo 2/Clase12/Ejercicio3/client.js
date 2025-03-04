/*Ejercicio 3: Sistema de Gestión de Películas 🎬 
Consigna: 
Implementar un sistema de gestión de películas donde el cliente pueda 
solicitar información sobre una película específica a través de su título. El 
servidor procesará la solicitud, buscará la película en una base de datos 
simulada (archivo JSON) y devolverá la información al cliente.
Pasos a seguir: 
1. Servidor TCP:
o El servidor debe escuchar en el puerto 4002.
o Debe recibir solicitudes del cliente que incluyan el título de 
una película.
o Utilizar el patrón MVC:
▪ Modelo: Encargado de leer el archivo JSON 
(movies.json) que contiene la lista de películas y buscar 
la película por título.
▪ Vista: Encargada de formatear la respuesta que se 
enviará al cliente (en formato JSON).
▪ Controlador: Encargado de recibir la solicitud del 
cliente, llamar al modelo para obtener los datos y 
luego pasar esos datos a la vista para formatear la 
respuesta.
o El servidor debe enviar la respuesta al cliente y cerrar la 
conexión*/

const net = require('net')
const readline = require('readline'); 

const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
})

const options = {
    port: 4002, 
    host: 'localhost',
}; 

const peliculaConsultada = (titulo)=>{
const client = net.createConnection(options); 
client.on('connect', ()=>{
    console.log(`Conectado al servidor. Solicitando pelicula con titulo: ${titulo}`); 
    client.write(titulo); 
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

rl.question('Ingrese el Titulo de la pelicula solicitada: ', (titulo)=>{
    peliculaConsultada(titulo); 
}); 