/*Operadores: 
Vimos cómo declarar una variable y asignarle un valor, y probablemente 
surgió la siguiente pregunta: ¿para qué sirve almacenar datos en 
variables? Las variables nos permiten reutilizar el dato asignado en la 
misma con solo invocar su nombre.
También, algo muy importante, así como podemos hacer operaciones 
matemáticas como sumar (+) o restar (-) números, podemos hacer lo 
mismo con las variables que las referencian.
Pasos a seguir:
Declaración y Asignación de Variables:
1. Declara y asigna un valor numérico a dos variables: 
primerNumero y segundoNumero.
Operaciones Matemáticas:
2. Declara las siguientes variables: resultadoSuma, 
resultadoResta, resultadoMultiplicacion, resultadoDivision.
3. Asigna a cada una de estas variables el resultado de la suma, 
resta, multiplicación y división de las variables primerNumero 
y segundoNumero.
Mostrar Resultados:
1. Utiliza console.log(nombreDeLaVariable) para imprimir cada 
uno de los resultados y ver cómo se ven los mismos.
Pista 1: Recuerda que para crear una variable utilizamos la palabra "let" 
seguida del nombre al cual vamos a hacer referencia.
Pista 2: Para asignar el valor a una variable utilizamos el operador "=" 
seguido del valor que queremos asignarle.*/
let firstnumber = 10
let secondnumber = 5
let resultadoSuma = firstnumber + secondnumber
let resultadoResta = firstnumber - secondnumber
let resultadoMultiplicacion = firstnumber * secondnumber
let resultadoDivision = firstnumber / secondnumber
console.log("el resultado de la sumatoria de ambas variables es " + resultadoSuma);
console.log("el resultado de la resta de ambas variables es " + resultadoResta);
console.log("el resultado de la multiplicacion de ambas variables es " + resultadoMultiplicacion);
console.log("el resultado de la division de ambas variables es " + resultadoDivision);

