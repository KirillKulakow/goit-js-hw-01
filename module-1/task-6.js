'use strict';
/*
Task 6
*/

let total = 0;
let input;

while (true) {
    input = prompt(
    'Введите число',
  );
  let inputNumber = Number.parseInt(input) * 1;
  let inputVerify = Number.isNaN(inputNumber);
  const isValid = inputVerify === true;
  if (isValid && input !== null) {
    alert('Было введено не число, попробуйте еще раз!');
    continue;
  }
  if (input !== null && isValid === false) {
  console.log(total);
  total = Number.parseInt(total) + inputNumber;
  console.log(inputNumber);
 }
  if (input === null) {
    inputNumber = 0;
    total = Number.parseInt(total) + inputNumber;
    console.log(inputNumber);
    console.log(total);
    alert(`Общая сумма чисел равна ${total}`);
    break;
  }
}
