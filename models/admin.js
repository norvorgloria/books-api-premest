const mongoose = require('mongoose')

const adminSchema = mongoose.Schema({
    username: {type: String, unique: true, default: "admin"},
    password: {type: String, default: "password"}
})

adminSchema.set('toJSON', {
    transform: (doc, admin) => {
        admin.id = admin._id.toString()
        delete admin._id
        delete admin.__v
        delete admin.password
    }
})

const Admin = mongoose.model('Admin', adminSchema)

module.exports = Admin