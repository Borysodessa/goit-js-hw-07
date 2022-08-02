import {galleryItems} from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const galleryMarkup = galleryItems.map(galleryItem => {
    return `
<div class="gallery__item">
  <a class="gallery__link" href="">
    <img
      class="gallery__image"
      src="${galleryItem.preview}"
       data-source="${galleryItem.original}"  
      alt="${galleryItem.description}"
    />
  </a>
</div>`
}).join('');
gallery.insertAdjacentHTML('beforeend', galleryMarkup);

const handleGallery = (evt) => {
    evt.preventDefault();
    const instance = basicLightbox.create(`<img src="${evt.target.dataset.source}"/>`);
    instance.show();
    document.addEventListener('keydown', event => {
        if (event.code === 'Escape') {
            console.log(56465464)
            instance.close();
        }
    });
}
gallery.addEventListener('click', handleGallery);













