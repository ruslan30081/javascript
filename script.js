

//переменные
let title = 'Монитор Samsung';
let screens = 2;
let screenPrice = 2000;
let rollback = 10;
let fullPrice = screenPrice * screens;
let adaptive = fullPrice - fullPrice * rollback / 100;

alert(title);
console.log('adaptive - ', adaptive);