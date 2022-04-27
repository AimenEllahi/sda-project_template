import express from "express";
import { signin, signup } from "../controller/auth.js";
import { validate } from "../middleware/auth.js";
const router = express.Router();

router.get("/", validate, signin);
router.post("/", validate, signup);

export default router;
