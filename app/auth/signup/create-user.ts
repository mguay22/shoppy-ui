"use server";

import { post } from "@/app/util/fetch";
import { redirect } from "next/navigation";

export default async function createUser(_prevState: any, formData: FormData) {
  const parsedRes = await post("users", formData);
  if (parsedRes) {
    return parsedRes;
  }
  redirect("/");
}
