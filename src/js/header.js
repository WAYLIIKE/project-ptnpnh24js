const addItemButton = document.querySelector('#start');
const removeItemButton = document.querySelector('#end');
const itemCountDisplay = document.querySelector('#cart-counter');
function addItemToLocalArray(item) {
  let storedArray = localStorage.getItem('shop');

  if (!storedArray) {
    storedArray = [];
  } else {
    storedArray = JSON.parse(storedArray);
  }
  storedArray.push(item);
  localStorage.setItem('shop', JSON.stringify(storedArray));
  updateItemCountDisplay();
}

function removeItemFromLocalArray(index) {
  let storedArray = localStorage.getItem('shop');
  if (storedArray) {
    storedArray = JSON.parse(storedArray);
    if (index >= 0 && index < storedArray.length) {
      storedArray.splice(index, 1);
      localStorage.setItem('shop', JSON.stringify(storedArray));
      updateItemCountDisplay();
    }
  }
}
function getItemCountFromLocalArray() {
  let storedArray = localStorage.getItem('shop');
  if (storedArray) {
    storedArray = JSON.parse(storedArray);
    return storedArray.length;
  }
  return 0;
}
function updateItemCountDisplay() {
  itemCountDisplay.textContent = getItemCountFromLocalArray();
}
addItemButton.addEventListener('click', function () {
  addItemToLocalArray(Math.random());
});
removeItemButton.addEventListener('click', function () {
  removeItemFromLocalArray(0);
});
updateItemCountDisplay();

export { addItemButton, removeItemButton, updateItemCountDisplay };
