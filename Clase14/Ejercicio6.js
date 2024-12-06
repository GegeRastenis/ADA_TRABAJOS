/*Ejercicios de Objetos:
El deportista
Para este ejercicio deberán definir un objeto literal “deportista”, con los 
siguientes atributos: nombre, energía, experiencia.
Ademas queremos poder pedirle al deportista que entrene. Para esto, 
nuestro trabajo va a ser realizar una función “entrenarHoras.”
La función entrenarHoras tiene las siguientes tres características:
✓ Recibe por parámetro la cantidad de horas.
✓ Resta a su energía (this.energia) la cantidad de horas x 5.
✓ Incrementa su experiencia (this.experiencia) la cantidad de horas x 2.
Una vez definida la función, podemos ejecutar el código y ver cómo va 
variando la energía y experiencia del deportista por consola*/

let deportista ={
    nombre : "Juan", 
    energia : 100, 
    experiencia : 8, 
    entrenarHoras : function (horas){
        let entrenamiento = horas * 5; 
        let expert = horas * 2; 
        return `Este deportista tiene ${this.energia - entrenamiento}% de energia y ${this.experiencia + expert}% de experiencia`; 
    }

}
console.log(deportista.entrenarHoras(3)); 