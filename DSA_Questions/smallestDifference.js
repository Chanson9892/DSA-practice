// takes in two array of numbers
// find a pair of numbers (one from each array) where absolute difference is the smallest
// returns array with these two numbers
// number in first array is in the first position
// only one pair of numbers with the small difference

// example
// input: arrayOne = [-1, 5, 10, 20, 28 3]
// arrayTwo = [26, 134, 135, 15, 17]
// output: [28, 26]

// time complexity: 0(n^2) double for loops, very slow
// space complexity: 0(1) constant keeps track of the same amount of stuff

const arrayOne = [-1, 5, 10, 20, 28, 3]
const arrayTwo = [26, 134, 135, 15, 17]

function smallestDifference(arrayOne, arrayTwo) {
    let diff = 1000
    let result = []
    for (let i = 0; i < arrayOne.length; i++){
        let numberOne = arrayOne[i]
        for (let j = 0; j < arrayTwo.length; j++){
            let numberTwo = arrayTwo[j]
            if (diff > Math.abs(numberOne-numberTwo)){
                diff = Math.abs(numberOne-numberTwo)
                result = [numberOne, numberTwo]
            }
        }
    }
    return result
}

smallestDifference(arrayOne, arrayTwo)

// VIDEO ANSWER -------------------------------------------------

// time complexity: 0(nlong(n) + mlog(m))
// space complexity: 0(1) constant time keeps track of the same amount of terms

const arrayOne = [-1, 5, 10, 20, 28, 3]
const arrayTwo = [26, 134, 135, 15, 17]

function smallestDifference(arrayOne, arrayTwo) {
    arrayOne.sort((a,b) => a-b)
    arrayTwo.sort((a,b) => a-b)
    let idxOne = 0
    let idxTwo = 0
    let smallest = Infinity // smallest difference
    let current = Infinity // current difference
    let smallestPair = []

    while (idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
        let firstNum = arrayOne[idxOne]
        let secondNum = arrayOne[idxTwo]
        if (firstNum < secondNum){                 // moves index of arrayOne over and changes current difference
            current = secondNum - firstNum
            idxOne++
        } else if (firstNum > secondNum) {         // moves index of arrayTwo over and changes current difference
            current = firstNum - secondNum
            idxTwo++
        } else {                                   // if firstNum = secondNum
            return [firstNum, secondNum]
        }
        if (smallest > current) {                  // if there is a bigger difference in smallest than current, smallest = current
            smallest = current
            smallestPair = [firstNum, secondNum]
        }
    }
    return smallestPair
}

smallestDifference(arrayOne, arrayTwo)

