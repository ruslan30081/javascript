const title = "Название проекта";
const screens = "Простые, Сложные, Интерактивные";
const screenPrice = 1000;
const rollback = 50;
const fullPrice = 90000;
const adaptive = true;


console.log(typeof title); 
console.log(typeof fullPrice); 
console.log(typeof adaptive); 

console.log(screens.length); 

console.log(`Стоимость верстки экранов (${screenPrice}) рублей/ долларов/гривен/юани`);
console.log(`Стоимость разработки сайта (${fullPrice}) рублей/ долларов/гривен/юани`);

let screensArray = screens.toLowerCase().split(',');
console.log(screensArray);

let rollbackAmount = fullPrice * (rollback / 100); 
console.log(`Процент отката посреднику за работу: ${rollbackAmount}`);


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
