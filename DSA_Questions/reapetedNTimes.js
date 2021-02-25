//961. N-Repeated Element in Size 2N Array
// In a array A of size 2N, there are N+1 unique elements, and exactly one of these elements is repeated N times.

// Return the element repeated N times.

// Example 1:

// Input: [1,2,3,3]
// Output: 3

let input = [5,1,5,2,5,3,5,4]

var repeatedNTimes = function(A) {
    // if 2N = 6, N=3, differentElements = 4, repeatedElements= 3
    let map = {}
    let output = 0
    for(let i = 0; i < A.length; i++){
      let value = A[i]
        if (!map[value]){
            map[value] = 1
        } else {
            map[value]++
            output = A[i]
        }
    }
    return output
};

repeatedNTimes(input)