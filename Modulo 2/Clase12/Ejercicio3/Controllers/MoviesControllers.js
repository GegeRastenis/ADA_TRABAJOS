
const {getMoviebyTitle} = require('../Models/moviesModels')
const {formatMovieReponse} = require('../Views/moviesViews')

const handleMovieRequest = (titulo)=> {

        const movie = getMoviebyTitle(titulo)

        return formatMovieReponse(movie)
    }

module.exports = {handleMovieRequest}
