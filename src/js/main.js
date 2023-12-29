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

////////////////////////////////////////////////////////////////////////////

// MAIN DIV LOGIC
import { populateCategories } from './filter';
import { allList, createMarkupAll } from './markupCard';
import { getAllProducts } from './fetchAPI';
import { productsListContainer } from './menuCard';

allList.addEventListener('click', async function (event) {
  if (
    event.target.classList.contains('unused') ||
    event.target.classList.contains('menu-cards')
  ) {
    return;
  }
  const productId = event.target
    .closest('.product-card')
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

getAllProducts({
  page: 1,
  limit: 9,
})
  .then(data => {
    const productArray = Array.isArray(data.results) ? data.results : [];

    productsListContainer.innerHTML = createMarkupAll(productArray);
  })
  .catch(error => {
    console.error('Error fetching products:', error);
  })
  .finally(() => searchForm.reset());

populateCategories();
