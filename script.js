
//========================================================================================================================================================
// усложненноу задание 3 урока

const lang = 'en'; //ru или 'en'

if (lang === 'ru') {
  console.log('Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье');
} else if (lang === 'en') {
  console.log('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');
}


switch (lang) {
  case 'ru':
    console.log('Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье');
    break;
  case 'en':
    console.log('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');
    break;
}


let daysOfWeek = [
  ['ru', ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']],
  ['en', ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']]
];

console.log(daysOfWeek[lang === 'ru' ? 0 : 1][1]);

let namePerson = 'Александр'; // или 'Александр' или любое другое значение
console.log(namePerson === 'Артем' ? 'директор' : namePerson === 'Александр' ? 'преподаватель' : 'студент');