import express from "express"
import productRoutes from "./routes/productRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import connectDB from "./config/db.js";
import errorHandler from "./middleware/errorMiddleware.js";
import cors from 'cors';

const app = express() 
app.use(express.json()) 
app.use(cors())

app.use('/api/products',productRoutes);

/*
 Sends the response back as the json object + not an HTML page 
 Setting the errorHandler middleware globally.
*/
app.use('/api/users',userRoutes)
connectDB()
app.use(errorHandler); 
app.listen(9999,() => console.log('server started'))