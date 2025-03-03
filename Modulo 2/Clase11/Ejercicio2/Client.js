const net = require('net'); 

const client = net.createConnection({port: 8081}, ()=>{
    console.log('Conectado al servidor'); 

    //client.write('./home//user///docs/file.txt/'); 
    //client.write('./home//user//docs///file/../books.txt/'); 
    client.write('./home/user/../docs//file//mark.jpg/'); 
}); 

client.on('data', (data)=>{
    console.log('Ruta nomalizada: ', data.toString()); 
    client.end(); 
}); 

client.on('end', ()=>{
    console.log('Cerrando conexion con el servidor'); 
}); 