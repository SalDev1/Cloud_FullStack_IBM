import express from "express"
import { addNewProduct, deleteProduct, getProducts, updateExistingProduct } from "../controllers/productController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// This is an example of authorization == protect
router.route('/').get(protect,getProducts)
router.route('/').post(protect,addNewProduct)
router.route('/:id').put(protect,updateExistingProduct)
router.route('/:id').delete(protect,deleteProduct)

export default router;