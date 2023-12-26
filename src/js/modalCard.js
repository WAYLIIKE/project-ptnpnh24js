import { getProductByID } from './fetchAPI';

// async function getDataProductByID(id) {
//   try {
//     const result = await getProductByID(id);
//     console.log(result);
//     openModal(result);
//     return result;
//   } catch (error) {
//     console.log(error);
//   }
// }
// console.log(getDataProductByID('640c2dd963a319ea671e383b'));

// modal

const modalEl = document.querySelector('.modal');
const modalBtnOpen = document.querySelector('.modal-btn');
modalBtnOpen.addEventListener('click', openModal);

function openModal() {
  async function getProductByID(id) {
    const BASE_URL = 'https://food-boutique.b.goit.study/api/products/';
    try {
      const result = await axios.get(`${BASE_URL}${id}`);
      console.log(result);
      modalEl.classList.toggle('is-visible');
      document.body.style.overflow = 'hidden';
      modalEl.classList.add('modal-card-box');
      const { _id, img, name, category, size, popularity, desk, price } =
        result;

      modalEl.innerHTML = `<div class = "modal-card-box" data-id='${_id}>
    <img class="car-image" src="${img}" alt="${name}" width="160px" height="160px">
    <h4 class="popular-name">${name}</h4>
    <p class="info-popular-item">Category:
    <b>${category}</b></p>
    <p class="info-popular-item">Size:
    <b>${size}</b></p>
    <p class="info-popular-item">Popularity:
    <b>${popularity}</b></p>
    <p>${desk}</p>
    <button class="button-modal-icon" type="button">
      <svg class="modal-close">
        <use href="./img/icons/sprite.svg#icon-close"></use>
      </svg>
    </button>
    <p>${price}</p>
     <button type="button" class="modal-btn-open">
    Add to
    <svg class="btn-mobile" width="18" height="18">
      <use href="./img/icons/sprite.svg#icon-shop"></use>
    </svg>
  </button>
     </div>`;

      // return result;
    } catch (error) {
      console.log(error);
    }
    const modalBtnClose = document.querySelector('.button-modal-icon');
    modalBtnClose.addEventListener('click', () => closeModal());
  }
}

function closeModal() {
  modalEl.classList.remove('modal-show');
  document.body.style.overflow = '';
}
window.addEventListener('click', event => {
  if (event.target === modalEl) {
    closeModal();
  }
});
window.addEventListener('keydown', event => {
  if (event.keyCode === 27) {
    closeModal();
  }
});
