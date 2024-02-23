// each node will have it's value and a 'next' (pointer)
// [a]=>[b]=>[c]=>[d]=>null
class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

const a = new Node("a")
const b = new Node("b")
const c = new Node("c")
const d = new Node("d")
const e = new Node("e")

a.next = b
b.next = c
c.next = d
d.next = e

function Traversal(root) {
    const list = [root]
    while (list.length > 0) {
        const pointer = list.pop()
        console.log(pointer.val)
        if (pointer.next) list.push(pointer.next)
    }
}
Traversal(a)