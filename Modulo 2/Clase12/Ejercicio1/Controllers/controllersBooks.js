const getBooksById = require('../Models/modelsBooks'); 
const viewsBooks = require('../Views/viewsBooks'); 

const controllersBooks = {
    handleRequest: (id)=>{
        const book = getBooksById(parseInt(id,10))

        return viewsBooks.formatReponse(book)
    }
}

module.exports = controllersBooks