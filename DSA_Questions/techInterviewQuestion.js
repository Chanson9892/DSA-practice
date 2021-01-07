let myMatrix = [[1, 2, 3, 4],
                [12,13,14,5],
                [11,16,15,6],
                [10,9, 8, 7]];


function unroll(matrix) {
  
  // top
  console.log(...matrix.shift())
  
  // right side (last elem of each)
  // use matrix.pop on each last element
  // .map and pop the last element
  console.log(...matrix.map(array => array.pop()))
  
  // bottom in reverse
  // pop the last values from our last array
  // rearrange the order of the last array
  console.log(...matrix.pop().reverse())
  
  // left side (first elem of each
  // matrix.shift inside each array and will give the values in reverse
  console.log(...matrix.map(array => array.shift()).reverse())
  
  
  
  // exit condition 
  // check the length of the matrix. if 0 end the the function (break)
  // run unroll again if matrix.length is not 0
  
  if (matrix.length === 0) return;
  
  unroll(matrix);
  
}
unroll(myMatrix);


// end result: 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16

// not allowed to flatten, can mutate the matrix. not consecutive numbers
// want to go