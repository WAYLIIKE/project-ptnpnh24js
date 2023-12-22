import { getAllPopular } from './fetchAPI';

const popularList = document.querySelector('.popular-list');
// const popularBtn = document.querySelector('.popularbtn-basket');
// console.log(popularBtn);
const PRODUCT_KEY = 'basket';
const basketArr = JSON.parse(localStorage.getItem(PRODUCT_KEY)) ?? [];

async function getDataAllPopular() {
  try {
    const result = await getAllPopular();
    return result;
  } catch (error) {
    console.log(error);
  }
}
console.log(getDataAllPopular());

getDataAllPopular()
  .then(createMarkUpPopular)
  .catch(error => {
    console.log(error);
  });

function createMarkUpPopular(arr) {
  const markUp = arr.map(({ id, img, name, category, size, popularity }) => {
    return `<li class="popular-item" data-id='${id}'>
    <div class="popular-containar">
    <div class="popular-image-container">
    <img class="popular-image" src="${img}" alt="${name}" width="56px" height="56px">
    </div>
    <div class="info-popular-card">
    <h4 class="popular-name">${name}</h4>
    <p class="info-popular-item">
    <b>Category: ${category}</b></p>
    <p class="info-popular-item">
    <b>Size: ${size}</b></p>
    <p class="info-popular-item">
    <b>Popularity:${popularity}</b></p>
    </div>
    <button class="popularbtn-basket" type="button">Візок</button>
    </div>
    </li>`;
  });
  popularList.insertAdjacentHTML('beforeend', markUp.join(''));
}

popularList.addEventListener('click', onClick);
function onClick(event) {
  console.log(event.target);
  if (event.target.classList.contains('.popularbtn-basket')) {
    const product = findProduct(event.target);
    basketArr.push(product);
    localStorage.setItem(PRODUCT_KEY, JSON.stringify(basketArr));
  }
}
function findProduct(element) {
  const productId = Number(element.closest('.popular-item')).dataset.id;
  return Array.find(({ id }) => id === productId);
}
console.log(onClick());
