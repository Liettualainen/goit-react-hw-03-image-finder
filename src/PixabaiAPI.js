const URL = 'https://pixabay.com/api/';
const API_KEY = '30904237-89ef4380cd88db989fbe73792';
const config = '&image_type=photo&orientation=horizontal&per_page=16';

export const getImages = (searchText, page) => {
  return fetch(`${URL}?q=${searchText}&page=${page}&key=${API_KEY}${config}`);
};