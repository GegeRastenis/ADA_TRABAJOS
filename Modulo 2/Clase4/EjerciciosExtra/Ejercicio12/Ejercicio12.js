/*Ejercicio 12: Sistema de registro de tareas 
Consigna:
Crea un programa que maneje un archivo tareas.json con las siguientes 
funcionalidades:
1. Agregar una tarea: Cada tarea debe tener nombre, descripcion y 
estado (pendiente o completa).
2. Completar una tarea: Cambia el estado de una tarea a completa.
3. Listar tareas por estado: Muestra las tareas agrupadas por su 
estado (pendiente o completa).
 Pista: Utiliza métodos como filter y map para manipular la lista de 
tareas.*/
const fs = require('fs')
const filePath = './tareas.json'

const leerTareas = () => {
    if(fs.existsSync(filePath)){
            const data = fs.readFileSync(filePath, 'utf-8')
            return JSON.parse(data)
        }
        return []
}
const guardarTareas = (tareas) => {
    fs.writeFileSync(filePath, JSON.stringify(tareas, null, 2))
}

const agregarTarea = (nombre, descripcion, estado) =>{
    const tareas = leerTareas()
    tareas.push({nombre, descripcion, estado: "pendiente"})
    guardarTareas(tareas)
    console.log(`Tarea agregada: ${nombre}`)
    
}

//agregarTarea("Ordenar libros", "Ordenar libros alfabeticamente")
//agregarTarea("Ordenar vestidor", "Ordenar prendas por colores")
//agregarTarea("Ordenar zapatos", "Ordenar zapatos por tamanio")

const cambiarEstado = (nombre) =>{
      const tareas = leerTareas()
      const tarea = tareas.find(t => t.nombre === nombre)
      if(tarea){
        tarea.estado = "completada"
       guardarTareas(tareas)
    console.log("Tarea Completada: ")
    console.log(tarea)
      }else{
        console.log("No se ha encontrado la tarea buscada")
      }
}

//cambiarEstado("Ordenar libros")

const listarTareasPorEstado = (estado) =>{
    const tareas = leerTareas()
    const tareasPendientes = tareas.filter(t => t.estado === "pendiente")
    const tareasCompletadas = tareas.filter(t => t.estado === "completada")
    console.log("Tareas pendientes: ")
    console.log(tareasPendientes)
    console.log("Tareas completadas: ")
    console.log(tareasCompletadas)
}

listarTareasPorEstado()