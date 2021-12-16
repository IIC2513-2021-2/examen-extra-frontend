import config from '../config';

async function getResource(url) {
  const requestOptions = {
    method: 'GET',
  };
  const response = await fetch(url, requestOptions);
  const result = await response.json();
  if (!response.ok) {
    throw new Error(result?.message);
  }
  return result;
}

function getExpeditions() {
  return getResource(`${config.API_URL}/api/expeditions`);
}

function getExpeditionMembers(id) {
  return getResource(`${config.API_URL}/api/expeditions/${id}/members`);
}


const api = {
  getExpeditions,
  getExpeditionMembers,
}

export default api;
