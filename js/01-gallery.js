import { galleryItems } from "./gallery-items.js";

const galleryList = document.querySelector(".gallery");

const createGalleryItem = ({ preview, original, description }) =>
  `<li class="gallery__item">
      <a
        class="gallery__link"
        href="${original}"
      >
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`;

const galleryMarkup = galleryItems
  .map((item) => createGalleryItem(item))
  .join("");

galleryList.insertAdjacentHTML("beforeend", galleryMarkup);

galleryList.addEventListener("click", onGalleryItemClick);

function onGalleryItemClick(evt) {
  evt.preventDefault();
  const isGalleryImageEl = evt.target.classList.contains("gallery__image");
  if (!isGalleryImageEl) {
    return;
  }

  const originalImageSrc = evt.target.dataset.source;
  const instance = basicLightbox.create(`
      <img src="${originalImageSrc}" width="800" height="600">
  `);

  instance.show();

  document.addEventListener("keydown", onModalClose);
}

function onModalClose(evt) {
  const isEscapeKey = evt.code === "Escape";
  if (isEscapeKey) {
    const instance = basicLightbox.getInstance();
    instance.close();
    document.removeEventListener("keydown", onModalClose);
  }
}

console.log(galleryItems);
