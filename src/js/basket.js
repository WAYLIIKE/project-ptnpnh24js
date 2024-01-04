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

// ORDER SCRIPT //

import { formOrder, orderSubmit } from './order';

formOrder.addEventListener('submit', orderSubmit);

////////////////////////////////////////////////////////////////////////////

// SUBSCRIPTION SCRIPT

import { formFooter, subscriptionSubmit } from './footer';

formFooter.addEventListener('submit', subscriptionSubmit);

////////////////////////////////////////////////////////////////////////////

// MAIN LOGIC OF BASKET

const emptyBasket = document.querySelector('.emptyBasket_section');
const activeBasket = document.querySelector('.active-basket-container');

function isBasketActive() {
  activeBasket.style.display = 'none';
  let storedArray = localStorage.getItem('basket');
  if (storedArray) {
    emptyBasket.style.display = 'none';
    activeBasket.style.display = '';
    storedArray = JSON.parse(storedArray);
  } else {
    emptyBasket.style.display = '';
  }
}

isBasketActive();

import { ShoppingCart } from './activeBasket';

const shoppingCart = new ShoppingCart();

shoppingCart.logProductsApi();
