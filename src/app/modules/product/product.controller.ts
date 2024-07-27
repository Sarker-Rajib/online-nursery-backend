import { catchAsync } from "../../utils/catchAsync";
import { productServices } from "./product.services";

const createProduct = catchAsync(async (req, res) => {
  const productData = req.body;

  const result = await productServices.createProductIntoDb(productData);
  res.send(result);
});

const getProduct = catchAsync(async (req, res) => {
  const result = await productServices.getProductsDataFromDb();
  res.send(result);
});

const updateProduct = catchAsync(async (req, res) => {
  const productData = req.body;
  const productId = req.params.id;

  const result = await productServices.updateProductData(
    productId,
    productData
  );

  res.send(result);
});

const deleteProduct = catchAsync(async (req, res) => {
  const id = req.params.id;

  const result = await productServices.deleteProductFromDB(id);
  res.send(result);
});

export const productController = {
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
};
