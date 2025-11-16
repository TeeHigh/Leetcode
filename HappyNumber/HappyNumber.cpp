#include <iostream>
using namespace std;

class Solution {
public:
    bool isHappy(int n) {
      if (n < 1) return false;

      int slow, fast;

      do{
        slow = getSquare(slow);
        fast = getSquare(getSquare(fast));

        n = getSquare(n);
      }while(slow != fast);

      if(slow == 1) return true;
        else return false;
    }

    int getSquare(int n){
      int ans = 0;

      while(n > 0){
        int rem = n % 10;
        ans += rem * rem;

        n /= 10;
      }

      return ans;
    }
};

int main(){
  Solution test;

  cout << test.isHappy(19) << endl;

  return 0;
}