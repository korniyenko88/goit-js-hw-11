// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

import { createGalleryCardTemplate } from './js/render-functions';
import { fetchFotos } from './js/pixabay-api';
const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');

const onSearchFormSubmit = event => {
  event.preventDefault();
  const searchedValue = searchFormEl.elements.user_query.value;
  const loader = document.querySelector('.loader');

  loader.style.display = 'inline-block';

  fetchFotos(searchedValue)
    .then(data => {
      if (data.hits.length === 0) {
        throw new Error('No images found.');
      }
      

      const galleryCardTemplate = data.hits
        .map(img => createGalleryCardTemplate(img))
        .join('');
      galleryEl.innerHTML = galleryCardTemplate;

      const lightbox = new SimpleLightbox('.gallery a', {
        captions: true,
        captionsData: 'alt',
        captionDelay: 250,
      });
      lightbox.refresh();
      searchFormEl.reset();
    })
    .catch(err => {
      console.log(err);
      iziToast.error({
        title: 'Error',
        position: 'topRight',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    })
    .finally(() => {
      loader.style.display = 'none';
    });
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
