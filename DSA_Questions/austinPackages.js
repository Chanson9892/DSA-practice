// Say you are installing a series of packages, with dependencies on one another. You
// are given a list of tuples which contain the package names. Example:

// [("A","B"), ("C","D"), ("E","F"), ("G","H")]

// Each tuple in the list represents a single package dependency. e.g.:
// - Package A depends on package B
// - Package C depends on package D
// - Package E depends on package F
// - Package G depends on package H

// When we say package A "depends on" package B, that means that package B must be installed before package A.

// The entire list of tuples given encompasses all of the dependencies between the packages. In the above example,
// we would need to install the packages in the following order: H, G, F, E, D, C, B, A.

// Note that one package can have multiple dependencies. This is represented by the following:

// [("A","B"), ("A","C")]

// which shows package A depends on both B and C.

// Write an algorithm which takes an input list of tuples like the ones described above and outputs
// a list of package names. The output list should be ordered such that if you installed each package
// in order, all of the original packages would be installed without breaking any dependencies.

//B before A, D before C, F before E, H before G

// so we want the second value in each duple and see if it is needed


let packages = [["A","B"], ["A","C"], ["A", "D"], ["D","B"]]
// we want to grab the second value of each tuple as a value
// and the first value of each tuple would be the key
// output: B, C, D, A
//     B    C 
//   D    A

function packageSort(packages){
    let map = {}
    let output = []

  // creates hashmap with packageName as key and dependencyName as value
  constructHashMap(map)

  let keys = Object.keys(map) // array of keys
  
  // adds PackageNames to output that don't have dependencies and deletes them from map
  addNoDependencies(map,output)

  // adds PackageNames to output that have dependencies in order
  addDependencies(map,output,keys)

  return output
}

// creates hashmap with packageName as key and dependencyName as array of values
function constructHashMap(map){
    for (let i = 0; i < packages.length; i++){
        let packageName = packages[i][0]
        let dependencyName = packages[i][1]
        if (!map[packageName]){
            map[packageName] = [dependencyName] 
            map[dependencyName] = [] // create a key for the first dependency
        } else {
          if(!map[dependencyName]){ // if there isn't a key already made for the dependency
            map[dependencyName] = [] // create a key with an empty array
          }
          map[packageName] = [...map[packageName], dependencyName] // adds dependencies to the packageName
        }

    }
}

// adds PackageNames to output that don't have dependencies and deletes the key from map
function addNoDependencies(map, output) {
  for (let packageName in map) { // for every key within the map
    if(!map[packageName].length) { // pushes packageNames with no dependencies
      output.push(packageName)
      delete map[packageName] // removes packageNames from map since they are empty
    }
  }
  if(output.length === 0){
    throw new Error('packages are cyclic');  
  }
}

// adds PackageNames to output that have dependencies in order
function addDependencies(map, output, keys) {
  while(output.length < keys.length){ //output is not full
    for (let packageName in map) { 
      let included = true // boolean to see if dependencies are in output
      Object.values(map[packageName]).forEach( dependency => { // goes through each dependency for the package
        if (!output.includes(dependency)){ //if dependency is not in output
          included = false
          output.push(dependency)
        } 
      })
      if(included){ // all dependencies are already in output
        if(!output.includes(packageName)){ //check if packageName is already included
          output.push(packageName) // adds packageName
        }
      }
    }
  }
}
packageSort(packages)