const UserName = prompt('Введите Ваше имя', '');
const UserLastName = prompt('Введите Вашу фамилию', '');
const BirthYear = prompt('Введите Ваш год рождения', '');
const CurrentYear = new Date().getFullYear(); 
const UserAge = CurrentYear - BirthYear;

if (UserAge < 20) {
  alert('Привет, ' + UserName + ' ' + UserLastName + '!');
} else if (UserAge >= 20 && UserAge < 40) {
  alert('Добрый день, ' + UserName + ' ' + UserLastName + '!');
} else {
  alert('Здравствуйте, ' + UserName + ' ' + UserLastName + '!');
}




