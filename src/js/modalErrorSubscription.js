const modalErrorSubscription = () => {
  const refs = {
    openModalBtn: document.querySelector('.modal-error-open'),
    closeModalBtn: document.querySelector('.modal-error-close'),
    modal: document.querySelector('.modal-error'),
  };
  console.log(refs);

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-visible');
  }
};
export { modalErrorSubscription };
