import getHomeClient from "./get-home-client";

export async function getProperties() {
  return await getHomeClient("properties");
}

export async function getRandomProperties() {
  return await getHomeClient("random");
}

export async function getProperty(id) {
  return await getHomeClient(`properties/${id}`);
}

export async function createProperty(data) {
  return await getHomeClient("properties", { body: data });
}

export async function updateProperty(data, id) {
  return await getHomeClient(`properties/${id}`, { body: data, method: "PATCH" });
}

export async function destroyProperty(id) {
  await getHomeClient(`properties/${id}`, { method: "DELETE" });
}
