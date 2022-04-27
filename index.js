import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
const app = express();
//routes
import productRoute from "./routes/product.js";
import orderRoute from "./routes/order.js";
import authRoute from "./routes/auth.js";

//Configuration
dotenv.config();

mongoose.connect(process.env.MongoDB_URL, { useNewUrlParser: true }, () =>
  console.log("connected to db")
);

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//importing routes

app.use("/products", productRoute);
app.use("/orders", orderRoute);
app.use("/auth", authRoute);

//routes
app.get("/", (req, res) => {
  res.send("We are on home page");
});

app.listen(3000, () => console.log("Server Started"));
