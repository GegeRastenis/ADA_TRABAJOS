/*Ejercicio 15: Historial de actividades deportivas 
Consigna:
Crea un programa para registrar actividades deportivas en un archivo 
actividades.json. Debe incluir:
1. Registrar una actividad con tipo (correr, nadar), duración (en 
minutos) y fecha.
2. Mostrar todas las actividades realizadas.
3. Filtrar actividades por tipo (por ejemplo, solo mostrar las de 
"correr").
 Pista: Usa Date.now() para obtener la fecha exacta*/

 const fs = require('fs')
 const filePath = './actividades.json'

 const leerActividades = () => {
       if(fs.existsSync(filePath)){
               const data = fs.readFileSync(filePath, 'utf-8')
               return JSON.parse(data)
           }
           return []
   }
   const guardarActividades = (actividades) => {
       fs.writeFileSync(filePath, JSON.stringify(actividades, null, 2))
   }

   const registrarActividades = (tipo, duracionMinutos)=>{
    const actividades = leerActividades()
    const fecha = new Date(Date.now()).toLocaleDateString()
    actividades.push({tipo, duracionMinutos, fecha})
    guardarActividades(actividades)
    console.log(`La actividad ${tipo} ha sido ingresada exitosamente`)
   }

   //registrarActividades('correr', 50)
   //registrarActividades('nadar', 30)
   //registrarActividades('andar en bici', 120)
   //registrarActividades('pole sport', 60)

   const listarActividades = ()=>{
    const actividades = leerActividades()
    //actividades.forEach(actividad =>{
    //console.log(`${actividad.tipo}: ${actividad.duracionMinutos}, ${actividad.fecha} `)
     // })
    console.log("Lista de actividades: ")
    console.table(actividades)
   }
   //listarActividades()

   const buscarActividad = (tipo)=>{
   const actividades = leerActividades()
   const actividadEncontrada = actividades.filter(actividad => actividad.tipo === tipo)
   console.log('La actividad buscada es: ')
   console.log(actividadEncontrada)
   }

   buscarActividad('nadar')