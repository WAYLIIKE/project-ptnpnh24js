document.addEventListener('click', function () {
  const openButton = document.querySelector('.bob');
  const modal = document.querySelector('.backdrop');

  openButton.addEventListener('click', () => {
    modal.style.display = 'block';
  });

  const closeButton = document.querySelector('.button-modal-icon');

  closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
  });
});
