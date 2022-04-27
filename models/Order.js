import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    productIds: {
      type: [String],
      require: true,
    },
    invoiceId: {
      type: String,
      require: true,
    },
    userId: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const order = mongoose.model("Order", OrderSchema);
export default order;
