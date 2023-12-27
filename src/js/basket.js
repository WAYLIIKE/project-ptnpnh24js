// COUNT OF BASKET //
import {
  addItemButton,
  removeItemButton,
  updateItemCountDisplay,
  addItemToLocalArray,
  removeItemFromLocalArray,
} from './header';

addItemButton.addEventListener('click', function () {
  addItemToLocalArray(Math.random());
});
removeItemButton.addEventListener('click', function () {
  removeItemFromLocalArray(0);
});
updateItemCountDisplay();

////////////////////////////////////////////////////////////////////////////

// MODAL ORDER //

import { modalOrder } from './modalOrder';

modalOrder();

////////////////////////////////////////////////////////////////////////////

// SUBSCRIPTION SCRIPT

import { formFooter, subscriptionSubmit } from './footer';

formFooter.addEventListener('submit', subscriptionSubmit);

////////////////////////////////////////////////////////////////////////////
