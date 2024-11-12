// const title = "Название проекта";
// const screens = "Простые, Сложные, Интерактивные";
// const screenPrice = 1000;
const rollback = 50;
// const fullPrice = 90000;
// const adaptive = true;


// console.log(typeof title); 
// console.log(typeof fullPrice); 
// console.log(typeof adaptive); 

// console.log(screens.length); 

// console.log(`Стоимость верстки экранов (${screenPrice}) рублей/ долларов/гривен/юани`);
// console.log(`Стоимость разработки сайта (${fullPrice}) рублей/ долларов/гривен/юани`);

// let screensArray = screens.toLowerCase().split(',');
// // console.log(screensArray);

// let rollbackAmount = fullPrice * (rollback / 100); 
// console.log(`Процент отката посреднику за работу: ${rollbackAmount}`);


// Усложненное задание

// задание 1
const num = 266219;

// задание 2

const a = 123;
let product = 1;

for (let i = 0; i < a.toString().length; i++) {
  let digit = parseInt(a.toString()[i]); // преобразуем строку в число
  product *= digit;
}

console.log(product); // 6

// задание 3
let pow = product ** 3;
console.log(pow); //216

// задание 4
console.log(parseInt(pow.toString()[0]) + " " + parseInt(pow.toString()[1])); // 6

//========================================================================================================================================================
// урок #3

let title = prompt("Введите название проекта");
console.log(title);

let screenType;

while (true) {
  screenType = prompt("Выберите тип экрана:", ["Простые", "Сложные", "Интерактивные"]);

  if (screenType === "Простые" || screenType === "Сложные" || screenType === "Интерактивные") {
    console.log("screenType " + screenType);
    break;
  } else {
    alert("Неправильный выбор");
  }
}


let screenPrice;
while (true) {
  screenPrice = prompt("Сколько будет стоить данная работа?");

  if (!isNaN(parseInt(screenPrice))) {
    console.log("screenPrice " + parseInt(screenPrice));
    break;
  } else {
    alert("Введите число");
  }
}

let adaptive = confirm("Нужен ли адаптив на сайте?");

let service1, servicePrice1, service2, servicePrice2;

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

let fullPrice = parseInt(screenPrice) + parseInt(servicePrice1) + parseInt(servicePrice2);
console.log("fullPrice " + fullPrice);

let servicePercentPrice = Math.ceil(fullPrice - (fullPrice * rollback / 100));
console.log("servicePercentPrice " + servicePercentPrice);


if (fullPrice === 0) {
  console.log("Стоимость работы составляет 0 рублей");
  console.log("Итоговая стоимость: 0 рублей");
} else if (fullPrice === 15000) {
  console.log("Стоимость работы составляет 15000 рублей");
  console.log("Итоговая стоимость: 15000 рублей");
} else if (fullPrice === 30000) {
  console.log("Стоимость работы составляет 30000 рублей");
  console.log("Итоговая стоимость: 30000 рублей");
} else if (fullPrice > 30000) {
  console.log("Даем скидку в 10%");
  let discount = fullPrice * 0.1;
  let finalPrice = fullPrice - discount;
  console.log("Итоговая стоимость: " + finalPrice);
} else if (fullPrice > 15000 && fullPrice < 30000) {
  console.log("Даем скидку в 5%");
  let discount = fullPrice * 0.05;
  let finalPrice = fullPrice - discount;
  console.log("Итоговая стоимость: " + finalPrice);
} else {
  console.log("Скидка не предусмотрена");
  console.log("Итоговая стоимость: " + fullPrice);
}
