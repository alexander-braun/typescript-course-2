class Vehicle {
  constructor(public color: string) {}
  private speed(): void {
    console.log('fast');
  }
  protected honk(): void {
    console.log('beep');
    this.speed();
  }
}

const vehicle = new Vehicle('blue');
//vehicle.speed()
//vehicle.honk()
console.log(vehicle.color);

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log('vroom');
  }
  startDrivingProcess(): void {
    this.drive();
    this.honk();
    console.log(this.color);
    console.log(this.wheels);
  }
}
const car = new Car(20, 'red');
car.startDrivingProcess();

// ts-node classes.ts
