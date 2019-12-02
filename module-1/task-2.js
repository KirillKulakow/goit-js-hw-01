'use strict';
/*
Task 2
*/

const total = 100;
const ordered = 80;
let message;

if (ordered > total) {
    message = 'На складе недостаточно товаров!';
} else if (ordered <= total) {
    message = 'Заказ оформлен, с вами свяжется менеджер';
}