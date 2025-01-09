/*“La Floreria”
Escribe una función "gestionarFloreria" que realice las siguientes tareas 
con una lista predefinida de nombres de flores:

1. Quite los espacios en blanco alrededor de cada flor.
2. Verifique si existe la flor "Margarita" y, si está presente, agregue 
"Azucena" al final de la lista.
3. Reemplace todas las flores "Orquídea" por "Clavel".
4. Encuentre el índice de la flor "Girasol" y, si no está presente, agregue 
"Girasol" al inicio de la lista.
Devuelva una cadena de flores en orden alfabético separadas por puntos*/
let entrada = "Rosa, Tulipan, Orquidea, Lirio"; 


function gestionarFloreria(entrada){    

    let flores = entrada.split(',').map(flor =>
    flor.trim()); 
    console.log(flores); 

    let margarita = flores.includes("Margarita")
    if(margarita === true){
        return flores.push("Azucena");
    }
        else{
            console.log(`Margarita no se encuentra entre las marcas`);
        }


    let clavel = flores.map(flor =>
        flor.replace(/Orquidea/, 'Clavel')); 
        console.log(clavel); 

    let buscandoGirasol = flores.indexOf("Girasol"); 
    if(buscandoGirasol === -1){
        flores.unshift("Girasol"); 
        console.log(flores)
    }
    else{
        console.log(`Girasol se encuentra en el indice: ${buscandoGirasol}`); 
    }

    flores.sort(); 
    let floresFinal = flores.join(" . "); 
    console.log(floresFinal); 
    return floresFinal
    
}
gestionarFloreria(entrada); 