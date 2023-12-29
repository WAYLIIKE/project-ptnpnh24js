import { getAllCategories } from '../js/fetchAPI.js';
// import SlimSelect from 'slim-select'

// new SlimSelect({
//   select: '#categoryQuery',
//   placeholder: 'Categories',
//   settings: {
//     maxSelected: 1,
//     showSearch: false,
//   }
// });

export async function populateCategories() {
  const categorySelect = document.getElementById('categoryQuery');
  // console.log(categorySelect)
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
      `<option value="all">Show all</option>`;

    categorySelect.insertAdjacentHTML('beforeend', optionsHTML);
    // console.log(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
}

// populateCategories();
