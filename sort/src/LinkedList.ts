import { Sorter } from './Sorter';

class Node {
  next: Node | null = null;
  constructor(public data: number) {}
}

export class LinkedList extends Sorter {
  head: Node | null = null;

  add(data: number): void {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      return;
    }
    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }
    tail.next = node;
  }

  get length(): number {
    if (!this.head) return 0;
    let node = this.head;
    let length = 1;
    while (node.next) {
      node = node.next;
      length++;
    }
    return length;
  }

  at(index: number): Node {
    if (!this.head) throw new Error('Index out of bounds');
    let indexNow = 0;
    let node: Node | null = this.head;
    while (node) {
      if (indexNow === index) {
        return node;
      }
      indexNow++;
      node = node.next;
    }
    throw new Error('Index out of bounds');
  }

  compare(i: number, j: number): boolean {
    if (!this.head) throw new Error('List is empty');
    return this.at(i).data > this.at(j).data;
  }

  swap(i: number, j: number): void {
    const leftNode = this.at(i);
    const rightNode = this.at(j);
    const leftValue = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = leftValue;
  }

  print(): void {
    if (!this.head) return;
    let node: Node | null = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}
