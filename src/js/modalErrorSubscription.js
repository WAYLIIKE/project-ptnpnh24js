const openModalBtn = document.querySelector('.modal-error-open');
const closeModalBtn = document.querySelector('.modal-error-close');
const modal = document.querySelector('.modal-error');

openModalBtn.addEventListener('click', toggleModal);
closeModalBtn.addEventListener('click', toggleModalClose);
document.addEventListener('keydown', closeModalOnEsc);

function toggleModal() {
  modal.classList.toggle('is-visible');
  document.body.style.overflow = 'hidden';
}
function toggleModalClose() {
  modal.classList.toggle('is-visible');
  document.body.style.overflow = '';
}
function closeModalOnEsc(event) {
  if (event.key === 'Escape' && modal.classList.contains('is-visible')) {
    modal.classList.toggle('is-visible');
    document.body.style.overflow = '';
  }
}

export {
  toggleModal,
  toggleModalClose,
  closeModalOnEsc,
  openModalBtn,
  closeModalBtn,
};
