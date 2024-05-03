import { API_URL } from "../common/constants/api";

export const getProductImage = (productId: number) => {
  return `${API_URL}/images/products/${productId}.jpg`;
};
