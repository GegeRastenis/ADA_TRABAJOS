/*Eliminar al último invitado 
Tienes una lista de invitados a una fiesta ["Ana", "Juan", "Carlos", "Sofía"]. 
El último invitado no puede asistir. Elimina al último invitado y muestra 
quién fue eliminado y el estado actualizado de la lista.*/
let invitados = ["Ana", "Juan", "Carlos", "Sofia"]; 
let invitadoEliminado = invitados.pop(); 
console.log(invitados); 
console.log(`El invitado eliminado de la lista fue ${invitadoEliminado}`); 