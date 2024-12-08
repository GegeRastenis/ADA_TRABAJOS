/*Libros
Define dos objetos libro1 y libro2 con las siguientes propiedades y valores:
✓ título: una cadena con el título del libro.
✓ autor: una cadena con el nombre del autor del libro.
✓ anioPublicacion: un número con el año de publicación del libro.
Luego, crea una función llamada mostrarLibro que tome un arreglo de libros 
como parámetro y muestre por consola la información de cada libro en el 
formato especificado*/

let libro1 = {
    Titulo : 'Mi Planta de Naranja Lima',
    Autor : 'Jose Mauro de Vasconcelos',
    AnioPublicacion : 1968
}
    
let libro2 = {
    Titulo : 'Cronica de una Muerte Anunciada',
    Autor : 'Gabriel Garcia Marquez',
    AnioPublicacion :  1981
   }

let librosArray = [libro1, libro2];
   
 function mostrarLibro (librosArray) {
    for(let i = 0; i < librosArray.length; i++){
        let libro = librosArray[i]; 
        console.log( `El libro ${libro.Titulo} pertenece al autor ${libro.Autor} y fue publicado originalmente en el anio ${libro.AnioPublicacion}`);
    }
}
 mostrarLibro(librosArray); 