import { Sorter } from './Sorter';

export class CharactersCollection extends Sorter {
  data: string;
  constructor(data: string) {
    super();
    this.data = data;
  }
  swap(i: number, j: number): void {
    const arr = this.data.split('');
    const temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
    this.data = arr.join('');
  }
  get length(): number {
    return this.data.length;
  }
  compare(i: number, j: number): boolean {
    return this.data[i].toLowerCase() > this.data[j].toLowerCase();
  }
}
