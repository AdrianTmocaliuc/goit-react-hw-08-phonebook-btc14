const BASE_URL = "https://626f8cc5c508beec488536d8.mockapi.io";

async function fetchToCatchError(url = "") {
  const res = await fetch(url);
  //   return res.ok ? await res.json() : Promise.reject(new Error("Not found"));
  return await res.json();
}

export function getContacts() {
  return fetchToCatchError(`${BASE_URL}/contacts`);
}
