import express from "express";
import ProductController from "../controller/product.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";
import upload from "../middleware/multer.middleware.js";
const routerAPI = express.Router();
routerAPI.get("/", ProductController.getProduct);

routerAPI.get("/top-10-best-selling", ProductController.getTop10BestSellingProducts);
routerAPI.get("/top-10-best-viewing", ProductController.getTop10BestViewProducts);
routerAPI.post("/", authMiddleware, upload.array("images", 10), ProductController.createProduct);
export default routerAPI;
