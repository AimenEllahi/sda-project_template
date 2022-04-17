import Product from "../models/Product.js";

//to get single product
export const getProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);

    res.json(product);
  } catch (err) {
    res.json({ message: err });
  }
};

//to get all products
export const getProducts = async (req, res) => {
  try {
    const product = await Product.find();
    res.json(product);
  } catch (err) {
    res.json({ message: err });
  }
};

//to create product
export const createProduct = async (req, res) => {
  const { title, desc, price } = req.body;
  console.log(title, desc, price);
  const product = new Product({
    productname: title,
    desc: desc,
    productcost: price,
  });

  try {
    const savedProduct = await product.save();
    res.json(savedProduct);
  } catch (err) {
    res.json({ message: err });
  }
};

//to update product
export const updateProduct = async (req, res) => {
  console.log("We are here");
  const { id } = req.params;
  const { title, desc, price } = req.body;
  console.log(title, desc, price);

  try {
    const updatedProduct = await Product.updateOne(
      { id },
      { $set: { productname: title, desc: desc, productcost: price } }
    );
    res.json({Message : "Product Updated Successfully"});
  } catch (err) {
    res.json({ message: err });
  }
};

//to delete product
export const deleteProduct = async (req, res) => {
  try {
    const removedProduct = await Product.deleteOne({ _id: req.params.id });
    res.json({Message : "Product Deleted Successfully"});
  } catch (err) {
    res.json({ message: err });
  }
};
