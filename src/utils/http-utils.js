export default async function loadJSON(url) {
  return fetch(url, { method: 'GET' })
    .then((response) => response.json());
}
