const {readVehicles, saveVehicles} = require('../models/modelsVehicles')
const {formatVehicleResponse} = require('../view/viewVehicles')

const handleGetVehicleRequest = ()=>{

    const vehicles = readVehicles()

    return formatVehicleResponse(vehicles)
}

const handleSaveVehicleRequest = (vehicle)=>{

    const vehicles = readVehicles()

    vehicles.push(vehicle)

    saveVehicles(vehicles)

}


module.exports = {handleGetVehicleRequest, handleSaveVehicleRequest}; 