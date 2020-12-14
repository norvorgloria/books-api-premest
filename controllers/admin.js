const Admin = require('../models/admin')
const session = require('express-session')


// POST to add admin
const signup = async (req,res) => {
    const {username, password} = req.body
    const admin = Admin({username, password})

    try{
        const newAdmin = await admin.save()

        res.send({
            message: 'Admin Created Successfully', newAdmin
        })
    } catch (exception){
        res.status(500).send({error: 'Admin already exists'})
    }    
}



//login admin - POST
const login = async (req, res) => {

    const { username, password } = req.body;
    let sess = req.session

    try {
      let admin = await Admin.findOne({username});

      if (!admin){
        return res.status(400).send({
          message: "User Does Not Exist"
        });
        }
        const isMatch = await (password === admin.password)
  
      if (!isMatch){
        return res.status(400).send({
          message: "Incorrect Password"
        });
        } 
        res.status(200).send({message: 'Login Successful'})
        sess.username = req.body.username
    } catch (e) {
        console.error(e);
        res.status(500).send({
        message: "Server Error"
        });
    }
}


// logout admin - GET
const logout = async (req, res) => {
    req.session.destroy((error)=>{
        if(error){
            console.log(error)
        }
        res.send({message: 'Logout Successful'})
    })
}

module.exports = {
    signup,
    login,
    logout
}