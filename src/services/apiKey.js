import axios from "axios";

const API_KEY = 'a5837db97d72016c81a7a776f4240db9';
axios.defaults.baseURL = 'https://gateway.marvel.com';

export const cardMarvel = async() => {
  try {
    const {data:{data: {results}}} =  await axios.get(`/v1/public/events?apikey=${API_KEY}&limit=100`);
    return results;
  } catch (error) {
    throw new Error(error.message);
  }
}

export const comicsId = async(id) => {
  try {
    const {data:{data: {results}}} = await axios.get(`/v1/public/events/${id}?apikey=${API_KEY}`);
    return results[0];
  } catch (error) {
    throw new Error(error.message);
  }
}
