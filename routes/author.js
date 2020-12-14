const {Router} = require('express')
const router = Router()

const {addAuthor, getAuthors, getAuthorByID, getBooksByAuthorID, deleteAuthor} = require('../controllers/author')

// add author
router.post('/authors/new', addAuthor)

// get authors
router.get('/authors', getAuthors)

// get authors by id
router.get('/authors/authorId', getAuthorByID)

// get books by author
router.get('/authors/authorId/books', getBooksByAuthorID)

// delete author
router.delete('/authors/authorId/delete', deleteAuthor)

module.exports = router