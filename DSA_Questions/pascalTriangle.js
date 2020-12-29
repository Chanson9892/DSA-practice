// Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it.
// Example:
// Input: 5
// Output:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]

let pascal = 4

var generate = function(numRows) {
    let triangle = []
    for(let i=0; i<numRows; i++){
        let level = []
        for ( let j = 0; j <= i; j++){
            if (j == 0 || j == i) {
                level.push(1)
            } else {
                level.push(triangle[i-1][j-1]+triangle[i-1][j])
            }
        }
        triangle.push(level)
    }
    return triangle
    
};

generate(pascal)
