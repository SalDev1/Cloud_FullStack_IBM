import express from "express"
import productRoutes from "./routes/productRoutes.js"

const app = express()   // Function constructor , express constructor.

// These are the middlewares down below.
app.use(express.json())   // BodyParser --> JSON , We want to get the data in the json format.
app.use('/ibm',productRoutes);  //  Connecting the middleware.


app.listen(9999,() => console.log('server started'))