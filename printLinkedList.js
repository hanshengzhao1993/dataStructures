function Node(data) {
  this.data = data;
  this.next = null;
}

function SinglyList() {
  this.head = null;
}

var linkedList = new SinglyList();
linkedList.head = new Node(3);
linkedList.head.next = new Node(5);
linkedList.head.next.next = new Node(7);
console.log(JSON.stringify(linkedList,null, 2))