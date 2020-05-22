const Months = ['января', 'февраля', 'марта',
                  'апреля', 'мая', 'июня',
                  'июля', 'августа', 'сентября',
                  'октября', 'ноября', 'декабря'
];

// получаем дату регистрации и переделываем её в формат ДД.ММ. ЧЧ:ММ:СС
function getDateTime(){
  let currentDate = new Date();
  let regMonth = currentDate.getMonth();
  let regDate = currentDate.getDate();
  let regHours = currentDate.getHours();
  let regMinutes = currentDate.getMinutes();
  let regSeconds = currentDate.getSeconds();

  if (regSeconds < 10) regSeconds = '0' + regSeconds;

  return regDate + ' ' + Months[regMonth] + ' ' + regHours + ':' + regMinutes + ':' + regSeconds;
}

//Функция-контструктор для объявления пустого массива для списка пользователей, добавления нового пользователя, вывода всех пользователей
function NewUserList () {
  this.UserArr = [];
  this.addUser = function(user) {
    this.UserArr.push(user);
  };
  this.getAllUsers = function() {
    for (let i = 0; i < this.UserArr.length; i++) {
      console.log('Имя: ' + this.UserArr[i].UserFirstName + '\n' +
                  'Фамилия: ' + this.UserArr[i].UserLastName + '\n' +
                  'Дата регистрации: ' + this.UserArr[i].RegDate);
    }
  };
};

//Функция-конструктор для записи данных нового пользователя
function User (FirstName, LastName) {
  this.UserFirstName = FirstName;
  this.UserLastName = LastName;
  this.RegDate = getDateTime();
};

//Функция проверки на ввод
function checkUserInput(UserInput) {
  return UserInput !== '' && isNaN(parseFloat(UserInput));
}

//Функция для запроса данных пользователей
function getUser() {
  let FullName = prompt('Введите имя и фамилию!');

  if (FullName !== null) {
    const splitName = FullName.split(' ');
    const UserFirstName = splitName[0];
    const UserLastName = splitName[1]; 
    //Проверяем пользовательский ввод
    if (checkUserInput(UserFirstName) && checkUserInput(UserLastName)) {
      //Создаем нового пользователя
      let NewUser = new User(UserFirstName, UserLastName);
      //Добавляем его в массив пользователей
      UserList.addUser(NewUser);
      //Еще раз запрашиваем данные нового пользователя
      getUser()
    } else {
      alert('Некорректный ввод имени или фамилии!');
      getUser();
    }
  } else {
    UserList.getAllUsers();
  }
}

let UserList = new NewUserList();
getUser();
