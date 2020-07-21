import { Sorter } from './Sorter';

export class NumbersCollection extends Sorter {
  data: number[];
  constructor(data: number[]) {
    super();
    this.data = data;
  }
  compare(i: number, j: number): boolean {
    return this.data[i] > this.data[j];
  }
  swap(i: number, j: number): void {
    const temp = this.data[i + 1];
    this.data[i + 1] = this.data[i];
    this.data[i] = temp;
  }
  get length(): number {
    return this.data.length;
  }
}
