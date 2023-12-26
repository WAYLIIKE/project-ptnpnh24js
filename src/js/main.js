// MODAL SUBSCRIPTION //
import {
  openwindow,
  closemodal,
  closeModalOnEsc,
  openButton,
  closeButton,
} from './modalSubscription';

document.addEventListener('keydown', closeModalOnEsc);
openButton.addEventListener('click', openwindow);
closeButton.addEventListener('click', closemodal);

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

// MODAL ERROR SUBSCRIPTION //

import { modalErrorSubscription } from './modalErrorSubscription';

modalErrorSubscription();

////////////////////////////////////////////////////////////////////////////

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
