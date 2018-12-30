def isValid(s):
    from collections import deque
    stack = deque()
    symbols = {"}": "{", "]": "[", ")": "("}
    for c in s:
        if c in symbols:
            if not stack:
                return False
            last = stack.pop()
            if last != symbols[c]:
                return False
        else:
            stack.append(c)
    return not stack
