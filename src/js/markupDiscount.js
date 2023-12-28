import { getAllDiscount } from './fetchAPI';
import sprite from '/img/icons/sprite.svg';
import { updateItemCountDisplay } from './header';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const container = document.querySelector('.discount-list');

async function productsApi() {
  try {
    const result = await getAllDiscount();
    const randomProducts = getRandomProducts(result, 2);
    container.insertAdjacentHTML(
      'beforeend',
      createMarcupDiscount(randomProducts)
    );
  } catch (error) {
    console.log(error.message);
  }
}

function getRandomProducts(arr, number) {
  const random = arr.sort(() => 0.5 - Math.random());
  return random.slice(0, number);
}

function createMarcupDiscount(arr) {
  return arr
    .map(
      ({ name, img, price, _id }) => `
    <li data-id="${_id}" class="discount-product">
    <div class="discount-image">
        <svg class="discount-list-item" width="60" heigh="60">
        <use href="${sprite}#icon-discount"></use>
        </svg>
        <img src="${img}" alt="name" class="discount-image-cart"/>
    </div>
    <div class="discount-info">
        <p class="discount-title-name">${name}</p>
        <div class="discount-info-cart">
            <p class="discount-price">$${price}</p>
            <button class="discount-btn unused" type="button">

            <svg class = "icon-check is-hidden unused"  width="12" height="12">
            <use class="unused" href="${sprite}#icon-check"></use></svg>

            <svg class="icon-shop unused" width="12" height="12">
            <use class="unused" href="${sprite}#icon-shop"></use></svg>

        </button>
        </div>
    </div>
    </li>`
    )
    .join('');
}

container.addEventListener('click', hendleClick);

function hendleClick(event) {
  if (event.target === event.currentTarget) {
    return;
  }
  const currentProduct = event.target.closest('.discount-product');
  const id = currentProduct.dataset.id;
  const targetBtn = event.target.closest('.discount-btn');
  if (!targetBtn) {
    return;
  }
  const basket = LocalStorageGetBask();

  if (basket.includes(id)) {
    iziToast.warning({
      title: 'Warning',
      message: 'You`ve already add this product to basket!',
      position: 'topRight',
    });
    return;
  }

  const checkIcon = targetBtn.querySelector('.icon-check');
  const shopIcon = targetBtn.querySelector('.icon-shop');

  shopIcon.classList.add('is-hidden');
  checkIcon.classList.remove('is-hidden');
  basket.push(id);
  LocalStorageSetBask(basket);
  updateItemCountDisplay();
}

function LocalStorageGetBask() {
  const cardsData = localStorage.getItem('basket');
  return cardsData ? JSON.parse(cardsData) : [];
}
function LocalStorageSetBask(basket) {
  localStorage.setItem('basket', JSON.stringify(basket));
}

export { productsApi, container };
