////////////////////////////////////////////////////////////////////////////

// COUNT OF BASKET //
import {
  // addItemButton,
  // removeItemButton,
  updateItemCountDisplay,
  // addItemToLocalArray,
  // removeItemFromLocalArray,
} from './header';

// addItemButton.addEventListener('click', function () {
//   addItemToLocalArray(Math.random());
// });
// removeItemButton.addEventListener('click', function () {
//   removeItemFromLocalArray(0);
// });
updateItemCountDisplay();

////////////////////////////////////////////////////////////////////////////

// SUBSCRIPTION SCRIPT

import { formFooter, subscriptionSubmit } from './footer';

formFooter.addEventListener('submit', subscriptionSubmit);

////////////////////////////////////////////////////////////////////////////

// POPULAR DIV SCRIPT

import {
  popularList,
  onClick,
  getDataAllPopular,
  createMarkUpPopular,
} from './markupPopular';

import { openModalWithData } from './modalCard';
import { getProductByID } from './fetchAPI';

popularList.addEventListener('click', async function (event) {
  if (event.target.classList.contains('unused')) {
    return;
  }
  const productId = event.target
    .closest('.popular-item')
    .getAttribute('data-id');
  try {
    // Отримуємо дані про продукт і відображаємо модальне вікно
    const productData = await getProductByID(productId);
    openModalWithData(productData);
  } catch (error) {
    console.error(error);
    // Обробка помилок
  }
});

getDataAllPopular()
  .then(createMarkUpPopular)
  .catch(error => {
    console.log(error);
  });

popularList.addEventListener('click', onClick);

////////////////////////////////////////////////////////////////////////////

// DISCOUNT DIV SCRIPT

import { productsApi, container } from './markupDiscount';

productsApi();

container.addEventListener('click', async function (event) {
  if (event.target.classList.contains('unused')) {
    return;
  }
  const productId = event.target
    .closest('.discount-product')
    .getAttribute('data-id');
  try {
    // Отримуємо дані про продукт і відображаємо модальне вікно
    const productData = await getProductByID(productId);
    openModalWithData(productData);
  } catch (error) {
    console.error(error);
    // Обробка помилок
  }
});
