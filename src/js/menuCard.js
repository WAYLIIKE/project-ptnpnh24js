import { getAllProducts } from '../js/fetchAPI.js';
import { createMarkupAll } from './markupCard.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export {
  searchForm,
  productsListContainer,
  categorySelect,
  onCategoryChange,
  onSearch,
};

const searchForm = document.querySelector('.search-form');
const productsListContainer = document.querySelector('.menu-cards');
const categorySelect = document.getElementById('categoryQuery');

categorySelect.addEventListener('change', onCategoryChange);
searchForm.addEventListener('submit', onSearch);

let filters = {
  keyword: '',
  category: null,
  page: 1,
  limit: 9,
};

localStorage.removeItem('filters');

function onSearch(event) {
  event.preventDefault();
  const selectedCategory = categorySelect.value;
  console.log(selectedCategory);
  let searchQuery = event.currentTarget.elements.searchQuery.value
    .trim()
    .toLowerCase();
  filters.keyword = searchQuery || '';
  if (searchQuery === '' && categorySelect.value !== '') {
    return onCategoryChange();
  } else if (searchQuery === '') {
    filters = {
      keyword: '',
      limit: 9,
    };
    return onCategoryChange();
  }
  onCategoryChange();
}

function onCategoryChange() {
  const selectedCategory = categorySelect.value;

  if (selectedCategory === 'all') {
    filters.category = null;
  } else {
    filters.category = selectedCategory;
  }
  filters.page = 1;
  localStorage.setItem('filters', JSON.stringify(filters));
  createFilteredMenu();
}

function createFilteredMenu() {
  const storedFilters = localStorage.getItem('filters');
  if (storedFilters) {
    filters = JSON.parse(storedFilters);
  }
  console.log(filters);

  getAllProducts(filters)
    .then(data => {
      const productArray = Array.isArray(data.results) ? data.results : [];

      if (productArray.length === 0) {
        productsListContainer.innerHTML = `<div class="empty-search"><h2 class="empty-search-title">Nothing was found for the selected <span class="empty-search-title-word">filters...</span></h2>
        <p class="empty-search-text"> Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you. </p></div>`;
        iziToast.warning({
          title: 'Warning',
          message: 'No products found... Try again',
          position: 'topRight',
        });
        return;
      }
      productsListContainer.innerHTML = createMarkupAll(productArray);
    })
    .catch(error => {
      console.error('Error fetching products:', error);
    });
}
