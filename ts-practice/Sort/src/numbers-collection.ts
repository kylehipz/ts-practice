import { Sorter } from './sorter';

export class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const tmp = this.data[rightIndex];
    this.data[rightIndex] = this.data[leftIndex];
    this.data[leftIndex] = tmp;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }
}
