import { getAllPopular } from './fetchAPI';
import { updateItemCountDisplay } from './header';
import sprite from '/img/icons/sprite.svg';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const popularList = document.querySelector('.popular-list');

async function getDataAllPopular() {
  try {
    const result = await getAllPopular();
    return result;
  } catch (error) {
    console.log(error);
  }
}

function createMarkUpPopular(arr) {
  const markUp = arr.map(({ _id, img, name, size, category, popularity }) => {
    const updCategory = category.split('_').join(' ');
    return `<li class="popular-item" data-id='${_id}'>
    <div class="popular-card">
    <div class="popular-image-container">
    <img class="popular-image" src="${img}" alt="${name}" width="56px" height="56px">
    </div>
    <div class="info-popular-card">
    <h4 class="popular-name">${name}</h4>
    <p class="info-popular-item">Category:
    <b>${updCategory}</b></p>
    <div class="add">
    <p class="info-popular-item">Size: 
    <b>${size}</b></p>
    <p class="info-popular-item">Popularity:
    <b>${popularity}</b></p>
    </div>
    </div>
    <button class="popularbtn-basket unused" type="button">

    <svg class = "icon-check is-hidden unused"  width="12" height="12">
    <use class="unused" href="${sprite}#icon-check"></use></svg>

    <svg class="icon-shop unused" width="12" height="12">
    <use class="unused" href="${sprite}#icon-shop"></use></svg>

    </button>
    </div>
    </li>`;
  });
  popularList.insertAdjacentHTML('beforeend', markUp.join(''));
}

function onClick(event) {
  const targetButton = event.target.closest('.popularbtn-basket');
  if (!targetButton) return;
  const card = event.target.closest('.popular-item');
  const id = card.dataset.id;
  const basket = getBasketLocalStorage();

  if (basket.includes(id)) {
    iziToast.warning({
      title: 'Warning',
      message: 'You`ve already add this product to basket!',
      position: 'topRight',
    });
    return;
  }

  const check = targetButton.querySelector('.icon-check');
  const shop = targetButton.querySelector('.icon-shop');
  shop.classList.add('is-hidden');
  check.classList.remove('is-hidden');
  basket.push(id);
  setBasketLocalStorage(basket);
  updateItemCountDisplay();
}
function getBasketLocalStorage() {
  const cardDataJSONE = localStorage.getItem('basket');
  return cardDataJSONE ? JSON.parse(cardDataJSONE) : [];
}
function setBasketLocalStorage(basket) {
  localStorage.setItem('basket', JSON.stringify(basket));
}

export {
  popularList,
  onClick,
  getDataAllPopular,
  createMarkUpPopular,
  getBasketLocalStorage,
  setBasketLocalStorage,
};
