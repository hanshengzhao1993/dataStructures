function Node(data) {
  this.data = data;
  this.next = null;
}

function SinglyList() {
  this.head = null;
}

SinglyList.prototype.printList = function (linkedList) {
  var stack = [];
  stack.push(this.head)
  while(stack.length){
    var holder = stack.pop();
    if(holder.next){
      stack.push(holder.next)
    }
    console.log(holder.data);
  }
}

var linkedList = new SinglyList();
linkedList.head = new Node(3);
linkedList.head.next = new Node(5);
linkedList.head.next.next = new Node(7);
linkedList.printList();