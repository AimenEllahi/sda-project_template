import express from 'express';
import { getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct } from '../controller/product.js';
const router = express.Router();


router.get("/:productID", getProduct);
router.get("/", getProducts);
router.post("/", createProduct);
router.patch("/:productID", updateProduct);
router.delete("/:productID", deleteProduct);


export default router