import { token_key } from "../config";
import getHomeClient from "./get-home-client";

export async function getUser() {
  return await getHomeClient("profile");
}

export async function updateUser(data) {
  return await getHomeClient("profile", { body: data, method: "PATCH" });
}

export async function deleteUser() {
  await getHomeClient("profile", { method: "DELETE" });
  sessionStorage.removeItem(token_key);
}
