# Each node is allowed to have (a value, a left child, a right child). There can't be more than 2 child node for a parent node

class Node:
    def __init__(self,val) -> None:
        self.val = val
        self.leftChild = None
        self.rightChild = None
        
'''
                    *a
               
            *b              *c

        *d       *e       *f
'''

a =  Node("a")
b =  Node("b")
c =  Node("c")
d =  Node("d")
e =  Node("e")
f =  Node("f")
