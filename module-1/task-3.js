'use strict';
/*
Task 3
*/

const password = prompt('Введите пароль, для входа');
const ADMIN_PASSWORD = 'jqueryismyjam';

let message = (password === ADMIN_PASSWORD) ? 'Добро пожаловать!':
 (password === null) ? 'Отменено пользователем!' :
 'Доступ запрещен, неверный пароль!';
 alert(message);
