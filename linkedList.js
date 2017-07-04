var Node = function (value) {
  this.value = value;
  this.next = null;
};

var SinglyList = function () {
  this.length = 0;
  this.head = null;
};

SinglyList.prototype.add = function(value) {
  var node = new Node(value);
  var currentNode = this.head;

  // check if head is null
  if(!currentNode){
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
};


