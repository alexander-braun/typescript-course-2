@classDecorator
class Boat {
  color: string = 'red';

  @testDecorator
  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  @logErrorFactory('Pilot error')
  pilot(
    @parameterDecorator speed: string,
    @parameterDecorator generateWake: boolean
  ): void {
    if (speed === 'fast') {
      console.log('swish');
    } else console.log('nothing');
  }
}

function classDecorator(constructor: typeof Boat) {
  console.log(constructor);
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log(key, index);
}

function logError(target: any, key: string, desc: PropertyDescriptor): void {
  const method = desc.value;
  desc.value = function () {
    try {
      method();
    } catch (err) {
      console.log('error!!! boat sunk!');
    }
  };
}

function logErrorFactory(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;
    desc.value = function () {
      try {
        method();
      } catch (err) {
        console.log(errorMessage);
      }
    };
  };
}

function testDecorator(target: any, key: string) {
  console.log(key);
}

const boat = new Boat();
boat.pilot('fast', true);

//ts-node decorators.ts
