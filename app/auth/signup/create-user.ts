"use server";

import { redirect } from "next/navigation";
import { FormError } from "@/app/common/form-error.interface";
import { post } from "@/app/util/fetch";

export default async function createUser(
  _prevState: FormError,
  formData: FormData
) {
  const { error } = await post("users", formData);
  if (error) {
    return { error };
  }
  redirect("/");
}
