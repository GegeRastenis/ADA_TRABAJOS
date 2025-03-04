

const formatMovieReponse = (movie)=>{
        if(!movie){
            return JSON.stringify({
                status: "error", 
                message: "Pelicula no encontrada"
            })
        }

        return JSON.stringify({
            status: "Sucess", 
            data: movie
        })
    }

module.exports = {formatMovieReponse}