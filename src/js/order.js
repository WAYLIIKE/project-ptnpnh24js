import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { modalOrder } from './modalOrder';
const formOrder = document.querySelector('.form-container');
const url = 'https://food-boutique.b.goit.study/api/orders';

async function orderSubmit(event) {
  console.log('Submit');
  event.preventDefault();
  if (event.currentTarget.email.value === '') {
    iziToast.warning({
      title: 'Caution',
      message: 'Please enter email!',
      position: 'topRight',
    });
    return;
  }
  try {
    const resp = await axios.post(url, {
      email: event.currentTarget.email.value,
      products: [
        {
          productId: '640c2dd963a319ea671e383b',
          amount: 1,
        },
      ],
    });
    if (resp.status === 201) {
      modalOrder();
      console.log('Submit in');
    }
  } catch (error) {
    iziToast.warning({
      title: 'Caution',
      message: error.message,
      position: 'topRight',
    });
  }
}

export { formOrder, orderSubmit };
