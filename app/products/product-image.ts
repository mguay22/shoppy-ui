import { API_URL } from "../common/constants/api";

export const getProductImage = (productId: number) => {
  return `${process.env.NEXT_PUBLIC_PRODUCT_IMAGE_URL}/${productId}.jpg`;
};
