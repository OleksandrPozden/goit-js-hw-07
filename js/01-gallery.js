import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const imagesMarkup = generateImagesMarkup(galleryItems);

gallery.insertAdjacentHTML("beforeend", imagesMarkup);
gallery.addEventListener("click", onGalleryClick);

let instance;

function onGalleryClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  const imgSrc = e.target.dataset.source;

  instance = basicLightbox.create(
    `
        <img src="${imgSrc}" width="800" height="600">
    `,
    {
      onShow() {
        addEscKeyEventListener();
      },
      onClose() {
        removeEscKeyEventListener();
      },
    }
  );
  instance.show();
}
function addEscKeyEventListener() {
  document.addEventListener("keydown", onEscPress);
}
function removeEscKeyEventListener() {
  document.removeEventListener("keydown", onEscPress);
}
function onEscPress(e) {
  if (e.code !== "Escape") {
    return;
  }
  instance.close();
}
function generateImagesMarkup(images) {
  return images
    .map((img) => {
      return `
        <div class="gallery__item">
        <a class="gallery__link" href=${img.original}>
        <img 
        class="gallery__image"
        loading="lazy" 
        src="${img.preview}"
        data-source="${img.original}" 
        alt="${img.description}">
        </a>
        </div>
        `;
    })
    .join("");
}
