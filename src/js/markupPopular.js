import { getAllPopular } from './fetchAPI';

const iconShop = './img/icons/sprite.svg#icon-shop';
const iconCheck = './img/icons/sprite.svg#icon-check';

const popularList = document.querySelector('.popular-list');

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
    <button class="popularbtn-basket " type="button">
   
    <svg class = "icon-check is-hidden "  width="12" height="12">
    <use href="${iconCheck}"></use></svg>
   
   
    <svg class="icon-shop" width="12" height="12" >
    <use href="${iconShop}"></use></svg>
    
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
  const card = event.target.closest('.popular-item');
  const id = card.dataset.id;
  const basket = getBasketLocalStorage();

  if (basket.includes(id)) return;

  // ПЕРЕВІР ТУТ
  // const check = document.querySelectorAll('.icon-check');
  // const shop = document.querySelector('.icon-shop');
  // shop.classList.add("is-hidden");
  // check.classList.remove('is-hidden');

  basket.push(id);
  setBasketLocalStorage(basket);
}
function getBasketLocalStorage() {
  const cardDataJSONE = localStorage.getItem('basket');
  return cardDataJSONE ? JSON.parse(cardDataJSONE) : [];
}
function setBasketLocalStorage(basket) {
  localStorage.setItem('basket', JSON.stringify(basket));
}
