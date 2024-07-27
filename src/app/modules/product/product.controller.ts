import { catchAsync } from "../../utils/catchAsync";
import { productServices } from "./product.services";

const createProduct = catchAsync(async (req, res) => {
  const productData = req.body;
  console.log(productData);

  const result = await productServices.createProductIntoDb(productData);
  console.log(result);

  res.send(result);
});

const getProduct = catchAsync(async (req, res) => {
  const result = await productServices.getProductsDataFromDb();
  res.send(result);
});

const updateProduct = catchAsync(async (req, res) => {
  const productData = req.body;

  const result = await productServices.updateProductData("id", productData);
  res.send(result);
});

export const productController = {
  createProduct,
  getProduct,
  updateProduct,
};
