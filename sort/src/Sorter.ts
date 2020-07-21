export abstract class Sorter {
  abstract compare(i: number, j: number): boolean;
  abstract length: number;
  abstract swap(i: number, j: number): void;
  sort(): void {
    const { length } = this;
    let unsorted = true;
    while (unsorted) {
      let unchanged = true;
      for (let i = 0; i < length - 1; i++) {
        if (this.compare(i, i + 1)) {
          this.swap(i, i + 1);
          unchanged = false;
        }
      }
      if (unchanged) {
        unsorted = false;
      }
    }
  }
}
