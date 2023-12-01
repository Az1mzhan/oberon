import { INode } from "./INode";

export class Node<T> implements INode<T> {
  private data: T;
  private next: Node<T>;

  constructor(data: T) {
    this.data = data;
    this.next = null as Node<T>;
  }

  public getData = (): T => this.data;

  public setData = (data: T): void => {
    this.data = data;
  };

  public getNext = (): Node<T> => this.next;

  public setNext = (node: Node<T>): void => {
    this.next = node;
  };

  public hasNext = (): boolean => this.getNext() !== (null as Node<T>);
}
