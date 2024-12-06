/*Calcular descuento por cantidad
Solicita al usuario la cantidad de productos comprados y el precio unitario. 
Usa una función flecha para calcular el total con descuento según la cantidad*/
const prompt = require('prompt-sync')();
let cantidadProductos = parseFloat(prompt("Por favor ingrese la cantidad de productos adquiridos: ")); 
let precioUnitario = parseInt(prompt("Por favor ingrese el precio unitario de su producto: ")); 

const totalConDescuento = (numero)=>{
    let descuento = (precioUnitario * 20) / 100
    let descuento2 = (precioUnitario * 40) / 100
    let descuento3 = (precioUnitario * 60) / 100
    if(cantidadProductos >= 2 && cantidadProductos < 5){
        return (precioUnitario - descuento) * cantidadProductos;
    } else if(cantidadProductos >= 5 && cantidadProductos <10){
        return (precioUnitario - descuento2) * cantidadProductos; 
    } else{
        return (precioUnitario - descuento3) * cantidadProductos;
    }
}
console.log(totalConDescuento(cantidadProductos, precioUnitario)); 