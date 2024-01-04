import { getProductByID } from './fetchAPI';
import { updateItemCountDisplay } from './header';
import sprite from '/img/icons/sprite.svg';

class ShoppingCart {
  constructor() {
    this.listInBasket = document.querySelector('.list-in-basket');
    this.totalPriceElement = document.querySelector('.total-price');
    this.deleteAllButton = document.querySelector('.delete-button');
    this.cartHeader = document.querySelector('.cart-header');

    this.storedProducts = JSON.parse(localStorage.getItem('basket')) || [];
    this.totalAmountOfElements = this.storedProducts.length;

    //EventListeners
    this.deleteAllButton.addEventListener('click', this.deleteList.bind(this));

    this.listInBasket.addEventListener(
      'click',
      this.handleDeleteClick.bind(this)
    );
    this.listInBasket.addEventListener('click', async event => {
      const decreaseButton = event.target.closest('.btn-minus');
      if (decreaseButton) {
        const cardContainer = decreaseButton.closest('.card-container');
        if (cardContainer) {
          const productId = cardContainer.getAttribute('data-id');
          await this.decreaseProductQuantity(productId);
        }
      }
    });

    this.listInBasket.addEventListener('click', async event => {
      const increaseButton = event.target.closest('.btn-plus');
      if (increaseButton) {
        const cardContainer = increaseButton.closest('.card-container');
        if (cardContainer) {
          const productId = cardContainer.getAttribute('data-id');
          await this.increaseProductQuantity(productId);
        }
      }
    });
  }

  handleDeleteClick(event) {
    const deleteButton = event.target.closest('.delete-elem-button');

    if (deleteButton) {
      const productId = deleteButton
        .closest('.card-container')
        .getAttribute('data-id');

      if (this.storedProducts.length === 1) {
        this.deleteList();
        window.location.href = '../index.html';
        return;
      }

      const productIndex = this.storedProducts.findIndex(
        product => product === productId
      );

      if (productIndex !== -1) {
        this.storedProducts.splice(productIndex, 1);

        localStorage.setItem('basket', JSON.stringify(this.storedProducts));

        this.totalAmountOfElements = this.storedProducts.length;
      }

      const listItem = deleteButton.closest('.card-container');
      if (listItem && listItem.parentNode) {
        listItem.parentNode.removeChild(listItem);
      }

      this.updateCartHeader();
      this.updateTotalPrice();
      updateItemCountDisplay();
    }
  }

  deleteList() {
    this.cartHeader.textContent = 'CART (0)';
    this.totalPriceElement.textContent = '$0,00';
    this.listInBasket.innerHTML = '';
    localStorage.clear();
    updateItemCountDisplay();
    window.location.href = '../index.html';
  }

  async logProductsApi() {
    try {
      for (const id of this.storedProducts) {
        const result = await getProductByID(id);

        if (result) {
          result.quantity = 1;
          const existingListItem = this.listInBasket.querySelector(
            `[data-id="${result._id}"]`
          );

          if (existingListItem) {
            const counterSpan = existingListItem.querySelector('.counter');
            if (counterSpan) {
              counterSpan.textContent = result.quantity;
            }
          } else {
            const newCard = this.createProductCard(result);
            this.listInBasket.insertAdjacentHTML('beforeend', newCard);
          }
        } else {
          console.log(`Product with ID ${id} not found`);
        }
      }

      this.updateCartHeader();
      await this.updateTotalPrice();
    } catch (error) {
      console.log(error);
    }
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
                  <use href="${sprite}#icon-close"></use>
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
              <span class="counter">${product.quantity || 1}</span>
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
    this.cartHeader.textContent = `CART (${this.totalAmountOfElements})`;
  }

  async updateTotalPrice() {
    let totalPrice = 0;

    for (const id of this.storedProducts) {
      const product = await getProductByID(id);

      if (product) {
        totalPrice += product.price * (product.quantity || 1);
      }
    }

    this.totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
  }
}

export { ShoppingCart };
