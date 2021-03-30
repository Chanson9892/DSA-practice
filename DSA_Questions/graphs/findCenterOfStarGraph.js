// 1791. Find Center of Star Graph
// https://leetcode.com/problems/find-center-of-star-graph/

// There is an undirected star graph consisting of n nodes labeled from 1 to n. A star graph is a graph where there is one center node 
// and exactly n - 1 edges that connect the center node with every other node.

// You are given a 2D integer array edges where each edges[i] = [ui, vi] indicates that there is an edge between the nodes ui and vi. 
// Return the center of the given star graph.

// Example 1:
// Input: edges = [[1,2],[2,3],[4,2]]
// Output: 2
// Explanation: As shown in the figure above, node 2 is connected to every other node, so 2 is the center.

let edges = [[1,2],[2,3],[4,2]]

var findCenter = function(edges) {
    const [a, b] = edges[0]
    const [c, d] = edges[1]
    return a == c || a == d ? a : b // case 1 - a is the shared node. case 2 - a is not the shared node
};

findCenter(edges)
