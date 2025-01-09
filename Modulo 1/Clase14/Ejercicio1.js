/*Ejercicios de Arrow Function:
Calcular el precio final con IVA.
Solicita al usuario el precio de un producto y el porcentaje de IVA. Usa una 
función flecha para calcular el precio final*/
const prompt = require("prompt-sync")({ sigint: true})
let precio = parseFloat(prompt("Ingrese el precio del producto deseado: "));
let iva = parseFloat(prompt("Ingrese el porcentaje de IVA: ")); 

const calcularElPrecioFinal = (precio, iva) => {
    let porcentajeIva = (precio * iva) / 100; 
    let preciofinal = precio + porcentajeIva; 
    return preciofinal;
}
console.log(calcularElPrecioFinal(precio, iva)); 