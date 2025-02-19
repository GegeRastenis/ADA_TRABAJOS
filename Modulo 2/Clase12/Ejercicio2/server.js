/*Ejercicio 2: Sistema de Reservas de Hoteles 
Consigna: 
Implementar un sistema de reservas de hoteles donde el cliente pueda 
consultar la disponibilidad de habitaciones en un hotel específico. El 
servidor procesará la solicitud, buscará la disponibilidad en una base de 
datos simulada (archivo JSON) y devolverá la información al cliente.
Pasos a seguir: 
1. Servidor TCP:
o El servidor debe escuchar en el puerto 4001.
o Debe recibir solicitudes del cliente que incluyan el ID del 
hotel.
o Utilizar el patrón MVC:
▪ Modelo: Encargado de leer el archivo JSON 
(hotels.json) que contiene la lista de hoteles y sus 
habitaciones, y buscar la disponibilidad por ID del 
hotel.
▪ Vista: Encargada de formatear la respuesta que se 
enviará al cliente (en formato JSON).
▪ Controlador: Encargado de recibir la solicitud del 
cliente, llamar al modelo para obtener los datos y 
luego pasar esos datos a la vista para formatear la 
respuesta.
o El servidor debe enviar la respuesta al cliente y cerrar la 
conexión.*/