'use strict';

class LinkedList{
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class SinglelyLinkedList {
  constructor(data){
    let node = new LinkedList(data);
    this.head = node;
    this.length = 0;
  }
  add(data){
    let node = new LinkedList(data);
    let currentNode = this.head;
    if(!this.head){
      this.head = node;
      this.length++;
      return node;
    }
    while(currentNode.next){
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    this.length++;
    return node;
  }
  searchNode(data){}
}

const linkedList = new SinglelyLinkedList(1);
linkedList.add(2)
linkedList.add(3)

console.log(linkedList);
console.log(JSON.stringify(linkedList, null, 2));