const Author = require('../models/author')
const session = require('express-session')

// POST to add an author
const addAuthor = async (req,res) => {
    const {name, books} = req.body

    const author = Author({name, books})

    try{
        const newAuthor = await author.save()

        res.send({
            message: 'Author Created Successfully', newAuthor
        })
    } catch (exception){
        console.log(exception)
    }    
}

// get all authors
const getAuthors = async (req, res)=>{
    await Author.find({}).exec((error, authors)=>{
        if (error){
            res.status(500).send({
                error: 'Internal server error'
            })
        }
        res.send(authors)
    })
}

// get author by id - GET
const getAuthorByID = async (req, res)=>{
    const { id } = req.body
    try{
        await Author.findById(id).exec((error, authors)=>{
            if (error){
                res.status(500).send({
                    error: 'Internal server error'
                })
            }
            res.send(authors)
        })
    } catch(error){
        console.log(error)
       }   
}

// all books by author
const getBooksByAuthorID = async (req, res)=>{
    const { id } = req.body
    try{
        await Author.findById(id).exec((error, authors)=>{
            if (error){
                res.status(500).send({
                    error: 'Internal server error'
                })
            }
            res.send(authors.books)
        })
    } catch(error){
        console.log(error)
       }   
}


// delete author by id
const deleteAuthor = async (req, res) => {
    const { id } = req.body
    try{
        await Author.findByIdAndDelete(id)
        res.status(200).send({message: 'Author Successfully Deleted'})
    }catch(error){
        console.log(error)
    }
}


module.exports = {
    addAuthor,
    getAuthors,
    getAuthorByID,
    getBooksByAuthorID,
    deleteAuthor
}
