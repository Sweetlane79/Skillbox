// Гененрируем случайное число
function getRandomNumber(minNumber, maxNumber) {
  const RANDOM_NUMBER = minNumber + Math.random() * (maxNumber + 1 - minNumber); 

  return  Math.floor(RANDOM_NUMBER);
}

// Проверка на тип введенных данных пользователем
function checkUserInput(UserInput) {
  if (isNaN(UserInput)) {
    alert('Вы ввели не число, попробуйте еще раз!');
    guessNumber(guessedNumber);
  } else if (UserInput == '') {
    alert('Вы ничего не ввели!');
    guessNumber(guessedNumber);
  } else {
    return true;
  }
}

// Функция игры
function guessNumber(guessedNumber) {
  const userNumber = prompt('Угадйте задуманное число от 1 до 1000!');

  if (userNumber == null) {
    return;
  } else {
    let checkedUserInput = checkUserInput(userNumber); // Проверяем пользовательский ввод

    if (checkedUserInput) {
      if (userNumber > guessedNumber) {
        alert('Меньше!');
        guessNumber(guessedNumber);
      } else if (userNumber < guessedNumber) {
        alert('Больше!');
        guessNumber(guessedNumber);
      } else {
        alert('Поздравляю, Вы угадали!');

        //Запрос на повторную игру
        let repeatGame = confirm('Хотите сыграть еще раз?');
      
        if (repeatGame) {
        guessedNumber = getRandomNumber(LOWER_BOUND_RANGE, UPPER_BOUND_RANGE);
        alert('Для теста, загаданное число = ' + guessedNumber);
        guessNumber(guessedNumber);
      }
      }
    }
  }
}

const LOWER_BOUND_RANGE = 1;
const UPPER_BOUND_RANGE = 1000;
let guessedNumber = getRandomNumber(LOWER_BOUND_RANGE, UPPER_BOUND_RANGE);

//let guessedNumber = getRandomNumber(1, 1000); в данном контексте не понятно, что числа в скобках - границы диапазона

alert('Для теста, загаданное число = ' + guessedNumber);
guessNumber(guessedNumber);



