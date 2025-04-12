"use server";

import { cookies } from "next/headers";
import { AUTHENTICATION_COOKIE } from "../auth-cookie";

export default async function getAuthentication() {
  return (await cookies()).get(AUTHENTICATION_COOKIE);
}
