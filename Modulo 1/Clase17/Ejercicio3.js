/*Gestión Compleja de Arrays
A partir del siguiente array de productos, escriba la función
‘gestionarProductos’ que realice las siguientes tareas:
1. Añada un nuevo producto al array
2. Elimine el último producto del array.
3. Encuentre el índice de un producto específico. En este punto 
pueden usar forEach o investigar el método “findIndex()”
4. Verifique si existe un producto con precio mayor a 50. Para esto 
investigar el método “.some()”
5. Devuelva una cadena de nombres de productos separados por 
comas*/

let productos = [
    { nombre: "Alfajores", precio: 30 }, 
    { nombre: "Chocolates", precio: 50 }, 
    { nombre: "Chupetines", precio: 70 }, 
    { nombre: "Caramelos", precio: 20 }, 
    { nombre: "Bombones", precio: 20 }, 
]; 


function gestionarProductos(productos, producto){
productos.push(producto);
productos.pop();
productos.forEach(function(element, index){
    if(element.nombre == producto.nombre){
      console.log(`El producto fue encontrado en la posicion ${index}`);   
      }

   })
let encontrado = productos.some(function(producto){
    return producto.precio > 50; 
})
console.log (encontrado); 

let productosEnCadena = productos.map(function(producto){
    return `${producto.nombre}`;
})
console.log(productosEnCadena); 

return productos;

}

console.log(gestionarProductos(productos, {nombre: "Chocolates", precio: 50})); 
 