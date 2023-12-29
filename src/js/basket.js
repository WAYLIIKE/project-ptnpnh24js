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

// MODAL ORDER //

import { modalOrder } from './modalOrder';

modalOrder();

////////////////////////////////////////////////////////////////////////////

// SUBSCRIPTION SCRIPT

import { subscriptionSubmit } from './footer';

const formOrder = document.querySelector('.form-button');

formOrder.addEventListener('submit', subscriptionSubmit);

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
