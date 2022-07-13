import getHomeClient from "./get-home-client";

export async function getSavedProperties() {
  return await getHomeClient("saved_properties");
}

export async function createSavedProperty(data) {
  return await getHomeClient("save_property", { body: data });
}

export async function updateSavedProperty(data, id) {
  return await getHomeClient(`save_property/${id}`, { body: data, method: "PATCH" });
}

export async function destroySavedProperty(id) {
  await getHomeClient(`save_property/${id}`, { method: "DELETE" });
}
