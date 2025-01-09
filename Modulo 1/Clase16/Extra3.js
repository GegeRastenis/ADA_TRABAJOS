/*Encuentra la película más corta y analiza los títulos largos
Supón que tienes una lista de películas con su duración en minutos:*/
const movies = [
 { title: 'El Señor de los Anillos', duration: 200 },
 { title: 'Inception', duration: 148 },
 { title: 'Matrix', duration: 136 },
 { title: 'Toy Story', duration: 81 },
 { title: 'Coco', duration: 105 }
];

// A) Encontrar la película más corta en duración

let peliMasCorta = movies.reduce(function(shortestMovie, currentMovie){
if(currentMovie.duration < shortestMovie.duration){
    return currentMovie; 
    }
   else{
    return shortestMovie; 
   } 
})
// B) De las películas restantes, quedarnos con aquellas cuyo título tenga más de 10 caracteres
 
let tituloLargo = movies.filter(function(peliculas){
    return peliculas.title.length > 10
})
// C) Crear una lista de los títulos largos en minúsculas

let tituloEnMinuscula = tituloLargo.map(function(pelicula){
    return pelicula.title.toLowerCase();
})

// Imprime en la consola:
// D) El título de la película más corta

console.log(`La Pelicula con menor duracion es: ${peliMasCorta.title}`); 

// E) La lista de títulos largos en minúsculas

console.log(`La pelicula con el titulo mas largo es: ${tituloEnMinuscula}`); 
