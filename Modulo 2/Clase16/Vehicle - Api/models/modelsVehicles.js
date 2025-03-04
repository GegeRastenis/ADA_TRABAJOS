const fs = require('fs'); 
const filePath = '../data/vehicles.json'

function readVehicles(){
    const data = fs.readFileSync(filePath)
    return JSON.parse(data)
}

function saveVehicles(vehicle){
    fs.writeFileSync(filePath, JSON.stringify(vehicle, null, 2))
}

module.exports = {readVehicles, saveVehicles}