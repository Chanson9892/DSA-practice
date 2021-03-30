// 797. All Paths From Source to Target
// https://leetcode.com/problems/all-paths-from-source-to-target/
// Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1, find all possible paths from node 0 to 
// node n - 1, and return them in any order.

// The graph is given as follows: graph[i] is a list of all nodes you can visit from node i (i.e., there is a directed 
//     edge from node i to node graph[i][j]).

// example 
// Input: graph = [[1,2],[3],[3],[]]
// Output: [[0,1,3],[0,2,3]]
// Explanation: There are two paths: 0 -> 1 -> 3 and 0 -> 2 -> 3.

var allPathsSourceTarget = function(graph) {
    let output = [] 
    let path = [];  // curent path	
    path.push(0); // add start index to current path
    
    function dfs(node) {
        if (node == graph.length - 1) {
            output.push(path.slice(0)); 
				// if we are at the last node, we add the current path to the ouput, for
				// some reason, if we just try to push the array it only adds the first
				// element, so we need to do a slice from 0 (so it contains everything) and
				// then push it into the output array
			
        } 
        else {
            for(var i=0; i<graph[node].length; i++){ // go through all of the connections
                path.push(graph[node][i]); // add to the current path
                dfs(graph[node][i]);
                path.pop(); // remove the added node so that the next iteration is not affected by it
				
            }
        }
    }
    dfs(0); 
    return output;
    
};