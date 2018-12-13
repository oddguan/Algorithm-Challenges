'''
The area of a circle is defined as πr^2. 
Estimate π to 3 decimal places using a Monte Carlo method.

Hint: The basic equation of a circle is x2 + y2 = r2.
'''
import random

class Solution():
    def __init__(self):
        self.R = 4
        self.inside = 0
        self.outside = 0
    
    def estimate(self):
        for i in range(100000):
            x = (random.random() * self.R * 2) - self.R
            y = (random.random() * self.R * 2) - self.R
            if ((x ** 2 + y ** 2) > self.R ** 2):
                self.outside += 1
            else:
                self.inside += 1
        pi = 4 * self.inside / (self.outside + self.inside)
        return pi

if __name__ == "__main__": 
    s1 = Solution()
    pi = s1.estimate()
    print('{:.3f}'.format(pi))
