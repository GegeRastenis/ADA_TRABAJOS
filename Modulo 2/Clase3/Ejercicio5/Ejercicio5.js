/*Actividad 5: Registro de contactos
Consigna: Crea un programa que permita registrar contactos con 
nombre, teléfono y correo electrónico. El programa debe permitirte:
1. Agregar un contacto: Registrar un nuevo contacto.
2. Listar los contactos: Mostrar todos los contactos registrados.
3. Eliminar un contacto: Eliminar un contacto de la lista.
Pistas:
• Usa un archivo JSON para guardar los contactos.
• Si el archivo no existe, comienza con un arreglo vacío.*/

const fs = require('fs')
const filePath = './contactos.json'

const leerContactos = () =>{
    if(!fs.existsSync(filePath)){
        fs.writeFileSync(filePath, '[]')
    }
const contenido = fs.readFileSync(filePath, 'utf-8')
return JSON.parse(contenido)
}

const escribirContactos = (contactos) =>{
    fs.writeFileSync(filePath, JSON.stringify(contactos, null, 2))
}

const agregarContacto = (nombreContacto, telefono, email) =>{
    const contactos = leerContactos()
    contactos.push({id: contactos.length + 1, nombre: nombreContacto, telefono, email})
    escribirContactos(contactos)
    console.log(`Contacto agregado: ${nombreContacto}`)

}

//agregarContacto("Giselle", "113456728", "giselle.r@hotmail.com")
//agregarContacto("Martina", "116589536", "martinag@gmail.com")
//agregarContacto("Lucas", "114568975", "lucatr@gmail.com")

const listarContactos = () =>{
    const contactos = leerContactos()
    console.log(contactos)
}

//listarContactos()


const eliminarContacto = (idContacto) =>{
    const contactos = leerContactos()
    contactoEliminado = contactos.filter(contacto => contacto.id !== idContacto); 
    escribirContactos(contactoEliminado); 
    console.log(`Contacto eliminado`); 
}

eliminarContacto(2)