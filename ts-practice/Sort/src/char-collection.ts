import { Sorter } from './sorter';

export class CharacterCollection extends Sorter {
  constructor(public data: string) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const splitted = this.data.split('');

    const tmp = splitted[rightIndex];
    splitted[rightIndex] = splitted[leftIndex];
    splitted[leftIndex] = tmp;

    this.data = splitted.join('');
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }
}
