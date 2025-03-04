const fs = require('fs')
const path = require('path')

const dataPath = path.join(__dirname, '../Data/hotels.json'); 

const getHotelsById = (id) =>{
    const rawData = fs.readFileSync(dataPath)
    const hotels = JSON.parse(rawData)
    return hotels.find(hotel => hotel.id === parseInt(id,10)|| null)

    }

module.exports = getHotelsById