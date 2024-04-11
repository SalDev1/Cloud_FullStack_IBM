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

// Updating / Modifying the Exist Product using the PUT Method.
router.put('/api/products/:id', (req,res) => {
    const id = req.params.id

    // some --> will return boolean value. 
    // filter --> creates an new array based on the conditions

    // Check if the product_id exists in products array or not.
    // + --> Type Safe Comporataor --> string to number.
    const exists = products.some(products => products.productId === +id)

    if(exists) {
        const productToBeUpdated = req.body
        products.forEach(product => {

            if(product.productId === productToBeUpdated.productId) {
                product = Object.assign(product, productToBeUpdated)
                res.json({msg:`Updated Product ${product.productName}`})
            }
        })
    }
    else {
        res.status(400).json({msg:`Product ${productId} does not exist`})
    }
    res.json(products)
})

router.delete('/api/products/:id',(req,res) => {
    const id = req.params.id
    const exists = products.some(product => product.productId === +id)

    if(exists) {
        res.status(200).json({products : products
            .filter(product => product.productId !== +id) , msg:`Deleted Product ${id}`})
    }
    else {
        res.status(400).json({msg : `Product ${id} does not exist`})
    }
})


export default router;