/*Ejercicio 14: Diario personal 
Consigna:
Desarrolla un programa para escribir entradas de un diario en un archivo 
diario.json. Cada entrada debe incluir fecha, titulo y contenido. Además:
1. Permite listar todas las entradas.
2. Filtra entradas por una palabra clave en el título.
 Pista: Usa new Date() para registrar la fecha automáticamente.*/

 const fs = require('fs')
 const filePath = './diario.json'

 const leerDiario = () => {
      if(fs.existsSync(filePath)){
              const data = fs.readFileSync(filePath, 'utf-8')
              return JSON.parse(data)
          }
          return []
  }
  const guardarDiario = (entradas) => {
      fs.writeFileSync(filePath, JSON.stringify(entradas, null, 2))
  }

  const ingresarEntradas = (fecha, titulo, contenido)=>{
    const entradas = leerDiario()
    entradas.push({fecha, titulo, contenido})
    guardarDiario(entradas)
    console.log(`La entrada ${titulo} ha sido ingresada exitosamente`)
  }

  //ingresarEntradas('2025-06-30','Casamiento', 'Boda Pedro & Marta')
  //ingresarEntradas('2025-07-15','Bautismo', 'Bautismo Josecito 10 meses')
  //ingresarEntradas('2025-06-30','Cumpleanios de 15', 'Festejo de 15 anios Marina')

  const listarEntradas = ()=>{
    const entradas = leerDiario()
    entradas.forEach(entrada =>{
        console.log(`${entrada.fecha} - ${entrada.titulo} : ${entrada.contenido}`)
    })
  }
  //listarEntradas()

  const filtrarEntrada = (titulo)=>{
    const entradas = leerDiario()
    const entradaEncontrada = entradas.filter(entrada => entrada.titulo === titulo); 
    console.log(entradaEncontrada)
    }
    filtrarEntrada('Casamiento')
  