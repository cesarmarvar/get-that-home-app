import { BASE_URI, token_key } from "../config";

async function getHomeClient(endpoint, { method, headers, body } = {}){
  const token = sessionStorage.getItem(token_key);

  if(token) {
    headers = {
      Authorization: `Token token=${token}`,
      ...headers,
    };
  }

  if(body) {
    headers = {
      "Content-Type": "application/json",
      ...headers
    };
  }

  const config = {
    method: method || (body ? "POST": "GET"),
    headers,
    body: body ? JSON.stringify(body) : null
  }

  const response = await fetch(BASE_URI + endpoint, config);

  let data;
  if(!response.ok) {
    try {
      data = await response.json();
    }catch(e) {
      throw new Error(response.statusText);
    }
    throw new Error(data.errors);
  }

  try {
    data = await response.json();
  }catch(e) {
    data = response.statusText;
  }

  return data;
}

export default getHomeClient;
