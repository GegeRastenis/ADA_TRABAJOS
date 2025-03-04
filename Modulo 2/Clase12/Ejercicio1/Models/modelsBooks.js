const fs = require('fs'); 
const path = require('path'); 

const dataPath = path.join(__dirname,'../Data/books.json'); 

const getBooksById = (id) =>{
    
        const rawData = fs.readFileSync(dataPath); 
        const books = JSON.parse(rawData); 
        return books.find(book => book.id === parseInt(id,10)|| null)
    }

module.exports = getBooksById