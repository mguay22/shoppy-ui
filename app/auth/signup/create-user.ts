"use server";

import { FormError } from "@/app/common/interfaces/form-error.interface";
import { post } from "@/app/common/util/fetch";
import { redirect } from "next/navigation";

export default async function createUser(
  _prevState: FormError,
  formData: FormData
) {
  const error = await post("users", formData);
  if (error) {
    return error;
  }
  redirect("/");
}
