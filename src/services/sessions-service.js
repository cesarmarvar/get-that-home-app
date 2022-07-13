import { token_key } from "../config";
import getHomeClient from "./get-home-client";

export async function login(credentials) {
  const { token, ...user } = await getHomeClient("login", { body: credentials });

  sessionStorage.setItem(token_key, token);
  return user;
}

export async function signup(user_data) {
  const { token, ...user } = await getHomeClient("signup", { body: user_data });

  sessionStorage.setItem(token_key, token);
  return user
}

export async function logout() {
  await getHomeClient("logout", { method: "DELETE" });
  sessionStorage.removeItem(token_key);
}
