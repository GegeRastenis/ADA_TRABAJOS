/*Actividad 7: Control de tareas diarias
Consigna: Crea un programa para gestionar tus tareas diarias. El 
programa debe permitirte:
1. Agregar una tarea diaria: Registrar una nueva tarea con su 
descripción y estado.
2. Listar las tareas diarias: Mostrar todas las tareas con su estado.
3. Marcar una tarea como completada: Cambiar el estado de una 
tarea de "pendiente" a "completada".
Pistas:
• Usa un archivo JSON para guardar las tareas.
• El estado de cada tarea puede ser "pendiente" o "completada".
• Si el archivo no existe, comienza con un arreglo vacío.*/
const fs = require('fs')
const filePath = './tareasDiarias.json'

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

const agregarTarea = (descripcion) =>{
    const tareas = leerTareas()
    tareas.push({id: tareas.length + 1, descripcion, estado: "pendiente"})
    escribirTareas(tareas)
    console.log(`Tarea agregada: ${descripcion}`)
}

//agregarTarea("Hacer las compras")
//agregarTarea("Ir a entrenar")
//agregarTarea("Pasear a Jack")
//agregarTarea("Estudiar")

const listarTareas = () => {
    const tareas = leerTareas()
    console.log("Lista de tareas diarias: ")
    tareas.forEach(tarea =>{
    console.log(`${tarea.id} . ${tarea.descripcion} . ${tarea.estado}`)
    })
}

//listarTareas()

const cambiarEstado = (idTarea) =>{
    const tareas = leerTareas()
    const tarea = tareas.find(tarea => tarea.id === idTarea)
    if(tarea){
        tarea.estado = 'completada' 
        escribirTareas(tareas)
        console.log(`Tarea completada: ${tarea.descripcion}`)
    }else{
        console.log("Tarea no encontrada"); 
    }

}

cambiarEstado(2); 
