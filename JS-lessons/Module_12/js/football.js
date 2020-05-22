$(window).on('load', function() {
  const ballEl = $('.js-ball');
  const fieldElWidth = $('.js-field').width();
  const fieldElHeight = $('.js-field').height();
  let ballCurrentLeftPosition = ballEl.offset().left;
  
  //Функция проверки гола
  function checkGoal(top) {
    if (top >= fieldElHeight * 0.4 && top <= fieldElHeight * 0.5) {
      alert('Гол!');
    }
  }
  //Обработчик клика на мяч
  ballEl.on('click', function() {
    //Задаем случайно значение для параметра top в пределах [0; 744] пикселей 
    //Высота картинки поля 844px, для того,чтобы мяч не вылетал за пределы высоты, нужно выставить предел равный разнице высоты картинки поля и квысоты картинки мяча
    //844 - 100 = 744
    const randomTopPosition = Math.floor(Math.random() * (fieldElHeight - 100));

    //Задаем максимальное значение для параметра left равное 90% ширины экрана
    const maxLeftPosition = fieldElWidth * 0.9;

    //В зависимости от положения мяча, отправляем его в другую часть экрана
    if (ballCurrentLeftPosition === 0) {
      //для теста: заменить top: randomTopPosition на top: fieldElHeight * [0.4; 0.5], чтобы сразу забить гол
      ballEl.animate({top: randomTopPosition, left: maxLeftPosition}, 400, function() {
        ballCurrentLeftPosition = ballEl.offset().left;

        //Здесь тоже нужно передать fieldElHeight * [0.4; 0.5]
        checkGoal(randomTopPosition);
      });
    } else {
      ballEl.animate({top: randomTopPosition, left: 0}, 400, function() {
        ballCurrentLeftPosition = ballEl.offset().left;

        checkGoal(randomTopPosition);
      });
    }
  })
});