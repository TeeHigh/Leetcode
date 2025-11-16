package HappyNumber;

public class HappyNumber {
  public boolean isHappy(int n) {
    if(n < 1) return false;

    int slow = n, fast = n;

    do{
      slow = getSquare(slow);
      fast = getSquare(getSquare(fast));
    }while(slow != fast);

    if(slow == 1) return true;
        else return false;
  }

  private int getSquare(int n){
    int ans = 0;

    while (n > 0){
      int rem = n % 10;
      ans += rem * rem;

      n /= 10;
    }

    return ans;
  }
}
