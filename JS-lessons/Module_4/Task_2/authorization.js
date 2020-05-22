const USERS = [
  User1 = {
    name: 'Леонид',
    login: 'Lenny',
    password: 'qwerty'
  },

  User2 = {
    name: 'Дарья',
    login: 'DashafromRussia',
    password: 'poltava'
  }
];

function authorization() {
  let getLogin = prompt('Введите логин', '');
  let getPassword = prompt('Введите пароль', '');
  let UserFounded = false;
  
  for (let i = 0; i < USERS.length;) {
    if (getLogin == USERS[i].login && getPassword == USERS[i].password) {
      alert('Привет, ' + USERS[i].name);
      UserFounded = true;
      break;
    } else {
      i++;
    }
  }

  if (UserFounded == false) alert('Ошибка авторизации');
}

authorization();