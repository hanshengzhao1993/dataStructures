var TreeNode = function(value){
  this.value = value;
  this.left = null;
  this.right = null;
}

var palindrome = function (str) {
if(str.length % 2 === 0){
  for(var i = 0; i < str.length; i++){
    if(str[i] !== str[str.length - 1 - i]){
      return false;
    }
  }return true;
} else {
  for(var i = 0; i < (str.length / 2) - 1; i++){
    if(str[i] !== str[str.length - 1 - i]){
      return false;
    }
    }return true;
  }
}

var treePalindrome = function (tree) {
  var stack = [];
  stack.push(tree.left);
  stack.push(tree.right);
  while(stack.length){
    if(!palindrome(stack)){
      return false;
    } else {
      stack.push(null);
      var popped = stack.pop();
      while(stack.pop() !== null){
        stack.pop
      }
    }
  }
};


var newTree = new TreeNode(1);
newTree.left = new TreeNode(2);
newTree.left.left = new TreeNode(1);
newTree.left.right = new TreeNode(2);

newTree.right = new TreeNode(2);
newTree.right.left = new TreeNode(2);
newTree.right.right = new TreeNode(1);
