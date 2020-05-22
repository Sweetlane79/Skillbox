
let numArray = ['number', 1, 2, true, 'my name is Lenny', false];
let blnArray = ['boolean', 1, 2, true, 'my name is Lenny', false];
let strArray = ['string', 1, 2, true, 'my name is Lenny', false];
let objArray = ['object', 1, 2, true, 'my name is Lenny', false, someobj = {someparam: 'value'}];


function filterByType(array) {
  const filteredArray = array.filter((arrayEl, i) => typeof(arrayEl) === array[0] && i) 
  return filteredArray;
}

console.log('Выводим массив из чиселовых элементов');
let filteredArray = filterByType(numArray);
console.log(filteredArray);

console.log('');

console.log('Выводим массив из логических элементов');
filteredArray = filterByType(blnArray);
console.log(filteredArray);

console.log('');

console.log('Выводим массив из строчных элементов');
filteredArray = filterByType(strArray);
console.log(filteredArray);

console.log('');

console.log('Выводим массив из объектов');
filteredArray = filterByType(objArray);
console.log(filteredArray);