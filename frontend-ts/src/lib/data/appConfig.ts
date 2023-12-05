// apiConfig.ts

export const BASE_API_URL = 'https://impact-web3bridge-production.up.railway.app/api/';

export function buildApiUrl(path: string) {
  return `${BASE_API_URL}${path}`;
}

export const buildApiPostConfig = (obj: any) => ({
  body: JSON.stringify(obj),
  method: 'post',
  headers: { 'Content-Type': 'application/json' },
});
