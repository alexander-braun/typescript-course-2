// Type Inference : Declaration on one line -> typescript does the type assigning for us
// Type Annotation: Declaration somewhere else -> we are assigning a type

//Inference -> use wherever possible

// Annotation:
let apples;
apples = 5;
// Inference:
let speed: string = 'fast';

//
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

//Built in objects
let now: Date = new Date();

//Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3, 4];
let myBools: boolean[] = [true, false, true];

//Classes
class Car {}
let car: Car = new Car();

//Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

//Function
const logNumber: (i: number) => void = (i) => {
  console.log(i);
};

//When to use annotations
//1) Function that returns any type f.e. JSON.parse()
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

//2) Declaring variable and initializing it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;
for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}
console.log(foundWord);

//3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: number | boolean = false;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
console.log(numberAboveZero);
