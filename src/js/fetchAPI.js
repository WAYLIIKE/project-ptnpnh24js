import axios from 'axios';
export {
  getAllProducts,
  getProductByID,
  getAllCategories,
  getAllPopular,
  getAllDiscount,
};

async function getAllProducts(obj) {
  const BASE_URL = 'https://food-boutique.b.goit.study/api/products';
  const queryParams = new URLSearchParams(obj);
  try {
    const result = await axios.get(`${BASE_URL}?${queryParams}`);
    return result.data;
  } catch (error) {
    return error.message;
  }
}

async function getAllCategories() {
  const BASE_URL = 'https://food-boutique.b.goit.study/api/products/categories';
  try {
    const result = await axios.get(`${BASE_URL}`);
    return result.data;
  } catch (error) {
    return error.message;
  }
}

async function getAllPopular() {
  const BASE_URL = 'https://food-boutique.b.goit.study/api/products/popular';
  try {
    const result = await axios.get(`${BASE_URL}`);
    return result.data;
  } catch (error) {
    return error.message;
  }
}

async function getAllDiscount() {
  const BASE_URL = 'https://food-boutique.b.goit.study/api/products/discount';
  try {
    const result = await axios.get(`${BASE_URL}`);
    return result.data;
  } catch (error) {
    return error.message;
  }
}

async function getProductByID(id) {
  const BASE_URL = 'https://food-boutique.b.goit.study/api/products/';
  try {
    const result = await axios.get(`${BASE_URL}${id}`);
    console.log(result);
  } catch (error) {
    return error.message;
  }
}
