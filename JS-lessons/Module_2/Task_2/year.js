const StartYear = prompt('Начиная с какого года нужно вывести все вискокосные года?');
const EndYear = prompt('Конечный год необходимого диапазона?');

function isLeapYear (year) {
  return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
}


if (StartYear > EndYear) {
  for (let i = EndYear; i <= StartYear ; i++) isLeapYear(i) && console.log(i);
} else if (StartYear < EndYear) {
  for (let i = StartYear; i <= EndYear ; i++) isLeapYear(i) && console.log(i)
} else {
  for (let i = StartYear; i <= EndYear ; i++) isLeapYear(i) && console.log(i)
}

