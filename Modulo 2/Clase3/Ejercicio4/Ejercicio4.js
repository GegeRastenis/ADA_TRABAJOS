/*Actividad 4: Control de inventario
Consigna: Crea un programa para llevar el control de un inventario. El 
programa debe permitirte:
1. Agregar un producto: Registrar un producto con su nombre y 
cantidad disponible.
2. Listar los productos: Mostrar todos los productos registrados.
3. Actualizar la cantidad de un producto: Modificar la cantidad de 
un producto en el inventario.
Pistas:
• Usa un archivo JSON para guardar los productos.
• Si el archivo no existe, comienza con un arreglo vacío.
• Cada producto debe tener un ID único que se pueda utilizar para 
actualizar su cantidad.*/

const fs = require('fs')
const filePath = './inventario.json'

const leerInventario = () =>{
    if(!fs.existsSync(filePath)){
        fs.writeFileSync(filePath, '[]')
    }
const contenido = fs.readFileSync(filePath, 'utf-8')
return JSON.parse(contenido)
}

const escribirInventario = (productos) =>{
    fs.writeFileSync(filePath, JSON.stringify(productos, null, 2))
}
const agregarProducto = (nombreProducto, cantidadProducto) =>{
    const producto = leerInventario()
    producto.push({id: producto.length + 1, nombre: nombreProducto, cantidadProducto})
    escribirInventario(producto)
    console.log(`Producto agregado: ${nombreProducto}`)
}

//agregarProducto("Desodorantes", 5)
//agregarProducto("Perfumes", 50)
//agregarProducto("Repelentes", 20)

const listarProductos = () => {
    const productos = leerInventario()
    console.log(productos)
}

//listarProductos()

const actualizarInventario = (idProducto, nuevaCantidad) =>{
    const productos = leerInventario()
    const producto = productos.find(producto => producto.id === idProducto) 
    if(producto){
        producto.cantidad = parseInt(nuevaCantidad); 
        escribirInventario(productos); 
        console.log(`Producto actualizado: ${producto.nombre}, nueva cantidad: ${producto.cantidad}`); 
    }else{
        console.log("Producto no encontrado")
    }

}
actualizarInventario(2, 70)