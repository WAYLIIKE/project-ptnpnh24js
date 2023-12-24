import { getAllProducts } from "../js/fetchAPI.js";
import { populateCategories} from "../js/filter.js"
import { createMarkup } from "../js/tempMarkupCard.js";

const searchForm = document.querySelector('.search-form');
const productsListContainer = document.querySelector('.menu-cards');
const categorySelect = document.getElementById('categoryQuery');

categorySelect.addEventListener('change', onCategoryChange);
searchForm.addEventListener('submit', onSearch);

let filters = {
  keyword: null,
  category: null,
  page: 1,
  limit: 9,
};

localStorage.removeItem('filters');


getAllProducts()
  .then((data) => {
    const productArray = Array.isArray(data.results) ? data.results : [];
      
    productsListContainer.innerHTML = createMarkup(productArray);
  })
  .catch((error) => {
    console.error('Error fetching products:', error);
  })
  .finally(() => searchForm.reset());


function onSearch(event) {
  event.preventDefault();
  const searchQuery = event.currentTarget.elements.searchQuery.value
    .trim()
    .toLowerCase()
    // .split(' ')
    // .join('+');
  filters.keyword = searchQuery || null;

  if (searchQuery === '') {
    alert ("Please fill in the search field.");
  } 
  onCategoryChange()
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

  productsListContainer.innerHTML = '';

  getAllProducts(filters)
    .then((data) => {
      const productArray = Array.isArray(data.results) ? data.results : [];
      
      if (productArray.length === 0) {
        alert("No products found.");
      } else {
        productsListContainer.innerHTML = createMarkup(productArray);
      }
    })
    
    .catch((error) => {
      console.error('Error fetching products:', error);
    })
}


populateCategories();
