/*Actividad 9: Registro de eventos
Consigna: Crea un programa para registrar eventos. El programa debe 
permitirte:
1. Agregar un evento: Registrar un evento con nombre, fecha y 
lugar.
2. Listar los eventos: Mostrar todos los eventos registrados.
3. Eliminar un evento: Eliminar un evento de la lista.
Pistas:
• Usa un archivo JSON para guardar los eventos.
• Si el archivo no existe, comienza con un arreglo vacío.
• Cada evento debe tener un ID único.*/

const fs = require('fs')
const filePath = './registroDeEventos.json'

const leerEventos = () =>{
    if(!fs.existsSync(filePath)){
        fs.writeFileSync(filePath, '[]')
    }
    const contenido = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(contenido)
}

const escribirEventos = (eventos) => {
    fs.writeFileSync(filePath, JSON.stringify(eventos, null, 2))
}

const agregarEvento = (nombreEvento, fecha, lugar) =>{
    const eventos = leerEventos()
    eventos.push({id: eventos.length + 1, nombreEvento, fecha, lugar})
    escribirEventos(eventos)
    console.log(`Evento agregado: ${nombreEvento}`)
}

//agregarEvento('Cumpleanios de 15 Luciana', '2025-06-30', 'Residencia del Carmen')
//agregarEvento('Casamiento Juan & Marta', '2025-07-15', 'Recepciones Colibri')
//agregarEvento('Compromiso Jose & Susana', '2025-09-25', 'Restaurante El Patio')
//agregarEvento('Cumpleanios de 50 Marcos', '2025-12-05', 'Confiteria Los Patos')

const listarEventos = () =>{
    const eventos = leerEventos()
    console.log("Lista de eventos 2025: ")
    eventos.forEach(evento =>{
        console.log(`${evento.id} . ${evento.nombreEvento} . ${evento.fecha} . ${evento.lugar}`)
    })
}

//listarEventos()

const eliminarEvento = (idEvento) =>{
    const eventos = leerEventos()
    eventoEliminado = eventos.filter(evento => evento.id !== idEvento); 
    escribirEventos(eventoEliminado); 
    console.log(`Evento eliminado`); 
}

eliminarEvento(3)