let clikcsCount = 0;

document.addEventListener("DOMContentLoaded", function() {
  const newBtn = document.createElement('button');
  function setAttributes(el, attrs) {
    for(var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }

  setAttributes(newBtn, {'class': 'imported-button', 'type': 'button'});
  newBtn.innerHTML = '0 Clicks';
  const bodyEl = document.querySelector('body');
  bodyEl.appendChild(newBtn);
});

window.onload = function() {
  const buttonEl = document.querySelector('.imported-button');

  buttonEl.addEventListener('click', function() {
    clikcsCount++;

    if (clikcsCount !== 1) {
      buttonEl.innerHTML = `${clikcsCount} Clicks`;
    } else {
      buttonEl.innerHTML = `${clikcsCount} Click`;
    }
  })

}