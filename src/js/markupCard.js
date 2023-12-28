import { getAllProducts } from './fetchAPI';
const allList = document.querySelector('.js-list');
async function getDataAllProducts() {
  try {
    const result = await getAllProducts();
    allList.insertAdjacentHTML('beforeend', createMarkupAll(result.results));
  } catch (error) {
    console.log(error);
    return error;
  }
}
getDataAllProducts();

//  розмітка  картки
function createMarkupAll(arr) {
  return arr
    .map(
      ({ _id, img, name, category, size, popularity, price }) => `
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
      <b>${category}</b>
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
      
      <button class="product-add-btn" type="button">
      <svg class="cart-icon">
      <use href="${cartIcon}" width="18" hight="18"></use>
      </svg>

       <svg class="cart-icon-check is-hidden">
      <use href="${cartIconCheck}" width="18" hight="18"></use>  
      </svg>
      </button>
      </div>
      </div>
    </li>
        `
    )
    .join('');
}
// додавання в кошик
const cartIcon = '/img/icons/sprite.svg#icon-shop';
const cartIconCheck = '/img/icons/sprite.svg#icon-check';

allList.addEventListener('click', handlerClick);

function handlerClick(event) {
  const targetButton = event.target.closest('.product-add-btn');
  if (!targetButton) return;
  const card = event.target.closest('.product-card');
  console.log(card);
  const id = card.dataset.id;
  console.log(id);
  const basket = getBasketLocalStorage();

  if (basket.includes(id)) {
    return;
  }
  const check = targetButton.querySelector('.cart-icon-check');
  const shop = targetButton.querySelector('.cart-icon');
  console.log(check);
  console.log(shop);
  shop.classList.add('is-hidden');
  check.classList.remove('is-hidden');
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
