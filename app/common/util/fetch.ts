import { cookies } from "next/headers";
import { PostOptions } from "../interfaces/post-options.interface";
import { API_URL } from "../../constants/api";
import { getErrorMessage } from "./errors";

const getHeaders = () => ({
  Cookie: cookies().toString(),
});

export const post = async (
  path: string,
  formData: FormData,
  options?: PostOptions
) => {
  const res = await fetch(`${API_URL}/${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...getHeaders() },
    body: JSON.stringify(Object.fromEntries(formData)),
  });
  const parsedRes = await res.json();
  if (!res.ok) {
    return { error: getErrorMessage(parsedRes) };
  }
  if (options?.returnRes) {
    return res;
  }
};

export const get = async (path: string) => {
  const res = await fetch(`${API_URL}/${path}`, {
    headers: { ...getHeaders() },
  });
  return res.json();
};
