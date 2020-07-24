import 'reflect-metadata';

const plane = {
  color: 'red',
};

//Associate to object
Reflect.defineMetadata('note', 'hi there', plane);
Reflect.defineMetadata('height', 10, plane);
//Associate to object property
Reflect.defineMetadata('val', 'hi there', plane, 'color');

const note = Reflect.getMetadata('note', plane);
const height = Reflect.getMetadata('height', plane);
const val = Reflect.getMetadata('val', plane, 'color');

console.log(note, height, val);

@controller
class Plane {
  color: string = 'red';

  @get('/login')
  fly() {
    console.log('vrrrrr');
  }
}

function get(path: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata('path', path, target, key);
  };
}

function controller(target: typeof Plane) {
  for (const key in target.prototype) {
    const path = Reflect.getMetadata('path', target.prototype, key);
    //router.get(path, target.prototype[key])
    console.log(path);
  }
}

//ts-node metadata.ts
