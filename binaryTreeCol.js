var BinaryTree = function (value) {
  this.value = value;
  this.left = this.right = null;
};

BinaryTree.prototype.findCol = function (count,obj) {
  count = count || 0;

  if(obj[count] === undefined){
    obj[count] = [this.value];
  } else {
    obj[count].push(this.value);
  }

  if(this.left){
    this.left.findCol(count - 1, obj);
  }

  if(this.right){
    this.right.findCol(count + 1, obj);
  }
  return obj;
}


var newTree = new BinaryTree(8);
newTree.left = new BinaryTree(4);
newTree.right = new BinaryTree(10);
newTree.right.right = new BinaryTree(12);
newTree.left.left = new BinaryTree(2);
newTree.right.right.left = new BinaryTree(11);

console.log(newTree.findCol(0, {}));