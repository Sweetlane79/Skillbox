(function GuessNumber() {
  // Пересенные для нижней и верхней граници числового диапазона, количество попыток
  const LOWER_BOUND_RANGE = 1;
  const UPPER_BOUND_RANGE = 1000;
  let AttempsNumber = 10;

  // Гененрируем случайное число
  function getRandomNumber(minNumber, maxNumber) {
    const RANDOM_NUMBER = minNumber + Math.random() * (maxNumber + 1 - minNumber); 
  
    return  Math.floor(RANDOM_NUMBER);
  }

  // Проверка на тип введенных данных пользователем
  // Я убрал проверку UserInput === '', так как в этот раз при запросе числа у пользователя я использую parseFloat
  // и получаю NaN, если была введена строка или пустая строка 
  // конечно я теперь не могу указать пользователю, что он ничего не ввел, но думаю, это не так критично здесь
  // смысл передаваемой ошибки пользовательского ввода не теряется
  function checkUserInput(UserInput) {
    if (!isNaN(UserInput) && UserInput !== '') {
    //   alert('Вы ввели не число, попробуйте еще раз!');
    // } else {
      return true;
    }
  }

  // Переменная для хранения сгенерированного случайного числа
  let guessedNumber = getRandomNumber(LOWER_BOUND_RANGE, UPPER_BOUND_RANGE);
  alert('Загаданное число для теста ' + guessedNumber);

  // Функция игры, которую мы передадим  в main.js, в эту функцию передовать загаданное число не будем, воспользуемся тем, 
  // что оно было определенно уровнем выше
  window.startGame = function() {
    if (AttempsNumber !== 0) {
      let getUserNumber = prompt('Введите число!');
      AttempsNumber--;
      if (getUserNumber !== null) {
        if (checkUserInput(getUserNumber)) {
          if (getUserNumber > guessedNumber) {
            alert('Меньше!');
            startGame();
          } else if (getUserNumber < guessedNumber) {
            alert('Больше!');
            startGame();
          } else {
            let repeatGame = confirm('Поздравляю, Вы угадали! Хотите сыграть еще раз?');
    
            if (repeatGame) {
              AttempsNumber = 10;
              guessedNumber = getRandomNumber(LOWER_BOUND_RANGE, UPPER_BOUND_RANGE);
              alert('Загаданное число для теста ' + guessedNumber);
              startGame();
            }
          }
        } else {
          alert('Вы ввели не число, попробуйте еще раз!');
          startGame(); 
        }
      }
    } else {
      let repeatGame = confirm('Количество попыток исчерпано! Хотите сыграть еще раз?');

      if (repeatGame) {
        AttempsNumber = 10;
        guessedNumber = getRandomNumber(LOWER_BOUND_RANGE, UPPER_BOUND_RANGE);
        alert('Загаданное число для теста ' + guessedNumber);
        startGame();
      }
    } 
  }
})();
