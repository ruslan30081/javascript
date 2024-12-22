// Создаем функцию для игры с использованием замыкания и рекурсии
(function startGame() {
  // Загадываем случайное число от 1 до 100 и сохраняем его в замыкании
  const secretNumber = Math.floor(Math.random() * 100) + 1;

  // Функция для рекурсивной проверки числа
  function guessNumber() {
      const userInput = prompt("Угадай число от 1 до 100");

      // Проверяем, нажал ли пользователь "Отмена"
      if (userInput === null) {
          alert("Игра окончена");
          return;
      }

      const guessedNumber = Number(userInput);

      // Проверяем, ввел ли пользователь число
      if (isNaN(guessedNumber)) {
          alert("Введи число!");
          guessNumber(); // Рекурсивный вызов
          return;
      }

      // Сравниваем числа
      if (guessedNumber > secretNumber) {
          alert("Загаданное число меньше");
          guessNumber(); // Рекурсивный вызов
      } else if (guessedNumber < secretNumber) {
          alert("Загаданное число больше");
          guessNumber(); // Рекурсивный вызов
      } else {
          alert("Поздравляю, Вы угадали!!!");
      }
  }

  // Запускаем игру
  guessNumber();
})();
