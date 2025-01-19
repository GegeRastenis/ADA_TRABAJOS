/*Actividad 10: Gestión de compras
Consigna: Crea un programa que registre las compras realizadas. El 
programa debe permitirte:
1. Agregar una compra: Registrar una compra con su nombre y 
precio.
2. Listar las compras: Mostrar todas las compras registradas.
3. Eliminar una compra: Eliminar una compra de la lista.
Pistas:
• Usa un archivo JSON para guardar las compras.
• Si el archivo no existe, comienza con un arreglo vacío.
• Cada compra debe tener un ID único*/

const fs = require('fs')
const filePath = './gestionDeCompras.json'

const leerCompras = () =>{
if(!fs.existsSync(filePath)){
    fs.writeFileSync(filePath, '[]')
}
const contenido = fs.readFileSync(filePath, 'utf-8')
return JSON.parse(contenido)
}

const escribirCompras = (compras) =>{
    fs.writeFileSync(filePath, JSON.stringify(compras, null, 2))
}

const agregarCompra = (producto, precio) =>{
    const compras = leerCompras()
    compras.push({id: compras.length + 1, producto, precio})
    escribirCompras(compras)
    console.log(`Compra agregada: ${producto}`)
}

//agregarCompra('Lentes', '500 USD')
//agregarCompra('Zapatos', '200 USD')
//agregarCompra('Jeans', '80 USD')
//agregarCompra('Camisa', '120 USD')
//agregarCompra('Vestido', '300 USD')

const listarCompras = () =>{
    const compras = leerCompras()
    console.log(`Lista de compras viaje a NYC: `)
    compras.forEach(compra => {
    console.log(`${compra.id} . ${compra.producto} . ${compra.precio}`)
    })
}
//listarCompras()

const eliminarCompra = (idCompra) =>{
    const compras = leerCompras()
    compraEliminada = compras.filter(compra => compra.id !== idCompra); 
    escribirCompras(compraEliminada); 
    console.log(`Compra eliminada`); 
}

eliminarCompra(2)