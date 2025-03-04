const net = require('net')
const readline = require('readline'); 

const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
}); 

const options = {
    port: 8080, 
    host: 'localhost',
}; 

const comandoRequerido = (vehiculo)=>{
    const client = net.createConnection(options); 

    client.on('connect', ()=>{
        console.log('Conectando al Servidor'); 
        client.write(vehiculo)
    }); 

    client.on('data', (data)=>{
        console.log('Respuesta del servidor', data.toString()); 
        client.end(); 
    }); 

    client.on('close', ()=>{
        console.log('Conexion cerrada'); 
        rl.close; 
    })

    client.on('error', ()=>{
        console.error(err); 
        rl.close
    })
}; 

rl.question('Ingrese el vehiculo a agregar: ', (vehiculo)=>{
    comandoRequerido(vehiculo); 
})