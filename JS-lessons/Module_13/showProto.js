'use strict'
//Класс для создания транспортного средства
class VehicleClass {
  constructor(parameters) {
    this.brand = parameters.brand;
    this.model = parameters.model;
    this.price = parameters.price;
  }

  showPassangerAmount(passengerAmount) {
    console.log(this.type + ' ' + this.brand + ' ' + this.model + ' перевозит до ' + passengerAmount + ' пассажиров');
  }
}

//Класс для создания дочернего элемента Car
class CarClass extends VehicleClass {
  constructor(parameters) {
    super(parameters);

    this.type = 'Автомобиль';
    this.passengerAmount = parameters.passengerAmount;
  }

  showFuelInfo() {
    console.log(this.brand + ' ' + this.model + ' можно заправить дизелем');
  }
}

//Класс для дочернего элемента Plane
class PlaneClass extends VehicleClass {
  constructor(parameters) {
    super(parameters);

    this.type = 'Самолет';
    this.passengerAmount = parameters.passengerAmount;
  }

  showMaxDistance(distance) {
    console.log('Максимальная дистаниця полета ' + this.brand + ' ' + 
    this.model + ' - ' + distance + 'км');
  }
}

//Класс для дочернего элемента Ship
class ShipClass extends VehicleClass{
  constructor(parameters) {
    super(parameters);
  }

  showPassangerAmount(guestAmount) {
    console.log('Количество спальных мест для гостей - ' + guestAmount);
  }

  showFuelSupply(fuelSupply) {
    console.log(this.model + ' имеет запас топлива в ' + fuelSupply + 'л');
  }
}

let newCar = new CarClass ({
  brand: 'Volvo',
  model: 'XC90',
  price: '4405000 рублей',
  passengerAmount: 5
});

let newPlane = new PlaneClass ({
  brand: 'Boeing',
  model: '787 Dreamliner',
  price: '338.4 млн долларов',
  passengerAmount: 234
});

let newShip= new ShipClass ({
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








