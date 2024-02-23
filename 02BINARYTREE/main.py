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
#TODO:- creating nodes
a =  Node("a")
b =  Node("b")
c =  Node("c")
d =  Node("d")
e =  Node("e")
f =  Node("f")

#  TODO:- mapping relations of nodes
a.leftChild = b
a.rightChild = c
b.leftChild = d
b.rightChild = e
c.leftChild = f

#  TODO: Depth first approach => [a, b, d, e, c, f]=>  uses a stack
#  * push a node in the stack
#  * pop the top, check if it's having (left or right) children
#  * insert the children nodes at top of the stack
#  * repeat till stack is empty

def DFA(head):
    stack=[head]
    while(len(stack)>0):
        pointer= stack.pop()
        print(pointer.val)
        if(pointer.rightChild):
            stack.append(pointer.rightChild)    
        if(pointer.leftChild):
            stack.append(pointer.leftChild)    
    
DFA(a)