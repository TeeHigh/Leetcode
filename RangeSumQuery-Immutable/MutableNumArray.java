public class MutableNumArray {
  private int[] bit;

  public MutableNumArray(int[] nums){
    bit = new int[nums.length];

    for(int i = 0; i < nums.length; i++){
      int index = i + 1;

      while (index <= nums.length){
        bit[index - 1] += nums[i];
        index += index & (-index);
      }
    }
  }
  
  public int sumRange(int left, int right){
    return 0;
  }

  public void update(int index, int val){
    index++;
    
    index += index & (-index);
    
  }
}