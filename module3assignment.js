//Assignment no 1

function printObjectProperties(obj) {
  if (Object.keys(obj).length === 0) {
    console.log("Object is empty");
  } else {
    for (let prop in obj) {
      console.log(`${prop}: ${obj[prop]}`);
    }
  }
}

const person = {
  name: "John",
  age: 30,
  city: "New York"
};

const emptyObj = {};

printObjectProperties(person);
printObjectProperties(emptyObj);





//Assinment no2.

function findMaxNumber(numbers) {
    if (numbers.length === 0) {
      return null;
    } else {
      let max = numbers[0];
      for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
          max = numbers[i];
        }
      }
      return max;
    }
  }
  
  const numbers1 = [10, 20, 5, 30, 25];
  console.log(findMaxNumber(numbers1)); 
  
  const numbers2 = [5, 15, 7];
  console.log(findMaxNumber(numbers2)); 
  
  const emptyArray = [];
  console.log(findMaxNumber(emptyArray)); 


  //Assignment 3

  const arr1=[1,2,3];
  const arr2=[4,5,6];

  function mergeArrays(arr1,arr2){
    return [...arr1,...arr2]
  }
  console.log(mergeArrays(arr1, arr2));

  //Assignment 4



  const calculateSquare = (number) => {
    return number * number;
  };
  
  console.log(calculateSquare(5)); 
  console.log(calculateSquare(8)); 

  const numbers = [1, 2, 3, 4, 5];


 

  //Assignment 5

  function doubleNumbers(numbers){
    return numbers.map(number=>number*2);
 }

 console.log(doubleNumbers(numbers));




  

//Assignment 6

class MathUtility {
  static multiply(a, b) {
    return a * b;
  }
}

console.log(MathUtility.multiply(5, 3)); 


console.log(MathUtility.multiply(2, 8)); 




//Assignment 7

class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  makeSound() {
    console.log(this.sound);
  }
}

class Dog extends Animal {
  fetch() {
    console.log("Fetching the ball!");
  }
}

const animal = new Animal("Lion", "Roar");
animal.makeSound(); 

const dog = new Dog("Buddy", "Woof");
dog.makeSound(); 
dog.fetch(); 

//Assignment 8
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  introduce() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. I am majoring in ${this.major}.`);
  }
}

const person1 = new Person("John", 30);
person1.introduce(); 

const student1 = new Student("Alice", 20, "Computer Science");
student1.introduce(); 



