// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";


const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');

const createGalleryCardTemplate = (imgInfo) =>{
    return`
    <li class="gallery-card">
    <img class="galler-card" src="${imgInfo.webformatURL}" alt="${imgInfo.tags}" />
    </li>
    `;
};

const onSearchFormSubmit = event => {
    event.preventDefault();
    const searchedValue = searchFormEl.elements.user_query.value;
    
    fetch(
        `https://pixabay.com/api/?key=45483609-d3ae590ff20ddbd4abc31de80&q=${searchedValue}&image_type=photo&orientation=horizontal&safesearch=true`
        )
        .then(response =>{
            if(!response.ok){
                throw new Error(response.status);
            }
            return response.json();
        })
        .then(data =>{
            console.log(data);
          
            const galleryCardTemplate = data.hits.map(img => createGalleryCardTemplate(img)).join('');
            galleryEl.innerHTML = galleryCardTemplate;
        })
        .catch(err =>{
            console.log(err);
            iziToast.error({
                title: 'Error',
                message: 'Sorry, there are no images matching your search query. Please try again!',
            });
        });
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);