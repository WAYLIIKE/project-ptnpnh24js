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
} from './header';

addItemButton.addEventListener('click', function () {
  addItemToLocalArray(Math.random());
});
removeItemButton.addEventListener('click', function () {
  removeItemFromLocalArray(0);
});
updateItemCountDisplay();

////////////////////////////////////////////////////////////////////////////
