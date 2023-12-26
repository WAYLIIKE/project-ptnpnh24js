const modalErrorSubscription = () => {
  const refs = {
    openModalBtn: document.querySelector('.modal-error-open'),
    closeModalBtn: document.querySelector('.modal-error-close'),
    modal: document.querySelector('.modal-error'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModalclose);
  document.addEventListener('keydown', closeModalOnEsc);

  function toggleModal() {
    refs.modal.classList.toggle('is-visible');
    document.body.style.overflow = 'hidden';
  }
  function toggleModalclose() {
    refs.modal.classList.toggle('is-visible');
    document.body.style.overflow = '';
  }
  function closeModalOnEsc(event) {
    if (event.key === 'Escape' && refs.modal.classList.contains('is-visible')) {
      refs.modal.classList.toggle('is-visible');
      document.body.style.overflow = '';
    }
  }
};
export { modalErrorSubscription };
