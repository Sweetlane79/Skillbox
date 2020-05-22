//e799c28b44d07cc963ec89d2e312fc3c

$(document).ready(function(){
  $('button').on('click', function(){
    $.get('http://data.fixer.io/api/latest?access_key=e799c28b44d07cc963ec89d2e312fc3c', function(response) {
      console.log(response.rates.RUB);

      let usd = response.rates.RUB / response.rates.USD;
      console.log(usd);

      $('.EUR').text(response.rates.RUB.toFixed(4));
      $('.USD').text(usd.toFixed(4));

    });
  }) ;
});

