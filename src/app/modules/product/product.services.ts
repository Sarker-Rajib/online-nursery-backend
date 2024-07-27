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

const updateProductData = async (id: string, payload: TProduct) => {
  const result = await Product.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

export const productServices = {
  createProductIntoDb,
  getProductsDataFromDb,
  updateProductData,
};
