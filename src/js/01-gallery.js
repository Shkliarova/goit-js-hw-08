// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const ul = document.querySelector('.gallery');
const markup = createMarkup(galleryItems);

ul.insertAdjacentHTML('beforeend', markup);

function createMarkup(arr){
    return arr.map(({preview, original, description}) =>{
        return `<li data-preview = '${preview}' class = 'gallery__item js-gallery-item'>
        <a class = 'gallery__link' href = '${original}' >
        <img 
        class = 'gallery__image'
        src = '${preview}'
        alt = '${description}'
        />
        </a>
        </li>`
    }).join(' ')
}

new SimpleLightbox('.gallery a', {
    caption: true,
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250
})