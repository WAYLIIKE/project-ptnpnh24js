import { getAllProducts } from './fetchAPI';

const allList = document.querySelector('.js-list');

async function getDataAllProducts() {
  try {
    const result = await getAllProducts();
    return result;
  } catch (error) {
    console.log(error);
  }
}

getDataAllProducts()
  .then(createMarkupAll)
  .catch(error => {
    console.log(error);
  });
// шаблон картки 1

// function createMarkupAll(arr) {
//   console.log(arr);
//   const markupAll = arr.map(
//     ({ _id, img, name, category, size, popularity }) => {
//       return `
//         <li  class="product-card js-product" data-id="${_id}">
//           <img class="product-img" src="${img}" alt="${name}" width="140px" height="140px">
//           <h2 class="product-title">${name}</h2>
//           <p class="product-category">Category:
//            <b>${category}</b>
//            </p>
//            <p class="product-size">Size:
//           <b>${size}</b>
//           </p>
//            <p class="product-popularity">Popularity:
//            <b>${popularity}</b>
//            </p>
//            <p class="product-price">$
//            <b>${price}</b>
//           </p>
//           <button class="product-add-btn type="button"></button>
//          </li> `;
//     }
//   );

//   allList.insertAdjacentHTML('beforeend', markupAll.join(''));
// }
//  шаблон картки 2
allList.insertAdjacentHTML('afterbegin', createMarkupAll());

function createMarkupAll(arr) {
  //   console.log(arr);
  return arr
    .map(
      ({ id, img, name, category, size, popularity }) => `
   <li  class="product-card js-product" data-id="${id}">
      <img class="product-img" src="${img}" alt="${name}" width="140px" height="140px">
      <h2 class="product-title">${name}</h2>
      <p class="product-category">Category:
      <b>${category}</b>
      </p>
      <p class="product-size">Size:
      <b>${size}</b>
      </p>
      <p class="product-popularity">Popularity:
      <b>${popularity}</b>
      </p>
      <p class="product-price">$
      <b>${price}</b>
      </p>
      <button class="product-add-btn type="button"></button>
    </li>
        `
    )
    .join('');
}
