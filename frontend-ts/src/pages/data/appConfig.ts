// apiConfig.ts

export const BASE_API_URL = 'http://localhost:5000/api';

export function buildApiUrl(path: string) {
  return `${BASE_API_URL}${path}`;
}
