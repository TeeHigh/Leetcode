#include <string>
#include <iostream>
#include <vector>
#include <queue>
#include <any>
using namespace std;

class Solution {
public:
    int lengthOfLongestSubstring(string s) {
      if(s.length() <= 0 || s.length() > 50000) return 0;

      int left = 0, right = 0;
      string longest_substring, substring;

      while((right < s.length()) || (substring.length() < s.length() - left)){
        if(substring.find(s[right]) > substring.length()){
          substring.push_back(s[right]);
          cout << substring << endl;
          right++;
        }else{
          substring.erase(0,1);
          left++;
        }

        longest_substring = (substring.length() > longest_substring.length()) ? substring : longest_substring;
      }

      cout << "The maximum substring without repetition is: " + longest_substring << endl;

      return longest_substring.length();
    }
      
};

int main()
{
  string myString = "bbbbb";
  Solution s1;
  s1.lengthOfLongestSubstring(myString);

  return 0;
}