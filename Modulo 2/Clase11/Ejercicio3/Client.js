const net = require('net'); 

const client = net.createConnection({port: 8082}, ()=>{
    console.log('Conectando al servidor'); 

    client.write('/home/user/docs/file.txt'); 
}); 

client.on('data', (data)=>{
    console.log('Informacion de la ruta obtenida: ', data.toString()); 
    client.end(); 
}); 

client.on('end', ()=>{
    console.log('Desconectando del servidor'); 
}); 