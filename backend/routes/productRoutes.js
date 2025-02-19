import express from "express";
import Product from "../models/Product.js";
import { protect } from "../middleware/authMiddleware.js";
import { rateLimiter } from "../middleware/rateLimiter.js";

const router = express.Router();

router.get("/", rateLimiter, async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

router.post("/", protect, async (req, res) => {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
});

export default router;
