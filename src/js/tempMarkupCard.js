export function createMarkup(searchData) {
  return searchData
    .map(({ img, name, category, size, popularity, price }) => `
      <img class="menu-image" src="${img}" alt="image" width="200" loading="lazy" />
      <ul class="menu-info">
        <li class="menu-info-item">
          ${name}
        </li>
        <li class="menu-info-item">
          ${category.replace(/_/g, ' ')}
        </li>
        <li class="menu-info-item">
          ${size}
        </li>
        <li class="menu-info-item">
          ${popularity}
        </li>
        <li class="menu-info-item">
          ${price}
        </li>
      </ul>
      <button class="cart-button" type="submit">Cart</button>
    `)
    .join('');
}
