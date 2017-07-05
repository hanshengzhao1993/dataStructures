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


var linkedList = new SinglyList();

linkedList.add(4)
linkedList.add(5)
linkedList.add(6)
console.log(JSON.stringify(linkedList));
// SinglyList.add()
