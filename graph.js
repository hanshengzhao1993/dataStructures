// current making an undirected graph
var Graph = function () {
  this.vertices = [];
  this.edges = [];
  this.numberOfEdges = 0;
};

Graph.prototype.addVertices = function (value) {
  this.vertices.push(value);
  this.edges[value] = [];
};

Graph.prototype.addEdge = function (val1, val2) {
  if( this.vertices.includes(val1) && this.vertices.includes(val2) ){

  } else {
    console.log('graph does not have one or both vertices')
  }
}

var newGraph = new Graph();
newGraph.addVertices(1);
newGraph.addVertices(4);
console.log(newGraph.addEdge(1,2))