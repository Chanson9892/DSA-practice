class MaxBinaryHeap {
    constructor(){
      this.values = []
    }
    insert(element) {
      this.values.push(element)
      this.bubbleUp()
    }

    bubbleUp(){
        let idx = this.values.length - 1
        const element = this.values[idx]
        while(idx > 0){
            let parentIdx = Math.floor((idx -1)/2)
            let parent = this.values[parentIdx]
            if(element <= parent) break;
            this.values[parentIdx] = element
            this.values[idx] = parent
            idx = parentIdx
        }
    }

    removeMax(){
        const max = this.values[0]
        const end = this.values.pop()
        if(this.values.length > 0) {
            this.values[0] = end
        this.bubbleDown()
        }
        return max
    }

    bubbleDown(){
        let idx = 0
        const length = this.values.length
        const element = this.values[0]
        while(true){
            let leftIdx = 2 * idx + 1
            let rightIdx = 2 * idx + 2
            let left, right;
            let swap = null

            if(leftIdx < length){
                left = this.values[leftIdx]
                if(left > element){
                    swap = leftIdx
                }
            }

            if(rightIdx < length){
                right = this.values[rightIdx]
                if((swap === null && right > element) || (swap !== null && right > left)){
                    swap = rightIdx
                }
            }

            if(swap === null) break;
            this.values[idx] = this.values[swap]
            this.values[swap] = element
            idx = swap

        }

    }

}

let heap = new MaxBinaryHeap()
heap.insert(55)
  