import { getProductByID } from './fetchAPI';
import axios from 'axios';
import sprite from '/img/icons/sprite.svg';

console.log(getProductByID('640c2dd963a319ea671e383b'));

// Отримуємо всі елементи з класом "product-card"
const productCards = document.querySelectorAll('.product-card');
// Функція для відкриття модального вікна з даними продукту
function openModalWithData(object) {
  const { _id, img, name, category, size, popularity, desc, price } = object;
  const modalContent = `
    <div class="modal-box"  data-id='${_id}'>
    <div class="card-info">
    <div class="img-box">
      <img class="card-image" src="${img}" alt="${name}" width="160px" height="160px">
      </div>
      <div class="modal-tablet ">
      <h4 class="card-modal-name">${name}</h4>
      <div class="card-modal-data">
      <p class="info-modal-item">Category: <b>${category}</b></p>
      <p class="info-modal-item">Size: <b>${size}</b></p>
       </div>
      <p class="info-modal-item">Popularity: <b>${popularity}</b></p>
      <p class="modal-desc">${desc}</p>
       </div>
       </div>
       <div class="modal-price-block" >
      <p class="modal-price">${price}</p>
      <button type="button" class="modal-btn">
        Add to
        <svg  width="18" height="18">
          <use href="${sprite}#icon-shop"></use>
        </svg>
      </button>
      </div>
      <button class="button-icon-close" type="button">
        <svg class="modal-close">
          <use href="./img/icons/sprite.svg#icon-close"></use>
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
