import mongoose from 'mongoose'

// Schema --> Document Representation of the Database. 
// Schema is your Object Representation of the Document + Single Point of Contact + Handling Validations.
const productSchema = mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.Number
    },
    productName:{
        type: mongoose.Schema.Types.String,
        required: true,
    },
    price : {
        type : mongoose.Schema.Types.Number,
        required : true,
    },
    starRating : {
        type : mongoose.Schema.Types.String,
        required : true,
    },
    productAvailable : {
        type : mongoose.Schema.Types.String,
        required : true,
    },
    productCode: {
        type : mongoose.Schema.Types.String,
        required : true,
    }
})

// Schema will return you an object + Literal style. 
// It is object Representation of the Document.
/*
   mongoose.model --> It decorates your productSchema object with the MongoDB operations.
   Adding + Modifying new behaviours + all the operations get decorated, that was mongoose.mode.
   "Product" is a alias to the productSchema.
   
   It is similar to Aspect Oriented Programming.
*/
export default mongoose.model("Product",productSchema)