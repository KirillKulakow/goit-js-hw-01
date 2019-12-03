'use strict';
/*
Task 6
*/

let total = 0;
let input;

do 
{
  input = prompt('Введите число!');
  if (Number.isNaN(Number(input))) {
    alert(`Введите корректное число!`);
  } else {
    total = total + Number(input);
  }
} while (input !== null) {
}
alert (`Общая сумма чисел равна ${total}`)
