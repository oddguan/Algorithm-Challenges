'''
Given an array arr[] of n integers, construct a Product Array prod[] (of same 
size) such that prod[i] is equal to the product of all the elements of arr[] 
except arr[i]. Solve it without division operator and in O(n).
'''
class Solution1:
    '''
    Create a left list and a right list that scans through by multiplication.
    Multiply them together to get the answer.
    
    Runtime Complexity: O(n)
    Space Complexity: O(n)
    '''
    def product_array_puzzle(self, _input):
        n = len(_input)
        left = [None] * n
        right = [None] * n
        product = [None] * n
        right[n - 1] = 1
        left[0] = 1
        for i in range(n):
            if (i == n - 1):
                break
            left[i + 1] = left[i] * _input[i]
            
        for j in reversed(range(n)):
            if (j == 0):
                break
            right[j - 1] = right[j] * _input[j]
            
        print(left, right)
        for k in range(n):
            product[k] = left[k] * right[k]
        
        return product

if __name__ == "__main__":
    s = Solution1()
    _input = [2, 3, 5, 7]
    print(s.product_array_puzzle(_input))
