#include <iostream>       // std::cout
#include <stack>          // std::stack
#include <vector>         // std::vector
#include <deque>          // std::deque
#include <string>

using namespace std;
class Solution {
public:
bool isValid(string s) {

	stack<char> stk;
	for (auto i = 0; i < s.size(); i++) {
		
		switch (s[i]) {
			case '(': stk.push(s[i]); break;
			case '[': stk.push(s[i]); break;
			case '{': stk.push(s[i]); break;

			case ')': if (stk.empty()) return false;
					  if (stk.top() != '(') return false;
					  else stk.pop(); break;
			case ']': if (stk.empty()) return false;
					  if (stk.top() != '[') return false;
					  else stk.pop(); break;
			case '}': if (stk.empty()) return false;
					  if (stk.top() != '{') return false;
					  else stk.pop(); break;

			default: break;
		}
	}
	return stk.empty();
}
};

int main() {
    Solution s;
    cout << s.isValid("([])");
}