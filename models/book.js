const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    number_of_pages: {type: Number, required: true},
    category: {type: String, required: true},
    rating: {type: Number, required: true}
})

bookSchema.set('toJSON', {
    transform: (doc, book) => {
        book.id = book._id.toString()
        delete book._id
        delete book.__v
        delete book.password
    }
})

const Book = mongoose.model('Book', bookSchema)

module.exports = Book