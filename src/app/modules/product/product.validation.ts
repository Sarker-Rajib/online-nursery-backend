import { z } from "zod";

export const productValidator = z.object({
  title: z.string(),
  category: z.string(),
  price: z.number(),
  quantity: z.number(),
  description: z.string(),
  rating: z.number(),
  image: z.string(),
});
