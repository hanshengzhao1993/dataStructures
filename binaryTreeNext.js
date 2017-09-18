var BinaryTree = function (value) {
  this.value = value;
  this.left = this.right = null;
};

BinaryTree.prototype.setNext = function () {
  var currenNode = this;
  var queue = [this, null];
  while(queue.length){
    var firstNode = queue.shift();
    if(firstNode === null){
      queue.push(null);
      if(queue[0] === null){
        return;
      }
    } else {
      if(firstNode.left){
        queue.push(firstNode.left)
      }
      if(firstNode.right){
        queue.push(firstNode.right)
      }
      firstNode.next = queue[0];
    }
  }
}

var newTree = new BinaryTree(8);
newTree.left = new BinaryTree(4);
newTree.right = new BinaryTree(10);
newTree.right.right = new BinaryTree(12);
newTree.left.left = new BinaryTree(2);
newTree.right.right.left = new BinaryTree(11);

console.log(newTree.setNext());
console.log(newTree);