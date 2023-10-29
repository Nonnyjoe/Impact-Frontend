// apiConfig.ts

export const BASE_API_URL = 'https://jsonplaceholder.typicode.com';

export function buildApiUrl(path: string) {
  return `${BASE_API_URL}${path}`;
}
