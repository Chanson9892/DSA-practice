class Node {
    constructor(value){
        this.data = value //data of value
        this.next = null // reference to next node
        this.prev = null // reference to previous node
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null // head of linked list
        this.tail = null // tail/last of linked list
        this.size = 0 // full length of list
    }

    addToFront(value){ //adds node to front of list
        let node1 = new Node(value) // creates new instance of node
        if(this.head == null) { //if no head exist means there is nothing in the list, sets node1 into list
            this.head = node1
            this.tail = node1
            this.size++
        } else { // there are nodes in list. puts node1 before the head making node1 become the new head nad moves everything down 1
            node1.next = this.head 
            this.head.prev = node1 
            this.head = node1
            this.size++
        }
    }

    removeFromFront(){
        if(this.head === null){
            console.error('List is empty')
        } else if (this.size === 1){
            const data = this.head.data 
            this.head = null
            this.tail = null
            this.size--
            return data
        } else if (this.size >= 2){
            const data = this.head.data 
            this.head = this.head.next // changes head to be the next node on the list
            this.head.prev.next = null // removes references to the node we want to delete from the next node. 
            this.head.prev = null // removes reference of new head from the head we want to delete to null
            this.size--
            return data
        }
    }

}

let list = new DoublyLinkedList()
list.addToFront(5) 
// DoublyLinkedList {
//     head: Node { data: 5, next: null, prev: null },
//     tail: Node { data: 5, next: null, prev: null },
//     size: 1
//   }

//add a second node
list.addToFront(9)
// DoublyLinkedList {
//     head: Node {
//       data: 9,
//       next: Node { data: 5, next: null, prev: [Circular] },
//       prev: null
//     },
//     tail: Node {
//       data: 5,
//       next: null,
//       prev: Node { data: 9, next: [Circular], prev: null }
//     },
//     size: 2
//   }

// remove
list.removeFromFront()
// DoublyLinkedList {
//     head: Node { data: 5, next: null, prev: null },
//     tail: Node { data: 5, next: null, prev: null },
//     size: 1
//   }
