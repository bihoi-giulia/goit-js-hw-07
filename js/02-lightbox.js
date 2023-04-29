import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const galleryImages = galleryItems
  .map((image) => {
    return `
  <li class="gallery__item">
    <a class="gallery__link" href="${image.original}">
      <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
    </a>
</li>
  `;
  })
  .join("");

gallery.innerHTML = galleryImages;

var lightbox = new SimpleLightbox(".gallery a", {
  capttion: true,
  captionSelector: "img",
  captionType: "attr",
  captionsData: "alt",
  captionDelay: 250,
});
