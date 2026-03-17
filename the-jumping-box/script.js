const box = document.querySelector('.box');

box.onclick = () => {
  box.classList.toggle('top');
  box.classList.toggle('bottom');
};
