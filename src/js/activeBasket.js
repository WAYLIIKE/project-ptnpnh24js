import axios from 'axios';

class ShoppingCart {
  constructor() {
    this.listInBasket = document.querySelector('.list-in-basket');
    this.totalPriceElement = document.querySelector('.total-price');
    this.formInput = document.querySelector('.form-input');
    this.deleteAllButton = document.querySelector('.delete-button');
    this.cartHeader = document.querySelector('.cart-header');
    this.form = document.querySelector('.form-container');
    this.input = document.querySelector('.form-input');

    this.storedProducts = JSON.parse(localStorage.getItem('products')) || {};
    this.totalAmountOfElements = Object.keys(this.storedProducts).length;

    //EventListeners
    this.deleteAllButton.addEventListener('click', this.deleteList.bind(this));

    this.listInBasket.addEventListener(
      'click',
      this.handleDeleteClick.bind(this)
    );
    this.listInBasket.addEventListener('click', event => {
      const decreaseButton = event.target.closest('.btn-minus');
      if (decreaseButton) {
        const cardContainer = decreaseButton.closest('.card-container');
        if (cardContainer) {
          const productId = cardContainer.getAttribute('data-id');
          this.decreaseProductQuantity(productId);
        }
      }
    });

    this.listInBasket.addEventListener('click', event => {
      const increaseButton = event.target.closest('.btn-plus');
      if (increaseButton) {
        const cardContainer = increaseButton.closest('.card-container');
        if (cardContainer) {
          const productId = cardContainer.getAttribute('data-id');
          this.increaseProductQuantity(productId);
        }
      }
    });

    this.form.addEventListener('submit', event => {
      const email = this.input.value;

      const formDataJSON = JSON.stringify(email);

      localStorage.setItem('formData', formDataJSON);
    });
  }

  handleDeleteClick(event) {
    const deleteButton = event.target.closest('.delete-elem-button');

    if (deleteButton) {
      const productId = deleteButton.getAttribute('data-id');

      delete this.storedProducts[productId];

      const listItem = deleteButton.closest('.card-container');
      if (listItem && listItem.parentNode) {
        listItem.parentNode.removeChild(listItem);
      }

      this.updateCartHeader();
      this.updateTotalPrice();

      localStorage.setItem('products', JSON.stringify(this.storedProducts));
    }
  }

  deleteList() {
    this.cartHeader.textContent = 'CART (0)';
    this.totalPriceElement.textContent = '$0,00';
    this.listInBasket.innerHTML = '';
    localStorage.clear();
  }

  async getProductByID(id) {
    const BASE_URL = 'https://food-boutique.b.goit.study/api/products/';
    try {
      const result = await axios.get(`${BASE_URL}${id}`);
      return result.data;
    } catch (error) {
      return error.message;
    }
  }

  async logProductsApi() {
    try {
      const id = '640c2dd963a319ea671e385f';
      const result = await this.getProductByID(id);

      if (result) {
        this.addToLocalStorage(id, result);

        this.listInBasket.innerHTML = '';

        Object.values(this.storedProducts).forEach(product => {
          const existingListItem = this.listInBasket.querySelector(
            `[data-id="${product._id}"]`
          );

          if (existingListItem) {
            const counterSpan = existingListItem.querySelector('.counter');
            if (counterSpan) {
              counterSpan.textContent = product.counter || 1;
            }
          } else {
            const newCard = this.createProductCard(product);
            this.listInBasket.insertAdjacentHTML('beforeend', newCard);

            const deleteButton = this.listInBasket.querySelector(
              `[data-id="${product._id}"] .delete-elem-button`
            );
            if (deleteButton) {
              deleteButton.addEventListener(
                'click',
                this.handleDeleteClick.bind(this)
              );
            }
          }
        });

        this.updateCartHeader();
        this.updateTotalPrice();
      } else {
        console.log('Product not found');
      }
    } catch (error) {
      console.log(error);
    }
  }

  addToLocalStorage(id, product) {
    if (this.storedProducts[id]) {
      this.storedProducts[id].counter =
        (this.storedProducts[id].counter || 1) + 1;
    } else {
      product.counter = 1;
      this.storedProducts[id] = product;
    }
    localStorage.setItem('products', JSON.stringify(this.storedProducts));
  }

  createProductCard(product) {
    return `
      <li class="card-container" data-id="${product._id}">
        <div class="image-container">
          <img class="card-image" src="${product.img}" alt="${product.name}" />
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
                  <span class="detail">Category:</span><span>${
                    product.category
                  }</span>
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

  updateCartHeader() {
    const updatedTotalAmount = Object.keys(this.storedProducts).length;
    this.cartHeader.textContent = `CART (${updatedTotalAmount})`;
  }

  updateTotalPrice() {
    const totalPrice = Object.values(this.storedProducts).reduce(
      (acc, product) => acc + product.price * (product.counter || 1),
      0
    );
    this.totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
  }

  decreaseProductQuantity(productId) {
    if (this.storedProducts[productId]) {
      this.storedProducts[productId].counter = Math.max(
        this.storedProducts[productId].counter - 1,
        1
      );
      this.updateProductQuantity(productId);
      this.updateTotalPrice();
      localStorage.setItem('products', JSON.stringify(this.storedProducts));
    }
  }

  increaseProductQuantity(productId) {
    if (this.storedProducts[productId]) {
      this.storedProducts[productId].counter =
        (this.storedProducts[productId].counter || 1) + 1;
      this.updateProductQuantity(productId);
      this.updateTotalPrice();
      localStorage.setItem('products', JSON.stringify(this.storedProducts));
    }
  }

  updateProductQuantity(productId) {
    const existingListItem = this.listInBasket.querySelector(
      `[data-id="${productId}"]`
    );

    if (existingListItem) {
      const counterSpan = existingListItem.querySelector('.counter');
      if (counterSpan) {
        counterSpan.textContent = this.storedProducts[productId].counter || 1;
      }
    }
  }
}

// const shoppingCart = new ShoppingCart();

// shoppingCart.logProductsApi();

export { ShoppingCart };
