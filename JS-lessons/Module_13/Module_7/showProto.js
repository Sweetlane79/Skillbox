//Функция-конструктор для создание транспортного средтсва 
let Vehicle = function(parameters) {
  this.brand = parameters.brand;
  this.model = parameters.model;
  this.price = parameters.price;
}

Vehicle.prototype.showPassangerAmount = function(passengerAmount) {
  console.log(this.type + ' ' + this.brand + ' ' + this.model + ' перевозит до ' + passengerAmount + ' пассажиров');
}

//Функции-конструкторы для дочернего элемента Car
let Car = function(parameters) {
  Vehicle.apply(this, arguments);

  this.type = 'Автомобиль';
  this.passengerAmount = parameters.passengerAmount;
}

//присваеваем методы родителя дочернему элементу Car
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Vehicle;

Car.prototype.showFuelInfo = function() {
  console.log(this.brand + ' ' + this.model + ' можно заправить дизелем');
}

//Функции-конструкторы для дочернего элемента Plane
 let Plane = function(parameters) {
  Vehicle.apply(this, arguments);

  this.type = 'Самолет';
  this.passengerAmount = parameters.passengerAmount;
}

//присваеваем методы родителя дочернему элементу Plane
Plane.prototype = Object.create(Vehicle.prototype);
Plane.prototype.constructor = Vehicle;

Plane.prototype.showMaxDistance = function(distance) {
  console.log('Максимальная дистаниця полета ' + this.brand + ' ' + 
              this.model + ' - ' + distance + 'км');
}

//Функции-конструкторы для дочернего элемента Ship
let Ship = function(parameters) {
  Vehicle.apply(this, arguments);
  
  this.type = 'Яхта';
  this.passengerAmount = parameters.passengerAmount;
}

//присваеваем методы родителя дочернему элементу Ship
Ship.prototype = Object.create(Vehicle.prototype);
Ship.prototype.constructor = Vehicle;

Ship.prototype.showPassangerAmount = function(guestAmount) {
  console.log('Количество спальных мест для гостей - ' + guestAmount);
}

Ship.prototype.showFuelSupply = function(fuelSupply) {
  console.log(this.model + ' имеет запас топлива в ' + fuelSupply + 'л');
}

let newCar = new Car({
  brand: 'Volvo',
  model: 'XC90',
  price: '4405000 рублей',
  passengerAmount: 5
});

let newPlane = new Plane({
  brand: 'Boeing',
  model: '787 Dreamliner',
  price: '338.4 млн долларов',
  passengerAmount: 234
});

let newShip= new Ship({
  brand: 'Shipman',
  model: 'Shipman 100',
  price: 'Цена по запросу',
  passengerAmount: 6
})

console.log('Информация про автомобиль ' + newCar.brand + ' ' + newCar.model)
newCar.showPassangerAmount(newCar.passengerAmount);
newCar.showFuelInfo();

console.log('');

console.log('Информация про самолет ' + newPlane.brand + ' ' + newPlane.model)
newPlane.showPassangerAmount(newPlane.passengerAmount);
newPlane.showMaxDistance(15200);

console.log('');

console.log('Информация про яхту ' + newShip.model)
//Так как showPassangerAmount() существует в Ship, то метод родител Vehicle с таким же имененм не будет вызван
newShip.showPassangerAmount(newShip.passengerAmount);
newShip.showFuelSupply(1500);








