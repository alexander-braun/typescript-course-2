const carMakers = ['ford', 'toyota', 'chevy'];
const emptyArr: string[] = [];
const dates = [new Date(), new Date()];
const carsByMake = [['f150'], ['corola'], ['camaro']];

//Help with inference when extracting values
const car1 = carMakers[0];
const myCar = carMakers.pop();

//Prevent incompatible values
// -> carMakers.push(100);

//Help with map
carMakers.map((car): string => {
  return car.toUpperCase();
});

//Flexible types
const importantDates = [new Date(), '2030-10-10'];
const datesOther: (Date | string)[] = [];
importantDates.push('january 20th');
importantDates.push(new Date());
