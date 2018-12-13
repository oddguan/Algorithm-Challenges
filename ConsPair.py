'''
cons(a, b) constructs a pair, and car(pair) and cdr(pair) returns the first 
and last element of that pair. For example, car(cons(3, 4)) returns 3, and 
cdr(cons(3, 4)) returns 4.

This is a functional programming problem. 
function 'cons' return a pair function that takes in a function, and return the
result of the take-in function. All we have to do is actually implement 'f', 
and I did the 'left' and 'right' function inside car and cdr. 

cdr is implemented in the lambda notation provided by python, and car is 
implemented in a normal def notation.
'''

def cons(a, b):
    def pair(f):
        return f(a, b)
    return pair

def car(pair):
    def left(a, b):
        return a
    return pair(left)

def cdr(pair):
    return pair(lambda a, b: b)

if __name__ == "__main__":
    print(car(cons(3, 4)))
    print(cdr(cons(3, 4)))