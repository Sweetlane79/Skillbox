let TotalSum = 0;

while (true) {
  const value = prompt('Введите число!')

  if (value == null)  break;
  
  if (isNaN(value)) {
    alert('Вы ввели не число!');
  } else {
    TotalSum += Number(value);
  }
}

alert('Общая сумма = ' + TotalSum);