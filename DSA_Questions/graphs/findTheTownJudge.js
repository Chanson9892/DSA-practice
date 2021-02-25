// 997. find the town jdge
// In a town, there are N people labelled from 1 to N.  There is a rumor that one of these people is secretly the town judge.

// If the town judge exists, then:

// The town judge trusts nobody.
// Everybody (except for the town judge) trusts the town judge.
// There is exactly one person that satisfies properties 1 and 2.
// You are given trust, an array of pairs trust[i] = [a, b] representing that the person labelled a trusts the person labelled b.

// If the town judge exists and can be identified, return the label of the town judge.  Otherwise, return -1.

// Example 2:

// Input: N = 3, trust = [[1,3],[2,3]]
// Output: 3

let N = 4, trust = [[1,3],[1,4],[2,3],[2,4],[4,3]]
// output = -1

var findJudge = function(N, trust) {
    // so we want to check if trust[i][1] in each array in the trusts are N,
    // if each trust[i][0] has at least trust[i][1] return N
    // want to check if the trust[i][0] in each array in the trusts are N if so return -1
    let trustCounts = new Array(N + 1).fill(0) // creates array of 0s

  for (let [i, j] of trust) {
    trustCounts[i] -= 1; // minus one to the index that corresponds to the number of trust[i][0]
    trustCounts[j] += 1; // adds one to the index that corresponds to the number of trust[i][1]
    console.log(trustCounts)
  }

  for (let i = 1; i < trustCounts.length; i++) {
    if (trustCounts[i] === N - 1) { // N-1 other people besides judge
      return i;
    }
  }

  return -1;
};

findJudge(N, trust)