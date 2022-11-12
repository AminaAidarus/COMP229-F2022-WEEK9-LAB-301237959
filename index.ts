g//javascript vriables

var person = "Amina"; //string
let animals = []; //array

//animals = person // valid javascript

//Typescript variables

let lastName: any = "Jane"; // convert variable type to any type like javascript
let firstName: string = "John";
let height: number = 6;
let isDone: boolean = false;

//firstName = height; // invalid typescript
lastName = height;

// OO Typescript Features

//interfaces
interface IVehicle {
    wheels: number;
    engine: string;
    drive();
}

//classes
class Car implements IVehicle {
     wheels: number;
     engine:string;

    //Constructor
    constructor(wheels: number, engine:string){
     this.wheels = wheels;
     this.engine = engine;
    }

    drive() {
        console.log('Driving...');
    }
}

let myCar = new Car(4, 'v8');
myCar.drive();