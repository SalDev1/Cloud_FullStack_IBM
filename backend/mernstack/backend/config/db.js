import mongoose from 'mongoose'

// Connecting the mongoDB.
const connectDB = async() => {
    try{
        const conn = await mongoose.connect(`mongodb+srv://admin1234:admin1234@mern-cluster.selxhzh.mongodb.net/merndb?retryWrites=true&w=majority&appName=mern-cluster`)
        console.log(`Connect to MongoDB ${conn.connection.host}`)
    } catch(err) {
        console.log(`Failed Connect to MongoDB ${err.message}`)
    } 
}

export default connectDB;