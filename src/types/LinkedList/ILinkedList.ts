import { Node } from "./Node";

export interface ILinkedList<T> {
  getListLength(): number
  insertInStart(data: T): void;
  insertAtEnd(data: T): void;
  insertByIndex(data: T, index: number = 0): void;
  deleteHead(): void;
  deleteTail(): void;
  deleteByIndex(index: number = 0): void;
  map(callBack: (elem: Node<T>) => never): void;
  print(): void;
}
