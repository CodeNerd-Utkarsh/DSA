//**  Each node is allowed to have (a value, a left child, a right child). There can't be more than 2 child node for a parent node
class Node {
    constructor(val) {
        this.val = val
        this.leftChild = null
        this.rightChild = null
    }
}
/*
                    *a               
            *b              *c
        *d       *e       *f
*/
//TODO:- creating nodes
const a = new Node("a")
const b = new Node("b")
const c = new Node("c")
const d = new Node("d")
const e = new Node("e")
const f = new Node("f")

//TODO:- mapping relations of nodes
a.leftChild = b
a.rightChild = c
b.leftChild = d
b.rightChild = e
c.leftChild = f

//  TODO: Breadth-first approach => [a, b, d, e, c, f]=>  uses a queue
//  * push a node in the queue
//  * pop the front, check if it's having (left or right) children
//  * insert the children nodes in the queue
//  * repeat till queue is empty

function BFA(head) {
    let queue = [head]
    while (queue.length > 0) {
        let pointer = queue.shift()
        console.log(pointer.val)
        if (pointer.leftChild) {
            queue.push(pointer.leftChild)
        }
        if (pointer.rightChild) {
            queue.push(pointer.rightChild)
        }
    }
}
BFA(a)

//  TODO: Depth-first approach => [a, b, c, d, e, f]=>  uses a queue
//  * push a node in the stack
//  * pop the top, check if it's having (left or right) children
//  * insert the children nodes at top of the stack
//  * repeat till stack is empty

function DFA(head) {
    let stack = [head]
    while (stack.length > 0) {
        let pointer = stack.pop()
        console.log(pointer.val)
        if (pointer.rightChild) {
            stack.push(pointer.rightChild)
        }
        if (pointer.leftChild) {
            stack.push(pointer.leftChild)
        }
    }
}
// DFA(a)