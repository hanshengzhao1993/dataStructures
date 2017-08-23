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
  searchNodeAt(position){
    let currentNode = this.head;
    let message = {failure: 'Failure: non-existent node in this list.'};
    let count = 1;

    if(this.length === 0 || position < 1|| position > this.length){
      console.log(message.failure);
      return;
    }

    while(count < position){
      currentNode = currentNode.next;
      count++;
    }

    return currentNode;
  }

  remove(position){
    let currentNode = this.head;
    let message = {failure: 'Failure: non-existent node in this list.'};
    let count = 1;
    if(position < 0 || position > this.length){
      console.log(message.failure);
      return;
    }
    while(count < position){
      currentNode = currentNode.next;
      count++;
      if( count + 1 === position ){
        let deleteNode = currentNode.next;
        currentNode.next = deleteNode.next;
        return deleteNode;
      }
    }
  }
}

const linkedList = new SinglelyLinkedList(1);
linkedList.add(2)
linkedList.add(3)
linkedList.add(4)
console.log(linkedList.remove(3));
console.log(JSON.stringify(linkedList));
