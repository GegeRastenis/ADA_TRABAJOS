/*Instrucciones
1. Dentro de la carpeta clase2/ejercicio4, crea dos archivos:
o estudiantes.js
o gestionEstudiantes.js
2. En estudiantes.js:
o Crea un array de objetos que represente una lista de 
estudiantes.
o Cada estudiante debe tener las propiedades: nombre, edad, 
curso y notas (un array de números).
o Exporta este array usando module.exports.
3. En gestionEstudiantes.js:
o Importa el array desde estudiantes.js.
o Muestra en la consola los nombres de todos los estudiantes.
o Calcula y muestra el promedio de notas de un estudiante 
específico.
o Agrega un nuevo estudiante al array y muestra el array 
actualizado en formato JSON*/

const estudiantes = [
    {nombre: "Pedro Rodriguez", 
     edad: 25, 
     curso: "Ingles I", 
     notas: [8, 10, 6, 9]
    },

    {nombre: "Juan Perez", 
        edad: 22, 
        curso: "Aleman II", 
        notas: [6, 8, 5, 9]
    },

    {nombre: "Jose Esposito", 
        edad: 34, 
        curso: "Introduccion a Portugues", 
        notas: [9, 10, 5, 8]
    }
]

module.exports = {
    estudiantes
}