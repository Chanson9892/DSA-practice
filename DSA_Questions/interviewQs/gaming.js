// a group of friends are playing a video game. players who achieve a certain rank level up. 
// given the scores of the players, how many will level up?

// players with equal scores have equal ranks. if there are four players and three players are tied for first it goes 1, 1, 1, 4.

// example:
// n = 4, k = 5, scores = [20, 40, 60 ,80, 100]

// output: 4 people

function numPlayers(k, scores) {
    let result = 0
    if (k == 0) return 0
    if (k == scores.length) return scores.length
    scores.sort((a,b) => b -a)
    let rank = new Array(scores.length)

    for (let i = 0; i < scores.length; i++){
        if (scores[i] == 0) break
        if (i == 0){
            rank[i] = 1
        } else if (scores[i] == scores[i-1]){
            rank[i] = rank[i-1]
        } else if (scores[i] != scores[i-1]){
            rank[i] = i + 1
        }
    }

    for (let i = 0; i < scores.length; i++){
        if (rank <= k) {
            result++
        } else {
            break
        }
    }

    return result 
}