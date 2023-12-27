const openButton = document.querySelector('.bob');
const modal = document.querySelector('.backdrop');
const closeButton = document.querySelector('.button-modal-icon');

document.addEventListener('keydown', closeModalOnEsc);
openButton.addEventListener('click', openwindow);
closeButton.addEventListener('click', closemodal);

function openwindow() {
  modal.classList.toggle('is-visible');
  document.body.style.overflow = 'hidden';
}

function closemodal() {
  modal.classList.toggle('is-visible');
  document.body.style.overflow = '';
}

function closeModalOnEsc(event) {
  if (event.key === 'Escape' && modal.classList.contains('is-visible')) {
    modal.classList.toggle('is-visible');
    document.body.style.overflow = '';
  }
}
export { openwindow, closemodal, closeModalOnEsc, openButton, closeButton };
