/*Cálculo de Descuento: Escribe un programa que calcule el 
precio final de un producto después de aplicar un descuento. Pide al 
usuario que ingrese el precio original y el porcentaje de descuento, y 
muestra el precio final.
Pista1: Investiga que es ParseFloat, ya que el ejercicio lo requiere
Pista 2: La fórmula puede representarse asi:
let montoDescuento = precioOriginal * (porcentajeDescuento / 100);*/
const prompt = require("prompt-sync")({ sigint: true})
const discount = 10; 
let originalprice = parseFloat(prompt("Enter your product price"));
let discountamount = (originalprice * (discount / 100));
console.log(`your final price is: ${originalprice - discountamount}`);
