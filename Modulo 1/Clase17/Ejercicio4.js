/*Transformación y Análisis de Cadenas
Pide al usuario que ingrese una lista de nombres separados por comas.
Los nombres a ingresar deben ser “Julian”, “Maria”, “Malena”, “Andrea”, 
“Pablo” y “Pedro”.
Luego, escribe la función “transformarYAnalizarNombres”que realice las 
siguientes tareas:
1. Quite los espacios en blanco alrededor de cada nombre.
2. Verifique si existe el nombre "Juan".
3. Reemplace todos los nombres "María" por "Ana".
4. Encuentre el índice del nombre "Pedro".
5. Devuelva una cadena de nombres en orden alfabético separados 
por puntos. Investigar el método “.sort()” */
const prompt = require('prompt-sync')();
let nombres = (prompt("Por favor ingrese su lista de nombres: ")); 


 function transformarYAnalizarNombres(nombres){
    nombres.trim(); 
    //let findingJuan  = nombres.indexOf('juan');
    
    let newNombres = nombres.split(","); 
    
    console.log(newNombres); 
    
    let newAna = newNombres.map(nombres =>
    nombres.replace(/Maria/g,"Ana"));
    
    
    let findPedro = newAna.indexOf(' Pedro'); 
    console.log(findPedro); 

    newAna.sort(); 
    console.log(newAna); 

    return newAna;
    //return nombres; 
    //return findingJuan;

} 
    
console.log(transformarYAnalizarNombres(nombres)); 