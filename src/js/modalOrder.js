const modalOrder = () => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };
  refs.openModalBtn.addEventListener('click', openWindow);
  refs.closeModalBtn.addEventListener('click', closeModal);
  document.addEventListener('keydown', closeModalOnEsc);

  function openWindow() {
    refs.modal.classList.toggle('is-hidden');
    // refs.modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    refs.modal.classList.toggle('is-hidden');
    // refs.modal.style.display = 'none';
    document.body.style.overflow = '';
  }
  function closeModalOnEsc(event) {
    if (event.key === 'Escape' && !refs.modal.classList.contains('is-hidden')) {
      refs.modal.classList.toggle('is-hidden');
      document.body.style.overflow = '';
    }
  }
};

export { modalOrder };
