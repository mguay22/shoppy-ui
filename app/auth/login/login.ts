"use server";

import { FormError } from "@/app/common/form-error.interface";
import { API_URL } from "@/app/constants/api";
import { getErrorMessage } from "@/app/util/errors";
import { redirect } from "next/navigation";

export default async function login(_prevState: FormError, formData: FormData) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(Object.fromEntries(formData)),
  });
  const parsedRes = await res.json();
  if (!res.ok) {
    return { error: getErrorMessage(parsedRes) };
  }
  redirect("/");
}
