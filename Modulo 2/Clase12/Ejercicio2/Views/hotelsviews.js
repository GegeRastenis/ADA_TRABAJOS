const hotelsViews = {

    formatReponse: (hotel)=>{
        if(!hotel){
            return JSON.stringify({
                status: "error",
                message: "Hotel no encontrado "
            })
        }

        return JSON.stringify({
            status: "sucess", 
            data: hotel
        })
    }
}

module.exports = hotelsViews