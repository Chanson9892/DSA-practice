// write a function called areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among them.
//input is array
//output is boolean
// can iterate through and check if any are the same.
// can do a frequency counter and see if any are more than 1

let args = [1, 2, 2]


function areThereDuplicates(...args){
  let pairs = {}
  for (let i = 0; i < args.length; i++){
    let value = args[i]
    pairs[value] = (pairs[value] || 0) + 1
    if (pairs[value] > 1) return true
  }
  console.log(pairs)
  return false
  
}

areThereDuplicates(args)