/*Autos y más autos…
Escribe una función "gestionarAutos" que realice las siguientes tareas con 
una lista predefinida de marcas de autos:

1. Quite los espacios en blanco alrededor de cada marca.
2. Verifique si existe la marca "Tesla".
3. Reemplace todas las marcas "Ford" por "BMW".
4. Encuentre el índice de la marca "Chevrolet".
5. Devuelva una cadena de marcas en orden alfabético separadas por 
puntos. Utilizar “.sort()” */

let entrada = "Toyota, Honda, Ford, Chevrolet, Nissan"; 

function gestionarAutos(entrada){
    
    let marcas = entrada.split(',').map(marca => 
        marca.trim()); 
    console.log(marcas); 

    let tesla = marcas.includes("Tesla")
    if(tesla === true){
       console.log(`Tesla se encuentra entre las marcas`)
    }
    else{
       console.log(`Tesla no se encuentra entre las marcas`)
        }
    
    let reemplazarBmw = marcas.map(palabra =>
        palabra.replace(/Ford/g, 'BMW'))
        console.log(reemplazarBmw);

    let buscandoChevrolet = marcas.indexOf("Chevrolet"); 
    if (buscandoChevrolet !== -1){
        console.log(`El indice de la marca Chevrolet es ${buscandoChevrolet}`); 
        }
    else{
        console.log(`La marca Chevrolet no se encuentra dentro del listado`);  
        }

    marcas.sort(); 
    let marcasFinal = marcas.join(" . "); 
    console.log(marcasFinal); 
    return marcasFinal; 
    
}

gestionarAutos(entrada); 
 