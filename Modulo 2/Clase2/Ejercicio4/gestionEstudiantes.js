const {estudiantes} = require('./estudiantes')
console.log(estudiantes); 

for(let i = 0; i < estudiantes.length; i++){
    let nombre = estudiantes[i].nombre; 
    console.log(nombre); 
}

let suma = 0; 
function calcularPromedio(estudiantes, nombre){
   let estudiante = estudiantes.filter(estudiante => estudiante.nombre === nombre);
   let estudianteEspecifico = estudiante [0]; 
   
   for(let i = 0; i < estudianteEspecifico.notas.length; i++){
    suma += estudianteEspecifico.notas[i]
   }
    let promedio = suma / estudianteEspecifico.notas.length;

   return promedio;
}
console.log(calcularPromedio(estudiantes, "Jose Esposito")); 

let nuevoEstudiante = {
    nombre: "Ana Martinez",
    edad: 23,
    curso: "Frances I",
    notas: [7, 9, 4, 6]
}

estudiantes.push(nuevoEstudiante); 
console.log(estudiantes); 

const estudianteJson = JSON.stringify(estudiantes, null, 2); 
console.log(estudianteJson);