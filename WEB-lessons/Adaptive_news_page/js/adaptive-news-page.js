$(document).ready(function() {
  const bodyEl = $('.js-body');
  const bottomBarContainerEl = $('.js-bottom-bar-container');
  const hamburgerBtnEl = $('.js-hamburger-btn');

  //убираем класс no-js, который по-умолчанию встраивает меню в поток
  bodyEl.removeClass('no-js');

  //По клику на кнопку меню запускаем анимацию кнопки меню и разворачиваем/сворачиваем меню
  hamburgerBtnEl.on('click', function(){
    bottomBarContainerEl.toggleClass('menu-open');

    if (bottomBarContainerEl.is('.menu-open')) {
      $(this).attr('aria-label', 'Закрыть меню');
    } else {
      $(this).attr('aria-label', 'Открыть меню');
    }
  });
});