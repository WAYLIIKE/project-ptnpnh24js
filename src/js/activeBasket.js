const refs = {
  listInBasket: document.querySelector('.list-in-basket'),
  totalPriceElement: document.querySelector('.total-price'),
  formInput: document.querySelector('.form-input'),
  deleteAllButton: document.querySelector('.delete-button'),
  deleteElement: document.querySelectorAll('.delete-elem-button'),
  cartHeader: document.querySelector('.cart-header'),
  cardContainer: document.querySelector('.card-container'),
  btnMinus: document.querySelector('.btn-minus'),
  btnPlus: document.querySelector('.btn-plus'),
  counter: document.querySelector('.counter'),
};

const {
  listInBasket,
  totalPriceElement,
  formInput,
  deleteAllButton,
  deleteElement,
  cartHeader,
  cardContainer,
  btnMinus,
  btnPlus,
  counter,
} = refs;

const storedProducts = JSON.parse(localStorage.getItem('products')) || {};
const totalAmountOfElements = Object.keys(storedProducts).length;

deleteAllButton.addEventListener('click', deleteList);
deleteElement.forEach(button => {
  button.addEventListener('click', deleteElementHandle);
});

function deleteList() {
  cartHeader.textContent = 'CART (0)';
  totalPriceElement.textContent = '$0,00';
  listInBasket.innerHTML = '';
  localStorage.clear();
}

function deleteElementHandle(event) {
  console.log('check');
  const deleteButton = event.currentTarget;
  const productId = deleteButton.dataset.id;

  if (storedProducts[productId]) {
    delete storedProducts[id];
  }

  const listItem = deleteButton.closest('.card-container');
  listItem.remove();

  updateCartHeader();
  updateTotalPrice();
}

//!get Product By ID
const id = '640c2dd963a319ea671e3860';
async function getProductByID(id) {
  const BASE_URL = 'https://food-boutique.b.goit.study/api/products/';
  try {
    const result = await axios.get(`${BASE_URL}${id}`);
    return result.data;
  } catch (error) {
    return error.message;
  }
}

async function logProductsApi() {
  try {
    const result = await getProductByID(id);
    console.log(result);

    if (result) {
      addToLocalStorage(id, result);

      // Clear the existing content before updating
      listInBasket.innerHTML = '';

      // Update the storedProducts with the latest count
      Object.values(storedProducts).forEach(product => {
        const existingListItem = listInBasket.querySelector(
          `[data-id="${product._id}"]`
        );

        if (existingListItem) {
          // If the product is already in the list, update the counter
          const counterSpan = existingListItem.querySelector('.counter');
          if (counterSpan) {
            counterSpan.textContent = product.counter || 1;
          }
        } else {
          // If the product is not in the list, add a new entry
          const newCard = createProductCard(product);
          listInBasket.insertAdjacentHTML('beforeend', newCard);

          // Attach the event listener to the delete button of the newly created card
          const deleteButton = listInBasket.querySelector(
            `[data-id="${product._id}"] .delete-elem-button`
          );
          if (deleteButton) {
            deleteButton.addEventListener('click', deleteElementHandle);
          }
        }
      });

      updateCartHeader();
      updateTotalPrice();
    } else {
      console.log('Product not found');
    }
  } catch (error) {
    console.log(error);
  }
}

function addToLocalStorage(id, product) {
  if (storedProducts[id]) {
    storedProducts[id].counter = (storedProducts[id].counter || 1) + 1;
  } else {
    product.counter = 1;
    storedProducts[id] = product;
  }
  localStorage.setItem('products', JSON.stringify(storedProducts));
}

function createProductCard(product) {
  return `
  <li class="card-container">
  <div class="image-container">
    <img
      class="card-image"
      src="${product.img}"
      alt="${product.name}"
    />
  </div>
  <div class="card-description">
    <div class="description-container">
      <div class="list-title-container">
        <h1 class="card-title">${product.name}</h1>
        <button class="delete-elem-button" data-id="${product._id}">
          <svg class="delete-elem-icon">
            <use href="../img/icons/sprite.svg#icon-close"></use>
          </svg>
        </button>
      </div>

      <ul class="category-container">
        <li>
          <p class="details-text">
            <span class="detail">Category:</span
            ><span>${product.category}</span>
          </p>
        </li>
        <li>
          <p class="details-text">
            <span class="detail">Size:</span>${product.size}
          </p>
        </li>
      </ul>
    </div>
    <div class="price-container">
      <span class="card-price">$${product.price}</span>
      <div class="counter-container">
      <button class="btn-minus">
      <svg class="counter-icon">
            <use href="../img/icons/sprite.svg#icon-down-categories"></use>
          </svg>
      </button>
          <span class="counter">${product.counter || 1}</span>
          <button class="btn-plus">
          <svg class="counter-icon">
            <use href="../img/icons/sprite.svg#icon-close"></use>
          </svg>
          </button>
      </div>
    </div>
  </div>
</li>
  `;
}

function updateCartHeader() {
  const updatedTotalAmount = Object.keys(storedProducts).length;
  cartHeader.textContent = `CART (${updatedTotalAmount})`;
}

function updateTotalPrice() {
  const totalPrice = Object.values(storedProducts).reduce(
    (acc, product) => acc + product.price * (product.counter || 1),
    0
  );
  totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
}

logProductsApi();
logProductsApi();
logProductsApi();
