// current making an undirected graph
var Graph = function () {
  this.vertices = [];
  this.edges = [];
};

Graph.prototype.addVertices = function (value) {
  this.vertices.push(value);
  this.edges[value] = [];
};

Graph.prototype.addEdge = function (val1, val2) {
  if( this.vertices.includes(val1) && this.vertices.includes(val2) ){
    this.edges[val1].push(val2);
    this.edges[val2].push(val1);
  } else {
    console.log('graph does not have one or both vertices')
  }
};

Graph.prototype.deleteEdge = function (val1, val2) {
  if( this.vertices.includes(val1) && this.vertices.includes(val2) ){
    var firstEdge = this.edges[val1].indexOf(val2);
    this.edges[val1].splice(firstEdge, 1)
    var secondEdge = this.edges[val2].indexOf(val1);
    this.edges[val2].splice(secondEdge, 1)
  } else {
    console.log('graph does not have one or both vertices')
  }
};

Graph.prototype.size = function () {
  return this.vertices.length;
}




var newGraph = new Graph();
newGraph.addVertices(1);
newGraph.addVertices(2);
newGraph.addVertices(4);
newGraph.addEdge(1,4);
newGraph.addEdge(1,2);
newGraph.deleteEdge(1,4);
console.log(newGraph.edges)