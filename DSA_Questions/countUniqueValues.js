// implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. 
// There can be negative numbers in the array, but it will always be sorted.
// input is an array
// output is an integer
// want to use multiple pointers 
// start from first and last
// key value pairs to keep track of the numbers
// use a while loop from left < right
// want a count to keep track of unique vals

// input [1, 1, 1, 1, 1, 2] output 2

let input = [1, 2, 3, 4, 4, 7, 7, 12, 12, 13]

function countUniqueValues(array) {
  let count = 0 
  let left = 0
  let right = array.length - 1
  let pairs = {}

  while (left < right){
    let number1 = array[left]
    let number2 = array[right]
    if(pairs[number1] > 0 ){
      pairs[number1]++
    } else {
      pairs[number1] = 1
      count++
    }
    if(pairs[number2] > 0 ){
      pairs[number2]++
    } else {
      pairs[number2] = 1
      count++
    }
    left++
    right--
  }
  return count
}

countUniqueValues(input)

/////////////////////////////////////////////////////////////////////////////////////
// video answer

let input = [1, 2, 3, 4, 4, 7, 7, 12, 12, 13]

function countUniqueValues(array) {
    if (array.length = 0) return 0
    let i = 0
    for(let j = 1; j < array.length; j++){
        if(array[i] !== array[j]){
            i++
            array[i] = array[j]
        }
    }
    return i + 1
}

countUniqueValues(input)




