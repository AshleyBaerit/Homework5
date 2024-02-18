function multiplyNumbers(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    return 'Одно или оба значения не являются числом';
  } else {
    return num1 * num2;
  }
}