////////////////////////////////////////////////////////////////////////////

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

getDataAllPopular()
  .then(createMarkUpPopular)
  .catch(error => {
    console.log(error);
  });

popularList.addEventListener('click', onClick);

////////////////////////////////////////////////////////////////////////////
