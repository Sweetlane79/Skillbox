//Счетчик для уникального id комментария
let id = 0;

//Когда у нас есть данные в localStorage, то мы продолжаем в качестве начального значения для id берем 
//id последнего комментария в local storage
if (localStorage.getItem('prevComments')) {
  //превводим в массив
  const storageArr = JSON.parse(localStorage.prevComments);

  if (storageArr.length !== 0) {
    //получаем новый стартовый id
    id = storageArr[storageArr.length - 1].id + 1;
  }
}

//Доавление комментария
export const addComment = (event, userName, userComment) => {
  event.preventDefault();

  //Считываем значения полей имени и комментария
  // const userName = document.getElementById('user-name-input').value;
  // const userComment = document.getElementById('user-comment-textarea').value;

  //очищаем эти поля
  document.getElementById('user-name-input').value = '';
  document.getElementById('user-comment-textarea').value = '';

  //Получаем время создания комментария
  const publicationInfo = new Date().toLocaleString('ru', {year:'numeric', 
    month:'numeric', 
    day:'numeric', 
    hour:'numeric',
    minute: 'numeric'
  }).split(', ').reverse().join(' ');

  return {
    type: 'ADD_COMMENT',
    id: id++,
    userName,
    userComment,
    publicationInfo
  }
}

//Удаление комментария, получаем id по которрому будем фильтровать массив комменатрий и создавать новую копию
export const deleteComment = (id) => {
  return {
    type: 'DELETE_COMMENT',
    id
  }

} 