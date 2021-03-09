// 973. K Closest Points to Origin
// Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, 
// return the k closest points to the origin (0, 0).
// The distance between two points on the X-Y plane is the Euclidean distance (i.e, √(x1 - x2)2 + (y1 - y2)2).
// You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).

// Input: points = [[1,3],[-2,2]], k = 1
// Output: [[-2,2]]
// Explanation:
// The distance between (1, 3) and the origin is sqrt(10).
// The distance between (-2, 2) and the origin is sqrt(8).
// Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
// We only want the closest k = 1 points from the origin, so the answer is just [[-2,2]].

var kClosest = function(points, K) {
    points.sort((a,b) => (a[0]*a[0] + a[1]*a[1]) - (b[0]*b[0] + b[1]*b[1]))
  
    return points.slice(0,K)
  
};

//////////////////////////////slow solution

let points = [[1,3],[-2,2]]
let K = 1
var kClosest = function(points, K) {
  if (points.length == K){
    return points
  }
  let closest = []
  let i = 0
  while(i < points.length){ //distance to origin
    if(closest.length < K){
      closest.push(Math.sqrt((points[i][0])**2 + (points[i][1])**2))
    } else {
      let farthest = Math.max(...closest)
      let newPoint = Math.sqrt((points[i][0])**2 + (points[i][1])**2)
      let pointXY = points[i]
      if (farthest > newPoint){
        points.splice(closest.indexOf(farthest), 1)
        closest.splice(closest.indexOf(farthest), 1)
        closest.push(newPoint)
        i--
      } else {
        points.splice(points.indexOf(pointXY), 1)
        i--
      }
    }
    i++
  }
  
  return points


};

kClosest(points,K)

