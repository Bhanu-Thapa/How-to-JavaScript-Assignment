let bg = document.getElementById('bg');

function getRandomColor() {
  letters = '0123456789ABCDEF';
  color = '#';
  for (let i = 1; i <= 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeBackgroundColor() {
  bg.style.backgroundColor = getRandomColor();
}
