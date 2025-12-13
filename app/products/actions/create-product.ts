"use server";

import { revalidatePath } from "next/cache";
import { getHeaders, post } from "../../common/util/fetch";
import { API_URL } from "@/app/common/constants/api";

export default async function createProduct(formData: FormData) {
  const response = await post("products", formData);
  const productImage = formData.get("image");
  if (productImage instanceof File && !response.error) {
    await uploadProductImage(response.data.id, productImage);
  }
  revalidatePath("/");
  return response;
}

async function uploadProductImage(productId: number, file: File) {
  const formData = new FormData();
  formData.append("image", file);
  await fetch(`${API_URL}/products/${productId}/image`, {
    body: formData,
    method: "POST",
    headers: await getHeaders(),
  });
}
