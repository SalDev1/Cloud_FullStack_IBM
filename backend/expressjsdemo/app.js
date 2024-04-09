import express from "express"
import productRoutes from "./routes/productRoutes.js"

const app = express()   // Function constructor , express constructor.

app.use(express.json())   // BodyParser --> JSON
app.use('/ibm',productRoutes);  //  Connecting the middleware.


app.listen(9999,() => console.log('server started'))