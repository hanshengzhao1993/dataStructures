var Node = function (value) {
  this.value = value;
  this.children = [];
}


var newTree = new Node(1);
newTree.children[0] = new Node(2);
newTree.children[1] = new Node(3);
newTree.children[2] = new Node(4);
newTree.children[0].children[0] = new Node(5)
newTree.children[0].children[1] = new Node(6)
newTree.children[0].children[2] = new Node(7)

console.log(JSON.stringify(newTree, null, 2)); 