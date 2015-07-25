/**
 *
 * Created by houxinjie on 15/7/25.
 */
function Vertex(label, wasVisited){
  this.label = label;
  this.wasVisited = wasVisited;
}

function Graph(v){
  this.vertices = v;
  this.vertexList = [];
  this.edges = 0;
  this.adj = [];
  this.marked = [];
  this.edgeTo = [];
  for(var i = 0; i < this.vertices; i++){
    this.adj[i] = [];
    this.marked[i] = false;
  }

  this.addEdge = function(v, w){
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
  };

  /*
  this.showGraph = function(){
    for(var i = 0; i < this.vertices; i++){
      console.log(i + '->');
      for(var j = 0; j < this.vertices; j++){
        if(this.adj[i][j] !== undefined){
          console.log(this.adj[i][j] + ' ');
        }
      }
    }
  };
  */
  this.showGraph = function(){
    var visited = [];
    for(var i = 0; i < this.vertices; i++){
      console.log(this.vertexList[i] + '->');
      visited.push(this.vertexList[i]);
      for(var j = 0; j < this.vertices; j++){
        if(this.adj[i][j] !== undefined){
          if(visited.indexOf(this.vertexList[j]) === -1){
            console.log(this.vertexList[j] + ' ');
          }
        }
      }
    }
  };

  //深度优先搜索
  this.dfs = function(v){
    this.marked[v] = true;
    if(this.adj[v] !== undefined){
      console.log("Visited vertex: " + v);
    }
    for(var i in this.adj[v]){
      var w = this.adj[v][i];
      if(!this.marked[w]){
        this.dfs(w);
      }
    }
  };

  //广度优先搜索
  this.bfs = function(s){
    var queue = [];
    queue.push(s);
    while(queue.length > 0){
      var v = queue.shift();
      if(v !== undefined){
        this.marked[v] = true;
        console.log("Visited vertex: " + v);
      }
      for(var i in this.adj[v]){
        var w = this.adj[v][i];
        if(!this.marked[w]){
          this.edgeTo[w] = v;
          queue.push(w);
        }
      }
    }
  };

  this.pathTo = function(v){
    var source = 0;
    if(!this.hasPathTo(v)){
      return undefined;
    }

    var path = [];
    for(var i = v; i != source; i = this.edgeTo[i]){
      path.push(i);
    }
    path.push(source);
    return path;
  };

  this.hasPathTo = function(v){
    return this.marked[v];
  };


  this.topSort = function(){
    var stack = [];
    var visited = [];
    for(var i = 0; i < this.vertices; i++){
      visited[i] = false;
    }
    for(var i = 0; i < this.vertices; i++){
      if(visited[i] === false){
        this.topSortHelper(i, visited, stack);
      }
    }
    for(var i = 0; i < stack.length; i++){
      if(stack[i] !== undefined && stack[i] !== false){
        console.log(this.vertexList[stack[i]]);
      }
    }
  };

  this.topSortHelper = function(v, visited, stack){
    visited[v] = true;
    for(var i in this.adj[v]){
      var w = this.adj[v][i];
      if(!visited[w]){
        this.topSortHelper(visited[w], visited, stack);
      }
    }
    stack.push(v);
  };


}

//11.1
/*
var graph = new Graph(5);
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);

//graph.showGraph();
//graph.dfs(0);
graph.bfs(0);
var paths = graph.pathTo(4);

console.log(paths.reverse().join('-'));
*/

var graph = new Graph(6);
graph.addEdge(1, 2);
graph.addEdge(2, 5);
graph.addEdge(1, 3);
graph.addEdge(1, 4);
graph.addEdge(0, 1);
graph.vertexList = [
  'CS1',
  'CS2',
  'Data Structures',
  'Assembly Language',
  'Operating Systems',
  'Algorithms'
];

graph.showGraph();
//graph.topSort();