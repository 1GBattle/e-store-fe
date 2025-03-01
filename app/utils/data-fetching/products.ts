import { Product } from "@/app/Models/Product.Model";

const baseApi = "https://localhost:5001/api/products/";

export const getAllProducts = async (): Promise<Product[] | null> => {
  try {
    return await fetch(baseApi).then((res) => res.json());
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const getProductById = async (
  productId: number,
): Promise<Product | null> => {
  try {
    return fetch(baseApi + productId).then((res) => res.json());
  } catch (err) {
    console.log(err);
    return null;
  }
};
