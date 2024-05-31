"use server";

import { revalidateTag } from "next/cache";

export default async function revalidateProducts() {
  revalidateTag("products");
}
