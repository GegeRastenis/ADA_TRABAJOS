/*Actividad 6: Gestión de un diario personal
Consigna: Crea un programa que te permita gestionar un diario 
personal. El programa debe permitirte:
1. Agregar una entrada al diario: Registrar una nueva entrada con 
la fecha y el texto.
2. Listar las entradas: Mostrar todas las entradas registradas.
3. Eliminar una entrada: Eliminar una entrada específica por su ID.
Pistas:
• Usa un archivo JSON para guardar las entradas del diario.
• Cada entrada tendrá una fecha y un texto.
• Si el archivo no existe, comienza con un arreglo vacío.*/

const fs = require('fs')
const filePath = './diarioPersonal.json'

const leerEntradas = () =>{
    if(!fs.existsSync(filePath)){
        fs.writeFileSync(filePath, '[]')
    }
const contenido = fs.readFileSync(filePath, 'utf-8')
return JSON.parse(contenido)
}

const escribirEntradas = (entradas) => {
    fs.writeFileSync(filePath, JSON.stringify(entradas, null, 2))
}

const agregarEntrada = (texto) =>{
    const entradas = leerEntradas()
    const fecha = new Date().toLocaleDateString()
    entradas.push({id: entradas.length + 1, fecha, texto})
    escribirEntradas(entradas)
    console.log(`Entrada agregada`); 
}

//agregarEntrada("Empiezo la dieta")
//agregarEntrada("Empiezo a entrenar")
//agregarEntrada("Me pongo las pilas para estudiar")

const listarEntradas = () =>{
    const entradas = leerEntradas()
    console.log("Mis objetivos del dia: ")
    entradas.forEach(entrada =>{
        console.log(`${entrada.id} . ${entrada.fecha} . ${entrada.texto}`)
    })
}

//listarEntradas()

const eliminarEntrada = (idEntrada) =>{
    const entradas = leerEntradas()
    entradaEliminada = entradas.filter(entrada => entrada.id !== idEntrada); 
    escribirEntradas(entradaEliminada); 
    console.log(`Entrada eliminada`); 
}

eliminarEntrada(2)