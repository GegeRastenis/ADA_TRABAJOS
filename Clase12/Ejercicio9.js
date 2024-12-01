/*Se está realizando el desarrollo de una aplicación para control de 
gastos. Cada día, el usuario ingresa sus gastos cotidianos.
La idea es solo registrar el total de los gastos, al finalizar la jornada.
Para simplificar, vamos a considerar que todos los meses tienen cuatro 
semanas.
Los gastos estarán en una matriz de 4x7, cada fila representa una 
semana y cada columna un día. Es decir, fila 0, semana 1, fila 1, semana 
2, etc. Columna 0, día 1, columna 1, día 2, etcétera.*/

let matriz_gastos = [
    [1135, 2500, 900, 1600, 2800, 3650, 1100],
    [1750, 1890, 1900, 1300, 898, 1750, 2800],
    [1700, 1150, 1690, 1900, 1770, 4500, 2560],
    [800, 1250, 1430, 2100, 1980, 1270, 950]
];

/*PARTE - A) Lo que nos solicitan es dar el total de gastos en una semana. 
Recordemos que cada fila representa una semana, es decir, si nos 
indican semana 2 tenemos que sumar la fila 1 de la matriz. Recordar 
que las matrices comienzan siempre en posición 0.*/

const prompt = require("prompt-sync")({ sigint: true})

let semana = parseInt(prompt("Ingrese que semana quiere solicitar los gastos: "));
let suma_semana = 0;
for(let i = 0; i < matriz_gastos[semana].length; i++){
    suma_semana += matriz_gastos[semana-1][i];
}
console.log(`El total de la semana ${semana} es igual a: ${suma_semana}`);

/*PARTE - B) La aplicación también tendrá una parte de estadísticas, para esto 
nos solicitan dar el total de un día en particular, por ejemplo del día 
3, acá también tengamos en cuenta lo que ocurre con las filas, ya 
que las columnas también comienzan en 0.*/

let semana2 = parseInt(prompt("Ingrese la semana en la que quiere verificar sus gastos: "));
let dia = parseInt(prompt("Ingrese el dia que quiere verificar gastos: "));
    if(semana2 <= 4 && dia <=7){
    console.log(`lo que gastaste durante la semana ${semana2} el dia ${dia} es de ${matriz_gastos[semana2-1][dia-1]}`);
} 
    else {
    console.log("La semana o el dia que has ingresado no son validos.");
}

/*PARTE C) Por último, es necesario tener el total de gastos realizados en el 
mes.
✓ Pregunta para pensar, ¿es lo mismo recorrer por filas o por 
columnas para resolver este último punto?*/

let suma = 0;
for(let i = 0; i < matriz_gastos.length; i++){
    for (let d = 0; d < matriz_gastos[i].length; d++){
    suma += matriz_gastos [i][d];
   }
}
console.log(suma);

/*PARTE D) Obtener cuál fue la semana que más gastos se realizaron. Indicar el 
día que más gastos se realizaron.
✓ Posibles matrices para comprobar los resultados.*/

let totalsemanal = 0;
let totalmensual = 0; 
let finalsemanal = [];
let mayorgasto = 0; 
for(let i = 0; i < matriz_gastos.length; i++){
    for(let g = 0; g < matriz_gastos[i].length; g++){
       totalsemanal += matriz_gastos[i][g];
    }; 
console.log(`Esta semana gastaste: ${totalsemanal}`);
totalmensual += totalsemanal
finalsemanal.push(totalsemanal);
totalsemanal = 0;
};
console.log(finalsemanal);

for(let i = 0; i < finalsemanal.length; i++){
    if(finalsemanal[i] > mayorgasto){
        mayorgasto = finalsemanal[i]
    }
}; 
console.log(mayorgasto);

let diasdelmes = []; 
let diamayorgasto = 0; 
for(let i = 0; i < matriz_gastos.length; i++){
    for(let y = 0; y < matriz_gastos[i].length; y++){
        diasdelmes.push(matriz_gastos[i][y])
    };
};  
for(let y = 0; y < diasdelmes.length; y++){
    if(diasdelmes[y] > diamayorgasto){
       diamayorgasto = diasdelmes[y]
    };
}
console.log(diamayorgasto);