let h = document.getElementById('head');

const names = [
  'Aarav',
  'Sanya',
  'Vikram',
  'Neha',
  'Rohan',
  'Priya',
  'Amit',
  'Meera',
  'Rajiv',
  'Ananya',
];

let i = 0;
h.innerText = names[i];
function next() {
  i++;
  if (names.length > i) {
    h.innerText = names[i];
  } else {
    i = 0;
    h.innerText = names[i];
  }
}

function previous() {
  --i;
  if (i >= 0) {
    h.innerText = names[i];
  } else {
    i = 9;
    h.innerText = names[i];
  }
}
