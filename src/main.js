import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { fetchImages } from './js/pixabay-api.js';
import { galleryRender } from './js/render-functions.js';

const refs = {
    form: document.querySelector('.search-form'),
    input: document.querySelector('input'),
    searchBtn: document.querySelector('button'),
    gallery: document.querySelector('.gallery'),
    loadMoreBtn: document.querySelector('.load-more'),
}

function imagesSearch(event) {
    event.preventDefault();
}




refs.form.addEventListener('submit', imagesSearch);