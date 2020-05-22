(function(){
  'use strict';

  let userCode = prompt('Введие Ваш кусок кода');

 if (checkUserInput(userCode)) {
  try {
    // eval(userCode);
    const runUserCode = new Function('"use strict";' + userCode);
    runUserCode();
  } catch (ex) {
    alert('Обнаружена ошибка!'+ '\n' + ex + '\n' +
    'Место ошибки можете посмотреть в консоле' + '\n');
    console.log(ex);
  }
 }

  function checkUserInput(userInput) {
    if (userInput === '') {
      alert('Вы ничего не ввели!');
    } else return true;
  }
})();  

