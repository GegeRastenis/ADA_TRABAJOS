/*Pide al usuario que ingrese un número del 1 al 7 y muestra el día de la 
semana correspondiente. Si el número no está dentro de ese rango, 
muestra un mensaje de error*/
const prompt = require("prompt-sync")({ sigint: true})
let weekday = parseFloat(prompt("ingrese un numero del 1 al 7"));
if (weekday == 1){
    console.log (`su numero ${weekday} se traduce en el dia de la semana lunes`);
}
else if (weekday == 2){
    console.log (`su numero ${weekday} se traduce en el dia de la semana martes`);
}
else if (weekday == 3){
    console.log (`su numero ${weekday} se traduce en el dia de la semana miercoles`);
}
else if (weekday == 4){
    console.log (`su numero ${weekday} se traduce en el dia de la semana jueves`);
}
else if (weekday == 5){
    console.log (`su numero ${weekday} se traduce en el dia de la semana viernes`);
}
else if (weekday == 6){
    console.log (`su numero ${weekday} se traduce en el dia de la semana sabado`);
}
else if (weekday == 7){
    console.log (`su numero ${weekday} se traduce en el dia de la semana domingo`);
}
else
console.log (`su numero NO puede traducirse a un dia de la semana`);
