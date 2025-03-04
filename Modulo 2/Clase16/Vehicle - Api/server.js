const net  = require('net')
const fs = require('fs');

const {handleGetVehicleRequest, handleSaveVehicleRequest} = require('./controllers/controllersVehicles')

const server = net.createServer((socket) =>{
    console.log('Cliente conectado'); 

    socket.on('data', (data) =>{
        const comandoRequerido = data.toString().trim();

        if (comandoRequerido.toLowerCase() === 'get vehicles'){
                const response = handleGetVehicleRequest()
                socket.write(response);
        }else if(comandoRequerido.toLowerCase() === 'add vehicle'){
                 const vehicleData = command.replace('add vehicle', '').trim(); 
                 const vehicle = JSON.parse(vehicleData); 
                 handleSaveVehicleRequest(vehicle);

                 socket.write('Vehiculo agregado correctamente'); 
        }else{
                socket.write('El comando ingresado no pudo ser reconocido'); 
             }

        })
    socket.on('end', ()=>{
        console.log('Cliente desconectado'); 


    socket.on('err', ()=>{
        console.error(err)
        })
    })
})

server.listen(8080, ()=>{
    console.log('Servidor escuchando desde el puerto 8080'); 
})