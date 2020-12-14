const mongoose = require('mongoose')

const authorSchema = mongoose.Schema({
    name: {type: String},
    books: {type: Array}
})

authorSchema.set('toJSON', {
    transform: (doc, author) => {
        author.id = author._id.toString()
        delete author._id
        delete author.__v
        delete author.password
    }
})

const Author = mongoose.model('Author', authorSchema)

module.exports = Author