const net = require('net'); 
const path = require('path'); 

const client = net.createConnection({port: 8080}, ()=>{
    console.log('Conectado al servidor'); 

    client.write('/home/user/documento.txt'); 
    client.write('documento.txt'); 
    client.write('/home/usuarios/file.txt'); 
})

client.on('data', (data) =>{
    console.log(data.toString()); 
    client.end(); 
})

client.on('end', ()=>{
    console.log('Desconectado del servidor'); 
}); 