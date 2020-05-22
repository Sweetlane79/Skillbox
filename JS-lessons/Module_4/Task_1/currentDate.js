const Months = ['января', 'февраля', 'марта',
                  'апреля', 'мая', 'июня',
                  'июля', 'августа', 'сентября',
                  'октября', 'ноября', 'декабря'
];
const DAYS = ['воскресенье', 'понедельник', 'вторник',
              'среда', 'четверг', 'пятница', 'суббота'
];

function declOfNum(number, titles) {  
  cases = [2, 0, 1, 1, 1, 2];  
  return titles[(number % 100 > 4 && number % 100 <20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];  
}

function currentDateTime() {
  let DateTime = new Date();
 
  // Вывод полной текущей даты
  console.log('Сегодня ' + DateTime.getDate() + ' ' + Months[DateTime.getMonth()]
        + ' ' + DateTime.getFullYear() + ' года, ' + DAYS[DateTime.getDay()] + ', ' 
        + DateTime.getHours() + ' ' + declOfNum(DateTime.getHours(), ['час', 'часа', 'часов']) + ' ' + DateTime.getMinutes() 
        + ' ' + declOfNum(DateTime.getMinutes(), ['минута', 'минуты', 'минут']) + ' ' + DateTime.getSeconds() + ' ' + 
        declOfNum(DateTime.getSeconds(), ['секунда', 'секунды', 'секунд'])
  );
}

setInterval(() => currentDateTime(), 1000);




