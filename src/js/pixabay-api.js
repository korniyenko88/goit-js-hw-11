

import { createGalleryCardTemplate } from './render-functions'

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');



const onSearchFormSubmit = event => {
  event.preventDefault();
  const searchedValue = searchFormEl.elements.user_query.value;

  fetch(
    `https://pixabay.com/api/?key=45483609-d3ae590ff20ddbd4abc31de80&q=${searchedValue}&image_type=photo&orientation=horizontal&safesearch=true`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);

      const galleryCardTemplate = data.hits
        .map(img => createGalleryCardTemplate(img))
        .join('');
      galleryEl.innerHTML = galleryCardTemplate;

      const lightbox = new SimpleLightbox('.gallery a', {
        captions: true,
        captionsData: 'alt',
        captionDelay: 250,
      });
    })
    .catch(err => {
      console.log(err);
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    });
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);


