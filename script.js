const title = prompt("Введите название проекта");
let service1, servicePrice1, service2, servicePrice2, screenType, screenPrice;
const rollback = 50;

while (true) {
  screenType = prompt("Выберите тип экрана:", ["Простые", "Сложные", "Интерактивные"]);

  if (screenType === "Простые" || screenType === "Сложные" || screenType === "Интерактивные") {
    console.log("screenType " + screenType);
    break;
  } else {
    alert("Неправильный выбор");
  }
}

while (true) {
  screenPrice = prompt("Сколько будет стоить данная работа?");

  if (!isNaN(parseInt(screenPrice))) {
    console.log("screenPrice " + parseInt(screenPrice));
    break;
  } else {
    alert("Введите число");
  }
}
while (true) {
  service1 = prompt("Какой дополнительный тип услуги нужен?");
  if (service1 !== "") break;
  alert("Пожалуйста, введите название услуги");
}

while (true) {
  servicePrice1 = prompt("Сколько это будет стоить?");
  if (!isNaN(parseInt(servicePrice1))) break;
  alert("Пожалуйста, введите стоимость услуги");
}

while (true) {
  service2 = prompt("Какой дополнительный тип услуги нужен?");
  if (service2 !== "") break;
  alert("Пожалуйста, введите название услуги");
}

while (true) {
  servicePrice2 = prompt("Сколько это будет стоить?");
  if (!isNaN(parseInt(servicePrice2))) break;
  alert("Пожалуйста, введите стоимость услуги");
}


const adaptive = confirm("Нужен ли адаптив на сайте?");



const allServicePrices = function getAllServicePrices(a, b) {
  return parseInt(a) + parseInt(b);
}
const fullPrice = function getFullPrice(screenPrice, allServicePrices) {
  return parseInt(screenPrice) + parseInt(allServicePrices);
}



function getTitle(title) {
  title = title.toLowerCase();
  title = title.replace(/^\s+/, "");
  title = title[0].toUpperCase() + title.slice(1);
  return title;
}

let servicePercentPrice = function getServicePercentPrices(itemFullPrice, rollback) {
  return Math.ceil(itemFullPrice - (itemFullPrice * rollback / 100));
}


const showTypeOf = function(price) {
  if (price === 0) {
    console.log("Стоимость работы составляет 0 рублей");
    console.log("Итоговая стоимость: 0 рублей");
  } else if (price === 15000) {
    console.log("Стоимость работы составляет 15000 рублей");
    console.log("Итоговая стоимость: 15000 рублей");
  } else if (price === 30000) {
    console.log("Стоимость работы составляет 30000 рублей");
    console.log("Итоговая стоимость: 30000 рублей");
  } else if (price > 30000) {
    console.log("Даем скидку в 10%");
    const discount = price * 0.1;
    const finalPrice = price - discount;
    console.log("Итоговая стоимость: " + finalPrice);
  } else if (price > 15000 && price < 30000) {
    console.log("Даем скидку в 5%");
    const discount = price * 0.05;
    const finalPrice = price - discount;
    console.log("Итоговая стоимость: " + finalPrice);
  } else {
    console.log("Скидка не предусмотрена");
    console.log("Итоговая стоимость: " + price);
  }
}

let itemTitle = getTitle(title);
console.log(itemTitle);

let result = allServicePrices(servicePrice1, servicePrice2);
console.log(result);

let itemFullPrice = fullPrice(screenPrice, result);
console.log(itemFullPrice);

let itemServicePercentPrice = servicePercentPrice(itemFullPrice, rollback);
console.log("стоимость за вычетом процента отката посреднику " + itemServicePercentPrice);

let itemAllServicePrices = allServicePrices(servicePrice1, servicePrice2)
console.log(itemAllServicePrices);

let itemShowTypeOf = showTypeOf(itemFullPrice);