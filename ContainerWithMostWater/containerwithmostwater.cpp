/**
 *
 * PSEUDOCODE ->
 * 1. Set two pointers at both ends of the container (array)
 * 2. Traverse the two pointers one after the other till they complete the array
 *
 */

#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

class Solution
{
public:
  Solution() {};

  int maxArea(vector<int> &height)
  {
    if ((height.size() < 2) || (height.size() > 100000))
    {
      cout << "Invalid container size!" << endl;
      return -1;
    };

    int left = 0;
    int right = height.size() - 1;
    int maxA = 0;

    while (left < right)
    {
      int width = right - left;
      int h = min(height[left], height[right]);
      maxA = max(maxA, (width * h));

      if(height[left] > height[right]){
        right--;
      }else{
        left++;
      }
    }

    return maxA;
  }
};

int main()
{
  Solution c1;

  // vector<int> heights = {1, 8, 6, 2, 5, 4, 8, 3, 7};
  vector<int> heights2 = {1, 1, 61, 2, 1, 1, 1, 1, 1};
  // // vector<int> heights3 = {1, 8, 6, 2, 5, 4, 8, 3, 7};
  // // vector<int> heights4 = {1, 8, 6, 2, 5, 4, 8, 3, 7};

  int result = c1.maxArea(heights2);

  cout << "Max area: " << result << endl;

  return 0;
}
