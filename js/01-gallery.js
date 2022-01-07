import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const imagesMarkup = generateImagesMarkup(galleryItems);

gallery.insertAdjacentHTML('beforeend',imagesMarkup)
gallery.addEventListener('click', onGalleryClick);
// console.log(imagesMarkup);
function onGalleryClick(e){
    e.preventDefault();
    if(e.target.nodeName !== 'IMG'){
        return;
    }
    const imgSrc = e.target.dataset.source;
    console.log(imgSrc);
    console.log(basicLightbox);
    const instance = basicLightbox.create(`
        <img src="${imgSrc}" width="800" height="600">
    `)
    console.log(instance.visible())
    instance.show()
    console.log(instance.visible())

}

function generateImagesMarkup(images){
    return images.map((img)=>{
        return `
        <div class="gallery__item">
            <a class="gallery__link" href=${img.original}>
                <img 
                class="gallery__image" 
                src="${img.preview}"
                data-source="${img.original}" 
                alt="${img.description}">
            </a>
        </div>
        `
    }).join('')
}