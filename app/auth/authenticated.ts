import { cookies } from "next/headers";

export default async function authenticated() {
  return !!cookies().get("Authentication");
}
