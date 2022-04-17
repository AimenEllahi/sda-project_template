import express from 'express';
import { getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct } from '../controller/product.js';
const router = express.Router();


router.get("/:id", getProduct);
router.get("/", getProducts);
router.post("/", createProduct);
router.patch("/:id", updateProduct);
router.delete("/:id", deleteProduct);


export default router