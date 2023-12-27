import { getProductByID } from './fetchAPI';
import axios from 'axios';

// Отримуємо всі елементи з класом "product-card"
const productCards = document.querySelectorAll('.product-card');
// Функція для відкриття модального вікна з даними продукту
function openModalWithData(obj) {
  const { _id, img, name, category, size, popularity, desc, price } = obj;
  const modalContent = `
    <div class="modal-card-box" data-id='${_id}'>
      <img class="car-image" src="${img}" alt="${name}" width="160px" height="160px">
      <h4 class="popular-name">${name}</h4>
      <p class="info-popular-item">Category: <b>${category}</b></p>
      <p class="info-popular-item">Size: <b>${size}</b></p>
      <p class="info-popular-item">Popularity: <b>${popularity}</b></p>
      <p>${desc}</p>
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
      console.log(productData);
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
