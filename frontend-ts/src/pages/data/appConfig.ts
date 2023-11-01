// apiConfig.ts

export const BASE_API_URL = 'https://impact-web3bridge-production.up.railway.app/api/';

export function buildApiUrl(path: string) {
  return `${BASE_API_URL}${path}`;
}
