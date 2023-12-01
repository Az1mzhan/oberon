import { Node } from "./Node";
import { ILinkedList } from "./ILinkedList";

export class LinkedList<T> implements ILinkedList<T> {
  private head: Node<T>;

  constructor(data: Array<T>) {
    const nodesArray: Array<Node<T>> = new Array<Node<T>>();

    data.forEach((elem) => {
      const node: Node<T> = new Node<T>(elem);
      nodesArray.push(node);
    });

    for (let i = data.length - 1; i >= 1; --i)
      nodesArray[i - 1].setNext(nodesArray[i]);

    this.head = nodesArray[0];
  }

  public getListLength = (): number => {
    let len = 0;
    let currentNode: Node<T> = this.head;

    while (currentNode.hasNext()) {
      len++;
      currentNode = currentNode.getNext();
    }

    return len;
  };

  public insertInStart = (data: T): void => {
    const node: Node<T> = new Node<T>(data);

    if (this.head === (null as Node<T>)) {
      this.head = node;
      return;
    }

    node.setNext(this.head);
    this.head = node;
  };

  public insertAtEnd = (data: T): void => {
    const node: Node<T> = new Node<T>(data);

    if (this.head === (null as Node<T>)) {
      this.head = node;
      return;
    }

    let lastNode: Node<T> = this.head;

    while (lastNode.hasNext()) {
      lastNode = lastNode.getNext();
    }

    lastNode.setNext(node);
  };

  public insertByIndex = (data: T, index = 0): void => {
    if (index >= this.getListLength()) {
      console.log("The index is out of the linked list's size bounds.");
      return;
    }

    if (index === 0) {
      this.insertInStart(data);
      return;
    }

    const node: Node<T> = new Node<T>(data);

    if (this.head === (null as Node<T>)) {
      this.head = node;
      return;
    }

    let secondNodesSlice: Node<T> = this.head;

    for (let i = 0; i < index; ++i)
      secondNodesSlice = secondNodesSlice.getNext();

    node.setNext(secondNodesSlice);

    let firstNodesSlice: Node<T> = this.head;
    let count = index - 1;

    while (count !== 0) {
      for (let i = 0; i < count; ++i)
        firstNodesSlice = firstNodesSlice.getNext();
      count--;
    }

    firstNodesSlice.setNext(node);
  };

  public deleteHead = (): void => {
    this.head = this.head.getNext();
  };

  public deleteTail = (): void => {
    const len: number = this.getListLength();
    let lastNode: Node<T>;
    let tempNode: Node<T> = this.head;

    for (let i = 0; i < len - 2; ++i) {
      for (let j = 0; j < len - i - 2; ++j)
        tempNode = tempNode.getNext();
      tempNode.setNext(null as Node<T>);
      lastNode = tempNode;
      tempNode = this.head;
    }
  };

  public deleteByIndex = (index = 0) => {
    if (index >= this.getListLength()) {
      console.log("The index is out of the linked list's size bounds.");
      return;
    }

    if (index === 0) {
      this.deleteHead();
      return;
    }

    let secondNodesSlice: Node<T> = this.head;

    for (let i = 0; i <= index; ++i)
      secondNodesSlice = secondNodesSlice.getNext();

    let firstNodesSlice: Node<T> = this.head;
    let tempNode: Node<T>;

    for (let i = 0; i < index - 1; ++i)
      for (let j = 0; j < index - i - 1; ++i) {
        firstNodesSlice = firstNodesSlice.getNext();
        firstNodesSlice.setNext(secondNodesSlice);
      }
  };

  public map = (callBack: (elem: Node<T>) => never) => {
    let currentNode: Node<T> = this.head;

    while (currentNode.hasNext()) {
      callBack(currentNode);
      currentNode = currentNode.getNext();
    }
  };

  public print = (): void => {
    let node: Node<T> = this.head;
    let count = 1;

    while (node.hasNext()) {
      console.log(`Node ${count}: ${node.getData()}`);
      count++;
      node = node.getNext();
    }
  };
}
