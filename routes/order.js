import express from "express";
import {
  getOrder,
  getOrders,
  createOrder,
  deleteOrder,
} from "../controller/order.js";
const router = express.Router();

router.get("/:id", getOrder);
router.get("/", getOrders);
router.post("/", createOrder);
router.delete("/:id", deleteOrder);

export default router;
