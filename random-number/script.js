const button = document.querySelector('.button');

button.onclick = () => {
  let rand = Math.floor(Math.random()*10)
  document.querySelector('.box-for-rand').textContent = rand;
};
