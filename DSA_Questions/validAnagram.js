// given two strings write a function to determine if the 2nd string is an anagram of the first. an anagram is a word by rearranging the letters to another. cinema to iceman

let str1 = "aaaz"
let str2 = "aaza"

function validAnagram(str1, str2){
  let letters1 = {}
  let letters2 = {}
  str1 = str1.split('')
  str2 = str2.split('')
  if (str1.length !== str2.length) {
      return false
  }
  // counts each letter of the string
  for(let i = 0; i < str1.length; i++){
    let letter = str1[i]
      if (letters1[letter] > 0){ //adds 1 to the count for the letter
          letters1[letter]++
      } else {
          letters1[letter] = 1 // creates a new key for the letter and makes it equal to 1
    }
  }
  for(let i = 0; i < str2.length; i++){
      let letter = str2[i]
    if (letters2[letter] > 0){
        letters2[letter]++
    } else {
        letters2[letter] = 1
    }
  }
  console.log(letters1)
  console.log(letters2)
  for(let key in letters1){ // for loop that iterates over each key in letters1
        if(letters1[key] !== letters2[key]){ // checks the value to the keys
            return false
        }
  }
  return true
}

validAnagram(str1, str2)

///////////////////////////////////////////////////////////////////////////////////
// video answer


function validAnagram(str1, str2){
  if (str1.length !== str2.length) {
      return false
  }
  
  let lookup = {}

  for(let i = 0; i < str1.length; i++){
    let letter = str1[i]
    // if letter exists, increment or set to 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1
  }

  for(let i = 0; i < str2.length; i++){
    let letter = str2[i]
    // can't find letter or letter is zero then its not an anagram
    if (!lookup[letter]){ // if there is an extra or a different letter in str2
      return false
    } else {
      lookup[letter] -= 1 // find the letter and subtract 1 from are key value pair
    }
  }
  return true
}