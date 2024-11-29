// усложненноу задание 3 урока

const lang = 'en'; //ru или 'en'
const daysOfWeek = [
  ['ru', ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']],
  ['en', ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']]
];



if (lang === 'ru') {
  console.log(daysOfWeek[0][1]);
} else if (lang === 'en') {
  console.log(daysOfWeek[1][1]);
}



switch (lang) {
  case 'ru':
    console.log(daysOfWeek[0][1]);
    break;
  case 'en':
    console.log(daysOfWeek[1][1]);
    break;
}


const Week = daysOfWeek.find(([lan]) => lan === lang)[1];
console.log(Week);


let namePerson = 'Александр'; // или 'Александр' или любое другое значение
console.log(namePerson === 'Артем' ? 'директор' : namePerson === 'Александр' ? 'преподаватель' : 'студент');