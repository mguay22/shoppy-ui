"use server";

import { get } from "./util/fetch";

export default async function getMe() {
  return get("users/me");
}
