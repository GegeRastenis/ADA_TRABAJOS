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

let precios = []; 
let nombres = []; 

for(let i = 0; i < listaDeProductos.length; i++){
    //console.log(`${listaDeProductos[i].price}`)
    precios.push(listaDeProductos[i].price); 

}
//console.log(precios); 

let precioMasCaro = precios.filter(function(num){
    return num >= 50;  
})
console.log(precioMasCaro); 

//B) Obtener solo los nombres de esos productos

for(let i = 0; i < listaDeProductos.length; i++){
    console.log(`${listaDeProductos[i].name}`)
    nombres.push(listaDeProductos[i].name); 

}
console.log(nombres); 

//C) Calcular el precio total sumando los precios de los productos seleccionados

let precioTotal = precios.reduce(function(acumulador, num){
    return num + acumulador
})
console.log(precioTotal); 

//D) Imprime el total y los nombres de los productos seleccionados en la consola

listaDeProductos.forEach(function(total){
    console.log(total); 
})