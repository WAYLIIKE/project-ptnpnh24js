import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { openwindow } from './modalSubscription';
import { toggleModal } from './modalErrorSubscription';
const formFooter = document.querySelector('.subscribe-form');
const url = 'https://food-boutique.b.goit.study/api/subscription';

async function subscriptionSubmit(event) {
  event.preventDefault();
  if (event.currentTarget.userAddress.value === '') {
    iziToast.warning({
      title: 'Caution',
      message: 'Please enter email!',
      position: 'topRight',
    });
    return;
  }
  try {
    const resp = await axios.post(url, {
      email: event.currentTarget.userAddress.value,
    });
    if (resp.status === 201) {
      openwindow();
    }
  } catch (error) {
    if (error.response.status === 409) {
      toggleModal();
    } else
      iziToast.warning({
        title: 'Caution',
        message: error.message,
        position: 'topRight',
      });
  }
}

export { formFooter, subscriptionSubmit };
