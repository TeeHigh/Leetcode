package FindTheDuplicateNumber;

// nums = [1,3,4,2,2]


public class FindTheDuplicateNumber {
  public int findDuplicate(int[] nums) {
    int slow = 0, fast = 0;

    do{
      slow = nums[slow];
      fast = nums[nums[fast]];
      //The above works because of the condition arr = [1...n] && arr.length = n + 1 meaning every single item but 1 is distinct 

      System.out.println("slow: " + slow);
      System.out.println("fast: " + fast);

      //At the point where fast and slow meet there is a cycle

    }while(slow != fast);

    int slow2 = 0;
    while (slow != slow2) {
      slow = nums[slow];
      slow2 = nums[slow2];

      System.out.println("slow1: " + slow);
      System.out.println("slow2: " + slow2);

    }

    return slow2;
  }
}
