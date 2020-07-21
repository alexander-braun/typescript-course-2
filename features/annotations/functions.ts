const add = (a: number, b: number): number => {
  return a + b;
};

//Don't use type inference for functions:
//Type inference doesn't reflect the intention
//of the code
const subtract = (a: number, b: number) => {
  a - b;
};

//Annonymous functions:
function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

//Void and never
const logger = (message: string): void => {
  console.log(message);
};

const throwError = (message: string): never => {
  throw new Error(message);
};

//Destructuring
const forecast = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};
logWeather(forecast);

//-> descructured
const logWeather2 = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};
logWeather2(forecast);
