//Объявляем переменные для обращений к элементам 
const INFO_TEXT_EL = document.querySelector('.js-info-text');
const ADD_TASK_BTN = document.querySelector('.js-add-task-btn');
const TASK_LIST_EL = document.querySelector('.js-task-list');
const TASK = document.querySelector('.js-task');

//Проверка на пустую строку
function checkUserInput(userInput) {
  if (userInput !== '') return true;
};

//Добавление задачи по нажатию кнопки
ADD_TASK_BTN.addEventListener('click', function() {
  //Скрываем "Новых задач нет..." и отоброжаем изначально скрытый список
  INFO_TEXT_EL.style.display = 'none';
  TASK_LIST_EL.style.display = '';

  //считываем занчение input
  let taskValue  = TASK.value;
  //убираем красную рамку, если она появилась из-за ввода пустой строки
  TASK.classList.remove('empty-field');

  //Проверяем на пустую строку и добавляем новую задачу
  if (checkUserInput(taskValue)) {
    //Возвращаем состояние input до начального
    TASK.value = '';

    //Создаем новый элемент li, добавляем классы, записываем веденную в input задачу и добавляем в ol 
    const NEW_LI_EL = document.createElement('li');
    NEW_LI_EL.className = 'list__item';
    NEW_LI_EL.innerHTML = taskValue;
    TASK_LIST_EL.appendChild(NEW_LI_EL);
  } else {
    //При вводе пустой строки добавядем красную рамку для input
    TASK.classList.add('empty-field');
  }
});

//Проверяем, что кликнули на li и зачеркиваем/снимаем зачеркивание с этого элемента спсика
TASK_LIST_EL.addEventListener('click',  function(event) {
  let target = event.target;
  console.log(event);
  if (target.tagName === 'LI') target.classList.toggle('done');
})




