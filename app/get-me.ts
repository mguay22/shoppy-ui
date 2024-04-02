"use server";

import { get } from "./common/util/fetch";

export default async function getMe() {
  return get("users/me");
}
