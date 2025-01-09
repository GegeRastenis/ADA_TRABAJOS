/*Declara dos variables booleanas condicion1 y condicion2. Pide al 
usuario que ingrese dos valores booleanos (true o false) y muestra el 
resultado de diversas combinaciones lógicas.*/
const prompt = require("prompt-sync")({ sigint: true})
const condicion1 = true;
const condicion2 = false;
let booleano1 = prompt ("ingresa un valor booleano true or false");
let booleano2 = prompt ("ingresa un valor booleano true or false");
console.log(`
    COMBINACIONES LOGICAS CON EL OPERADOR AND
    ${condicion1 && booleano1}
    ${condicion1 && booleano2}
    ${condicion2 && booleano1}
    ${condicion2 && booleano2}
    `);
5
console.log(`
    COMBINACIONES LOGICAS CON EL OPERADOR OR
    ${condicion1 || booleano1}
    ${condicion1 || booleano2}
    ${condicion2 || booleano1}
    ${condicion2 || booleano2}
`);

console.log(`
    COMBINACIONES LOGICAS CON EL OPERADOR NOT
    ${condicion1 != booleano1}
    ${condicion1 != booleano2}
    ${condicion2 != booleano1}
    ${condicion2 != booleano2}
`);

    

