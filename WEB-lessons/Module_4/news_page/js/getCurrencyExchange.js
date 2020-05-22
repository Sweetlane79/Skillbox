$(document).ready(function() {
  const BASE_URL = 'http://data.fixer.io/api/latest?access_key=';
  const KEY = 'e799c28b44d07cc963ec89d2e312fc3c';
  const allNewsLinkEl = $('.js-all-news-link');

  $.get(BASE_URL + KEY, function(response) {
    const USD = response.rates.RUB / response.rates.USD;

    $('.js-usd-value').text(USD.toFixed(2));
    $('.js-eur-value').text(response.rates.RUB.toFixed(2));
  });

  function onAllNewsLinkClick() {
    event.preventDefault();

    $('body').toggleClass('stop-scrolling');
  };

  allNewsLinkEl.on('click', onAllNewsLinkClick);

  
}); 