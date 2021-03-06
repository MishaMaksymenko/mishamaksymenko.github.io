// Object comparation
var cat = {
	name:'Vasya',
	age: 3
}

var dog = new Dog();

compareObjects(cat, dog, 'age')

function compareObjects(obj1, obj2, property) {
	var obj;
	if (obj1[property] >= obj2[property]) { obj = obj1 };
	// in case if property is not common
	if (obj1[property] <= obj2[property]) {	obj = obj2 };
	console.log(obj.name);
}

function Dog() {
	this.name = 'Bob';
	this.age = 8;
}


// Favorite song
var songs = [{name: 'One Dance', played: 7}, {name: 'Cant Stop The Feeling!', played: 21}, {name: 'Panda', played: 42}, {name: 'Dont Let Me Down', played: 4}, {name: 'This Is What You Came For', played: 4}]

function favoriteSong(songs) {
	var favoriteSong = songs[0];
	var index = 0;
	songs.forEach(function(item, i, arr) {
		if (favoriteSong.played < item.played) { favoriteSong = item; index = i }
	});
	console.log('My favorite song is "' + favoriteSong.name + '", Played ' + favoriteSong.played + ' times, Song index: ' + index)
}

// Calculator

function Calculator() {
	var currentCount = 0;
	var results = [0];
	this.add = function (number = 0) {
		currentCount += number;
		results.push(currentCount);
		return currentCount;
	};

	this.getCurrentSum = function (index) {
		if (index < results.length) { return results[index] };
		return results[results.length - 1];
	}
}

var calc1 = new Calculator();
var calc2 = new Calculator();

calc1.add(3);
calc1.add(8);
calc1.add(11);

calc2.add(5);
calc2.add(12);
calc2.add(17);

console.log(calc1.getCurrentSum() + calc2.getCurrentSum());
console.log(calc1.getCurrentSum(2) + calc2.getCurrentSum(2));
console.log(calc2.getCurrentSum() + '=' + calc2.getCurrentSum(3));


// Cars
function Garage() {
	var self = this;
	this.cars = [];
	this.addCar = function(car) { self.cars.push(car) };
	this.getCar = function(index) { return self.cars[index] };
	this.count = function() { return self.cars.length };
}

function Car(model, manufacturer, price) {
	this.model = model;
	this.manufacturer = manufacturer;
	this.price = price;
}

function Buyer(garage, budget) {
	var self = this;
	this.garage = garage;
	this.budget = budget;
	this.getBudget = function() { return self.budget };
	this.buyCar = function(car) {
		if (self.budget <= car.price) {
			alert("error: can't buy this car");
			return
		}
		self.budget -= car.price;
		self.garage.addCar(car);
	}
}

function showRoom(buyer) {
	for (var i = 1; i <= 10; i++) {
		var model = 'model' + i;
		var manufacturer = 'manufacturer' + i;
		var randomPrice = Math.floor(Math.random() * (180000 - 60000 + 1)) + 60000;
		var randomCar = new Car(model, manufacturer, randomPrice);
		buyer.buyCar(randomCar);
	}
}

var myGarage = new Garage();
var myBuyer = new Buyer(myGarage, 560000);

showRoom(myBuyer);

console.log(myBuyer.garage.cars);