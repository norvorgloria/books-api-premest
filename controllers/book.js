const Book = require('../models/book')
const session = require('express-session')

// add a book - POST
const addBook = async (req, res) => {
    const {title, author, number_of_pages, category, rating} = req.body

    const book = Book({title, author, number_of_pages, category, rating})

    try{
        const newBook = await book.save()

        res.send({
            message: 'Book Successfully Added', newBook
        })
    } catch(error){
        console.log(error)
    }
}

// get all books - GET
const getBooks = async (req, res)=>{
    await Book.find({}).exec((error, books)=>{
        if (error){
            res.status(500).send({
                error: 'Internal server error'
            })
        }
        res.send(books)
    })
}

// get book by id - GET
const getBookByID = async (req, res)=>{
    const { id } = req.body
    try{
        await Book.findById(id).exec((error, books)=>{
            if (error){
                res.status(500).send({
                    error: 'Internal server error'
                })
            }
            res.send(books)
        })
    } catch(error){
        console.log(error)
       }
    
}

// delete book by ID - DELETE
const deleteBook = async (req, res) => {
    const { id } = req.body
    try{
        await Book.findByIdAndDelete(id)
        res.status(200).send({message: 'Book Successfully Deleted'})
    }catch(error){
        console.log(error)
    }
}

module.exports = {
    addBook,
    getBooks, 
    getBookByID,
    deleteBook
}