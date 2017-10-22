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
    this.length = 1;
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

  findMiddle(){
    let middle = Math.ceil(this.length/2);
    let currentNode = this.head;
    while(middle > 1){
      currentNode = currentNode.next;
      middle--;
    }
    return currentNode;
  }

  flatten(){
    let currentNode = this.head;
    while(currentNode){
      console.log(currentNode)
      if(currentNode.next.data){
        currentNode.next = currentNode.next.data;
      }
      currentNode = currentNode.next;
    }
    console.log('ANSSER -------------------------------------------')
  }
}

const linkedList2 = new LinkedList(1);
linkedList2.next = new LinkedList(2);
linkedList2.next.next = new LinkedList(3);

console.log(linkedList2);

const linkedList = new SinglelyLinkedList(0);
linkedList.add(linkedList2)
linkedList.add(4);
// linkedList.add(linkedList3);
// linkedList.add(linkedList4);
linkedList.flatten();
// linkedList.add(2)
// linkedList.add(3)
// linkedList.add(4)
// linkedList.add(5)
// console.log(linkedList.searchNodeAt(3))
// console.log(linkedList.remove(3));
// console.log(linkedList.findMiddle())
console.log(JSON.stringify(linkedList, null, 2));
