/*Paso 1: Crear una variable para el contador de clientes
o Antes de crear el servidor, declara una variable llamada 
clientesConectados e inicialízala en 0.
o Pista: Esta variable será global, ya que debe funcionar para 
todos los clientes.
Paso 2: Incrementar el contador al conectar un cliente
o En la función que se ejecuta cuando un cliente se conecta, 
incrementa la variable clientesConectados.
o Muestra un mensaje en la consola que diga:
"Un cliente se ha conectado. Clientes conectados: X", donde 
X es el número actual de clientes conectados.
Paso 3: Decrementar el contador al desconectar un cliente
o En el evento end, decrementa el valor de la variable 
clientesConectados.
o Muestra un mensaje en la consola que diga:
"Un cliente se ha desconectado. Clientes conectados: X", 
donde X es el número actual de clientes conectados.
Paso 4: Probar el servidor
o Inicia el servidor y observa cómo el contador cambia a 
medida que se conectan y desconectan clientes.
o En este caso, no se preocupen por probarlo con clientes 
reales, ya que el próximo paso será aprender a probar estos 
servidores*/

const net = require('net');

//Paso 1
let clientesConectados = 0; 

//Paso 2
const server = net.createServer((socket)=>{
  clientesConectados ++; 
  console.log(`Un cliente se ha conectado. Clientes conectados: ${clientesConectados}`);

//Paso 3
  socket.on('end', ()=>{
  clientesConectados -- 
  console.log(`Un cliente se ha desconectado. Clientes conectado: ${clientesConectados}`);
  }); 

}); 

const port = 5000
server.listen(port,()=>{
console.log(`El servidor esta escuchando desde el puerto ${port}`)
  }); 
