import express from "express"
import products from "../model/products.js";

const router = express.Router()
// This Router will give you all the Router Objects / METHODS.
router.get('/api/products' , (req,res) => {
    res.json(products)
})

// Adding A Product using the Post Method.
router.post('/api/products', (req,res) => {
    const newProduct = req.body
    if(!newProduct.productName || !newProduct.price) {
        // 400 --> Client Side Error.
        res.status(400).json({ msg : 'Product Name and Price is Mandatory.'})
    }
    products.push(newProduct)

    res.json(products)
})

export default router;