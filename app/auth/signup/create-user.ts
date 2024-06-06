"use server";

import { FormResponse } from "@/app/common/interfaces/form-response.interface";
import { post } from "@/app/common/util/fetch";
import { redirect } from "next/navigation";
import login from "../login/login";

export default async function createUser(
  _prevState: FormResponse,
  formData: FormData
) {
  const { error } = await post("users", formData);
  if (error) {
    return { error };
  }
  await login(_prevState, formData);
}
