import { updateItemCountDisplay } from './header';
import { setBasketLocalStorage, getBasketLocalStorage } from './markupPopular';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import sprite from '/img/icons/sprite.svg';
const allList = document.querySelector('.menu-cards');

//  розмітка  картки
function createMarkupAll(arr) {
  return arr
    .map(({ _id, img, name, category, size, popularity, price }) => {
      const updCategory = category.split('_').join(' ');
      return `
   <li  class="product-card" data-id="${_id}">
   <div class="product-cart-container">
   <div class="product-image-container">
      <img class="product-img" src="${img}" alt="${name}" width="140px" height="140px">
      </div>
      </div>
      <div class="card-content">
      <h4 class="product-title">${name}</h4>
      <div class="descr-container">
      <p class="product-description">Category:
      <b>${updCategory}</b>
      </p>
      <p class="product-description">Size:
      <b>${size}</b>
      </p> 
      <p class="product-description">Popularity: 
      <b>${popularity}</b>
      </p>
     </div>
      <div class="price-info">
      <p class="product-price">&#36;${price}
      </p>
      
      <button class="product-add-btn unused" type="button">

      <svg class="cart-icon-check is-hidden unused">
      <use class="unused" href="${sprite}#icon-check" width="18" hight="18"></use>  
      </svg>

      <svg class="cart-icon unused">
      <use class="unused" href="${sprite}#icon-shop" width="18" hight="18"></use>
      </svg>

      </button>
      </div>
      </div>
    </li>
        `;
    })
    .join('');
}
// додавання в кошик

allList.addEventListener('click', handlerClick);

function handlerClick(event) {
  const targetButton = event.target.closest('.product-add-btn');
  if (!targetButton) return;
  const card = event.target.closest('.product-card');
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
  const check = targetButton.querySelector('.cart-icon-check');
  const shop = targetButton.querySelector('.cart-icon');
  shop.classList.add('is-hidden');
  check.classList.remove('is-hidden');
  basket.push(id);
  setBasketLocalStorage(basket);
  updateItemCountDisplay();
}

export { createMarkupAll, allList };
