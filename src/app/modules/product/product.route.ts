import { Router } from "express";
import { productController } from "./product.controller";

const router = Router();

router.post("/create-product", productController.createProduct);
router.get("/create-product", productController.getProduct);
router.put("/update-product", productController.updateProduct);

export const ProductRoutes = router;
