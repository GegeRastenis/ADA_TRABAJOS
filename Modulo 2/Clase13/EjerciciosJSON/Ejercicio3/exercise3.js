/*Ejercicio 3: Convertir Datos JSON a un Objeto y Acceder a sus 
Propiedades 
Instrucciones: 
• Crea un archivo llamado exercise3.js.
• Define una cadena JSON que represente a un libro (incluye 
campos como title, author, y year).
• Convierte la cadena JSON a un objeto y muestra cada 
propiedad en la consola*/

let jsonBook = '{"title": "The Hole", "author": "Jack Hills", "year": 1980}'; 

let objectBook = JSON.parse(jsonBook);


console.log(objectBook.title); 
console.log(objectBook.author); 
console.log(objectBook.year); 