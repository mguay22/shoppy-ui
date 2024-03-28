"use server";

import { FormError } from "@/app/common/form-error.interface";
import { post } from "@/app/util/fetch";
import { redirect } from "next/navigation";

export default async function login(_prevState: FormError, formData: FormData) {
  const error = await post("auth/login", formData);
  if (error) {
    return error;
  }
  redirect("/");
}
