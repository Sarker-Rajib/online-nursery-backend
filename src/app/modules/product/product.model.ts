import { Schema, model } from "mongoose";
import { TProduct } from "./product.interface";

const productSchema = new Schema<TProduct>({
  title: {
    type: String,
    required: [true, "Title Required"],
    minlength: [5, "Minimum length in 5"],
    trim: true,
    unique: true,
  },
  category: {
    type: String,
    required: [true, "Category Required"],
  },
  price: {
    type: Number,
    required: [true, "Price Required"],
  },
  quantity: {
    type: Number,
    required: [true, "Quantity Required"],
  },
  description: {
    type: String,
    required: [true, "Description Required"],
  },
  rating: {
    type: Number,
    required: [true, "Rating Required"],
  },
  image: {
    type: String,
    required: [true, "Image required"],
  },
});

export const Product = model<TProduct>("Product", productSchema);
