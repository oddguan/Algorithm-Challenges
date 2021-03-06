'''
Given the root to a binary tree, implement serialize(root), which serializes 
the tree into a string, and deserialize(s), which deserializes the string back 
into the tree.
'''

from collections import deque

class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def bfs(root, queue=deque(), _list=list()):
    if root is None:
        return _list
    _list.append(root.val)
    queue.append(node for node in [root.left, root.right] if node)
    if queue:
        bfs(queue.popleft(), queue)

def serialize(root):
    output = ""
    queue = deque()
    queue.append(root)
    output += root.val + "^"
    current = root
    while(len(queue) != 0):
        if current is None:
            current = queue.popleft()
            output += "None^"
            continue
        queue.append(current.left)
        queue.append(current.right)
        output += current.left.val + "^"
        output += current.right.val + "^"
        current = queue.popleft()


if __name__ == "__main__":
    #The following should pass
    node = Node('root', Node('left', Node('left.left')), Node('right'))
    assert deserialize(serialize(node)).left.left.val == 'left.left'