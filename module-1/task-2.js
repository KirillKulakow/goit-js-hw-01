'use strict';
/*
Task 2
*/

const total = 100;
const ordered = 80;

if (ordered > total) {
    console.log('На складе недостаточно товаров!');
} else if (ordered <= total) {
    console.log('Заказ оформлен, с вами свяжется менеджер');
}