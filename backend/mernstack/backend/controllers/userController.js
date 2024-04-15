import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'


const loginUser = asyncHandler(async(req, res) => {
    let {email, password} = req.body

    const user = await User.findOne({email})

    // Decrypting the password && and we start comparing it.
    if(user && (await bcrypt.compare(password,user.password))){
        res.status(200).json({
            _id: user._id ,
            name: user.name,
            email: user.email,
            token : generateToken(user._id)
        })
    }
})

const registerUser = asyncHandler(async(req , res) => {
    let {name,email,password} = req.body
    
    if(!name || !email || !password) {
        res.status(400)
        throw new Error("Please include all fields")
    }

    const userExists = await User.findOne({email})
    if(userExists) {
        res.status(400)
        throw new Error("user with email already exists")
    }

    // Generating the salt --> extra random 10 characters.
    const salt = await bcrypt.genSalt(10) 

    // Generating the hash password --> combination of password + salt.
    const hashPassword = await bcrypt.hash(password,salt)

    const user = await User.create({name,email,password:hashPassword})

    res.status(201).json({
        _id : user._id,
        name : user.name,
        email : user.email,
        token : generateToken(user._id)
    })
})

const generateToken = id => {
    // We are sign the token over here , password is used to sign the token.
    return jwt.sign({id}, 'abcd1234' , {expiresIn:'30d'})
}

export {
    loginUser,
    registerUser
}