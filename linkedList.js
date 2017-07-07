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

  // check if head exists
  if(!this.head){
    this.head = node;
    this.length++;
  } else {
    // if head doesnt exist go until there the node is null
    while(currentNode.next){
      currentNode = currentNode.next;
    }
    // console.log('what is node', node);
    currentNode.next = node;
    this.length++;
  }
};

SinglyList.prototype.find = function (value) {
  var currentNode = this.head
  if(currentNode.value === value){
    return currentNode;
  } else {
    while(currentNode){
      if(currentNode.value === value){
        return currentNode;
      } else {
        currentNode = currentNode.next;
      }
    }
    return null;
  }
}

// SinglyList.prototype.remove = function (value){
//   var currentNode = this.head;
//   if(value = currentNode.value){
//     this.head = currentNode.next;
//   }
// }

SinglyList.prototype.remove = function(position) {
    var currentNode = this.head,
        length = this._length,
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
};


var linkedList = new SinglyList();

linkedList.add(4)
linkedList.add(5)
// linkedList.add(6)
linkedList.remove(4)
// console.log(linkedList.find(7));
console.log(JSON.stringify(linkedList, null, 2));
// SinglyList.add()
