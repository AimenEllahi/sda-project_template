import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    productname: {
      type: String,
      require: true,
      min: 3,
      max: 20,
      unique: true,
    },
    desc: {
      type: String,
      max: 50,
    },
    productcost: {
      type: String,
      max: 50,
    },
  },
  { timestamps: true }
);

const product = mongoose.model("Product", ProductSchema);
export default product;
