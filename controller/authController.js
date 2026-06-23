const jwt = require('jsonwebtoken')
const User = require('../models/user')
const bcrypt = require('bcrypt')
const userValidation = require('../validations/userValidation')
const register = async (req, res) => {
    try {

        let { error } = userValidation.validate(req.body);
        if (error) {
            return res.status(400).json({
                message: error.details[0].message
            })
        }
        let { name, email, password } = req.body;

        let existingUser = await User.findOne({ email, name })
        if(existingUser){
            return res.status(401).json({
                message: "email existing..!!!"
            })
        }
        let hashPassword = await bcrypt.hash(password, 10);
        let userData = new User({
            name,
            email,
            password: hashPassword,
        })
        await userData.save();
        return res.status(200).json({
            message: "User Registered successfully..!!!"
        })

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Internal server error"
        })
    }
}
const login = async (req, res)=>{
    try {
        let {email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({
                message: "Email and password is required..!!!"
            })
        }
         let userData = await User.findOne({email})
         if(!userData){
            return res.status(401).json({
                message: "User not found. Login first..!!!"
            })
         }
         let checkPassword = await bcrypt.compare(password, userData.password)
         if(!checkPassword){
            return res.status(401).json({
                message: "Wrong Password"
            })
         }
         let token = jwt.sign(
            {
            name: userData.name,
            email: userData.email,
            role: userData.role
         },process.env.JWT_SECRET,
         {expiresIn: '12h'}
        )
        return res.status(200).json({
            message: "Login successful", token
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({message: "Internal server error"})
    }
}
module.exports = {register, login}
