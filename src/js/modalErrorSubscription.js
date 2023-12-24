const modalErrorSubscription = () => {
  const refs = {
    openModalBtn: document.querySelector('.modal-error-open'),
    closeModalBtn: document.querySelector('.modal-error-close'),
    modal: document.querySelector('.modal-error'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModalclose);

  function toggleModal() {
    refs.modal.classList.toggle('is-visible');
    document.body.style.overflow = 'hidden';
  }
  function toggleModalclose() {
    refs.modal.classList.toggle('is-visible');
    document.body.style.overflow = '';
  }
};
export { modalErrorSubscription };
