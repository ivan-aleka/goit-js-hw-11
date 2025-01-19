import { fetchImages } from './js/pixabay-api.js';
import { renderGallery, clearGallery } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.js-search-form');
const input = document.querySelector('.js-search-input');
const loader = document.querySelector('.loader');

let currentPage = 1;
const perPagePixabay = 9;
let currentQuery = '';

const onSearch = event => {
  event.preventDefault();

  const query = input.value.trim();
  if (!query) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query.',
    });
    return;
  }

  currentQuery = query;
  currentPage = 1;
  clearGallery();

  toggleLoader(true);

  fetchImages(currentQuery, currentPage, perPagePixabay)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.warning({
          title: '',
          message:
            'Sorry, there are no images matching your search query. Please, try again!',
          position: 'topRight',
          backgroundColor: '#ef4040',
        });
        return;
      }
      renderGallery(data.hits);
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: 'Failed to fetch images. Please try again later.',
      });
      console.error(error);
    })
    .finally(() => {
      toggleLoader(false);
      input.value = '';
    });
};

const toggleLoader = isVisible => {
  loader.style.display = isVisible ? 'block' : 'none';
};

form.addEventListener('submit', onSearch);
