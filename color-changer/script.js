const box = document.querySelector('.color-button');

box.onclick = () => {
  if (document.body.style.background === "midnightblue") {
    document.body.style.background = "darkslategray";
  } else {
    document.body.style.background = "midnightblue";
  }
};
