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
  const productData = req.body;
  console.log(productData);

  const result = await productServices.getProductsDataFromDb();
  console.log(result);

  res.send(result);
});

export const productController = {
  createProduct,
  getProduct,
};
