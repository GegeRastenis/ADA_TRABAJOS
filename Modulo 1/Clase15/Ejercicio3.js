/*Agregar y eliminar a la fila de mascotas 
Tienes una fila de mascotas en una clínica veterinaria ["Perro", "Gato", 
"Conejo"]. Llega un "Hámster" que debe ser atendido primero. Agrega el 
"Hámster" al inicio de la lista. Luego, atiende a la primera mascota de la 
fila y muéstrala. Finalmente, muestra la lista actualizada.*/
let filaDeMascotas = ["Perro", "Gato", "Conejo"]; 
let primeroDeLaFila = filaDeMascotas.unshift("Hamster"); 
console.log(filaDeMascotas[0]); 
console.log(`Fila de mascotas actualizada: ${filaDeMascotas}`); 
