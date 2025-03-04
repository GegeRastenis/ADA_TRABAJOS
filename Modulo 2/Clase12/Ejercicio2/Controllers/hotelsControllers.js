const getHotelsById = require('../Models/hotelsModels')
const hotelsViews = require('../Views/hotelsViews')

const hotelsControllers = {
    handleRequest: (id)=>{
        const hotel = getHotelsById(parseInt(id, 10))

        return hotelsViews.formatReponse(hotel)
    }
}

module.exports = hotelsControllers