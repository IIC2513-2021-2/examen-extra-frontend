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

async function alterResource(url, payload, options) {
  const { method, ...otherOptions } = options;
  const requestOptions = {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
    ...otherOptions,
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

function getExpeditionDetail(id) {
  return getResource(`${config.API_URL}/api/expeditions/${id}`);
}

function getExpeditionMembers(id) {
  return getResource(`${config.API_URL}/api/expeditions/${id}/members`);
}

function updateExpedition(id, payload) {
  return alterResource(`${config.API_URL}/api/expeditions/${id}`, payload, { method: 'PATCH' });
}

function addMemberToExpedition(id, payload) {
  return alterResource(`${config.API_URL}/api/expeditions/${id}/members`, payload, { method: 'POST' });
}


const api = {
  addMemberToExpedition,
  getExpeditions,
  getExpeditionDetail,
  getExpeditionMembers,
  updateExpedition,
};

export default api;
