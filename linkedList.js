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

SinglyList.prototype.remove = function (value) {
   var currentNode = this.head,
        length = this.length,
        count = 0,
        message = {failure: 'Failure: non-existent node in this list.'},
        beforeNodeToDelete = null,
        nodeToDelete = null,
        deletedNode = null;
 
    // 1st use-case: an invalid position
    if (position < 0 || position > length) {
        throw new Error(message.failure);
    }
 
    // 2nd use-case: the first node is removed
    if (position === 1) {
        this.head = currentNode.next;
        deletedNode = currentNode;
        currentNode = null;
        this._length--;
         
        return deletedNode;
    }
 
    // 3rd use-case: any other node is removed
    while (count < position) {
        beforeNodeToDelete = currentNode;
        nodeToDelete = currentNode.next;
        count++;
    }
 
    beforeNodeToDelete.next = nodeToDelete.next;
    deletedNode = nodeToDelete;
    nodeToDelete = null;
    this._length--;
 
    return deletedNode;
}


