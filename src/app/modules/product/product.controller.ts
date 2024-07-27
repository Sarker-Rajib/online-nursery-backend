import { productServices } from "./product.services";

const createProduct = async (req, res) => {
  const productData = req.body;

  const result = await productServices.createProductIntoDb(productData);
  return result;
};

export const productController = {
  createProduct,
};
