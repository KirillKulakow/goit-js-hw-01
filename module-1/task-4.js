'use strict';
/*
Task 4
*/

const credits = 23580;
const pricePerDroid = 3000;

let quantityDroid = prompt('Какое количество дронов вы хотите купить?');

let totalPrice = Number.parseInt(pricePerDroid) * Number.parseInt(quantityDroid);

let message = (quantityDroid === null) ? 'Отменено пользователем!':
(totalPrice > credits) ? 'Недостаточно средств на счету!':
(totalPrice < credits) ? `Вы купили ${quantityDroid} дроидов, на счету осталось ${credits - totalPrice} кредитов`:
'';
alert(message);
