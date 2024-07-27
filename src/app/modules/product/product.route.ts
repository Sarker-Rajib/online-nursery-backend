import { Router } from "express";
import { productController } from "./product.controller";

const router = Router();

router.post("/create-product", productController.createProduct);
router.get("/create-product", productController.getProduct);

export const ProductRoutes = router;
