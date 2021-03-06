import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);
const gallery = document.querySelector(".gallery");

const imagesMarkup = generateImagesMarkup(galleryItems);

gallery.insertAdjacentHTML("beforeend", imagesMarkup);

let lightBox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay:250});

function generateImagesMarkup(images) {
  return images
    .map((img) => {
      return `
        <a class="gallery__item" href="${img.original}">
            <img class="gallery__image" src="${img.preview}" alt="${img.description}" />
        </a>
        `;
    })
    .join("");
}
