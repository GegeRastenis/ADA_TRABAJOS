/*Actividad 8: Seguimiento de proyectos
Consigna: Crea un programa para gestionar proyectos. El programa debe 
permitirte:
1. Agregar un proyecto: Registrar un proyecto con su nombre y 
estado (pendiente o en progreso).
2. Listar los proyectos: Mostrar todos los proyectos registrados.
3. Actualizar el estado de un proyecto: Cambiar el estado de un 
proyecto a "finalizado" o "en progreso".
Pistas:
• Usa un archivo JSON para guardar los proyectos.
• Si el archivo no existe, comienza con un arreglo vacío.
• Cada proyecto debe tener un ID único.*/
const fs = require('fs')
const filePath = './gestionDeProyectos.json'

const leerProyectos = () => {
    if(!fs.existsSync(filePath)){
        fs.writeFileSync(filePath, '[]')
    }
    const contenido = fs.readFileSync(filePath,'utf-8')
    return JSON.parse(contenido)
}

const escribirProyectos = (proyectos) =>{
    fs.writeFileSync(filePath, JSON.stringify(proyectos, null, 2))
}

const agregarProyecto = (nombreProyecto)=>{
    const proyectos = leerProyectos()
    proyectos.push({id: proyectos.length + 1, nombreProyecto, estado: "en progreso"})
    escribirProyectos(proyectos)
    console.log(`Proyecto agregado: ${nombreProyecto}`)
}

//agregarProyecto("Generar una Nueva Base de Datos")
//agregarProyecto("Busqueda de Nuevos Clientes")
//agregarProyecto("Lanzamiento de Nuevos Productos")

const listarProyectos = () =>{
    const proyectos = leerProyectos()
    console.log("Lista de proyectos para este trimestre: ")
    proyectos.forEach(proyecto =>{
        console.log(`${proyecto.id} . ${proyecto.nombreProyecto}. ${proyecto.estado}`)
    })
}
//listarProyectos()

const cambiarEstado = (idProyecto) =>{
    const proyectos = leerProyectos()
    const proyecto = proyectos.find(proyecto => proyecto.id === idProyecto)
    if(proyecto){
        proyecto.estado = 'finalizado' 
        escribirProyectos(proyectos)
        console.log(`Proyecto finalizado: ${proyecto.nombreProyecto}`)
    }else{
        console.log("Proyecto no encontrado"); 
    }
}

cambiarEstado(2)