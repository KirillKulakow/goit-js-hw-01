'use strict';
/*
Task 6
*/

let total = 0;
let input;

while (true) {
    input = prompt('Введите число');
  if (Number.isNaN(Number(input)) === true && input !== null) {
    alert('Было введено не число, попробуйте еще раз!');
    continue;
  }
  if (input !== null && Number.isNaN(Number(input)) === false) {
  total = Number.parseInt(total) + Number(input);
 }
  if (input === null) {
    input = 0;
    total = Number.parseInt(total) + input;
    alert(`Общая сумма чисел равна ${total}`);
    break;
  }
}
