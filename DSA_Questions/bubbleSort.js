//write a functions that takes an array of numbers and returns a sorted version of that array.
// use the bubble sort algorithm to sort
// bubble sort algorithm: repeatedly swaps adjacent elements if they are in the wrong order
// example
// input: [5, 1, 4, 2, 8]
// output: [1,2,4,5,8]

// time complexity (worst: 0(n^2)) need to do a lot of sorting (best: 0(n)) if sorted
// space complexity 0(1) not really storing anything 

let numbers = [5, 1, 4, 2, 8]

function bubbleSort(array){
    let sorted = false
    let counter = 0
    while (!sorted){
        sorted = true
        for (let i = 0; i < array.length-1-counter; i++){
            if (array[i] > array[i+1]){
                // let number = array[i]
                // array[i] = array[i+1] 
                // array[i+1] = number
                swap(i, i+1, array)
                sorted = false
            }
        }
        counter++
    }
    return array
}

function swap(i, j, array) {
    const number = array[j]
    array[j] = array[i]
    array[i] = number
}

bubbleSort(numbers)


