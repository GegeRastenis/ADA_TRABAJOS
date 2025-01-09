/*Busca un nombre específico 
Tienes una lista de nombres ['Carlos', 'Daniel', 'Laura', 'Ana']. Queremos 
saber si el nombre 'Laura' está presente en la lista y, si lo está, deberías 
devolverlo*/
let nameList = ['Carlos', 'Daniel', 'Laura', 'Ana']; 
let findingLaura = nameList.filter(function(name){
    return name === 'Laura'; 
})
console.log(findingLaura); 