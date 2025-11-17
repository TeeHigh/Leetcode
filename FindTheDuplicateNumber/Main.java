package FindTheDuplicateNumber;

public class Main {
  public static void main(String[] args) {
    FindTheDuplicateNumber dupFinder = new FindTheDuplicateNumber();

    int[] nums = new int[]{18,13,14,17,9,19,7,17,4,6,17,5,11,10,2,15,8,12,16,17};

    int result = dupFinder.findDuplicate(nums);
    System.out.println(result);
  }
}
