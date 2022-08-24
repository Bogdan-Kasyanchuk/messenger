import axios from 'axios';

axios.defaults.baseURL = 'https://api.chucknorris.io/jokes';

export async function getJokes() {
  const response = await axios.get(`/random`);
  if (response.status === 200) return response.data.value;
  throw new Error(response);
}
