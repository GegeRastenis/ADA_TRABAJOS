/*Pide al usuario que ingrese las longitudes de los tres lados de un 
triángulo. Determina y muestra si el triángulo es equilátero, isósceles o 
escaleno. (Investiga sobre los triángulos para determinar la formula)*/
const prompt = require("prompt-sync")({ sigint: true})
let lado1 = parseFloat(prompt("Ingrese la longitud del lado A"));
let lado2 = parseFloat(prompt("Ingrese la longitud del lado B"));
let lado3 = parseFloat(prompt("Ingrese la longitud del lado C" ));
if (lado1 == lado2 && lado2 == lado3){
    console.log (`el triangulo es de tipo equilatero`);
}
else if ((lado1 != lado2) && (lado2!= lado3) && (lado3 != lado1)){
    console.log (`el triangulo es de tipo escaleno`);
}
else if ((lado1 == lado2) && (lado2 != lado3)){
    console.log (`el triangulo es de tipo isosceles`);
}
else if ((lado2 == lado3) && (lado2 != lado1)){
    console.log (`el triangulo es de tipo isosceles`);
}
else if ((lado1 == lado3) && (lado3 != lado2)){
    console.log (`el triangulo es de tipo isosceles`);
}