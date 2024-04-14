import express from "express"
import productRoutes from "./routes/productRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import connectDB from "./config/db.js";

const app = express() 
app.use(express.json()) 
app.use('/api/products',productRoutes);
app.use('/api/users',userRoutes)
connectDB()

app.listen(9999,() => console.log('server started'))