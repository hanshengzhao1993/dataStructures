'use strict';

var Node = function(value){
  this.value = value;
  this.next = null;
  this.previous = null;
}

var DoubleLinkedList = function (){
  this.size = 0;
  this.head = null;
  this.tail = null;
}

DoubleLinkedList.prototype.setHead = function(value){
  var node = new Node(value);
  if(this.head === null && this.tail ===null){
    this.head = node;
    this.tail = node;
    this.size++;
  } else {
    if(this.size === 1){
      var oldHead = this.head;
      this.head = node;
      this.head.next = oldHead;
      this.tail.previous = this.head;
      this.size++;
    } if(this.size === 2) {
      var oldHead = this.head;
      var oldHeadNext = this.head.next;
      this.head = node;
      this.head.next = oldHead;
      oldHead.next = oldHeadNext;
      this.size++;
    } if(this.size > 2){
      // 

    }
  }
}

DoubleLinkedList.prototype.replaceHead = function (value) {
  var currentNode = this.head;
  if( currentNode.value === value ){
    return;
  } else {
    while( currentNode.value !== value ){
      currentNode = currentNode.next;
    }
    console.log(currentNode);
  }
};




var linkedList = new DoubleLinkedList();
linkedList.setHead(1);
linkedList.setHead(2);
linkedList.setHead(3);
linkedList.setHead(4);
// linkedList.setHead(5);
// linkedList.replaceHead(3);
console.log(linkedList);
// console.log(linkedList.head.value);
// console.log(linkedList.head.next);
// console.log(linkedList.head.next.next.value);
// console.log(linkedList.head.next.next.next);


