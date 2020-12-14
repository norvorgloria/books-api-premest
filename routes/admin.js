const {Router} = require('express')
const router = Router()

const {signup, login, logout} = require('../controllers/admin')

// admin signup route
router.post('/api/admin/new', signup)

// admin login
router.post('/admin/login', login)

// admin logout
router.get('/admin/logout', logout)

module.exports = router