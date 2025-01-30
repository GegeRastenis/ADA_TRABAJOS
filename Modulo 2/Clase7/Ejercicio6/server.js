/*Ejercicio 6: Servidor de Comandos 
Consigna:
Crea un servidor TCP que permita a los clientes enviar comandos 
simples. Dependiendo del comando recibido, el servidor debe realizar 
una acción específica:
• Si el cliente envía "fecha", el servidor debe responder con la fecha y 
hora actual.
• Si el cliente envía "ip", el servidor debe responder con la dirección 
IP del cliente.
• Si el cliente envía "salir", el servidor debe cerrar la conexión.
• Para cualquier otro comando, el servidor debe responder 
"Comando no reconocido".
Requisitos:
• Usa el evento data para recibir y procesar los comandos.
• Usa el método socket.write() para enviar respuestas.
• Usa el método socket.end() para cerrar la conexión cuando el 
cliente envíe "salir".*/

const net = require('net'); 

const server = net.createServer((socket) =>{
    console.log('Un cliente se ha conectado al servidor'); 

    socket.on('data', (data) =>{
        const dataTostring = data.toString(); 
        if(dataTostring === "fecha"){
            socket.write(`La fecha y hora del dia es: ${newDate().toLocalDateString()}`);
        }else if(dataTostring === "ip"){
            socket.write(`Cliente conectado desde ip: ${socket.remoteAddress}`);
        }else if(dataTostring === "salir"){
            socket.write('Cerrando conexion')
            socket.end(); 
        }else{
            socket.write('Comando no reconocido');
        }
    })
}); 

const PORT = 5000
server.listen(PORT, ()=>{
    console.log(`El servidor esta escuchando desde el puerto: ${PORT}`); 
}); 