'use strict';
/*
Task 5
*/

const priceChina = 100;
const priceChili = 250;
const priceAustralia = 170;
const priceIndia = 80;
const priceJamaica = 120;

let input = prompt('Введите имя страны получателя');
let inputLowwerCase = (input.toLowerCase());

switch (inputLowwerCase) {
    case 'китай':
      alert(`Доставка в Китай будет стоить ${priceChina} кредитов`);
      break;
    case 'чили':
      alert(`Доставка в Чили будет стоить ${priceChili} кредитов`);
      break;
    case 'австралия':
      alert(`Доставка в Австралию будет стоить ${priceAustralia} кредитов`);
      break;
    case 'индия':
      alert(`Доставка в Индию будет стоить ${priceIndia} кредитов`);
      break;
    case 'ямайка':
      alert(`Доставка в Ямайку будет стоить ${priceJamaica} кредитов`);
      break;
    default:
      alert( "В вашей стране доставка не доступна" );
  }