import { Router } from "express";
import { productController } from "./product.controller";

const router = Router();

router.post("/create-product", productController.createProduct);
router.get("/", productController.getProduct);
router.put("/update-product/:id", productController.updateProduct);
router.delete("/delete-product/:id", productController.deleteProduct);

export const ProductRoutes = router;
