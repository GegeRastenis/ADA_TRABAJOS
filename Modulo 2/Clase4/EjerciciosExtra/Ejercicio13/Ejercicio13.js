/*Ejercicio 13: Inventario de productos 
Consigna:
Crea un programa para manejar un archivo inventario.json. Debes:
1. Agregar productos al inventario con nombre, cantidad y precio.
2. Actualizar la cantidad de un producto existente.
3. Calcular el valor total del inventario.
 Pista: Usa un ciclo para calcular el valor total.*/

 const fs = require('fs')
 const filePath = './inventario.json'

 const leerInventario = () => {
     if(fs.existsSync(filePath)){
             const data = fs.readFileSync(filePath, 'utf-8')
             return JSON.parse(data)
         }
         return []
 }
 const guardarInventario = (productos) => {
     fs.writeFileSync(filePath, JSON.stringify(productos, null, 2))
 }
 
 const agregarProducto = (nombre, cantidad, precio) =>{
    const productos = leerInventario()
    productos.push({nombre, cantidad, precio})
    guardarInventario(productos)
    console.log(`El producto ${nombre} ha sido agregado al inventario satisfactoriamente`)
 }

 //agregarProducto("Caramelos", 2000, 50)
 //agregarProducto("Chupetines", 3500, 100)
 //agregarProducto("Chocolates", 5000, 300)

 const actualizarInventario = (nombre, nuevaCantidad)=>{
    const productos = leerInventario()
    const producto = productos.find(producto => producto.nombre === nombre)
        if(producto){
            producto.cantidad = parseInt(nuevaCantidad); 
            guardarInventario(productos); 
            console.log(`Producto actualizado: ${producto.nombre}, nueva cantidad: ${producto.cantidad}`)
        }else{
            console.log("El producto no ha sido encontrado")
        }
    }
    //actualizarInventario("Caramelos", "6000")

    function valorTotalInventario(){
        const productos = leerInventario()
        let suma = 0
        for(let i = 0; i < productos.length; i++){
           suma += (productos[i].precio) * (productos[i].cantidad);  
        }
        
        guardarInventario(productos)
        console.log(`El valor total del inventario actual asciende a: ${suma} pesos`)
        return suma
      
    }
    valorTotalInventario()

 