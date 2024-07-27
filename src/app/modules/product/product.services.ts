import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const createProductIntoDb = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};

const getProductsDataFromDb = async () => {
  const result = await Product.find();
  return result;
};

export const productServices = {
  createProductIntoDb,
  getProductsDataFromDb,
};
