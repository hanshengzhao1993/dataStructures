
var BinaryTree = function(value) {
  this.value = value;
  this.left = this.right = null;
};
var node = function (value) {
  return {
    value: value,
    left: null,
    right: null
  }
};

BinaryTree.prototype.addChild = function(value) {
  var recurse = function (tree, currentValue) {
    if(tree.value > currentValue) {
      if(tree.left === null) {
        tree.left = node(currentValue);
      } else {
        recurse(tree.left, currentValue);
      }
    }
    if(tree.value < currentValue) {
      if(tree.right === null) {
        tree.right = node(currentValue);
      } else {
        recurse(tree.right, currentValue);
      }
    }
  }
  recurse(this, value);
};

var BreadthFirstSearch = function(tree) {
  cb(tree.value)
  if( tree.left ){
    cb(tree.left.value)
  } 
  if( tree.right ){
    cb(tree.right.value)
  }
}


var tree1 = new BinaryTree(3);
tree1.addChild(2);
tree1.addChild(4);
// tree.addChild(1);
// tree.addChild(5);
// console.log(tree1);
// BreadthFirstSearch(tree1);
console.log(BreadthFirstSearch(tree1));

