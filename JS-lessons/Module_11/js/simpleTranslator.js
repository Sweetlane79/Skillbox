window.onload = function() {
  const API_KEY = 'trnsl.1.1.20200418T130022Z.fd5d5b71d0d88a4d.be7ff2126f4aff1e232dbd96fae9edf3500fa06c';
  const formEl = document.querySelector('.js-main-form');
  const inputTextArea = document.querySelector('.js-input-textarea');
  const sourceLanguageEl = document.querySelector('.js-source-language');
  const translatedlanguageEl = document.querySelector('.js-translated_language');
  const outputTextArea = document.querySelector('.js-text-field');

  formEl.addEventListener('submit', function() {
    event.preventDefault();
    let url = formEl.getAttribute('action');

    //Получаем выбранные пользователем языки
    const sourceLanguage = sourceLanguageEl.options[sourceLanguageEl.selectedIndex].value;
    const translatedlanguage = translatedlanguageEl.options[translatedlanguageEl.selectedIndex].value;

    //Получаем слово, которое нужно перевести
    const userWord = inputTextArea.value;

    //Дополняем url новыми данными
    url += '?key=' + API_KEY;
    url += `&text=${userWord}`;
    url += `&lang=${sourceLanguage}-${translatedlanguage}`;

    // //получаем ответ от yandex и выводим переведенное слово
    window.fetch(url) 

    .then (function(response) {
      if (response.ok) {
        response.json().then(function(json) {
          let serverAnswer = json;
          outputTextArea.innerHTML = serverAnswer.text; 
        })
      } else {
        // если сервер присылает ошибку, выводим её
        response.json().then(function(json) {
          let serverAnswer = json;
          alert('Произошла ошибка при получении ответа от сервера:\n\n' + serverAnswer.message);
        })
      }
    })
  });
}
