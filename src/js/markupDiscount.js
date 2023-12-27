import { getAllDiscount } from "./fetchAPI"
const iconShop = '/img/icons/sprite.svg#icon-shop';
const iconCheck = '/img/icons/sprite.svg#icon-check';

const container = document.querySelector('.discount-list')


async function productsApi() {
    try {
        const result = await getAllDiscount()
        const randomProducts = getRandomProducts(result, 2);
        
        // console.log(result);
       container.insertAdjacentHTML("beforeend", createMarcupDiscount(randomProducts));
    } catch (error) {
        console.log(error.message);
    }
}

function getRandomProducts(arr, number) {
    const random = arr.sort(() => 0.5 - Math.random());
    return random.slice(0, number);
}


productsApi()




function createMarcupDiscount(arr) {
    return arr.map(({ name, img, price, _id }) => `
    <li data-id="${_id}" class="discount-product">
    <div class="discount-image">
        <svg class="discount-list-item" width="60" heigh="60">
        <use href="./img/icons/sprite.svg#icon-discount"></use>
        </svg>
        <img src="${img}" alt="name" class="discount-image-cart"/>
    </div>
    <div class="discount-info">
        <p class="discount-title-name">${name}</p>
        <div class="discount-info-cart">
            <p class="discount-price">$${price}</p>
            <button class="discount-btn" type="button">

            <svg class = "check-icon  is-hidden"  width="18" height="18">
            <use href="${iconCheck}"></use></svg>
   
            <svg class="shop-icon" width="18" height="18" >
            <use href="${iconShop}"></use></svg>

        </button>
        </div>
    </div>
    </li>`
    ).join("")
};

container.addEventListener('click', hendleClick)

function hendleClick(event) {
    if (event.target === event.currentTarget) {
        return;
    }
    const currentProduct = event.target.closest('.discount-product');
    console.log("currentProduct", currentProduct);

    const id = currentProduct.dataset.id;
    console.log("id", id);

    const targetBtn = event.target.closest('.discount-btn');
    console.log("target", targetBtn);

    if (!targetBtn) {
        return;
    }; 
    const basket = LocalStorageGetBask();

    if (basket.includes(id)) {
    return;
  }

    const checkIcon = targetBtn.querySelector('.check-icon');
    const shopIcon = targetBtn.querySelector('.shop-icon');

    shopIcon.classList.add('is-hidden');
    checkIcon.classList.remove('is-hidden');
    basket.push(id);
    LocalStorageSetBask(basket);
}

function LocalStorageGetBask() {
  const cardsData = localStorage.getItem('basket');
  return cardsData ? JSON.parse(cardsData) : [];
}
function LocalStorageSetBask(basket) {
  localStorage.setItem('basket', JSON.stringify(basket));
}



export { productsApi, createMarcupDiscount, hendleClick, LocalStorageGetBask, LocalStorageSetBask };