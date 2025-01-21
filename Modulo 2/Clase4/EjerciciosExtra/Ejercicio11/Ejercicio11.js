/*Ejercicio 11: Sistema de gestión de contactos 
Consigna:
Imagina que estás desarrollando una miniaplicación para gestionar 
contactos. Tu objetivo es:
1. Crear un archivo llamado contactos.json que almacene una lista de 
contactos.
2. Implementar funciones para:
o Agregar un contacto: Cada contacto debe tener nombre, 
teléfono y email.
o Listar todos los contactos.
o Buscar un contacto por nombre.
3. Asegúrate de que los contactos no se repitan (valida el nombre 
antes de agregarlo).
 Pista: Usa readFile para obtener la lista actual de contactos y writeFile 
para guardar cambios.*/

const fs = require('fs')
filePath = './contactos.json'

function leerContactos(){
    if(fs.existsSync(filePath)){
        const data = fs.readFileSync(filePath, 'utf-8')
        return JSON.parse(data)
    }
    return []
}

function guardarContactos(contactos){
    fs.writeFileSync('contactos.json', JSON.stringify(contactos, null, 2))
}

function agregarContacto(nombre, telefono, email){
    const contactos = leerContactos()

    if(contactos.some(contacto => contacto.nombre === nombre)){
        console.log(`El contacto ${nombre} ya existe`)
    }

    contactos.push({nombre, telefono, email})
    guardarContactos(contactos)
    console.log(`Contacto ${nombre} agregado exitosamente`)
}

function listarContactos(){
    const contactos = leerContactos()
    console.log("Lista de contactos: "); 
    console.table(contactos)
}

function buscarContacto(nombre){
    const contactos = leerContactos()
    const contacto = contactos.find(c => c.nombre === nombre)
    if(contacto){
    console.log("Contacto encontrado", contacto)
    }else{
        console.log("No se encontro ningun contacto con ese nombre")
    }
}

//agregarContacto("Giselle", "344452386", "gise@gmail.com")
//agregarContacto("Juan", "26543387", "juan@gmail.com")
//listarContactos()
buscarContacto("Giselle")