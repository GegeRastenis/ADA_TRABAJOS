/*Actividad 3: Registro de tareas pendientes
Consigna: Crea un programa para gestionar tus tareas pendientes. El 
programa debe permitirte:
1. Agregar una tarea: Registrar una tarea pendiente con su 
descripción.
2. Listar las tareas: Mostrar todas las tareas registradas.
3. Eliminar una tarea: Eliminar una tarea de la lista.
Pistas:
• Usa un archivo JSON para guardar las tareas.
• Si el archivo no existe, comienza con un arreglo vacío.
• Eliminar una tarea se puede hacer por su ID.*/

const fs = require('fs')
const filePath = './tareas.js'

const leerTareas = () =>{
    if(!fs.existsSync(filePath)){
        fs.writeFileSync(filePath, '[]')
    }
    const contenido = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(contenido)
} 

const escribirTareas = (tareas) =>{
    fs.writeFileSync(filePath, JSON.stringify(tareas, null, 2))
}

const agregarTarea = (nombreTarea) => {
    const tareas = leerTareas()
    tareas.push({id: tareas.length + 1, nombreTarea: nombreTarea})
    escribirTareas(tareas)
    console.log(`Tarea agregada: ${nombreTarea}`); 

}

agregarTarea("Lavar los platos")
agregarTarea("Sacar a pasear a Jack")
agregarTarea("Cocinar")

const listarTareas = () => {
    const tareas = leerTareas()
    console.log("La lista de tareas del dia: ")
    tareas.forEach(tarea => {
        console.log(`${tarea.id}. ${tarea.nombreTarea}`)
    });
}

listarTareas()

const eliminarTarea = (idTarea) =>{
    const tareas = leerTareas()
    tareasEliminadas = tareas.filter(tarea => tarea.id !== idTarea); 
    escribirTareas(tareasEliminadas); 
    console.log(`Tarea eliminada`); 
}
    
//eliminarTarea()
