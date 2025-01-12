/*Ejercicio 2: Conversión de Objetos JavaScript a JSON 
1.En la misma carpeta clase2, crea un nuevo archivo llamado 
actividad2.js. 
2.Crea un objeto en JavaScript que represente a un estudiante con las 
siguientes propiedades: nombre, edad, curso, notas (un array de 
números).
Instrucciones:
• Convierte este objeto a una cadena JSON usando JSON.stringify().
• Muestra la cadena JSON en la consola.
• Luego, convierte la cadena JSON de nuevo a un objeto utilizando 
JSON.parse() y muestra el objeto en la consola.*/

const estudiante = {
    nombre: "Juan Perez",
    edad: 25, 
    curso: "Introduccion a JS", 
    notas: [7, 9, 10, 8, 6] 
}

const estudianteJson = JSON.stringify(estudiante, null, 2); 
console.log(estudianteJson); 

const estudianteObjeto = JSON.parse(estudianteJson); 
console.log(estudianteObjeto); 