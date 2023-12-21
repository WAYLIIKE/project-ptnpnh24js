import { getAllPopular } from './fetchAPI';

const popularList = document.querySelector('.popular-list');

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
  const markUp = arr.map(({ img, name, category, size, popularity }) => {
    return `<li class="popular-item">
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
