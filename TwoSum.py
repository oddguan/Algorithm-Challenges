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
    Use a hash table (set in Python) that stores values of array. 
    Check if k minus the current element is in the hash table. If it is,
    return True. If not, put the element into the hashtable.

    Runtime Complexity: O(N) (putting all elements O(N), looking O(N), total O(N))
    Space Complexity: O(N) (The hash table (set) costs space of N)
    '''
    def __init__(self):
        self.table = set()
    
    def findAddK(self,arr,k):
        for e in arr:
            if (k - e) in self.table:
                return True
            self.table.add(e)
        return False

class Solution3:
    '''
    Sorting and Binary Search solution.
    Sort the input array first using a standard sorting algorithm, and then
    do a binary search for k - 
    '''
    def __init__(self, arr):
        self.arr = arr
    
    def _binary_search(self, l, r, x):
        if r >= l:
            mid = int(l + (r - l) / 2)
            if self.arr[mid] == x:
                return mid
            elif self.arr[mid] > x:
                return self._binary_search(l, mid-1, x)
            else:
                return self._binary_search(mid+1, r, x)
        else:
            return -1

    def findAddK(self, k):
        sorted(self.arr)
        for e in self.arr:
            if self._binary_search(0, len(self.arr)-1, k - e) != -1:
                return True
        return False

class Solution4:
    '''
    Sort and walk-inward solution. Sort the array first, then create two pointers
    pointing to both end of the array. Add two values of the pointer together and
    compare it with k. If sum is larger, move right pointer left. If sum is smaller,
    move left pointer right. If two pointers meet and still didn't return, return False.
    '''
    def __init__(self):
        pass
    def findAddK(self, arr, k):
        lhs = 0
        rhs = len(arr) - 1
        sorted(arr)
        while(rhs > lhs):
            if arr[lhs] + arr[rhs] == k:
                return True
            elif arr[lhs] + arr[rhs] > k:
                rhs -= 1
            elif arr[lhs] + arr[rhs] < k:
                lhs += 1
        return False
            

if __name__ == "__main__":
    arr = [10, 15, 3, 7]
    s1 = Solution1()
    print(s1.findAddK(arr, 16))
    print(s1.findAddK(arr, 17))
    s2 = Solution2()
    print(s2.findAddK(arr, 16))
    print(s2.findAddK(arr, 17))
    s3 = Solution3(arr)
    print(s3.findAddK(16))
    print(s3.findAddK(17))
    s4 = Solution4()
    print(s4.findAddK(arr, 16))
    print(s4.findAddK(arr, 17))