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

const a = new Node("a")
const b = new Node("b")
const c = new Node("c")
const d = new Node("d")
const e = new Node("e")
const f = new Node("f")
