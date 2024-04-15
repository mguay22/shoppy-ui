"use server";

import { post } from "../../common/util/fetch";

export default async function createProduct(formData: FormData) {
  return post("products", formData);
}
