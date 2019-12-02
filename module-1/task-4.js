'use strict';
/*
Task 4
*/

const credits = 23580;
const pricePerDroid = 3000;

let quantityDroid = Number(prompt('Какое количество дронов вы хотите купить?'));

    if (Number.isNaN(quantityDroid) === true) {
        alert('Вы не ввели корректное число!');
    } else 

    if ((pricePerDroid * quantityDroid) > credits) {
        alert('Недостаточно средств на счету!');
    } else
  
    if ((pricePerDroid * quantityDroid) < credits) {
        alert(`Вы купили ${quantityDroid} дроидов, на счету осталось ${credits - (pricePerDroid * quantityDroid)} кредитов`);
    }