//javascript vriables
var person = "Amina"; //string
var animals = []; //array
//animals = person // valid javascript
//Typescript variables
var lastName = "Jane"; // convert variable type to any type like javascript
var firstName = "John";
var height = 6;
var isDone = false;
//firstName = height; // invalid typescript
lastName = height;
//classes
var Car = /** @class */ (function () {
    //Constructor
    function Car(wheels, engine) {
        this.wheels = wheels;
        this.engine = engine;
    }
    Car.prototype.drive = function () {
        console.log('Driving...');
    };
    return Car;
}());
var myCar = new Car(4, 'v8');
myCar.drive();
