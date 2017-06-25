function ListNode(val) {
  this.value = val;
  this.next = null;
}
var addTwoNumbers = function(l1, l2) {
  var tempHolder = 0;
  var node1 = l1;
  var node2 = l2;
  var nodeHolder = [];
  var newList = null;
    // var recurse = function (node1, node2, addedNode) {
        
    // }
    while(node1 && node2){
        console.log(node1, node2)
        var addedValue = node1.value + node2.value;
        if(addedValue > 10){
            if(tempHolder > 0){
                var currentNode = new ListNode((addedValue % 10) + tempHolder);  
                nodeHolder.push(currentNode)
                node1 = node1.next;
                node2 = node2.next;
            } else {
                var currentNode = new ListNode(addedValue % 10);  
                nodeHolder.push(currentNode)
                node1 = node1.next;
                node2 = node2.next;
            }
        }else {
            if(tempHolder > 0){
                if(addedValue + 1 === 10){
                    var currentNode = new ListNode(0);
                    nodeHolder.push(currentNode);
                    node1 = node1.next;
                    node2 = node2.next;
                } else {
                    var currentNode = new ListNode(addedValue + 1);
                    nodeHolder.push(currentNode);
                    node1 = node1.next;
                    node2 = node2.next;
                }
            } else {
                var currentNode = new ListNode(addedValue);
                nodeHolder.push(currentNode);
                node1 = node1.next;
                node2 = node2.next;
            }
        }
    }

    for(var i = 0; i< nodeHolder.length - 1; i++){
        nodeHolder[i].next = nodeHolder[i+1];
    }

    return nodeHolder[0];
};


var node1 = new ListNode(4);
// node1.next = 5;
node1.next = new ListNode(3);
node1.next.next = new ListNode(2);


var node2 = new ListNode(3);
node2.next = new ListNode(7);
node2.next.next = new ListNode(2)



console.log(node1);
console.log(node2);

console.log(addTwoNumbers(node1, node2));