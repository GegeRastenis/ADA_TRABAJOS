/*Intercambio de Valores: Declara dos variables con valores 
iniciales y luego intercambia sus valores. Muestra los valores antes y 
después del intercambio en la consola.
Para intercambiar valores puedes usar varios métodos(usando una 
variable temporal, aritmética o asignación simultanea), eres libre de 
elegir el que desees, eso si, investiga sobre el que usaras.*/
let a = 10 //5
let b = 5 //10
//Variable aritmetica
console.log(`Antes del intercambio los valores son ${a} y ${b}`);
a = a + b;
b = a - b;
a = a - b;
console.log(`Despues del intercambio los valores son ${a} y ${b}`);

//Variable temporal
let var1 = 50 //20
let var2 = 20 //50
let temporal = 0
console.log(`Antes del intercambio los valores son ${var1} y ${var2}`);
temporal = var1;
var1 = var2;
var2 = temporal;
console.log(`Despues del intercambio los valores son ${var1} y ${var2}`);
