var BinaryTree = function (value) {
  this.value = value;
  this.left = this.right = null;
};


BinaryTree.prototype.levelSums = function () {
  var ans = [];
  var queue = [this, null];
  var currentLevel = 0;
  while(queue.length){
    var shiftedNode = queue.shift();


    if( shiftedNode === null ){
      queue.push(null);
      if(queue[0] === null){
        return ans;
      }
      ans.push(currentLevel);
      currentLevel = 0;
    } else {
      currentLevel += shiftedNode.value;

      if(shiftedNode.left){
        queue.push(shiftedNode.left)
      }
      if(shiftedNode.right){
        queue.push(shiftedNode.right);
      }
    }

  }
}


var newTree = new BinaryTree(8);
newTree.left = new BinaryTree(4);
newTree.right = new BinaryTree(10);
newTree.right.right = new BinaryTree(12);
newTree.left.left = new BinaryTree(2);
newTree.right.right.left = new BinaryTree(11);
console.log(newTree)
console.log(newTree.levelSums())