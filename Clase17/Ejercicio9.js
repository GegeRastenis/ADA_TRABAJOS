/*Desafío extra! Orden, lugar y números
Al ejercicio anterior vamos a aumentarle la dificultad un poco, y de paso, 
aplicamos lo aprendido en semanas anteriores. Quiero que hagan lo 
mismo del ejercicio anterior (buscar la posición de un número en un 
array), pero partiendo de esta lista:*/

let list = [12, 3, 5, 7, 1, 22, 47, 100]; 

/*Para aplicar búsqueda binaria, deberán ordenar primero la lista, de menor 
a mayor, utilizando bubble sort. Luego, respondan las siguientes 
preguntas:
o ¿Cuál es la posición del número 12?
o ¿Cuál es la posición del número 5?
o ¿Cuál es la posición del número 22?
o ¿Cuál es la posición del número 100?*/

function ordenarBubbleSort(list){
    let n = list.length

    for(let i = 0; i < n; i++){ 
      for (let j = 0; j < n - i -1; j++){
      
        if(list[j] > list[j + 1]){
            let orden = list[j]; 
            list[j] = list[j + 1];
            list[j + 1] = orden; 
            }
        }
    }
        return list
    }
    let listaOrdenada = ordenarBubbleSort(list); 
    console.log(listaOrdenada); 

    function busquedaBinaria (listaOrdenada, busqueda){
        let masBajo = 0; 
        let masAlto = listaOrdenada.length -1; 
        while(masBajo <= masAlto){
            const medio = Math.floor((masBajo + masAlto) /2); 
        
            const search = list[medio]; 
            if(search === busqueda){
                return medio; 
            }
            if(search > busqueda){
                masAlto = medio -1;
            }
            else{
                masBajo = medio +1; 
            }
          }
          return null; 
        }
        console.log(`La posicion del numero 12 es: ${ busquedaBinaria(list, 12)}`);  
        console.log(`La posicion del numero 5 es: ${ busquedaBinaria(list, 5)}`); 
        console.log(`La posicion del numero 22 es: ${ busquedaBinaria(list, 22)}`); 
        console.log(`La posicion del numero 100 es: ${ busquedaBinaria(list,100)}`); 
           
