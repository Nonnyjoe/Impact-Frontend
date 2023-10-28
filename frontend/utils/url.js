export const api = 'http://localhost:5000/api/';

export const getData = async (route) => {
  const res = await fetch(api + route);
  const repo = await res.json();
  return repo;
};
