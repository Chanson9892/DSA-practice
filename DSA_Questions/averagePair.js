// given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average.
// output boolean
// i want to compare two integers
// i can do a for loop with 2 pointers which i can use to check the average value is the same.

let array = [1, 2, 3]
let average = 2.5

function averagePair(array, average){
  if (array.length == 0 || array.length == 1) return false
  let ave = 0
  let point2 = array.length
  let point1 = 0

  while(point1 < point2){    
    ave = (point1 + point2)/2
    if (ave == average){
      return true
    } else if (ave > average){
      point2--
    } else {
      point1++
    }
  }
  return false
}

averagePair(array, average)