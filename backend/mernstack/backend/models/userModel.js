import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name:{
        type: mongoose.Schema.Types.String,
        required : [true,'Please add a name'],
    },
    email:{
        type:mongoose.Schema.Types.String,
        required:[true, 'Please add a email']
    },
    password:{
        type:mongoose.Schema.Types.String,
        required:[true,'Please add a password']
    },
    isAdmin:{
        type: mongoose.Schema.Types.Boolean,
        required:true,
        default:false,
    }
})

export default mongoose.model("User",userSchema)