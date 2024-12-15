/*Calcula el total de ventas de productos seleccionados
Supón que tienes una lista de productos con sus precios en formato de 
objeto:*/

let listaDeProductos = [
    { name: 'Laptop', price: 1000 },
    { name: 'Mouse', price: 25 },
    { name: 'Teclado', price: 50 },
    { name: 'Monitor', price: 200 },
    { name: 'Audífonos', price: 75 }
   ];

//A) Seleccionar los productos cuyo precio sea mayor o igual a 50

let precioMasCaro = listaDeProductos.filter(function(producto){
    return producto.price >= 50; 
})
console.log(precioMasCaro); 

//B) Obtener solo los nombres de esos productos

let nombreDeProductos = precioMasCaro.map(function(producto){
    return ' ' + producto.name
}); 
console.log(nombreDeProductos); 

//C) Calcular el precio total sumando los precios de los productos seleccionados

let precioTotal = precioMasCaro.reduce(function(acumulador, producto){
return acumulador + producto.price;
}, 0); 
console.log(precioTotal);

//D) Imprime el total y los nombres de los productos seleccionados en la consola

//listaDeProductos.forEach(function(total){
//console.log(total); 
//})

console.log(`El total de los productos ${nombreDeProductos} es de: ${precioTotal}`); 