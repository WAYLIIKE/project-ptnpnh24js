import { getAllCategories } from '../js/fetchAPI.js';

export async function populateCategories() {
  const categorySelect = document.getElementById('categoryQuery');
  categorySelect.innerHTML = '';
  try {
    const categories = await getAllCategories();

    const optionsHTML =
      `<option value="" selected hidden>Categories</option>` +
      categories
        .map(
          category =>
            `<option value="${category}">${category.replace(
              /_/g,
              ' '
            )}</option>`
        )
        .join('') +
      `<option value="">Show all</option>`;

    categorySelect.insertAdjacentHTML('beforeend', optionsHTML);
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
}
