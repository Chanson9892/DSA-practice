// Skilled Clinic: What to Expect in a JavaScript Interview 
// Dominique Canlas - Front End Engineer at Facebook

// after

// execute function after x times

// create function after that returns a new function where this new function executes
// the original function on after executed x times

// uses closure

function after(num, func) {
    // keep track of calls
    let count = 0
    return function() {
        if (count >= num) {
            // arguments -> array like [x, y, z]
            // .call() vs. .apply() look at this! ------
            func.apply(null, arguments)
        } else {
            count += 1
        }
    }
}

//sample
var func1 = () => console.log('first one')
var func2 = (x) => console.log('the 2nd', x)

var newFunc1 = after(3, func1)
var newFunc2 = after(2, func2)

newFunc1()
newFunc1()
newFunc1()
newFunc1() // actually calls func1()

newFunc2('a')
newFunc2('a')
newFunc2('a') // actually calls func2()
newFunc2('b', 'c', 'd')

newFunc1() // calls func1() again

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////

// next problem. emitter.js

// create class/function that returns an emitter object. this object allows us to subscribe to an event
// and execute a callback whenever that event is triggered. The emit function will trigger all
// functions subscribed to an event and passes all supplied arguments.

// a callback can be removed from being subscribed to an event

// functions - subscribe(eventName, cb), emit(eventName, args)      cb = callback
// subscribe - returns 'release functionality'

function Emitter() {

    const eventTracker = {
        // key = eventName: value = array of functions
    }

    const subscribe = (name, cb) => {
        if(eventTracker[name]){
            eventTracker[name].push(cb)
        } else {
            eventTracker[name] = [cb]
        }

        const release = (name, cb) => {
            let theCbs = eventTrack[name]
            let theIdx = theCbs.indexOf(cb) // if index is not found, it is given -1
            if (theIdx > -1) {
                theCbs.splice(theIdx, 1)
            }
        }

        return {
            release
        }
    }

    const emit = (name, ...theArgs) => {
        let theCbs = eventTrack[name]
        for(let i = 0; i < theCbs.length; i++){
            let cb = theCbs[i]
            cb.apply(null, theArgs) // using theArgs just refers to one item in theArgs array.
        }
    }

    return {
        subscribe: subscribe,
        emit: emit
    }
}

let myEmit = new Emitter()

function logArgs(...items) {
    console.log(items)
}

function sumAll(...nums) {
    let result = nums.reduce((acc, cur) => acc + cur, 0)
    console.log(result)
}

let sub1 = myEmit.subscribe('foo', logArgs) // should print [1,2]
let sub2 = myEmit.subscribe('foo', sumAll) // should print 3
let sub3 = myEmit.subscribe('bar', sumAll) // should print 11

myEmit.emit('foo', 1, 2) //sub1 and sub2 triggered
myEmit.emit('bar', 5, 6) //sub3 triggered

sub1.release() // remove sub1

myEmit.emit('foo', 1, 2) // sub2 triggered

export default Emitter
