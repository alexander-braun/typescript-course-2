export class Random {
  size: number;

  constructor(size: number) {
    this.size = size;
  }

  generateNumbers(): number[] {
    const output: number[] = [];
    for (let i = 0; i < this.size; i++) {
      let random = +Math.random().toString()[5];
      let negative = +Math.random().toString()[5];
      if (negative > 4) {
        output.push(-random);
      } else output.push(random);
    }
    return output;
  }

  generateString(): string {
    let str = '';
    for (let i = 0; i < this.size; i++) {
      const randomNumber1 = String.fromCharCode(Math.random() * (90 - 65) + 65);
      const randomNumber2 = String.fromCharCode(
        Math.random() * (122 - 97) + 97
      );
      const num1Ornum2 =
        +Math.random().toString()[5] > 4 ? randomNumber1 : randomNumber2;
      str += num1Ornum2;
    }
    return str;
  }
}
