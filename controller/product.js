import Product from "../models/Product.js";

//to get all products
export const getProduct = async (req,res) =>{
    try{
        const products = await Product.find();
        res.json(products);
    }
    catch(err){
        res.json({message: err});
    }
}

//to get single product by id
export const getProducts = async (req,res) =>{
    try{
        const product = await Product.find();
        res.json(product);
    } catch(err){
        res.json({message: err});
    }
}

//to create product
export const createProduct = async (req,res) =>{
    const {title, desc, price} = req.body;
    console.log(title);
    const product = new Product({
        productname: title,
        desc: desc,
        productcost: price
    });
   
    // try{
    //     const savedProduct = await product.save()
    //     res.json(savedProduct);
    // }
    // catch(err) {
    //     res.json({message: err});
    // }
}

//to pdate product
export const updateProduct = async (req,res) =>{try{
    const updatedProduct = await Product.updateOne({ _id: req.params.productID},
        {$set: {productname: req.body.productname,
            desc: req.body.desc,
            productcost: req.body.productcost }});
    res.json(updatedProduct);
} catch(err){
    res.json({message: err});
}}

//to delete product
export const deleteProduct = async (req,res) =>{
    try{
        const removedProduct = await Product.deleteOne({ _id: req.params.productID});
        res.json(removedProduct);
    } catch(err){
        res.json({message: err});
    }
}