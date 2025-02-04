import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const createProductIntoDb = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};

const getProductsDataFromDb = async () => {
  const result = await Product.find().select("-__v -createdAt -updatedAt");
  return result;
};

const getSingleProductFromDb = async (_id: string) => {
  const result = await Product.find({ _id }).select(
    "-__v -createdAt -updatedAt"
  );
  return result;
};

const updateProductData = async (id: string, payload: TProduct) => {
  const result = await Product.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });

  return result;
};

const deleteProductFromDB = async (id: string) => {
  const result = await Product.findOneAndDelete({ _id: id });
  return result;
};

export const productServices = {
  createProductIntoDb,
  getProductsDataFromDb,
  updateProductData,
  deleteProductFromDB,
  getSingleProductFromDb,
};
