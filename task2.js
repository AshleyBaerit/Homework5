function checkEvenOdd(number) {
  if (number % 2 === 0) {
    return 'Число четное';
  } else {
    return 'Число нечетное';
  }
}

const cEO = checkEvenOdd(7);
console.log(cEO)