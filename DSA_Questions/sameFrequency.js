// write a function called sameFrequency. Given 2 positive integers, find out if the two integers have the same frequency of digits.

//input of two integers
// output boolean
// i can use for loops to get the key value pairs for each integer.

let int1 = 3589578
let int2 = 5879385

function sameFrequency(int1, int2){
  int1 = int1.toString()
  int2 = int2.toString()
  if (int1.length !== int2.length) return false
  let pairs = {}
  let pairs2 = {}
  for (let i = 0; i < int1.length; i++){
    let number = int1[i]
    if (!pairs[number]){
      pairs[number] = 1
    } else {
      pairs[number]++
    }
  }

  for (let i = 0; i < int2.length; i++){
    let number = int2[i]
    pairs2[number] = (pairs2[number] || 0) + 1
  }

  for(let key in pairs){
    if(pairs[key] !== pairs2[key]) return false;
  }
  return true

}

sameFrequency(int1, int2)