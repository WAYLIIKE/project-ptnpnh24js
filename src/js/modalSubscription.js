const openButton = document.querySelector('.bob');
const modal = document.querySelector('.backdrop');
const closeButton = document.querySelector('.button-modal-icon');
document.addEventListener('keydown', closeModalOnEsc);
openButton.addEventListener('click', openwindow);
closeButton.addEventListener('click', closemodal);
function openwindow() {
  modal.style.display = 'block';
  document.body.style.scroll = 'none';
}
function closemodal() {
  modal.style.display = 'none';
  document.body.style.scroll = 'auto';
}
function closeModalOnEsc(event) {
  if (event.key === 'Escape') {
    modal.style.display = 'none';
    document.body.style.scroll = 'auto';
  }
}
