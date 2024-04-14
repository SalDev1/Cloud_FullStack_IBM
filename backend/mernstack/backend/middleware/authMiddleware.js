import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'

import User from '../models/userModel.js'

// Checking if the token is valid or not valid.
const protect = asyncHandler(async(req,res,next) => {
    let token 

    // Retrieving the token from the Authorized Bearer.
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split(' ')[1]

            const decoded = jwt.verify(token,'abcd1234')

            // decoded.id === selected user Object.id
            // After retriving the id , we select the password using the select method.
            req.user = await User.findById(decoded.id).select('-password')

            if(!req.user) {
                res.status(401)
                throw new Error("not Authorized")
            }

            // Invoking the next middleware.
            next()

        } catch (error) {
            console.error(error)
            res.status(400)
            throw new Error("Not Authorized")
        }
    }
    if(!token) {
        res.status(401)
        throw new Error("not authorized")
    }
})

export default protect;