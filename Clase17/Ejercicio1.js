/*Manipulación Completa de un Objeto Literal y Arrays
Crea un objeto literal que represente un estudiante. El mismo debe tener 
las siguientes propiedades: nombre, edad y un array de notas (con 5 
notas). 
Luego, escribe la función “procesarEstudiante” que tendrá como objetivo 
realizar las siguientes tareas:
1. Agregar una nueva nota al array de notas.
2. Eliminar la primera nota del array.
3. Calcular el promedio de las notas restantes.
4. Convertir el nombre del estudiante a mayúsculas. Para esto 
investiga sobre el método “toUpperCase()”
https://www.w3schools.com/jsref/jsref_touppercase.asp
5. Devuelver un objeto con el nombre en mayúsculas y el promedio de 
las notas*/
const estudiante = {
    name: "Giselle",
    age: 43, 
    qualifications: [4, 6, 7, 8, 10], 
}; 

const procesarEstudiante = (estudiante) => {
    estudiante.qualifications.push(5); 
    estudiante.qualifications.shift(); 
    let promedio = estudiante.qualifications.reduce(function(acumulador, qualifications){
        return acumulador + qualifications / estudiante.qualifications.length;
    }, 0)
    estudiante.name = estudiante.name.toUpperCase();
    //console.log(promedio);
    //return estudiante;
      return { name: estudiante.name, promedio: promedio }; 

     
    
}
console.log(procesarEstudiante(estudiante));
 
