import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '34781999-f80c25e1d8028aeab158849af';
export const ITEMS_PER_PAGE = 12;

const searchParams = new URLSearchParams({
  key: API_KEY,
  per_page: ITEMS_PER_PAGE,
  image_type: 'photo',
  orientation: 'horizontal',
});

axios.defaults.baseURL = BASE_URL;

export const fetchImages = async (query, page) => {
  const response = await axios.get(`?q=${query}&page=${page}&${searchParams}`);
  const data = response.data;
  return data;
};
