// Создаем массив с днями недели
const week = [
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье'
];

// Получаем текущий день недели (0 - воскресенье, 1 - понедельник, и т.д.)
const today = new Date().getDay();
// Преобразуем в наш формат (0 - воскресенье становится 6, 1 - понедельник остается 1)
const currentDayIndex = today === 0 ? 6 : today - 1;

// Функция для вывода дней недели
function displayWeekDays() {
    const weekDaysContainer = document.getElementById('weekDays');

    week.forEach((day, index) => {
        const dayElement = document.createElement('div');
        dayElement.className = 'week-day';

        // Проверяем, является ли день выходным (суббота или воскресенье)
        if (index === 5 || index === 6) {
            dayElement.classList.add('weekend');
        }

        // Проверяем, является ли день текущим
        if (index === currentDayIndex) {
            dayElement.classList.add('current-day');
        }

        dayElement.textContent = day;
        weekDaysContainer.appendChild(dayElement);
    });
}

// Запускаем функцию при загрузке страницы
document.addEventListener('DOMContentLoaded', displayWeekDays);

// Выводим информацию в консоль
console.log('Массив дней недели:', week);
console.log('Текущий день недели:', week[currentDayIndex]);
console.log('Индекс текущего дня:', currentDayIndex);