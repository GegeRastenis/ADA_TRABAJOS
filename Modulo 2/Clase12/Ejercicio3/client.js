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