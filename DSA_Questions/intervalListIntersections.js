// https://leetcode.com/problems/interval-list-intersections/
// 986. Interval List Intersections


// You are given two lists of closed intervals, firstList and secondList, where firstList[i] = [starti, endi] 
// and secondList[j] = [startj, endj]. Each list of intervals is pairwise disjoint and in sorted order.

// Return the intersection of these two interval lists.

// A closed interval [a, b] (with a < b) denotes the set of real numbers x with a <= x <= b.

// The intersection of two closed intervals is a set of real numbers that are either empty or represented as 
// a closed interval. For example, the intersection of [1, 3] and [2, 4] is [2, 3].

// Example 1:

// Input: firstList = [[0,2],[5,10],[13,23],[24,25]], secondList = [[1,5],[8,12],[15,24],[25,26]]
// Output: [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]

var intervalIntersection = function(firstList, secondList) {
    let first = 0 // pointer for firstList
    let second = 0 // pointer for secondList
    let result = []
    
    while (first < firstList.length && second < secondList.length) {
        // largest starting point of the interval
        let maxStart = Math.max(firstList[first][0], secondList[second][0])
        
        // smallest end point of the interval
        let minEnd = Math.min(firstList[first][1], secondList[second][1])
        
        // if the intervals intersect
        if (maxStart <= minEnd) {
            result.push([maxStart, minEnd])
        }
        
        // move a pointer depending on which end point of the interval is smaller
        if (firstList[first][1] < secondList[second][1]) {
            first++
        } else {
            second++
        }
    }
    
    return result
};