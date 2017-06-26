var traverseDom = function (node, targetNode) {
  if(node.isEqualNode(targetNode)){
    return node;
  } else {
    var ans = null;
    for(var i = 0; i< node.children.length; i++){
      ans = traverseDom(node.children[i], targetNode);
    }
    return ans;
  }
}