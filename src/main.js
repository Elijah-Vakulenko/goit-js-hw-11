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
//IziToast Alert

function showNoResultsMessage() {
    iziToast.error({
        title: 'Error!',
        message: `Sorry, there are no images matching your search query. Please try again!`,
        position: "center",
        messageColor: 'white',
        backgroundColor: '#ff3d00',
        progressBarColor: '#B51B1B',
    });
}

//===============================================================================
// Налаштовуємо слухач подій та визначаємо, що буде відбуватися при запиті

refs.form.addEventListener('submit', event => {
    event.preventDefault();
    const query = event.target.elements.query.value.trim();

    refs.loader.classList.remove('is-hidden'); //← видаляємо клас visually hidden щоб показати, що йде пошук, сторінка чекає на завантаження даних.
    
    getImages(query).then(data => {
           if (data.hits.length === 0) {
            // якщо немає результатів пошуку:
               showNoResultsMessage(); //← запускаємо функцію оповіщення від iziToast;
               refs.gallery.innerHTML = '';//← очищуємо галерею, якщо там лишився результат минулого пошуку;
        } else {
            //Якщо пошук за ключем дає результат, запускаємо рендер та виводимо зображення за допомогою Lightbox
            const markup = galleryRender(data.hits);
            refs.gallery.innerHTML = markup;
            initilizeLightbox();
        }

        // Ховаємо індикатор завантаження даних після завантаження зображень
        refs.loader.classList.add('is-hidden');
    });
});