function greetUser() {
  let age = parseInt(prompt("Сколько Вам лет?"));

  if (age < 0) {
    console.log("Вы ввели неправильное значение");
  } else if (age >= 0 && age <= 12) {
    console.log("Привет, друг!");
  } else {
    console.log("Добро пожаловать!");
  }
}

const gU = greetUser(10);
console.log(gU)