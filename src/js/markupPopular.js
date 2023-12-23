import { getAllPopular } from './fetchAPI';

const popularList = document.querySelector('.popular-list');
const PRODUCT_KEY = 'basket';
const basketArr = JSON.parse(localStorage.getItem(PRODUCT_KEY)) ?? [];

async function getDataAllPopular() {
  try {
    const result = await getAllPopular();
    return result;
  } catch (error) {
    console.log(error);
  }
}
console.log(getDataAllPopular());

getDataAllPopular()
  .then(createMarkUpPopular)
  .catch(error => {
    console.log(error);
  });

function createMarkUpPopular(arr) {
  const markUp = arr.map(({ _id, img, name, category, size, popularity }) => {
    return `<li class="popular-item" data-id='${_id}'>
    <div class="popular-card">
    <div class="popular-image-container">
    <img class="popular-image" src="${img}" alt="${name}" width="56px" height="56px">
    </div>
    <div class="info-popular-card">
    <h4 class="popular-name">${name}</h4>
    <p class="info-popular-item">Category:
    <b>${category}</b></p>
    <div class="add">
    <p class="info-popular-item">Size: 
    <b>${size}</b></p>
    <p class="info-popular-item">Popularity:
    <b>${popularity}</b></p>
    </div>
    </div>
    <button class="popularbtn-basket" type="button">
    </button>
    </div>
    </li>`;
  });
  popularList.insertAdjacentHTML('beforeend', markUp.join(''));
}

popularList.addEventListener('click', onClick);
function onClick(event) {
  const targetButton = event.target.closest('.popularbtn-basket');
  if (!targetButton) return;
  const card = targetButton.closest('.popular-item');
  const id = card.dataset.productId;
  const basket = getBasketLocalStorage();
  if (basket.includes(id)) return;
  basket.push(id);
  setBasketLocalStorage(basket);
  console.log(id);
}
function getBasketLocalStorage() {
  const cardDataJSONE = localStorage.getItem('basket');
  return cardDataJSONE ? JSON.parse(cardDataJSONE) : [];
}
function setBasketLocalStorage(basket) {
  localStorage.setItem('basket', JSON.stringify(basket));
}
// function onClick(event) {
//   if (event.target.classList.contains('.popularbtn-basket')) {
//     const product = findProduct(event.target);
//     basketArr.push(product);
//     localStorage.setItem(PRODUCT_KEY, JSON.stringify(basketArr));
//   }
// }
// function findProduct(element) {
//   const productId = Number(element.closest('.popular-item')).dataset.id;
//   return Array.find(({ id }) => id === productId);
// }
// console.log(onClick());

// Проверка кнопок на активность.Наличие в корзине . Изменить иконку кнопки
function activButton(basket) {
  const buttons = document.querySelectorAll('.popularbtn-basket');
}
