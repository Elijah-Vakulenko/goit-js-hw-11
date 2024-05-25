import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { getImages } from './js/pixabay-api.js'; //← функція фетчу зображень з серверу
import { galleryRender} from './js/render-functions.js'; //← імпорт функції рендеру

//===============================================================================
// імпорт DOM елементів

const refs = {
    form: document.querySelector('.search-form'),
    input:  document.querySelector('input'),
    gallery: document.querySelector('.gallery'),
    loader: document.querySelector('.loader'),
}

//===============================================================================
// Налаштовуємо SimpleLightbox

function initilizeLightbox() {
    const lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: 'alt',
    captionPosition: 'bottom',
    });
    
     lightbox.refresh();
}

//===============================================================================
// Налаштовуємо слухач подій та визначаємо, що буде відбуватися при запиті

refs.form.addEventListener('submit', event => {
    event.preventDefault();
    const query = event.target.elements.query.value.trim();

    getImages(query).then(data => {
        const markup = galleryRender(data.hits)
        refs.gallery.innerHTML = markup;
        initilizeLightbox()
        refs.loader.classList.add('is-hidden');
    });
});