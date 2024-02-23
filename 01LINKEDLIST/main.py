# each node will have it's value and a 'next' (pointer)
# [a]=>[b]=>[c]=>[d]=>null

class Node:
    def __init__(self,val):
        self.val=val
        self.next=None

a= Node("a")
b= Node("b")
c= Node("c")
d= Node("d")

a.next = b
b.next = c
c.next = d

def Traversal(root):
    linkedList =[root]
    while (len(linkedList)>0):
        pointer= linkedList.pop()
        print(pointer.val)
        if(pointer.next != None):
            linkedList.append(pointer.next)      
Traversal(a)
