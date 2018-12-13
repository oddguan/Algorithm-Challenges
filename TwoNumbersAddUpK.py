'''
Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass?
'''

class Solution1:
    '''
    Go though every element and add it to other elements one by one. If the 
    addition returns k, then the answer is found. 

    Runtime Complexity: O(N^2)
    Space Complexity: O(1)
    '''
    def __init__(self):
        pass
    
    def findAddK(self, arr, k):
        for i,e in enumerate(arr):
            for j,e2 in enumerate(arr):
                if i == j:
                    pass
                else:
                    if (e + e2 == k):
                        return True
        return False


class Solution2:
    '''
    Linear runtime solution. 
    '''

if __name__ == "__main__":
    arr = [10, 15, 3, 7]
    s1 = Solution1()
    print(s1.findAddK(arr, 16))