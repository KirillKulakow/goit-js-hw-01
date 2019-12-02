'use strict';
/*
Task 4
*/

const credits = 23580;
const pricePerDroid = 3000;

let quantityDroid;

while (true) {
    quantityDroid = Number(prompt('Какое количество дронов вы хотите купить?'));
  
    if (quantityDroid === null) {
      break;
    }
    
    if (Number.isNaN(quantityDroid) === true) {
        alert('Введите число!');
        continue;
    }

    if ((pricePerDroid * quantityDroid) > credits) {
        alert('Недостаточно средств на счету!');
        break;
    }
  
    if ((pricePerDroid * quantityDroid) < credits) {
        alert(`Вы купили ${quantityDroid} дроидов, на счету осталось ${credits - (pricePerDroid * quantityDroid)} кредитов`);
        break;
    }

    }

// let totalPrice = pricePerDroid * Number.parseInt(quantityDroid);

// if (quantityDroid === null) {
//     alert('Отменено пользователем!');
// } else if (Number.isNaN(quantityDroid) === false) {
//     alert('Введите число!');
// } else if ((pricePerDroid * Number.parseInt(quantityDroid)) > credits) {
//     alert('Недостаточно средств на счету!');
// } else if ((pricePerDroid * Number.parseInt(quantityDroid)) < credits) {
//     alert(`Вы купили ${quantityDroid} дроидов, на счету осталось ${credits - (pricePerDroid * Number.parseInt(quantityDroid))} кредитов`);
