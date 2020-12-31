class Queue {
    constructor() {
        this.items = []
        this.size = 0 // keeps track of length of items
    }

    isEmpty() {
        return this.size === 0 // if size is 0 it will return true, if not zero, than return false
    }

    enqueue(data) { // adds to the queue
        this.items.push(data)
        this.size++
    }

    dequeue() { // removes first item from queue
        if(this.isEmpty()){
            return 'Queue is empty'
        } else {
            this.size--
            return this.items.shift()
        }
    }
}

let newQueue = new Queue()
newQueue.enqueue(6)
newQueue.enqueue(77)
newQueue.enqueue('a')
console.log(newQueue) // Queue { items: [ 6, 77, 'a' ], size: 3 }
console.log('removed item', newQueue.dequeue()) // removed item 6
console.log(newQueue) // Queue { items: [ 77, 'a' ], size: 2 }
console.log('empty queue', newQueue.isEmpty()) // empty queue? false


