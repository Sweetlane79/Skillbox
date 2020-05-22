const textBlockEl = document.querySelector('.js-text-block');
const editBtnEl = document.querySelector('.js-edit-btn');
const cancelBtnEl = document.querySelector('.js-cancel-btn');
const saveBtnEl = document.querySelector('.js-save-btn');

//Функция смены логических состояний в зависимости от того активен режим редактирования или нет
function changeState(state) {
  textBlockEl.contentEditable = state;
  cancelBtnEl.disabled = !state;
  saveBtnEl.disabled = !state;
  editBtnEl.disabled = state;
}

//Функция смены цвета кнопок в зависимости от того активен режим редактирования или нет
function cahngeBtnColor(activeColor, unActivecolor) { 
  cancelBtnEl.style.backgroundColor = activeColor;
  saveBtnEl.style.backgroundColor = activeColor;
  editBtnEl.style.backgroundColor = unActivecolor;
}

//Активация режима редактирования
editBtnEl.addEventListener('click', function() {
  textBlockEl.textContent = localStorage.getItem('edited-text');
  textBlockEl.style.textAlign = 'left';

  changeState(true);
  cahngeBtnColor('#2174fd', '#99bcf5');
}); 

//Сохранение отредактированного текста и деактивация режима редактирования
//в случае, если сохранить пустую строку, localStorage обнулится
saveBtnEl.addEventListener('click', function() {
  if (textBlockEl.textContent.length !== 0 ) {
    localStorage.setItem('edited-text', textBlockEl.textContent);
  } else {
    localStorage.removeItem('edited-text');
    textBlockEl.textContent = 'Введите любой текст';
    textBlockEl.style.textAlign = 'center';
  }

  changeState(false);
  cahngeBtnColor('#99bcf5', '#2174fd');
});

//Отмена текущих изменений и подгрузка сохраненого изменеия из localStorage
cancelBtnEl.addEventListener('click', function() {
  if (localStorage.length !== 0) {
    textBlockEl.textContent = localStorage.getItem('edited-text');
  } else {
    textBlockEl.textContent = 'Введите любой текст';
    textBlockEl.style.textAlign = 'center';
  }

  changeState(false);
  cahngeBtnColor('#99bcf5', '#2174fd');
});

//При перезагрузке загружаем последнее изменение из localStorage
window.addEventListener('load', function() {
  if (localStorage.length !== 0) {
    textBlockEl.textContent = localStorage.getItem('edited-text');
    textBlockEl.style.textAlign = 'left';
  } else {
    textBlockEl.textContent = 'Введите любой текст';
  }
});
