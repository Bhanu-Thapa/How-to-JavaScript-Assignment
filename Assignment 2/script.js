// 1
function assign1(num) {
  if (num > 0) {
    console.log('Positive');
  } else if (num < 0) {
    console.log('negative');
  } else if (num == 0) {
    console.log('zero');
  }
}

assign1(-1);

// 2

function facto(N) {
  if (N < 1) {
    console.log('enter positive number');
  } else {
    let tl = 1;
    for (let i = N; i > 0; i--) {
      tl = tl * i;
    }
    return console.log(tl);
  }
}
facto(4);

// 3
function larger(num1, num2) {
  if (num1 > num2) {
    return console.log(num1 + ' is larger one');
  } else {
    return console.log(num2 + ' is larger one');
  }
}

larger(50, 10);

// 4
function palin(str) {
  let rstr = str;
  let len = str.length;
  for (let i = 0; i < len; i++) {
    if (str[i] == rstr[len - 1 - i]) {
      return console.log("it's a palindrome");
    } else {
      return console.log('its not a palindrome');
    }
  }
}

palin('asddsa');

// 5
// function prime(number) {
//   let i = 2;
//   if (number == 2) {
//     console.log('prime number');
//   } else if (number > 1 && number % i == 0) {
//     console.log(`${number} is a not prime number`);
//   } else {
//     console.log(`${number} is a prime number`);
//   }
// }

// prime(9);
