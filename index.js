const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const session = require('express-session')

const app = express()
const adminRoutes = require('./routes/admin')
const bookRoutes = require('./routes/book')
const authorRoutes = require('./routes/author')

mongoose.connect(process.env.DB_URL, {})
.then(()=>{
    console.log('mongodb connected')
})
.catch((error)=>{
    console.log(error)
})

app.use(express.json())
app.use(bookRoutes)
app.use(adminRoutes)
app.use(authorRoutes)
app.use(session(process.env.SECRET_KEY));


app.listen(process.env.PORT, ()=>{
    console.log('Server started on localhost:4000')
})

