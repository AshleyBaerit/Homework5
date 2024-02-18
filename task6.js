function cubeNumber() {
  var number = prompt("Введите число:");
  
  if (isNaN(number)) {
    return 'Переданный параметр не является числом';
  } else {
    var cube = Math.pow(number, 3);
    return number + ' в кубе равняется ' + cube;
  }
}
for (var i = 0; i <= 10; i++) {
  console.log(cubeNumber(i));
}