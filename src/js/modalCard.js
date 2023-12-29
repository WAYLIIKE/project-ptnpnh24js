import { getProductByID } from './fetchAPI';
import sprite from '/img/icons/sprite.svg';
import { getBasketLocalStorage, setBasketLocalStorage } from './markupPopular';
import { updateItemCountDisplay } from './header';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// Отримуємо всі елементи з класом "product-card"
const productCards = document.querySelectorAll('.product-card');
// Функція для відкриття модального вікна з даними продукту
function openModalWithData(object) {
  const { _id, img, name, category, size, popularity, desc, price } = object;
  const updCategory = category.split('_').join(' ');
  const modalContent = `
    <div class="modal-box"  data-id='${_id}'>
    <div class="card-info">
    <div class="img-box">
      <img class="card-image" src="${img}" alt="${name}" width="160px" height="160px">
      </div>
      <div class="modal-tablet ">
      <h4 class="card-modal-name">${name}</h4>
      <div class="card-modal-data">
      <p class="info-modal-item">Category: <b>${updCategory}</b></p>
      <p class="info-modal-item">Size: <b>${size}</b></p>
       </div>
      <p class="info-modal-item">Popularity: <b>${popularity}</b></p>
      <p class="modal-desc">${desc}</p>
       </div>
       </div>
       <div class="modal-price-block" >
      <p class="modal-price">$${price}</p>
      <button type="button" class="modal-btn">
        Add to
        <svg  width="18" height="18">
          <use href="${sprite}#icon-shop"></use>
        </svg>
      </button>
      </div>
      <button class="button-icon-close" type="button">
        <svg class="modal-close">
          <use href="${sprite}#icon-close"></use>
        </svg>
    </div>
    </div>
  `;
  // Отримуємо модальне вікно та його вміст
  const modal = document.getElementById('modal');
  const modalContentElement = modal.querySelector('.modal-content');
  // Встановлюємо вміст модального вікна
  modalContentElement.innerHTML = modalContent;
  // Показуємо модальне вікно
  modal.style.display = 'block';
}
// Обробник події кліку на картці продукту
productCards.forEach(card => {
  card.addEventListener('click', async function () {
    const productId = card.getAttribute('data-id');

    try {
      // Отримуємо дані про продукт і відображаємо модальне вікно
      const productData = await getProductByID(productId);
      openModalWithData(productData);
    } catch (error) {
      console.error(error);
      // Обробка помилок
    }
  });
});
// Обробник події кліку на кнопці закриття модального вікна
const modal = document.getElementById('modal');
modal.addEventListener('click', function (event) {
  if (event.target.classList.contains('modal-close')) {
    modal.style.display = 'none'; // Ховаємо модальне вікно при кліку на кнопку закриття
  }
});

modal.addEventListener('click', onClickModal);
function onClickModal(event) {
  const targetButton = event.target.closest('.modal-btn');
  if (!targetButton) return;
  const productId = event.target.closest('.modal-box').getAttribute('data-id');
  const basket = getBasketLocalStorage();
  if (basket.includes(productId)) {
    iziToast.warning({
      title: 'Warning',
      message: 'You`ve already add this product to basket!',
      position: 'topRight',
    });
    return;
  }
  basket.push(productId);
  setBasketLocalStorage(basket);
  updateItemCountDisplay();
}

export { openModalWithData };
