'''
Given an array of integers, find the first missing positive integer in linear 
time and constant space. In other words, find the lowest positive integer that 
does not exist in the array. The array can contain duplicates and negative 
numbers as well.

For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] 
should give 3.

You can modify the input array in-place.
'''

class Solution1:
    '''
    Naive solution, loops through everytime the find variable got incremented.
    
    Runtime Complexity: O(n^2)
    Space Complexity: O(1)
    '''
    def small_positive_int(self, _input):
        find = 1
        flag = True
        while(flag):
            for e in _input:
                if find == e:
                    break
                else:
                    flag = False
            if flag:
                find += 1
        return find

class Solution2:
    '''
    Sort solution. Solve the problem by first sorting the list, and run through 
    the list once to find the element. 

    Runtime Complexity: O(nlog(n)+n)
    Space Complexity: O(1)
    '''
    def small_positive_int(self, _input):
        _input.sort() # assume it has O(nlog(n)) runtime, since it uses Timsort
        find = 1
        for i in _input:
            if i <= 0:
                continue
            if i != find:
                return find
            else:
                find += 1
        return _input[-1]+1

class Solution3:
    '''
    Hash Table Solution. 
    '''
if __name__ == "__main__":
    s1 = Solution1()
    s2 = Solution2()
    _input = [7, 8, 9, 10, 12]

    print(s1.small_positive_int(_input))
    print(s2.small_positive_int(_input))