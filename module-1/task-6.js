'use strict';
/*
Task 6
*/

let total = 0;
let input = prompt('Введите число!');
console.log(input);

while (input !== null) {
  if (Number.isNaN(Number(input)) === false) {
  total = total + Number(input);
  input = prompt('Введите число!');
} else if (Number.isNaN(Number(input)) === true) {
    alert(`Введите корректное число!`);
    input = prompt('Введите число!');
  }
}
alert(`Общая сумма чисел равна ${total}`)
