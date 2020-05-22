let FirstNumber = parseFloat(prompt('Введите первое число', ''));
let SecondNumber = parseFloat(prompt('Введите второе число', ''));

if (FirstNumber === null || SecondNumber == null) {
  alert('Одно из чисел не было введено!');
}

else {
  if (!isNaN(FirstNumber) && !isNaN(SecondNumber)) {
    if (FirstNumber === SecondNumber) {
      alert(FirstNumber + '=' + SecondNumber);      
    } else if (FirstNumber > SecondNumber) {
      alert(FirstNumber + '>' + SecondNumber);
    } else {
      alert(FirstNumber + '<' + SecondNumber); 
    }
  }  
}