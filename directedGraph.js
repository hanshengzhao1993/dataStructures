var DirectedGraph = function () {
  this.vertices = {};
  this.edges = [];
};

DirectedGraph.prototype.addVertices = function (val) {
  this.vertices[val] = val;
  this.edges[val] = [];
};

DirectedGraph.prototype.addEdges = function (val1, val2) {
  if(this.vertices[val1] !== undefined && this.vertices[val1] !== undefined){
    this.edges[val1].push(val2);
  }
}



var newGraph = new DirectedGraph();
newGraph.addVertices(1);
newGraph.addVertices(3);
newGraph.addVertices(5);
newGraph.addEdge(1,5)
console.log(newGraph)