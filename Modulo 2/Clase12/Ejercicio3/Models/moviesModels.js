const fs = require('fs')
const path = require('path')

const dataPath = path.join(__dirname, '../Data/movies.json')

const getMoviebyTitle = (titulo) =>{

        const rawData = fs.readFileSync(dataPath,'utf-8')
        const movies = JSON.parse(rawData)
        return movies.find(movie => movie.titulo === titulo) || null;
    }

module.exports = {getMoviebyTitle}