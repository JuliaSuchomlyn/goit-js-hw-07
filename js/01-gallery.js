import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryBoxEl = document.querySelector('.gallery');
galleryBoxEl.insertAdjacentHTML('beforeend', galleryCreate(galleryItems));


function galleryCreate() {
    return galleryItems
        .map(({ preview, original, description }) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="${original.value}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
            
    }).join('');
};

const clickImage = (e) => {
    e.preventDefault();

    if (e.target.classList.contains('gallery')) return;
    const source = e.target.dataset.source;

    const instance = basicLightbox.create(`<img src="${source}" width="800" heigth="600">`,
        {
        onShow: instance => {
        addListener();
        },
        onClose: instance => {
        removeListener();
        },
        }
    )
    
    instance.show();
    
    function addListener() {
    document.addEventListener('keydown', onEscapeBtn);
    }

    function onEscapeBtn(e) {
    if (e.code === 'Escape') instance.close()
    }

    function removeListener() {
    document.removeEventListener('keydown', onEscapeBtn);
    }
    // document.addEventListener('keydown', (e) => {
    //     if (e.code === 'Escape') instance.close()
    // });
}

galleryBoxEl.addEventListener('click', clickImage)

console.log(galleryItems);
