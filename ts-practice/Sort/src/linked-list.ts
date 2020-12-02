import { Sorter } from './sorter';

export class node {
  next: node | null = null;

  constructor(public data: number) {}
}

export class LinkedList extends Sorter {
  constructor() {
    super();
  }
  head: node | null = null;

  add(value: number) {
    const newNode = new node(value);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let tail = this.head;

    while (tail.next) {
      tail = tail.next;
    }

    tail.next = newNode;
  }

  get length(): number {
    if (!this.head) {
      return 0;
    }

    let length = 1;
    let tail = this.head;

    while (tail.next) {
      length++;
      tail = tail.next;
    }

    return length;
  }

  at(index: number): node {
    if (!this.head) {
      throw new Error('Index out of bounds');
    }

    let ctr = 0;

    let tail: node | null = this.head;

    while (tail) {
      if (ctr === index) {
        return tail;
      }

      ctr++;
      tail = tail.next;
    }

    throw new Error('Index out of bounds');
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const tmp = this.at(rightIndex).data;
    this.at(rightIndex).data = this.at(leftIndex).data;
    this.at(leftIndex).data = tmp;
  }

  showData(): void {
    if (!this.head) {
      console.log([]);
      return;
    }

    let lst = [];

    let tail: node | null = this.head;

    while (tail) {
      lst.push(tail?.data);

      tail = tail.next;
    }

    console.log(lst);
  }
}
